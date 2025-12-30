# Quick GitHub Pages Setup Guide

## 🚀 Quick Start (5 minutes)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Initial Astro site"
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **"GitHub Actions"**
4. Click **Save**

### Step 3: Done! 🎉
- The site will automatically deploy on every push
- First deployment takes ~2-3 minutes
- Your site will be live at: `https://yourusername.github.io/repository-name`
- Or your custom domain: `https://kinetech.in` (if configured)

---

## 📋 What Happens Automatically

✅ Builds the site using Astro  
✅ Copies CNAME file for custom domain  
✅ Deploys to GitHub Pages  
✅ Runs on every push to `main` branch  

---

## 🔧 Manual Build (if needed)

```bash
npm install
npm run build
```

The built files will be in `dist/` folder, ready for deployment.

---

## 🌐 Custom Domain Setup

If using `kinetech.in`:

1. **DNS Configuration** (in your domain registrar):
   - Add CNAME: `kinetech.in` → `yourusername.github.io`
   - OR add A records pointing to GitHub IPs

2. **GitHub Settings**:
   - Settings → Pages → Custom domain: `kinetech.in`
   - Check "Enforce HTTPS"

3. **CNAME File**:
   - Already configured in the repository
   - Automatically copied during build

---

## 📁 Build Output Location

- **Default**: `dist/` folder (used by GitHub Actions)
- **Alternative**: Can be changed to `docs/` in `astro.config.mjs`

---

## 🐛 Troubleshooting

**Site not updating?**
- Check GitHub Actions tab for build status
- Wait 2-3 minutes after push

**404 errors?**
- Verify `base: '/'` in `astro.config.mjs`
- Check that all files are in `dist/` folder

**Custom domain not working?**
- Verify DNS records
- Check GitHub Pages settings
- Wait up to 24 hours for DNS propagation

---

## 📚 More Details

See `DEPLOYMENT.md` for comprehensive deployment guide.
