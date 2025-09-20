import { Link } from "react-router-dom";
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
  ResponsiveContainer
} from "recharts";



export default function Dashboard() {
  // Datos de ejemplo para auditorías ISO
  const data = [
    { name: "Ene", cumplimiento: 75 },
    { name: "Feb", cumplimiento: 80 },
    { name: "Mar", cumplimiento: 90 },
    { name: "Abr", cumplimiento: 85 },
    { name: "May", cumplimiento: 95 },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Panel ISO9001</h2>
        <nav className="flex flex-col gap-2">
          <Link to="/dashboard/training" className="hover:bg-gray-700 p-2 rounded">📘 Capacitación</Link>
          <Link to="/dashboard/documents" className="hover:bg-gray-700 p-2 rounded">📂 Documentos</Link>
          <Link to="/dashboard/audit" className="hover:bg-gray-700 p-2 rounded">✅ Auditorías</Link>
        </nav>
      </aside>

      {/* Contenido */}
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Dashboard de Auditoría</h1>

        {/* Cards resumen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold">📊 Auditorías realizadas</h2>
            <p className="text-3xl font-bold mt-2">12</p>
            <p className="text-sm text-gray-500">Últimos 6 meses</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold">✅ Cumplimiento promedio</h2>
            <p className="text-3xl font-bold mt-2">88%</p>
            <p className="text-sm text-gray-500">Basado en proyectos</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold">📂 Documentos revisados</h2>
            <p className="text-3xl font-bold mt-2">34</p>
            <p className="text-sm text-gray-500">Norma ISO 9001</p>
          </div>
        </div>

        {/* Gráfico */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Evolución de Cumplimiento ISO</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="cumplimiento" stroke="#2563eb" strokeWidth={3} />
              <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* Gráfico de barras */}
        <div className="bg-white p-6 rounded-xl shadow-md mt-6">
        <h2 className="text-lg font-semibold mb-4">Capacitaciones completadas por mes</h2>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
            { name: "Ene", capacitaciones: 4 },
            { name: "Feb", capacitaciones: 6 },
            { name: "Mar", capacitaciones: 5 },
            { name: "Abr", capacitaciones: 8 },
            { name: "May", capacitaciones: 7 },
            ]}>
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="capacitaciones" fill="#10b981" />
            </BarChart>
        </ResponsiveContainer>
        </div>


      </main>
    </div>
  );
}
