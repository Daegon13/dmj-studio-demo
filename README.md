This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Geist, a new font family for Vercel.

## Deploy on Vercel

The project is ready to deploy on Vercel with a dedicated `vercel.json` config.

### 1) Prerequisites

- Node.js 20+
- A Vercel account

### 2) Local production check

```bash
npm ci
npm run lint
npm run build
```

### 2.5) Donor migration guard (Astro -> Next)

Before committing migration-related changes, run:

```bash
npm run check:donor
```

This guard enforces that `.astro` files are not copied into implementation and that donor-code references are not imported directly.

### 3) Deploy from Vercel dashboard

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel, choose **Add New Project**.
3. Import this repository.
4. Keep detected settings (`Framework Preset: Next.js`).
5. Click **Deploy**.

### 4) Deploy from CLI (optional)

```bash
npm i -g vercel
vercel
```

For production deployment:

```bash
vercel --prod
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
