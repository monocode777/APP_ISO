// backend/src/routes/dashboard.js
import express from "express";
const router = express.Router();

// Endpoint del dashboard con datos simulados (mock)
router.get("/", (req, res) => {
  res.json({
    cards: {
      procesos: 12,
      noConformidades: 3,
      usuarios: 45,
      auditorias: 5,
    },
    chartData: [
      { name: "Ene", auditorias: 2, noConformidades: 1 },
      { name: "Feb", auditorias: 3, noConformidades: 0 },
      { name: "Mar", auditorias: 1, noConformidades: 2 },
      { name: "Abr", auditorias: 4, noConformidades: 1 },
      { name: "May", auditorias: 2, noConformidades: 3 },
      { name: "Jun", auditorias: 3, noConformidades: 1 },
    ],
  });
});

export default router;
