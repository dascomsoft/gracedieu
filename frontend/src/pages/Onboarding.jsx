import React from "react";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div 
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/image2.jpg')` }} // Remplacez "background.jpg" par le nom de votre image
    >
      <div className="bg-slate-100 shadow-2xl rounded-2xl p-10 text-center w-[90%] md:w-[500px] bg-opacity-90">
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
//     <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
//       {/* Animation scolaire en arrière-plan */}
//       <div className="absolute inset-0 z-0">
//         {/* Éléments décoratifs */}
//         <div className="absolute top-1/4 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
//         <div className="absolute top-1/3 right-20 w-12 h-12 bg-red-400 rounded-full opacity-30 animate-pulse"></div>
//         <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-green-400 rounded-full opacity-25 animate-ping"></div>
        
//         {/* Formes de cahier */}
//         <div className="absolute top-20 right-32 w-6 h-8 bg-blue-200 opacity-40 transform rotate-45 animate-pulse"></div>
//         <div className="absolute bottom-32 left-32 w-8 h-6 bg-green-200 opacity-40 transform -rotate-45 animate-pulse"></div>
        
//         {/* Points de repère */}
//         <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-gray-400 rounded-full opacity-50"></div>
//         <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-gray-400 rounded-full opacity-50"></div>
        
//         {/* Lignes de cahier subtiles */}
//         <div className="absolute inset-0 opacity-15">
//           <div className="flex flex-col space-y-6 transform rotate-3">
//             {[...Array(15)].map((_, i) => (
//               <div 
//                 key={i}
//                 className="w-full h-0.5 bg-gray-600"
//               ></div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Contenu principal */}
//       <div className="bg-white shadow-2xl rounded-2xl p-10 text-center w-[90%] md:w-[500px] relative z-10 bg-white/90 backdrop-blur-sm">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//           Bienvenue / Welcome <br />
//           <span className="text-blue-600">Groupe Scolaire Bilingue La Grâce de Dieu</span>
//         </h1>

//         <p className="text-gray-600 mb-8 text-center max-w-md">
//           Choisissez votre langue pour continuer / Choose your language to continue
//         </p>

//         <div className="flex flex-col gap-4">
//           <button
//             onClick={() => navigate("/signup")}
//             className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300 transform hover:scale-105"
//           >
//             Français
//           </button>
//           <button
//             onClick={() => navigate("/signup")}
//             className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-300 transform hover:scale-105"
//           >
//             English
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
