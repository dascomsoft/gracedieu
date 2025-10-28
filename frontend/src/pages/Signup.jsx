import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        username,
        password,
      });

      if (res.data.message) {
        setSuccess("Compte créé avec succès !");
        setTimeout(() => navigate("/login"), 1500);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Erreur lors de l'inscription");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-200 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSignup}
        className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
          Inscription / Signup
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-3 sm:px-4 py-2 rounded mb-3 sm:mb-4 text-xs sm:text-sm text-center">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-3 sm:px-4 py-2 rounded mb-3 sm:mb-4 text-xs sm:text-sm text-center">
            {success}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
            Nom d'utilisateur / Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
            placeholder="Choisissez un nom d'utilisateur"
            required
          />
        </div>

        <div className="mb-5 sm:mb-6">
          <label className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
            Mot de passe / Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
            placeholder="********"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 sm:py-3 rounded-lg hover:bg-green-700 transition text-sm sm:text-base"
        >
          S'inscrire / Signup
        </button>

        <p className="mt-3 sm:mt-4 text-center text-gray-600 text-sm sm:text-base">
          Déjà un compte ?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Connexion / Login
          </Link>
        </p>
      </form>
    </div>
  );
}
