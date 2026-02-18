# Hochzeit Antonia & Suwardhan

Static wedding website: RSVP (Google Form), add-to-calendar (Google Calendar & Apple .ics), FAQ, and language switcher (EN, DE, HI, MR).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
```

Output is in `dist/`. Serve the `dist` folder with any static host.

---

## Deploy

### GitHub Pages (recommended, free)

1. **Enable GitHub Pages**  
   In your repo: **Settings → Pages → Build and deployment**:  
   - Source: **GitHub Actions**.

2. **Push to `main`**  
   The included workflow (`.github/workflows/deploy-pages.yml`) runs on every push to `main`:
   - Builds the site with base path `/hochzeit/`
   - Copies `index.html` to `404.html` so `/hochzeit/faq` works
   - Deploys to GitHub Pages

3. **Your site will be at:**  
   `https://<your-username>.github.io/hochzeit/`

If the repo name changes, update `VITE_BASE_PATH` in `.github/workflows/deploy-pages.yml` (e.g. `'/my-repo-name/'`).

### Netlify (free tier)

1. Push the repo to GitHub and connect it at [netlify.com](https://netlify.com).
2. Build command: `npm run build`  
   Publish directory: `dist`
3. Deploy. Netlify serves `index.html` for all routes by default, so `/faq` works.  
   No `base` change needed if the site is at the root of your Netlify URL.

### Vercel (free tier)

1. Import the repo at [vercel.com](https://vercel.com).
2. Framework: Vite; build: `npm run build`; output: `dist`.
3. Deploy. Same as Netlify, SPA routing works by default.

### Other static hosts

- Build: `npm run build`
- Upload the contents of `dist/`.
- For **client-side routes** (e.g. `/faq`): either serve `index.html` for all paths (SPA fallback) or use the same `404.html` trick as in the GitHub Actions workflow.

## Tech

- Vite + React + TypeScript
- Tailwind CSS (frosty glass UI)
- React Router (Landing + FAQ)
