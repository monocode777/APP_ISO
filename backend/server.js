import express from "express";
import cors from "cors";
import dashboardRoutes from "./routes/dashboard.js";
app.use("/api/dashboard", dashboardRoutes);

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Ruta de prueba
app.get("/", (req, res) => {
  res.json({ message: "✅ Backend funcionando con Express" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
