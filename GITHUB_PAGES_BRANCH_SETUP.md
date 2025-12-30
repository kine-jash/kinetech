# GitHub Pages Branch Deployment Setup

## ✅ What We Did

1. ✅ Built site to `docs/` folder
2. ✅ Committed `docs/` folder to repository
3. ✅ Added `.nojekyll` file to prevent Jekyll processing
4. ✅ Added `CNAME` file for custom domain

## 🔧 Configure GitHub Pages Settings

Now you need to configure GitHub Pages to serve from the `docs` folder:

### Step 1: Go to GitHub Pages Settings

1. Navigate to: https://github.com/kine-jash/kinetech/settings/pages

### Step 2: Configure Source

1. Under **"Source"**, select **"Deploy from a branch"**
2. **Branch**: Select `main`
3. **Folder**: Select `/docs`
4. Click **"Save"**

### Step 3: Set Custom Domain

1. Under **"Custom domain"**, enter: `kinetech.in`
2. Click **"Save"**
3. Wait 5-10 minutes, then check **"Enforce HTTPS"**

## 📋 What's in the docs/ folder

- `index.html` - Your main page
- `CNAME` - Custom domain file
- `.nojekyll` - Prevents Jekyll processing
- `_astro/` - Astro assets
- `favicon.svg` - Favicon

## 🔄 Updating the Site

Every time you make changes:

1. Make your changes to source files
2. Run: `npm run build`
3. Commit and push:
   ```bash
   git add docs/
   git commit -m "Update site"
   git push origin main
   ```

## ✅ Verify It's Working

1. Wait 2-5 minutes after saving GitHub Pages settings
2. Check: https://kine-jash.github.io/kinetech/
3. Check: https://kinetech.in (after DNS propagates)

## 🐛 Troubleshooting

### Still seeing old site?

1. **Clear browser cache** or use incognito mode
2. **Wait a few minutes** - GitHub Pages needs time to update
3. **Check GitHub Pages settings** - Make sure `/docs` folder is selected

### DNS still pointing to GoDaddy?

Follow the instructions in `CLOUDFLARE_DNS_SETUP.md` to configure Cloudflare DNS records.

### Site shows 404?

1. Verify `docs/` folder exists in repository
2. Check that `docs/index.html` exists
3. Verify GitHub Pages is set to `/docs` folder
