import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // État pour le spinner
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true); // Activer le spinner

    try {
      const res = await axios.post("https://gracedieu.onrender.com/api/login", {
        username,
        password,
      });

      if (res.data.message) {
        alert("Connexion réussie !");
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Erreur lors de la connexion");
    } finally {
      setLoading(false); // Désactiver le spinner dans tous les cas
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
          Connexion / Login
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-3 sm:px-4 py-2 rounded mb-3 sm:mb-4 text-xs sm:text-sm text-center">
            {error}
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
            className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base disabled:opacity-50"
            placeholder="Entrez votre nom d'utilisateur"
            required
            disabled={loading} // Désactiver pendant le chargement
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
            className="w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base disabled:opacity-50"
            placeholder="********"
            required
            disabled={loading} // Désactiver pendant le chargement
          />
        </div>

        <button
          type="submit"
          disabled={loading} // Désactiver le bouton pendant le chargement
          className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              {/* Spinner SVG */}
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Connexion en cours...</span>
            </>
          ) : (
            "Se connecter / Login"
          )}
        </button>

        <p className="mt-3 sm:mt-4 text-center text-gray-600 text-sm sm:text-base">
          Pas encore de compte ?{" "}
          <Link 
            to="/signup" 
            className="text-blue-600 hover:underline"
            onClick={(e) => loading && e.preventDefault()} // Empêcher la navigation pendant le chargement
          >
            Inscription / Signup
          </Link>
        </p>
      </form>
    </div>
  );
}