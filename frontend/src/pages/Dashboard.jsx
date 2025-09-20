import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/dashboard") // ⚠️ Ajusta el puerto si tu backend usa otro
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p className="p-6">⏳ Cargando datos...</p>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">ISO9001 App</h2>
        <nav className="space-y-3">
          <a href="#" className="block hover:text-blue-300">📊 Dashboard</a>
          <a href="#" className="block hover:text-blue-300">📝 Auditorías</a>
          <a href="#" className="block hover:text-blue-300">👤 Usuarios</a>
          <a href="#" className="block hover:text-blue-300">⚙️ Configuración</a>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Panel de Control</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold">Cumplimiento (%)</h3>
            <p className="text-3xl font-bold text-green-600">{data.cumplimiento}%</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold">Auditorías</h3>
            <p className="text-3xl font-bold text-blue-600">{data.auditorias}</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold">No Conformidades</h3>
            <p className="text-3xl font-bold text-red-600">{data.noConformidades}</p>
          </div>
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Line Chart */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Evolución Cumplimiento</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.historico}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="cumplimiento" stroke="#2563eb" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">No Conformidades</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data.historico}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="noConformidades" fill="#dc2626" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}
