# GitHub Pages Deployment Guide

This guide explains how to deploy the Kinetech site to GitHub Pages.

## Prerequisites

- A GitHub repository
- GitHub Pages enabled in repository settings
- (Optional) Custom domain configured

## Deployment Methods

### Method 1: GitHub Actions (Recommended) ⭐

This is the **recommended** method as it automatically deploys on every push.

#### Setup Steps:

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Actions**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **"GitHub Actions"**
   - Save the settings

3. **The workflow will automatically deploy**
   - Every push to `main` branch triggers a build
   - The site will be available at `https://yourusername.github.io/repository-name`
   - Or your custom domain if configured

#### How it works:

- The workflow (`.github/workflows/deploy.yml`) runs on every push
- It builds the site using Astro
- Deploys the `dist/` folder to GitHub Pages
- The `CNAME` file is automatically included

---

### Method 2: Manual Build to `docs` Folder

If you prefer manual control or don't want to use GitHub Actions:

#### Setup Steps:

1. **Update Astro config**
   
   Edit `astro.config.mjs` and uncomment this line:
   ```javascript
   outDir: 'docs',
   ```

2. **Build the site**
   ```bash
   npm run build
   ```
   
   This creates a `docs/` folder with all the built files.

3. **Copy CNAME file** (if using custom domain)
   ```bash
   cp CNAME docs/
   ```

4. **Commit and push**
   ```bash
   git add docs/
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

5. **Configure GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Under **Source**, select **"Deploy from a branch"**
   - Select branch: `main`
   - Select folder: `/docs`
   - Click **Save**

---

## Custom Domain Setup (kinetech.in)

If you're using a custom domain (`kinetech.in`):

1. **DNS Configuration**
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

2. **GitHub Pages Settings**
   - Go to repository **Settings** → **Pages**
   - Under **Custom domain**, enter `kinetech.in`
   - Check **"Enforce HTTPS"**

3. **CNAME File**
   - The `CNAME` file is automatically copied during build
   - It should contain: `kinetech.in`

---

## Build Scripts

- `npm run build` - Standard build to `dist/`
- `npm run build:github` - Build and copy CNAME file (for manual deployment)

---

## Troubleshooting

### Site not updating?

1. Check GitHub Actions workflow status
2. Verify the build completed successfully
3. Wait a few minutes for DNS propagation
4. Clear browser cache

### 404 errors?

1. Ensure `base` in `astro.config.mjs` is set to `/`
2. Check that all routes are properly configured
3. Verify the build output contains all files

### Custom domain not working?

1. Verify DNS records are correct
2. Check GitHub Pages settings have the domain configured
3. Ensure `CNAME` file exists in the build output
4. Wait up to 24 hours for DNS propagation

---

## File Structure After Build

```
repository/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── docs/                        # Build output (Method 2)
│   ├── index.html
│   ├── CNAME                    # Custom domain file
│   └── ...
├── dist/                        # Build output (Method 1 - GitHub Actions)
│   ├── index.html
│   ├── CNAME
│   └── ...
├── src/                         # Source files
├── public/                      # Static assets
│   ├── favicon.svg
│   └── .nojekyll                # Prevents Jekyll processing
├── CNAME                        # Custom domain (copied to build)
└── ...
```

---

## Quick Start

**For automatic deployment (recommended):**

```bash
git push origin main
```

That's it! GitHub Actions will handle the rest.

**For manual deployment:**

```bash
# Edit astro.config.mjs to use 'docs' folder
npm run build
cp CNAME docs/
git add docs/
git commit -m "Deploy"
git push
```
