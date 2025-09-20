import express from "express";
const router = express.Router();

// 🔹 Ejemplo de datos dinámicos (luego puedes conectarlo con tu DB MySQL)
router.get("/", (req, res) => {
  res.json({
    cumplimiento: 85,
    auditorias: 12,
    noConformidades: 5,
    historico: [
      { name: "Ene", cumplimiento: 80, noConformidades: 4 },
      { name: "Feb", cumplimiento: 85, noConformidades: 3 },
      { name: "Mar", cumplimiento: 78, noConformidades: 6 },
      { name: "Abr", cumplimiento: 90, noConformidades: 2 },
    ],
  });
});

export default router;
