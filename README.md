# Piera Tognazzi — sito vetrina

Sito in **Jekyll**, pubblicato con **GitHub Pages**, per mostrare i dipinti ad olio su tela.
Indirizzo online (una volta attivato GitHub Pages):
`https://pieratognazzipittrice.github.io/pieratognazzipittrice/`

## Com'è fatto

- **Home** (`index.html`): immagine a tutto schermo + galleria scorrevole delle opere.
- **Gallerie** (`gallerie.html`): i quadri divisi per tema (paesaggi, nature morte, fiori, ritratti).
- **Chi sono** (`chi-sono.md`): foto e racconto.
- L'elenco dei quadri è tutto in un unico file: **`_data/opere.yml`**.

## Aggiungere o cambiare un quadro

1. Metti la foto del quadro nella cartella `assets/images/opere/`
   (formato `.jpg`, nome senza spazi né accenti, es. `tramonto-sul-mare.jpg`).
2. Apri `_data/opere.yml` e aggiungi un blocco come questo:

   ```yaml
   - titolo: "Tramonto sul mare"
     file: tramonto-sul-mare.jpg
     categoria: paesaggi        # paesaggi | natura | fiori | ritratti
     tecnica: Olio su tela
     misure: 50 × 70 cm
     anno: 2025
   ```

3. Salva. Il quadro comparirà da solo nella home e nella galleria giusta.

> Le immagini attuali sono **segnaposto**: sostituiscile con le foto vere
> (basta usare gli stessi nomi file, oppure cambiarli anche in `opere.yml`).

## Cambiare i testi e i contatti

- Titolo del sito, città, email e Instagram: nel file `_config.yml`.
- Testo della pagina "Chi sono": nel file `chi-sono.md`.

## Pubblicare online

1. Carica i file su GitHub (push sul ramo `main`).
2. Su GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   ramo `main`, cartella `/ (root)`. Salva.
3. Dopo qualche minuto il sito è online all'indirizzo indicato sopra.

## Anteprima sul proprio computer (facoltativa)

Con Ruby installato:

```bash
bundle install
bundle exec jekyll serve
```

Poi apri `http://localhost:4000/pieratognazzipittrice/`.
