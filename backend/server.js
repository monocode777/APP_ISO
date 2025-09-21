// backend/server.js
import express from "express";
import cors from "cors";
import morgan from "morgan";

// ✅ Importamos rutas desde src
import dashboardRoutes from "./src/routes/dashboard.js";

const app = express();

// 🔧 Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// 📌 Rutas
app.use("/api/dashboard", dashboardRoutes);

// Puerto
const PORT = process.env.PORT || 5000;

// 🚀 Servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.send("✅ API ISO9001 corriendo...");
});
