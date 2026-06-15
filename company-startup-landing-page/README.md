# Kavya Sree Digital Solutions Website

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fkavyasreedigitalsolutionspvtltd.com)](https://kavyasreedigitalsolutionspvtltd.com/)
[![Built with React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-%234061ff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A polished React + Vite landing page built for Kavya Sree Digital Solutions Pvt Ltd. This repository showcases the client’s service offerings, lead generation features, and digital branding presence.

---

## 🚀 Highlights

- **Client website:** https://kavyasreedigitalsolutionspvtltd.com/
- **Developed by:** www.fylo.co.in
- **Support email:** hello@fylo.co.in
- **Contact phone:** 7997108777
- **Public repository:** designed to attract visitors and showcase a professional digital agency portfolio

## ✨ Features

- Fully responsive landing page with modern UI/UX
- Interactive navigation and light/dark theme toggle
- Clear service sections for web development, SEO, ads, branding, and AI videos
- Pricing and package plan display for campaigns and training
- Floating lead capture form and WhatsApp contact widget for instant conversions
- Clean React component structure using Tailwind CSS utilities

## 🧩 Tech Stack

- React 19
- Vite
- Tailwind CSS
- ESLint

## 💻 Installation

```bash
git clone <repository-url>
cd kavya
npm install
npm run dev
```

Then open the local address shown in the terminal, such as `http://localhost:5173/`.

## 📁 Project Structure

- `index.html` — Main HTML entrypoint
- `src/main.jsx` — React app bootstrap
- `src/App.jsx` — Homepage layout and content
- `src/components/` — Reusable UI widgets (video, lead form, WhatsApp float)
- `src/assets/` — Images and logo files
- `src/index.css` / `src/App.css` — Global and component styling

## 🛠️ Scripts

- `npm run dev` — Start local development server
- `npm run build` — Build production-ready assets
- `npm run preview` — Preview the built site locally
- `npm run lint` — Run ESLint checks

## ☁️ Deployment

### Coolify (Self-Hosted)

1. **Connect your Git repository to Coolify:**
   - Log into your Coolify panel
   - Click **"Create Resource"** → **"Public Repository"**
   - Select your GitHub/GitLab repository
   - Choose the branch to deploy (e.g., `main`)

2. **Select Build Pack:**
   - Choose **"Static"** as the build pack (for static site hosting)
   - This tells Coolify to serve your built files as a static website

3. **Configure build settings:**
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Port:** `3000` (or your preferred port)

4. **Environment variables (if needed):**
   - Add any `.env` variables in the Coolify panel under **Environment**

5. **Deploy:**
   - Click **Deploy** and Coolify will build and host your site
   - Your site will be accessible via the assigned domain

### aPanel (Self-Hosted)

1. **Access aPanel dashboard:**
   - Log into your aPanel control panel
   - Navigate to **Websites** or **Domains**
   - Click **Add Website**

2. **Configure your site:**
   - **Domain name:** Enter your domain
   - **Root directory:** Set to the `dist` folder path (e.g., `/home/username/public_html/kavya/dist`)
   - **Node.js version:** Select version 18+ if available

3. **Upload and build:**
   - Upload your project files via **File Manager** or FTP
   - SSH into your server:
     ```bash
     ssh user@your-domain.com
     cd /path/to/project
     npm install
     npm run build
     ```

4. **Configure web server:**
   - Point your domain to the `dist` folder
   - aPanel will serve static files automatically

### cPanel (Shared/Dedicated Hosting)

1. **Upload project files:**
   - Log into your cPanel
   - Open **File Manager**
   - Upload your project to `public_html` or a subdirectory
   - Extract files if needed

2. **Build the project:**
   - Open **Terminal** (if available) or use FTP
   - Navigate to your project:
     ```bash
     cd /home/username/public_html/kavya
     npm install
     npm run build
     ```
   - Copy `dist` folder contents to `public_html` root

3. **Configure DNS (if needed):**
   - In cPanel, go to **Addon Domains** or **Domains**
   - Point your domain to the directory containing `dist` files

4. **Verify deployment:**
   - Visit your domain in a browser
   - The site should load from the `public_html` directory

### Other Deployment Options

Deploy the generated `dist/` folder to:

- **Vercel:** Push to GitHub, connect in Vercel dashboard
- **Netlify:** Connect Git repo or drag-and-drop `dist/` folder
- **GitHub Pages:** Push to `gh-pages` branch or configure in settings
- **Firebase Hosting:** Run `firebase deploy` after building
- **AWS S3 + CloudFront:** Upload `dist/` to S3 bucket
- **Railway/Render:** Connect Git repo, set build command to `npm run build`

### Build for Production

```bash
npm run build
```

## � Troubleshooting

### Error: "Failed to load module script: application/octet-stream MIME type"

**Problem:** Server is serving `.js` files with wrong MIME type instead of `application/javascript`.

**Solution for Coolify Static:**
1. In Coolify, check that the **Web Server** is properly configured
2. Ensure output directory points exactly to `dist/` (not a subdirectory)
3. Try rebuilding: Delete previous build and redeploy
4. Check that `dist/` folder contains:
   - `index.html`
   - `assets/` folder with `.js` files
   - All other built files

### Error: "favicon.svg 404 (Not Found)"

**Problem:** favicon or public assets are missing from the deployed site.

**Solution:**
1. Ensure `public/` folder exists in your project root
2. Check that `vite.config.js` includes public directory config:
   ```javascript
   export default {
     publicDir: 'public',
     // ... other config
   }
   ```
3. Run `npm run build` locally and verify `dist/` contains all assets
4. Redeploy — Coolify should copy favicon and other public assets to `dist/`

### Site shows blank page or won't load

**Check:**
1. Verify Coolify deployment completed successfully (check logs)
2. Confirm build output directory is set to `dist/`
3. Test locally: `npm run build` then `npm run preview`
4. Check browser console for errors
5. Clear browser cache and reload

## �📣 Contact

For website updates, support, or customization:

- **Email:** hello@fylo.co.in
- **Phone:** 7997108777
- **Agency:** www.fylo.co.in

---

## 💡 Why this repo?

This public repository is intended to present a professional digital agency portfolio for Kavya Sree Digital Solutions. It emphasizes lead generation, services, and brand trust so visitors can quickly understand the company’s value.
