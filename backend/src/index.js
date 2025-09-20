const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 4000;
sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log(`✅ Backend corriendo en puerto ${PORT}`));
});
