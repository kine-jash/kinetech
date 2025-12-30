# Quick DNS Fix for kinetech.in

## Current Status
✅ GitHub Pages site is deployed and working  
❌ DNS is pointing to Cloudflare/GoDaddy instead of GitHub Pages

## The Problem
Your domain `kinetech.in` is currently pointing to:
- `104.21.42.151` (Cloudflare)
- `172.67.163.11` (Cloudflare)

But it needs to point to GitHub Pages.

## Solution: Update DNS Records

### If Using GoDaddy DNS:

1. **Log into GoDaddy**
   - Go to: https://dcc.godaddy.com/
   - Select domain: `kinetech.in`
   - Click "DNS" or "Manage DNS"

2. **Delete Existing Records**
   - Find and DELETE any A records pointing to Cloudflare IPs
   - Find and DELETE any CNAME records for root domain (@)

3. **Add CNAME Record** (Easiest method)
   - Click "Add" → "CNAME"
   - **Name**: `@` (or leave blank)
   - **Value**: `kine-jash.github.io`
   - **TTL**: 600 seconds
   - Click "Save"

4. **Wait 5-60 minutes** for DNS to propagate

### If Using Cloudflare:

1. **Log into Cloudflare**
   - Go to: https://dash.cloudflare.com/
   - Select domain: `kinetech.in`

2. **Go to DNS Settings**
   - Click "DNS" in the sidebar

3. **Update Records**
   - **Option A - CNAME (Recommended)**:
     - Delete existing A records
     - Add CNAME: `@` → `kine-jash.github.io` (Proxy: OFF - gray cloud)
   
   - **Option B - A Records**:
     - Delete existing records
     - Add 4 A records (all with Proxy OFF):
       - `@` → `185.199.108.153`
       - `@` → `185.199.109.153`
       - `@` → `185.199.110.153`
       - `@` → `185.199.111.153`

4. **Important**: Turn OFF Cloudflare Proxy (gray cloud, not orange)
   - GitHub Pages needs direct connection, not through Cloudflare proxy

### Configure GitHub Pages Custom Domain

1. **Go to GitHub**
   - Navigate to: https://github.com/kine-jash/kinetech/settings/pages

2. **Set Custom Domain**
   - Under "Custom domain", enter: `kinetech.in`
   - Click "Save"
   - Wait a few minutes, then check "Enforce HTTPS"

## Verify It's Working

After updating DNS, check:

```bash
# Should show GitHub Pages IPs or github.io
dig kinetech.in +short

# Or check online
# Visit: https://dnschecker.org/#A/kinetech.in
```

Expected results:
- Should show: `185.199.108.153` (or similar GitHub Pages IPs)
- OR should resolve to: `kine-jash.github.io`

## Test Sites

1. **GitHub Pages URL** (should work now):
   - https://kine-jash.github.io/kinetech/

2. **Custom Domain** (after DNS propagates):
   - https://kinetech.in

## Timeline

- DNS changes: 5-60 minutes
- GitHub Pages verification: 5-10 minutes
- HTTPS certificate: 10-30 minutes after DNS propagates

## Still Not Working?

1. **Check GitHub Actions**: Make sure deployment succeeded
2. **Check GitHub Pages Settings**: Custom domain should be set
3. **Wait longer**: DNS can take up to 48 hours globally
4. **Clear browser cache**: Try incognito/private window
5. **Test GitHub Pages URL first**: If that works, it's just DNS
