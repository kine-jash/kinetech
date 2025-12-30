# DNS Configuration Guide for kinetech.in

## Current Issue
You're seeing a GoDaddy page instead of your GitHub Pages site. This means the DNS is not pointing to GitHub Pages.

## Step-by-Step DNS Configuration

### Option 1: CNAME Record (Recommended)

1. **Log into GoDaddy**
   - Go to https://dcc.godaddy.com/
   - Select your domain `kinetech.in`

2. **Go to DNS Management**
   - Find the DNS Records section
   - Look for existing CNAME or A records for the root domain

3. **Add/Update CNAME Record**
   - **Type**: CNAME
   - **Name**: `@` (or leave blank for root domain)
   - **Value**: `kine-jash.github.io`
   - **TTL**: 600 (or default)

4. **Remove conflicting records**
   - Delete any existing A records pointing to GoDaddy IPs
   - Delete any other CNAME records for the root domain

### Option 2: A Records (Alternative)

If CNAME doesn't work for root domain, use A records:

1. **Add these A records** (all with TTL 600):
   - **Name**: `@`
   - **Type**: A
   - **Value**: `185.199.108.153`
   
   - **Name**: `@`
   - **Type**: A
   - **Value**: `185.199.109.153`
   
   - **Name**: `@`
   - **Type**: A
   - **Value**: `185.199.110.153`
   
   - **Name**: `@`
   - **Type**: A
   - **Value**: `185.199.111.153`

### Step 2: Configure GitHub Pages

1. **Go to GitHub Repository Settings**
   - Navigate to: https://github.com/kine-jash/kinetech/settings/pages

2. **Set Custom Domain**
   - Under "Custom domain", enter: `kinetech.in`
   - Click "Save"
   - Check "Enforce HTTPS" (after DNS propagates)

3. **Verify CNAME File**
   - The CNAME file should contain: `kinetech.in`
   - It's automatically included in the build

### Step 3: Verify DNS Propagation

After updating DNS, wait 5-60 minutes, then check:

```bash
# Check DNS records
dig kinetech.in +short
nslookup kinetech.in

# Should show GitHub Pages IPs or github.io
```

### Step 4: Test GitHub Pages URL First

Before DNS propagates, test if GitHub Pages is working:

1. Visit: `https://kine-jash.github.io/kinetech/`
2. If this works, the site is deployed correctly
3. DNS just needs to point to it

## Troubleshooting

### Still seeing GoDaddy page?

1. **Clear DNS cache**:
   ```bash
   # macOS
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   
   # Or use Google DNS temporarily: 8.8.8.8
   ```

2. **Check DNS propagation**:
   - Use https://dnschecker.org/
   - Enter `kinetech.in`
   - Check if it points to GitHub Pages IPs

3. **Verify GitHub Pages is active**:
   - Go to repository Settings → Pages
   - Check that it shows "Your site is live at..."
   - Verify the custom domain is set

4. **Check for DNS conflicts**:
   - Make sure no other DNS records conflict
   - Remove any GoDaddy parking page records

### Common Issues

**Issue**: Domain shows GoDaddy parking page
- **Solution**: Remove GoDaddy's default A/CNAME records and add GitHub Pages records

**Issue**: DNS not propagating
- **Solution**: Wait up to 48 hours, or check if nameservers are correct

**Issue**: HTTPS not working
- **Solution**: Wait for DNS to propagate, then enable "Enforce HTTPS" in GitHub Pages settings

## Quick Checklist

- [ ] DNS records point to GitHub Pages (CNAME or A records)
- [ ] Removed GoDaddy default/parking page records
- [ ] Custom domain set in GitHub Pages settings
- [ ] CNAME file exists in repository (already done)
- [ ] GitHub Actions workflow completed successfully
- [ ] Site accessible at `kine-jash.github.io/kinetech/`

## Need Help?

If DNS is configured correctly but still not working:
1. Check GitHub Actions tab for deployment status
2. Verify the site works at the GitHub Pages URL first
3. Wait 24-48 hours for full DNS propagation
4. Contact GoDaddy support if DNS changes aren't taking effect
