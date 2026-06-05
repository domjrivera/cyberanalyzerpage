# Cyber Analyzer LLC — Website

Static marketing site for [Cyber Analyzer LLC](https://cyberanalyzer.com), built with Next.js and deployed to GitHub Pages.

## Stack

- **Next.js 16** (App Router) with `output: "export"` for fully static HTML
- **Tailwind CSS v4**
- **GitHub Actions** → GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Static files are written to `out/`. Preview locally:

```bash
npx serve out
```

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source**: select **GitHub Actions**.
3. Push to `main` (or run the workflow manually). The workflow in `.github/workflows/deploy.yml` builds and deploys `out/`.

### Repository name vs. custom domain

| Setup | Configuration |
|--------|----------------|
| **User/org site** (`username.github.io`) | No base path; site is served at `/`. |
| **Project site** (`github.com/user/repo`) | CI sets `NEXT_PUBLIC_BASE_PATH=/repo` unless `public/CNAME` exists (custom domain → root). |
| **Custom domain** (e.g. `cyberanalyzer.com`) | Add a `CNAME` file in `public/` and configure DNS + Pages custom domain in GitHub. |

### Custom domain

1. Add your domain in **Settings → Pages → Custom domain**.
2. Create `public/CNAME` with your hostname (one line, e.g. `cyberanalyzer.com`).
3. Point DNS (A/AAAA or CNAME per GitHub’s instructions).

## Site content

Edit copy and sections in `src/lib/site.ts` (company name, email, capabilities, approach steps).

## Email

Update `site.email` in `src/lib/site.ts` to your real contact address before going live.