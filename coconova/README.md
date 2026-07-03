# CocoNova Industrial — Website

A full-stack site for CocoNova Industrial Pvt Ltd:

- **frontend/** — React (Vite) landing page. Static build, deployable anywhere.
- **backend/** — Java Spring Boot REST API. Handles the contact form (`POST /api/contact`),
  stores submissions in a database, and exposes them to you at `GET /api/contact?key=YOUR_ADMIN_KEY`.

No accounts or credentials of yours were needed to build this. Deploying it live just needs
**you** to click through a couple of free signup flows below — I can't do that step for you,
but it's short.

---

## 1. Put the code on GitHub (free, ~2 minutes)

1. Go to github.com → sign in (or create a free account).
2. Click **New repository** → name it `coconova` → Create.
3. On your own computer, unzip the project I gave you, then in a terminal:
   ```bash
   cd coconova
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/coconova.git
   git push -u origin main
   ```
   (GitHub will show you this exact snippet with your username filled in when you create the repo.)

---

## 2. Deploy the backend (Java) — Render, free tier

Render can build straight from the `Dockerfile` in `backend/`, no config needed.

1. Go to [render.com](https://render.com) → sign up free (no card required) → **New → Web Service**.
2. Connect your GitHub account and pick the `coconova` repo.
3. Set **Root Directory** to `backend`.
4. Render will detect the `Dockerfile` automatically — leave environment as **Docker**.
5. Under **Environment Variables**, add:
   - `ALLOWED_ORIGIN` = the frontend URL you'll get in step 3 (you can update this after step 3)
   - `ADMIN_KEY` = a password of your choice — this is what you'll use to view contact form submissions
6. Click **Create Web Service**. First deploy takes a few minutes.
7. You'll get a URL like `https://coconova-api.onrender.com`. Test it by visiting
   `https://coconova-api.onrender.com/api/health` — you should see `{"status":"ok",...}`.

**Note on the free tier:** the service spins down after inactivity and the first request after
that takes ~30–60 seconds to wake up. That's expected and fine for a small business site.

**Note on data:** by default this uses a small embedded database (H2) stored on disk, which is
enough to get running immediately, but free-tier disks are wiped on redeploy. For real bulk-order
inquiries, add a **free Render PostgreSQL** instance (New → PostgreSQL, free tier) and paste its
connection details into the backend's environment variables as `SPRING_DATASOURCE_URL`,
`SPRING_DATASOURCE_USERNAME`, `SPRING_DATASOURCE_PASSWORD` — the app will use it automatically,
no code changes needed.

---

## 3. Deploy the frontend (React) — Vercel or Netlify, free tier

1. Go to [vercel.com](https://vercel.com) (or [netlify.com](https://netlify.com)) → sign up free with GitHub.
2. **New Project** → pick the `coconova` repo → set **Root Directory** to `frontend`.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Add an environment variable: `VITE_API_URL` = your backend URL from step 2
   (e.g. `https://coconova-api.onrender.com`).
5. Click **Deploy**. You'll get a free URL like `https://coconova.vercel.app`.
6. Go back to Render (step 2) and update `ALLOWED_ORIGIN` to this exact URL, so the backend
   accepts requests from it. Redeploy the backend for the change to apply.

---

## 4. Free custom domain (optional)

Your site will already work on the free `.vercel.app` / `.onrender.com` subdomains — good enough
for testing or a short-term purpose. If you want a nicer free-ish domain name later:

- **Freenom-style free TLDs** (`.tk`, `.ml`, etc.) are unreliable and not recommended for a real business.
- A real domain (`.com`, `.in`) costs roughly $8–12/year from Namecheap or GoDaddy — worth it once
  you're ready to go live for real, and you just point it at your Vercel/Render deployment (both
  support free custom domains + HTTPS).

---

## Local development

**Backend** (needs Java 17+ and Maven installed):
```bash
cd backend
mvn spring-boot:run
```
Runs at `http://localhost:8080`.

**Frontend**:
```bash
cd frontend
npm install
npm run dev
```
Runs at `http://localhost:5173`. It calls the backend at `http://localhost:8080` by default
(see `.env.example` — copy it to `.env` to override).

---

## Viewing contact form submissions

Once deployed, visit:
```
https://your-backend-url/api/contact?key=YOUR_ADMIN_KEY
```
using the `ADMIN_KEY` you set in step 2. Returns all submissions as JSON.
