import { Router } from 'express';
const router = Router();
router.get('/', async (req, res) => {
  const { city, lat, lon } = req.query; const key = process.env.OPENWEATHER_API_KEY;
  if (!key) return res.status(503).json({ message: 'Weather is not configured yet. Add OPENWEATHER_API_KEY to server/.env.' });
  if (!city && (lat == null || lon == null)) return res.status(400).json({ message: 'Provide a city or latitude and longitude.' });
  try {
    const query = city ? `q=${encodeURIComponent(city)}` : `lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}`;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?${query}&appid=${key}&units=metric`);
    const data = await response.json(); if (!response.ok) return res.status(response.status).json({ message: data.message || 'Weather request failed.' });
    res.json({ city: data.name, country: data.sys?.country, temperature: data.main?.temp, feelsLike: data.main?.feels_like, humidity: data.main?.humidity, pressure: data.main?.pressure, windSpeed: data.wind?.speed, description: data.weather?.[0]?.description, icon: data.weather?.[0]?.icon });
  } catch { res.status(502).json({ message: 'Could not reach the weather provider.' }); }
});
export default router;
