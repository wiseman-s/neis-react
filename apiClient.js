import axios from 'axios';

const BASE = import.meta.env.VITE_API_BASE_URL || 'https://neis-xc2g.onrender.com';

export async function generateKey() {
  const res = await axios.get(`${BASE}/api/generate-key`);
  return res.data;
}

export async function getNationalSummary(apiKey) {
  const res = await axios.get(`${BASE}/api/energy/summary`, {
    headers: { 'x-api-key': apiKey }
  });
  return res.data;
}
