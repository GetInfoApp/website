# Get Info Website

Landing site for Get Info: a location-based community help platform where people ask real-world questions and get matched with nearby helpers.

## Repository
- URL: `https://github.com/GetInfoApp/website`
- Default branch: `master`

## Deployment
This repo deploys via GitHub Actions (`.github/workflows/deploy-website.yml`) on pushes to `master`.

## Run Locally
From `website/`:

```sh
npm i
npm run dev
```

## Build

```sh
npm run build
```

## Tech Stack
- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn-ui
