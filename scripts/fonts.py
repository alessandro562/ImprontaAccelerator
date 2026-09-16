#!/usr/bin/env python3
"""
Genera i font di marca usati dal sito.

    python3 scripts/fonts.py

I caratteri sono quelli del deck ufficiale `brand/impronta_18_editabile.pptx`:
Poppins per titoli, numeri e parole d'accento, Inter per il testo corrente.

Nota: il lettering del marchio non e' Poppins — ha la «a» a due piani, Poppins
a un piano — ma e' vettorializzato nei file del logo e non serve come webfont.

I file finiscono in `src/assets/fonts/`, non in `public/`: cosi' passano da
Vite, che applica hash e base path. Un url assoluto scritto a mano nel CSS si
romperebbe il giorno in cui il sito passa a un dominio custom.
"""
import subprocess
import sys
import urllib.request
from pathlib import Path

REPO = "https://raw.githubusercontent.com/google/fonts/main/ofl"
OUT_DIR = Path("src/assets/fonts")

# Poppins e' statico: servono i pesi usati dal CSS (500, 600, 700) piu' il
# corsivo regolare per le parole d'accento.
FONTS = [
    ("poppins/Poppins-Medium.ttf", "poppins-500.woff2"),
    ("poppins/Poppins-SemiBold.ttf", "poppins-600.woff2"),
    ("poppins/Poppins-Bold.ttf", "poppins-700.woff2"),
    ("poppins/Poppins-Italic.ttf", "poppins-400-italic.woff2"),
    ("inter/Inter%5Bopsz,wght%5D.ttf", "inter-variable.woff2"),
]

# latin + latin-ext, piu' i segni che il copy usa davvero (virgolette curve,
# euro, trattini lunghi).
UNICODES = (
    "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,"
    "U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,"
    "U+2212,U+2215,U+FEFF,U+FFFD,"
    "U+0100-02AF,U+0300-0301,U+0303,U+0305,U+0307,U+0309-030A,U+030C,"
    "U+0312,U+0315,U+031B,U+0323-0328,U+032F,U+0331,U+1E00-1EFF,U+2020,"
    "U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF"
)


def genera(percorso: str, nome: str) -> None:
    sorgente = Path("/tmp") / Path(percorso).name.replace("%5B", "[").replace("%5D", "]")
    if not sorgente.exists():
        urllib.request.urlretrieve(f"{REPO}/{percorso}", sorgente)

    destinazione = OUT_DIR / nome
    subprocess.run([
        sys.executable, "-m", "fontTools.subset", str(sorgente),
        f"--unicodes={UNICODES}",
        "--layout-features=kern,liga,calt,tnum,case",
        "--flavor=woff2",
        f"--output-file={destinazione}",
        "--no-hinting",
    ], check=True)

    kb = destinazione.stat().st_size / 1024
    print(f"{destinazione}  {kb:6.1f} KB")


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for vecchio in OUT_DIR.glob("bricolage*"):
        vecchio.unlink()
    for percorso, nome in FONTS:
        genera(percorso, nome)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
