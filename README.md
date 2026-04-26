# RAMEN Portfolio

Static Astro portfolio case study for RAMEN, published to GitHub Pages at:

https://doge-is-dope.github.io/ramen-portfolio/

## Development

Install dependencies:

```bash
pnpm install
```

Run the local dev server:

```bash
pnpm dev
```

Open:

```text
http://localhost:4321/ramen-portfolio/
```

## Build

```bash
pnpm build
```

The production site is emitted to `dist/`.

Preview the production build:

```bash
pnpm preview
```

## Structure

- `src/pages/index.astro` renders the portfolio article.
- `src/pages/tokens.astro` renders the internal design-token reference page.
- `src/data/` contains the hand-written profile and article content.
- `src/components/` contains static Astro components.
- `src/styles/` contains plain CSS tokens and global styles.

## Deployment

`.github/workflows/deploy.yml` builds the Astro static site and uploads `dist/`
to GitHub Pages.
