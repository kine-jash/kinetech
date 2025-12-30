# Migration from Angular to Astro

This project has been migrated from Angular to Astro for static site generation (SSG).

## What Changed

### Architecture
- **Before**: Angular 21 with standalone components, client-side rendering
- **After**: Astro SSG with static HTML generation, minimal JavaScript

### File Structure
- Old Angular components are in `src/components/` (`.component.ts` files) - **deprecated**
- New Astro components are in `src/components/` (`.astro` files) - **active**
- Old Angular services are in `src/services/` - **deprecated**
- New utilities are in `src/utils/` - **active**

### Key Differences

1. **Rendering**
   - Angular: Client-side rendering (CSR)
   - Astro: Static site generation (SSG) - pre-rendered HTML

2. **JavaScript**
   - Angular: Full framework loaded on every page
   - Astro: Only interactive components load JavaScript (islands architecture)

3. **Performance**
   - Angular: Requires JavaScript to render content
   - Astro: HTML-first, JavaScript only for interactivity

4. **Components**
   - Angular: TypeScript classes with decorators
   - Astro: HTML-like components with frontmatter

## Migration Benefits

✅ **Better Performance**: Static HTML loads faster
✅ **SEO Friendly**: Content is pre-rendered
✅ **Smaller Bundle**: Only interactive parts need JavaScript
✅ **Simpler Deployment**: Just static files
✅ **Better Core Web Vitals**: Faster First Contentful Paint

## Old Files (Can be removed)

The following Angular-specific files are no longer needed:
- `angular.json`
- `index.tsx`
- `src/app.component.ts`
- `src/components/*.component.ts` (old Angular components)
- `src/services/ai.service.ts` (replaced by inline script in ChatWidget)
- `src/services/scroll.service.ts` (replaced by `src/utils/scroll.ts`)

## Running the New Site

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:4321`
