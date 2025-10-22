# NEIS React Frontend (Converted)

This is a minimal React + Vite frontend scaffold for the NEIS project.
It calls your existing FastAPI backend (default: `https://neis-xc2g.onrender.com`).

How to run locally:
1. `npm install`
2. create `.env` from `.env.example` and set `VITE_API_BASE_URL`
3. `npm run dev`

Deploy to Vercel:
- Create a project from this repo.
- Set environment variable `VITE_API_BASE_URL`.