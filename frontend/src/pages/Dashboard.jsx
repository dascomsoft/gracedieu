// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const navigate = useNavigate();

//   const handleSignOut = () => {
//     // TODO: clear auth (localStorage/session)
//     navigate("/login");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-linear-gradient-to-br from-yellow-100 to-orange-200">
//       <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
//         Tableau de bord / Dashboard
//       </h1>

//       <div className="flex flex-col gap-6 w-full max-w-sm">
//         <button
//           onClick={() => navigate("/francophone")}
//           className="w-full py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
//         >
//           Section Francophone
//         </button>

//         <button
//           onClick={() => navigate("/anglophone")}
//           className="w-full py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
//         >
//           Section Anglophone
//         </button>

//         <button
//           onClick={handleSignOut}
//           className="w-full py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
//         >
//           Sign out
//         </button>
//       </div>
//     </div>
//   );
// }










import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-indigo-100 via-blue-50 to-cyan-100">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-[90%] md:w-[500px] text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🎓 Tableau de Bord
        </h1>
        <p className="text-gray-600 mb-8">
          Bienvenue sur votre espace enseignant.  
          Veuillez choisir une section pour continuer.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/francophone")}
            className="bg-linear-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
          >
            Section Francophone 🇫🇷
          </button>

          <button
            onClick={() => navigate("/anglophone")}
            className="bg-linear-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
          >
            Section Anglophone 🇬🇧
          </button>
        </div>

        <hr className="my-8 border-gray-300" />

        <button
          onClick={handleLogout}
          className="text-red-600 font-semibold hover:underline transition"
        >
          Se déconnecter
        </button>
      </div>
    </div>
  );
}
