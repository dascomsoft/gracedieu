



import React from "react";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-linear-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white shadow-2xl rounded-2xl p-10 text-center w-[90%] md:w-[500px]">

      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Bienvenue / Welcome <br />
        <span className="text-blue-600">Groupe Scolaire Bilingue La Grâce de Dieu</span>
      </h1>

      <p className="text-gray-600 mb-8 text-center max-w-md">
        Choisissez votre langue pour continuer / Choose your language to continue
      </p>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate("/signup")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Français
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          English
        </button>
      </div>
    </div>
    </div>
  );
}











// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Onboarding() {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-blue-50 via-purple-100 to-pink-200">
//       <div className="bg-white shadow-2xl rounded-2xl p-10 w-[90%] md:w-[600px] text-center">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">
//           🎓 Groupe Scolaire Bilingue Grâce de Dieu
//         </h1>
//         <p className="text-gray-600 mb-8 text-lg">
//           Choisissez votre section pour continuer.
//         </p>

//         <div className="mt-10">
//           <button
//             onClick={() => navigate("/login")}
//             className="text-indigo-600 hover:underline font-medium"
//           >
//             Suivant
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
