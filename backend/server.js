import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Config DB (variables desde .env)
const pool = mysql.createPool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "appuser",
  password: process.env.DB_PASS || "password",
  database: process.env.DB_NAME || "iso9001db",
});

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("✅ API ISO9001 corriendo correctamente");
});

// Ruta para probar conexión a DB
app.get("/db-check", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT NOW() as now");
    res.json({ db: "ok", time: rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB connection failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
