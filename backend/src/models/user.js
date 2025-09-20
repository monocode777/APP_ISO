const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  contraseña: { type: DataTypes.STRING, allowNull: false },
  tipo: { type: DataTypes.ENUM('auditor', 'usuario', 'admin'), defaultValue: 'usuario' },
  verificado: { type: DataTypes.BOOLEAN, defaultValue: false },
  fecha_registro: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = User;
