# Albion Fish Bar — marketing demo

Static marketing site for **Albion Fish Bar**, a traditional fish & chips takeaway at 36 Albion Street, Rotherhithe, London SE16 7JQ.

Suggested GitHub Pages / Origin Pages slug: `albion-fish-bar-demo`.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- Framer Motion (transform/filter only — no `opacity: 0` entrance traps)
- Production **static export** (`output: "export"`) → `out/`
- `public/.nojekyll` for GitHub Pages

## Run locally

```bash
npm install
npm run dev -- -p 4321
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321).

## Deploy (GitHub Pages)

Configured for project Pages at `/albion-fish-bar-demo`:

- `basePath` + `assetPrefix`: `/albion-fish-bar-demo`
- `output: 'export'`, `trailingSlash: true`
- `public/.nojekyll`

Live: https://androidkrayze.github.io/albion-fish-bar-demo/

```bash
npm run build
# Deploy `out/` to the `gh-pages` branch (root)
```

## Design notes

- **Palette:** navy (`#071A2F`) + batter-gold (`#D4A017`)
- **Hero:** full-bleed photo with CSS opacity-wash (not a Framer fade)
- **Primary CTA:** `tel:+442072372123` (`020 7237 2123`)
- **Photos:** real Unsplash photography only — see [SOURCES.md](./SOURCES.md)
- **Never link** `albionfishbar.co.uk` (known spam redirect)
- **No cartoon mascots**

## Content disclaimer

Hours and menu highlights are assembled from public listings for this demo. Confirm with the shop before publishing as an official site.
