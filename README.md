# Studio Loam — website

A Next.js 16 (App Router, TypeScript, Tailwind v4) site.

## Deploy without installing anything locally

1. Unzip this folder on your computer.
2. Go to https://github.com/new and create a new repository (e.g. `studio-loam-website`). Leave it empty — no README, no .gitignore.
3. On the new repo's page, click **"uploading an existing file"**.
4. Drag the entire unzipped folder's contents into the browser window and commit.
5. Go to https://vercel.com/new, pick this repo, and click **Deploy**. Vercel will detect Next.js automatically and build it in the cloud — nothing to run on your machine.
6. You'll get a live `*.vercel.app` URL within a minute or two. Every future upload to GitHub redeploys automatically.

## If you ever do want to run it locally

Requires Node.js 20+ installed.

```
npm install
npm run dev
```

Then open http://localhost:3000
