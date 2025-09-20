import { useState } from "react";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", {
        email,
        contraseña: pass,
      });
      localStorage.setItem("token", res.data.token);
      alert(`Bienvenido ${res.data.user.nombre} (${res.data.user.tipo})`);
    } catch (err) {
      alert("Error de login");
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        placeholder="Contraseña"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
