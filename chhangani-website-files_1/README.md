# Chhangani Associates — Website

Static site: `index.html`, `styles.css`, `script.js`. No build step, no dependencies.

## Deploy on GitHub Pages (free)

1. Create a new GitHub repo, e.g. `chhangani-associates`.
2. Upload these three files (`index.html`, `styles.css`, `script.js`) to the repo root — via the GitHub web UI ("Add file" → "Upload files") or:
   ```
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/chhangani-associates.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. After ~1 minute your site is live at `https://YOUR_USERNAME.github.io/chhangani-associates/`.
6. (Optional) Add a custom domain under Settings → Pages → Custom domain, and set a CNAME record with your domain registrar pointing to `YOUR_USERNAME.github.io`.

## Things to personalize before going live

- **Contact form**: sign up free at [formspree.io](https://formspree.io), create a form, and replace `YOUR_FORM_ID` in `index.html` (`<form ... action="https://formspree.io/f/YOUR_FORM_ID">`) with your real ID. Without this the form shows a "not connected" message instead of sending.
- **WhatsApp/call numbers**: replace `910000000000` in `index.html` (three places: WhatsApp button, WhatsApp float button, call float button) with your real number, country code first, no `+` or spaces.
- **Address, email, phone, business hours**: the Phone/Email/Address lines in the "Reach Us" card are currently blank on purpose — edit the `.contact-info` section in `index.html` to fill them in whenever ready. The map has been removed for now.
- **Project photos**: drop your own photos into the `images/` folder using these exact filenames (jpg): `skyline-residence.jpg`, `harbor-view-villas.jpg`, `metro-business-park.jpg`, `crestline-offices.jpg`, `northgate-warehouse.jpg`, `sunview-apartments.jpg`, `plaza-retail-front.jpg`, `ironline-shed-complex.jpg`, `lakeside-bungalow.jpg`. Until a photo with that name exists, a generated placeholder graphic shows instead — nothing breaks either way. (You can also just send me the photos and project names directly and I'll update the code for you.)
- **Company founding year / timeline**: edit the `.about-timeline` section in `index.html` — currently placeholder milestones.

## What this does NOT include

GitHub Pages only serves static files — there's no server to run. That means the admin dashboard, database (PostgreSQL), user accounts, and analytics from the original spec aren't part of this build. If you want those later, they'd need separate backend hosting (e.g. Render, Railway, or a VPS) with a proper security setup (auth, HTTPS, rate limiting, etc.) — happy to help plan that when you're ready.

## Features included

Sticky nav with mega menu, mobile menu, dark/light toggle, animated hero with sliding-panel load animation, animated stat counters, About with timeline, 11 service cards, filterable project gallery with lightbox, "why choose us" grid, auto-sliding testimonials, contact form + WhatsApp/call buttons + map + hours, FAQ accordion, footer, back-to-top button, scroll-reveal animations, SEO meta tags + Open Graph + JSON-LD, inline SVG favicon (no extra HTTP request), reduced-motion support, visible keyboard focus states.
