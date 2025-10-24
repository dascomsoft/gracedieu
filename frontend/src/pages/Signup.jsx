import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // TODO: call backend API for signup
    console.log("Signup with:", username, password);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-linear-gradient-to-br from-green-100 to-blue-200">
      <form
        onSubmit={handleSignup}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Inscription / Signup
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nom d'utilisateur / Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Choisissez un nom d'utilisateur"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Mot de passe / Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="********"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          S'inscrire / Signup
        </button>

        <p className="mt-4 text-center text-gray-600">
          Déjà un compte ?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Connexion / Login
          </Link>
        </p>
      </form>
    </div>
  );
}


















// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Signup() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     if (password !== confirmPassword) {
//       return setError("Les mots de passe ne correspondent pas.");
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/signup", {
//         username,
//         password,
//       });

//       if (res.data.message) {
//         setSuccess("Compte créé avec succès !");
//         setTimeout(() => navigate("/login"), 1500);
//       }
//     } catch (err) {
//       setError("Erreur : ce nom d'utilisateur existe déjà.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-cyan-100">
//       <div className="bg-white rounded-2xl shadow-2xl p-10 w-[90%] md:w-[400px]">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           🧑‍🏫 Inscription Enseignant
//         </h1>

//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm text-center">
//             {error}
//           </div>
//         )}
//         {success && (
//           <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4 text-sm text-center">
//             {success}
//           </div>
//         )}

//         <form onSubmit={handleSignup} className="flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="Nom d'utilisateur"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Mot de passe"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirmer le mot de passe"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
//             required
//           />

//           <button
//             type="submit"
//             className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
//           >
//             S’inscrire
//           </button>
//         </form>

//         <div className="text-center mt-6">
//           <p className="text-gray-600 text-sm">
//             Déjà un compte ?{" "}
//             <button
//               onClick={() => navigate("/login")}
//               className="text-indigo-600 font-medium hover:underline"
//             >
//               Se connecter
//             </button>
//           </p>
//         </div>

//         <div className="mt-4 text-center">
//           <button
//             onClick={() => navigate("/")}
//             className="text-gray-500 hover:underline text-sm"
//           >
//             ⬅ Retour à l’accueil
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
