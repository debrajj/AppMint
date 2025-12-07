# Deploy AppMint to Netlify

## Option 1: Deploy via Netlify UI (Easiest)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Netlify will auto-detect the settings from `netlify.toml`
6. Click "Deploy site"

## Option 2: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
```

4. Or deploy directly:
```bash
cd web/frontend
npm install
npm run build
netlify deploy --prod
```

## Build Settings (already configured in netlify.toml)

- **Base directory:** `web/frontend`
- **Build command:** `npm run build`
- **Publish directory:** `dist`

## After Deployment

Your app will be live at: `https://your-site-name.netlify.app`

Note: This is a standalone React app. For full Shopify embedded app functionality, you'll need to configure Shopify App settings with your Netlify URL.
