# Forest Database Management System

A Next.js dashboard for managing forest data: wildlife, officers, resources, water bodies, and analytics.

**Live demo:** [https://lokeshpuma.github.io/Admin_Dashboard/](https://lokeshpuma.github.io/Admin_Dashboard/)

## Stack

- Next.js 15 (App Router, static export)
- TypeScript
- Tailwind CSS
- Shadcn UI
- React Hook Form + Zod
- Recharts

## Local development

```bash
git clone https://github.com/lokeshpuma/Admin_Dashboard.git
cd Admin_Dashboard
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Auth is demo-only (any email/password works on the deployed static site).

## Deploy to GitHub Pages

### Option A: GitHub Actions (recommended)

1. In the repo on GitHub: **Settings → Pages → Build and deployment → Source** → **GitHub Actions**.
2. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes the `out` folder.

### Option B: Manual deploy

```bash
npm install
npm run deploy
```

Then set **Settings → Pages → Source** to the `gh-pages` branch.

## Project structure

```
app/           # Routes (dashboard, forests, animals, login, etc.)
components/    # UI and feature components
lib/           # Auth helpers and utilities
public/        # Static assets
```
