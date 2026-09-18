# Collegare il dominio

Procedura per portare la landing dall'indirizzo provvisorio
`https://alessandro562.github.io/ImprontaAccelerator/` al dominio di Impronta.

I valori DNS qui sotto sono quelli dichiarati da GitHub nella documentazione
ufficiale di GitHub Pages, verificati il 18 settembre 2026. Se un giorno non
funzionassero, la fonte da ricontrollare è quella, non questo file.

**Manca solo il nome del dominio.** Tutto il resto è pronto: appena sappiamo
qual è, i passi 1–3 si fanno in un quarto d'ora e il resto è attesa del DNS.

## Cosa non va toccato nel codice

Niente. `astro.config.mjs` legge `SITE_URL` e `BASE_PATH` da
`actions/configure-pages`, che a sua volta li prende dalle impostazioni Pages
del repository: nel momento in cui il dominio custom è impostato, il base path
diventa vuoto e la build si riadatta da sola. Nessun file `CNAME` serve, perché
il deploy passa da GitHub Actions e non dal branch: GitHub lo dice
esplicitamente, un eventuale `CNAME` in repo verrebbe ignorato.

## 1 — Record DNS, dal registrar

### Se il dominio principale è quello nudo (`improntaaccelerator.it`)

Quattro record `A` e quattro `AAAA`, tutti sul nome `@`:

| Tipo | Nome | Valore |
|---|---|---|
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |
| AAAA | @ | `2606:50c0:8000::153` |
| AAAA | @ | `2606:50c0:8001::153` |
| AAAA | @ | `2606:50c0:8002::153` |
| AAAA | @ | `2606:50c0:8003::153` |

Più un `CNAME` da `www` a `alessandro562.github.io` (senza il nome del
repository, e con il punto finale se il pannello del registrar lo richiede),
così anche `www` risponde e GitHub lo redirige al dominio nudo.

### Se il dominio principale è `www`

Basta il solo `CNAME` da `www` a `alessandro562.github.io`. È la variante più
robusta — se GitHub cambiasse gli IP non dovremmo accorgercene — ma l'indirizzo
che si legge in giro è più lungo. I record `A`/`AAAA` sul nome nudo servono
comunque, se vogliamo che chi digita il dominio senza `www` non trovi il vuoto.

Attenzione a due cose che al registrar capitano spesso:
- se c'è già un record `A` o un reindirizzamento "parcheggio dominio" sul nome
  nudo, va **rimosso**, non affiancato;
- il `CNAME` del `www` non può convivere con altri record sullo stesso nome.

## 2 — Impostazioni del repository

`Settings` → `Pages` → `Custom domain`: scrivere il dominio e salvare. GitHub
fa un controllo DNS; finché i record non si sono propagati mostra un avviso,
che è normale e si risolve da solo.

Poi lasciare il repository lì e aspettare: la casella **Enforce HTTPS** può
richiedere fino a 24 ore per diventare selezionabile, perché nel frattempo
GitHub emette il certificato. Quando è selezionabile, va selezionata.

## 3 — Ricostruire il sito

Il cambio di dominio non fa ripartire la build da solo, e finché non riparte le
pagine continuano a dichiarare i vecchi URL canonici e a servire i link con
`/ImprontaAccelerator/` davanti.

`Actions` → workflow «Deploy su GitHub Pages» → `Run workflow`. Oppure un
qualunque push su `main`.

## 4 — Verifiche, dopo

Non basta che il workflow sia verde.

```sh
D=improntaaccelerator.it   # o www.improntaaccelerator.it

curl -sI "https://$D/" | head -1                     # atteso: 200
curl -sI "https://alessandro562.github.io/ImprontaAccelerator/" | head -1  # atteso: 301
curl -s  "https://$D/" | grep -o '<link rel="canonical"[^>]*>'
curl -s  "https://$D/robots.txt"
curl -sI "https://$D/en/" | head -1                  # atteso: 200
curl -s  "https://$D/sitemap-index.xml" | head -3
```

Il canonical e la sitemap devono dire il dominio nuovo e **non** contenere più
`/ImprontaAccelerator/`. Se lo contengono, la build è ripartita prima che il
dominio fosse registrato nelle impostazioni Pages: rilanciare il workflow.

## 5 — Prima che Google passi

L'indicizzazione è aperta (`INDEXABLE = true` in `src/config.ts`), quindi dal
primo deploy sul dominio il sito è indicizzabile. Tre cose non dipendono dal
codice e vanno chiuse prima, non dopo:

- **Obbligo di visibilità FESR.** Se è attivo, i riferimenti a Venture Tech
  Lazio vanno rimessi in pagina: oggi non ci sono, per la richiesta del 14
  settembre (regola 5 di `CLAUDE.md`).
- **Privacy e cookie.** I testi in pagina dichiarano di essere una base di
  partenza non validata legalmente.
- **Il PDF riservato ancora scaricabile.** Vedi
  `docs/redesign-v1/RICHIESTA-GITHUB.md`: la richiesta di purge al supporto
  GitHub non è ancora stata inviata e può inviarla solo il titolare
  dell'account. Un sito indicizzato porta attenzione sul repository.
