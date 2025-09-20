const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { nombre, email, contraseña, tipo } = req.body;
  try {
    const hash = await bcrypt.hash(contraseña, 10);
    const user = await User.create({ nombre, email, contraseña: hash, tipo });
    res.json({ id: user.id, email: user.email });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.post('/login', async (req, res) => {
  const { email, contraseña } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(400).json({ message: 'Credenciales inválidas' });
  const ok = await bcrypt.compare(contraseña, user.contraseña);
  if (!ok) return res.status(400).json({ message: 'Credenciales inválidas' });

  const token = jwt.sign(
    { id: user.id, email: user.email, tipo: user.tipo },
    process.env.JWT_SECRET,
    { expiresIn: '8h' }
  );
  res.json({ token, user: { id: user.id, nombre: user.nombre, tipo: user.tipo } });
});

module.exports = router;
