import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: call backend API for login
    console.log("Login with:", username, password);
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-linear-gradient-to-br from-blue-100 to-purple-200">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Connexion / Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nom d'utilisateur / Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Entrez votre nom d'utilisateur"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Mot de passe / Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="********"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Se connecter / Login
        </button>

        <p className="mt-4 text-center text-gray-600">
          Pas encore de compte ?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Inscription / Signup
          </Link>
        </p>
      </form>
    </div>
  );
}
