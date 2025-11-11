Zet Formspree omgevingsvariabelen

1) Maak een bestand `.env` in de projectroot (dit bestand is al genegeerd door `.gitignore`) met:

```
FORMSPREE_CONTACT_FORM=https://formspree.io/f/xxxxxxxx
FORMSPREE_QUOTE_FORM=https://formspree.io/f/yyyyyyyy
```

2) Lokale build:
- `npm ci`
- `npm run build`
- Dit genereert `index.html` uit `index.template.html` met jouw env-waarden.

3) GitHub Pages (automatisch laden)
- Voeg dezelfde variabelen toe als GitHub Secrets (Settings → Secrets and variables → Actions → New repository secret):
  - `FORMSPREE_CONTACT_FORM`
  - `FORMSPREE_QUOTE_FORM`
- De workflow onder `.github/workflows/pages.yml` injecteert alleen deze twee tijdens build en deploy.

