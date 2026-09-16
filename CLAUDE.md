# Impronta — regole di lavoro per il redesign

Questo file vale per ogni sessione. Il brief completo è in `docs/redesign/BRIEF.md`: leggilo prima di qualsiasi modifica e rileggilo quando una scelta non è coperta da qui.

## Contesto in breve

Landing page del programma di accelerazione Impronta (nome da proposta: IMPACT BUILDER), promosso da Next4 (Investitore Attivo), ELIS Innovation Hub e WDA, cofinanziato da Venture Tech Lazio (FARE Venture 2, PR FESR 2021/2027, gestore Lazio Innova). Stack: Astro 7, Tailwind 4, i18n IT/EN in `src/i18n/`, deploy su GitHub Pages sotto `/ImprontaAccelerator/`.

Fonte di verità per ogni dato del programma: `brand/VTL_Documento Complessivo.pdf`. Se un'informazione non è lì o in `docs/redesign/BRIEF.md`, non inventarla: inserisci un segnaposto `TODO-VERIFICA` e aggiungi la voce a `docs/redesign/DA-VERIFICARE.md`.

## Regole operative

1. Lavora solo sul branch `redesign`. Il push su `main` pubblica il sito (vedi `.github/workflows/deploy.yml`): non fare mai merge né push su `main`.
2. Un commit per fase, con messaggio `redesign(fase N): …`.
3. Ogni prompt corrisponde a una fase con un gate. A fine fase fermati: riassumi cosa hai fatto, elenca i file toccati, indica i percorsi degli screenshot e le domande aperte. Non iniziare la fase successiva senza conferma.
4. Prima di chiudere una fase che tocca la UI esegui sempre, in quest'ordine: `npm run check`, `npm run build`, `npm run screens -- <nome-fase>`. Una fase non è chiusa se uno dei tre fallisce.
5. I dizionari `it.ts` ed `en.ts` devono restare allineati (lo verifica `astro check`). Se l'inglese definitivo non è ancora pronto, usa una traduzione provvisoria fedele e marca la chiave con il commento `// EN-DA-RIVEDERE`.
6. Nessuna nuova dipendenza oltre a quelle previste nel brief, salvo motivazione esplicita nel riepilogo di fase.
7. I commenti nel codice descrivono cosa fa il codice. Non raccontano la storia delle iterazioni ("prima era così…").

## Divieti che valgono sempre

- La skill `frontend-design`, se attiva, non si applica a questo progetto nelle parti su texture, grana, gradienti, animazioni vistose e layout "inaspettati". Il registro qui è istituzionale e sobrio.
- Nessun dato inventato: numeri, nomi, loghi, citazioni, partner, date.
- Nessun logo di terzi (corporate, università, enti) senza file ufficiale in repo.
- Nessun anti-pattern elencato nella sezione 5 del brief.
