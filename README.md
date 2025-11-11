# Wavizo Website

Website voor Wavizo met environment variable support voor gevoelige data.

## Installatie

1. Installeer dependencies:
```bash
npm install
```

2. Kopieer `.env.example` naar `.env`:
```bash
copy .env.example .env
```

3. Pas de waarden in `.env` aan met je eigen gegevens.

## Build

Om de website te builden vanuit de template:

```bash
npm run build
```

Dit genereert `index.html` vanuit `index.template.html` door alle placeholders te vervangen met waarden uit het `.env` bestand.

## Environment Variables

De volgende variabelen worden gebruikt:

- `SITE_URL` - Website URL
- `SITE_NAME` - Site naam (bijv. "Wavizo")
- `CONTACT_EMAIL` - Contact email adres
- `CONTACT_PHONE` - Contact telefoonnummer
- `CONTACT_ADDRESS` - Contact adres
- `FORMSPREE_CONTACT_FORM` - Formspree endpoint voor contact formulier
- `FORMSPREE_QUOTE_FORM` - Formspree endpoint voor offerte formulier
- `INSTAGRAM_URL` - Instagram URL
- `FACEBOOK_URL` - Facebook URL
- `LINKEDIN_URL` - LinkedIn URL
- `TWITTER_URL` - Twitter URL
- `OG_IMAGE` - Open Graph image URL

## Bestanden

- `index.template.html` - Template bestand met placeholders ({{VARIABLE_NAME}})
- `index.html` - Gebouwde HTML (wordt gegenereerd door build script)
- `.env` - Environment variables (niet in git, lokaal bestand)
- `.env.example` - Voorbeeld environment file (wel in git)
- `build.js` - Build script dat template verwerkt

## Opmerkingen

- Het `.env` bestand staat in `.gitignore` en wordt niet gecommit naar git
- Pas altijd `index.template.html` aan, niet `index.html` direct
- Na wijzigingen in de template, run `npm run build` om de HTML te updaten






