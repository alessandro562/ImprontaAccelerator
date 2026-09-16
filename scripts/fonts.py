#!/usr/bin/env python3
"""
Genera il woff2 di Bricolage Grotesque usato per titoli e numeri.

    python3 scripts/fonts.py

Il concept imposta gli assi a mano (`font-variation-settings:"opsz" 96,"wdth" 86`):
il subset deve restare variabile, altrimenti larghezza e dimensione ottica si
perdono e la tipografia collassa sui valori di default. Per questo si passa da
pyftsubset senza instancing e si conservano i tre assi opsz, wdth e wght.

Geist e Instrument Serif arrivano da Fontsource e non passano di qui.

Il file finisce in `src/assets/`, non in `public/`: cosi' passa da Vite, che lo
emette con hash e con il base path corretto. Un url assoluto scritto a mano nel
CSS si romperebbe il giorno in cui il sito passa a un dominio custom, perche'
`base` arriva da una variabile d'ambiente.
"""
import subprocess
import sys
import urllib.request
from pathlib import Path

URL = (
    "https://raw.githubusercontent.com/google/fonts/main/ofl/bricolagegrotesque/"
    "BricolageGrotesque%5Bopsz,wdth,wght%5D.ttf"
)
OUT = Path("src/assets/fonts/bricolage-grotesque-latin.woff2")

# latin + latin-ext, gli stessi intervalli che Google Fonts serve per queste due
# sottoparti, piu' i segni che il copy usa davvero (virgolette curve, euro, trattini).
UNICODES = (
    "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,"
    "U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,"
    "U+2212,U+2215,U+FEFF,U+FFFD,"
    "U+0100-02AF,U+0300-0301,U+0303,U+0305,U+0307,U+0309-030A,U+030C,"
    "U+0312,U+0315,U+031B,U+0323-0328,U+032F,U+0331,U+1E00-1EFF,U+2020,"
    "U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF"
)


def main() -> int:
    source = Path("/tmp/BricolageGrotesque-variable.ttf")
    if not source.exists():
        print(f"Scarico {URL}")
        urllib.request.urlretrieve(URL, source)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    cmd = [
        sys.executable, "-m", "fontTools.subset", str(source),
        f"--unicodes={UNICODES}",
        "--layout-features=kern,liga,calt,tnum,case",
        "--flavor=woff2",
        f"--output-file={OUT}",
        # senza questi il subset perde gli assi e diventa statico
        "--drop-tables-=fvar,STAT,avar,gvar,HVAR,MVAR",
        "--name-IDs=*",
        "--no-hinting",
    ]
    subprocess.run(cmd, check=True)

    axes = subprocess.run(
        [sys.executable, "-c",
         "import sys;from fontTools.ttLib import TTFont;"
         "f=TTFont(sys.argv[1]);"
         "print(' '.join(f'{a.axisTag}:{a.minValue:g}-{a.maxValue:g}' for a in f['fvar'].axes))",
         str(OUT)],
        capture_output=True, text=True, check=True,
    ).stdout.strip()

    print(f"{OUT} — {OUT.stat().st_size / 1024:.1f} KB — assi: {axes}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
