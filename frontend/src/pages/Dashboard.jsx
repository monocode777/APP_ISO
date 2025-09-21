import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/dashboard")
      .then((res) => res.json())
      .then((json) => {
        setData(json.kpis);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar datos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-lg">⏳ Cargando datos...</p>;
  if (!data) return <p className="text-center text-red-500">❌ No hay datos disponibles.</p>;

  // Datos simulados para el gráfico
  const chartData = [
    { mes: "Enero", auditorias: 2, proyectos: 3, capacitaciones: 1 },
    { mes: "Febrero", auditorias: 1, proyectos: 4, capacitaciones: 2 },
    { mes: "Marzo", auditorias: 3, proyectos: 2, capacitaciones: 4 },
    { mes: "Abril", auditorias: 2, proyectos: 3, capacitaciones: 3 },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">📊 Dashboard ISO 9001</h1>

      {/* KPIs en Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-xl p-4 text-center">
          <h2 className="text-lg font-semibold">Auditorías</h2>
          <p className="text-3xl font-bold text-blue-600">{data.auditorias}</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4 text-center">
          <h2 className="text-lg font-semibold">Proyectos</h2>
          <p className="text-3xl font-bold text-green-600">{data.proyectos}</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-4 text-center">
          <h2 className="text-lg font-semibold">Capacitaciones</h2>
          <p className="text-3xl font-bold text-purple-600">{data.capacitaciones}</p>
        </div>
      </div>

      {/* Gráfico de Líneas */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Evolución Mensual</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="auditorias" stroke="#1d4ed8" />
            <Line type="monotone" dataKey="proyectos" stroke="#16a34a" />
            <Line type="monotone" dataKey="capacitaciones" stroke="#9333ea" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
