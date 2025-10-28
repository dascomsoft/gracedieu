// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function FrancophoneSection() {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-linear-gradient-to-br from-blue-50 to-blue-200">
//       <h1 className="text-2xl font-bold text-gray-800 mb-8">
//         Section Francophone
//       </h1>

//       <div className="flex flex-col gap-4 w-full max-w-sm">
//         <button
//           onClick={() => navigate("/petite-section")}
//           className="w-full py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
//         >
//           Petite Section
//         </button>

//         <button
//           onClick={() => navigate("/moyenne-section")}
//           className="w-full py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
//         >
//           Moyenne Section
//         </button>

//         <button
//           onClick={() => navigate("/grande-section")}
//           className="w-full py-3 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-500 transition"
//         >
//           Grande Section
//         </button>

//         <button
//           onClick={() => navigate("/bulletin-fr")}
//           className="w-full py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition"
//         >
//           Classes Primaires
//         </button>
//       </div>
//     </div>
//   );
// }




















// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function FrancophoneSection() {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-rose-50 via-pink-100 to-rose-200">
//       <div className="bg-white shadow-2xl rounded-2xl p-10 w-[90%] md:w-[600px] text-center">
//         <h1 className="text-3xl font-bold text-gray-800 mb-3">
//           🇫🇷 Section Francophone
//         </h1>
//         <p className="text-gray-600 mb-8">
//           Sélectionnez un palier pour accéder au bulletin correspondant.
//         </p>

//         <div className="grid grid-cols-1 gap-5">
//           {/* Petite Section */}
//           <button
//             onClick={() => navigate("/petite-section")}
//             className="bg-linear-to-r from-purple-500 to-pink-500 hover:scale-105 transition transform text-white py-4 rounded-xl shadow-md font-semibold tracking-wide"
//           >
//             🧸 Petite Section
//           </button>

//           {/* Moyenne Section */}
//           <button
//             onClick={() => navigate("/moyenne-section")}
//             className="bg-linear-to-r from-orange-400 to-yellow-500 hover:scale-105 transition transform text-white py-4 rounded-xl shadow-md font-semibold tracking-wide"
//           >
//             🎨 Moyenne Section
//           </button>

//           {/* Classes Primaires */}
//           <button
//             onClick={() => navigate("/classes-primaires")}
//             className="bg-linear-to-r from-blue-500 to-indigo-600 hover:scale-105 transition transform text-white py-4 rounded-xl shadow-md font-semibold tracking-wide"
//           >
//             📚 Classes Primaires
//           </button>
//         </div>

//         <div className="mt-10">
//           <button
//             onClick={() => navigate("/")}
//             className="text-pink-600 hover:underline font-medium"
//           >
//             ← Retour au menu principal
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
























import React from "react";
import { useNavigate } from "react-router-dom";

export default function FrancophoneSection() {
  const navigate = useNavigate();

  const handleSelect = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-green-50 via-emerald-100 to-teal-50 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          🇫🇷 Section Francophone
        </h1>
        <p className="text-gray-600 mb-8">
          Choisissez un palier pour accéder au bulletin correspondant
        </p>

        <div className="flex flex-col gap-4">
          {/* <button
            onClick={() => handleSelect("/petite-section")}
            className="w-full bg-linear-to-r from-pink-500 to-rose-600 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Petite Section
          </button> */}

          <button
            onClick={() => handleSelect("/bulletin-maternelle")}
            className="w-full bg-linear-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Maternelle
          </button>

          <button
            onClick={() => handleSelect("/primaire-francophone")}
            className="w-full bg-linear-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Classes Primaires
          </button>
        </div>

        <hr className="my-8 border-gray-300" />

        <button
          onClick={() => navigate("/dashboard")}
          className="text-blue-600 font-semibold hover:underline transition"
        >
          ← Retour au tableau de bord
        </button>
      </div>
    </div>
  );
}
