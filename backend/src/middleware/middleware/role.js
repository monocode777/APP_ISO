module.exports = (roles = []) => (req, res, next) => {
  if (!roles.includes(req.user.tipo)) {
    return res.status(403).json({ message: 'Acceso denegado' });
  }
  next();
};
