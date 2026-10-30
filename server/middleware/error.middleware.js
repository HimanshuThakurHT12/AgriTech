export function notFound(req, res, _next) { res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` }); }
export function errorHandler(err, _req, res, _next) {
  const status = err.status || (err.name === 'ValidationError' ? 400 : err.code === 11000 ? 409 : 500);
  res.status(status).json({ message: err.code === 11000 ? 'A record with this value already exists.' : err.message || 'Server error.' });
}
