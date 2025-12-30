# Cloudflare DNS Setup for GitHub Pages

## Current Situation
✅ Domain registered on GoDaddy  
✅ Nameservers changed to Cloudflare  
✅ Custom domain added in GitHub Pages  
❌ DNS records in Cloudflare not pointing to GitHub Pages  

## Step-by-Step Cloudflare Configuration

### Step 1: Log into Cloudflare

1. Go to: https://dash.cloudflare.com/
2. Sign in to your account
3. Select the domain: `kinetech.in`

### Step 2: Go to DNS Settings

1. Click **"DNS"** in the left sidebar
2. You'll see your current DNS records

### Step 3: Delete Wrong Records

**Delete ALL existing records that are NOT needed:**
- Delete any A records pointing to GoDaddy IPs
- Delete any A records pointing to Cloudflare IPs (104.21.x.x, 172.67.x.x)
- Delete any CNAME records for `@` that don't point to GitHub Pages
- Keep only: `www` CNAME (if you want www subdomain)

### Step 4: Add Correct DNS Records

You have **TWO options**. Choose ONE:

#### Option A: CNAME Record (Recommended - Easier)

1. Click **"Add record"**
2. Select **Type**: `CNAME`
3. **Name**: `@` (this means root domain)
4. **Target**: `kine-jash.github.io`
5. **Proxy status**: Click the cloud icon to make it **GRAY (DNS only)** ⚠️ **IMPORTANT**
   - Orange cloud = Proxy ON (don't use this)
   - Gray cloud = Proxy OFF (use this)
6. **TTL**: Auto
7. Click **"Save"**

#### Option B: A Records (If CNAME doesn't work)

If Cloudflare doesn't allow CNAME for root domain, use A records:

Add **4 separate A records**:

1. **Record 1:**
   - Type: `A`
   - Name: `@`
   - IPv4 address: `185.199.108.153`
   - Proxy: **GRAY (DNS only)** ⚠️
   - TTL: Auto

2. **Record 2:**
   - Type: `A`
   - Name: `@`
   - IPv4 address: `185.199.109.153`
   - Proxy: **GRAY (DNS only)** ⚠️
   - TTL: Auto

3. **Record 3:**
   - Type: `A`
   - Name: `@`
   - IPv4 address: `185.199.110.153`
   - Proxy: **GRAY (DNS only)** ⚠️
   - TTL: Auto

4. **Record 4:**
   - Type: `A`
   - Name: `@`
   - IPv4 address: `185.199.111.153`
   - Proxy: **GRAY (DNS only)** ⚠️
   - TTL: Auto

### Step 5: (Optional) Add www Subdomain

If you want `www.kinetech.in` to work:

1. Click **"Add record"**
2. Type: `CNAME`
3. Name: `www`
4. Target: `kine-jash.github.io`
5. Proxy: **GRAY (DNS only)**
6. Click **"Save"**

### Step 6: Verify GitHub Pages Settings

1. Go to: https://github.com/kine-jash/kinetech/settings/pages
2. Under **"Custom domain"**, it should show: `kinetech.in`
3. If not, enter it and click **"Save"**
4. Wait 5-10 minutes, then check **"Enforce HTTPS"**

## ⚠️ CRITICAL: Proxy Status Must Be GRAY

**This is the most common mistake!**

- ❌ **Orange Cloud** = Proxy ON = Won't work with GitHub Pages
- ✅ **Gray Cloud** = Proxy OFF = Will work correctly

GitHub Pages needs **direct DNS resolution**, not through Cloudflare's proxy.

## Verify DNS Configuration

After saving, wait 5-10 minutes, then check:

```bash
# Should show GitHub Pages IPs or github.io
dig kinetech.in +short

# Or check online
# Visit: https://dnschecker.org/#A/kinetech.in
```

**Expected results:**
- Should show: `185.199.108.153` (or similar GitHub Pages IPs)
- OR should resolve to: `kine-jash.github.io`

## Check Cloudflare SSL/TLS Settings

1. Go to **SSL/TLS** in Cloudflare dashboard
2. Set encryption mode to: **"Full"** or **"Full (strict)"**
3. This ensures HTTPS works correctly

## Timeline

- DNS changes: 5-60 minutes
- GitHub Pages verification: 5-10 minutes  
- HTTPS certificate: 10-30 minutes after DNS propagates

## Troubleshooting

### Still seeing GoDaddy site?

1. **Check DNS records**: Make sure they point to GitHub Pages, not GoDaddy
2. **Check Proxy status**: Must be GRAY (DNS only)
3. **Clear browser cache**: Try incognito mode
4. **Wait longer**: DNS can take up to 48 hours globally
5. **Check Cloudflare cache**: Go to Caching → Purge Everything

### Site shows "Not Found" or 404?

1. Check GitHub Actions: Make sure deployment succeeded
2. Check GitHub Pages URL: https://kine-jash.github.io/kinetech/ (should work)
3. Verify CNAME file: Should contain `kinetech.in`

### HTTPS not working?

1. Wait for DNS to fully propagate (24-48 hours)
2. Enable "Enforce HTTPS" in GitHub Pages settings
3. Check SSL/TLS mode in Cloudflare (should be Full or Full strict)

## Quick Checklist

- [ ] Cloudflare DNS records point to GitHub Pages (CNAME or A records)
- [ ] Proxy status is GRAY (DNS only) - NOT orange
- [ ] Removed all GoDaddy/Cloudflare IP records
- [ ] Custom domain set in GitHub Pages settings
- [ ] CNAME file exists in repository (already done)
- [ ] GitHub Actions workflow completed successfully
- [ ] Site accessible at `kine-jash.github.io/kinetech/`

## Visual Guide

**Correct Cloudflare DNS Setup:**

```
Type    Name    Content                    Proxy
----    ----    -------                    -----
CNAME   @       kine-jash.github.io        🟡 GRAY (DNS only)
```

**Wrong Setup (Won't Work):**

```
Type    Name    Content                    Proxy
----    ----    -------                    -----
CNAME   @       kine-jash.github.io        🟠 ORANGE (Proxied) ❌
A       @       104.21.42.151              🟠 ORANGE ❌
```
