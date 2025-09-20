export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h1>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Correo"
            className="p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="p-2 border rounded"
          />
          <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
