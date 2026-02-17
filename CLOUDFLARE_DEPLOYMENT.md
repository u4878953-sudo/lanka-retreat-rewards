# Cloudflare Deployment Guide

This project is configured for deployment to Cloudflare Pages. Follow the steps below to get started.

## Option 1: Automatic Deployment (Recommended)

### Prerequisites
- A Cloudflare account (free tier is fine)
- Your GitHub repository connected to Cloudflare

### Steps

1. **Connect your GitHub repository to Cloudflare Pages:**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com)
   - Click "Connect to Git"
   - Authorize Cloudflare to access your GitHub account
   - Select your `lanka-retreat-rewards` repository

2. **Configure build settings in Cloudflare:**
   - Build command: `bun install && bun run build`
   - Build output directory: `dist`
   - Root directory: `/`

3. **Add environment variables (if needed):**
   - Set any environment variables in Cloudflare Pages settings

4. **Deploy:**
   - Cloudflare will automatically deploy whenever you push to the `main` branch

## Option 2: Manual Deployment with Wrangler CLI

### Prerequisites
- Node.js or Bun installed
- Cloudflare account

### Steps

1. **Install Wrangler CLI:**
   ```bash
   bun install -g wrangler
   ```

2. **Authenticate with Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Build the project:**
   ```bash
   bun install
   bun run build
   ```

4. **Deploy to Cloudflare Pages:**
   ```bash
   wrangler pages deploy dist
   ```

## Option 3: GitHub Actions (CI/CD)

GitHub Actions workflow is already configured at `.github/workflows/deploy.yml`

### To enable automated deployments:

1. **Get your Cloudflare credentials:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Account Settings > API Tokens
   - Create a token with "Edit Cloudflare Pages" permission
   - Copy your Account ID from the dashboard

2. **Add secrets to your GitHub repository:**
   - Go to Settings > Secrets and variables > Actions
   - Add `CLOUDFLARE_API_TOKEN` with your API token
   - Add `CLOUDFLARE_ACCOUNT_ID` with your account ID

3. **Push to GitHub:**
   - The workflow will automatically build and deploy on each push to `main`

## Project Configuration

- **Build output directory:** `dist/`
- **Build command:** `bun run build`
- **Package manager:** Bun
- **Framework:** Vite + React + TypeScript

## Domain Setup

After deployment:
1. Your site will be available at `https://<project-name>.<username>.pages.dev`
2. To use a custom domain, add it in Cloudflare Pages settings under Custom domain

## Troubleshooting

- **Build fails:** Ensure `bun install` is in your build command
- **404 errors on routes:** Add a `_redirects` file or configure redirects in Cloudflare Pages settings
- **API requests fail:** Configure CORS if your app makes requests to external APIs

For more information, visit the [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/).
