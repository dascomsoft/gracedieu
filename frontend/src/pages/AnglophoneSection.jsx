// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function AnglophoneSection() {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-linear-gradient-to-br from-green-50 to-green-200">
//       <h1 className="text-2xl font-bold text-gray-800 mb-8">
//         Anglophone Section
//       </h1>

//       <div className="flex flex-col gap-4 w-full max-w-sm">
//         <button
//           onClick={() => navigate("/pre-nursery")}
//           className="w-full py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
//         >
//           Pre-Nursery
//         </button>

//         <button
//           onClick={() => navigate("/nursery")}
//           className="w-full py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
//         >
//           Nursery
//         </button>

//         <button
//           onClick={() => navigate("/bulletin-en")}
//           className="w-full py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800 transition"
//         >
//           Primary Classes
//         </button>
//       </div>
//     </div>
//   );
// }








// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function AnglophoneSection() {
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-blue-50 via-indigo-100 to-blue-200">
//       <div className="bg-white shadow-2xl rounded-2xl p-10 w-[90%] md:w-[600px] text-center">
//         <h1 className="text-3xl font-bold text-gray-800 mb-3">
//           🇬🇧 Anglophone Section
//         </h1>
//         <p className="text-gray-600 mb-8">
//           Select a learning level to access the corresponding report card.
//         </p>

//         <div className="grid grid-cols-1 gap-5">
//           {/* Pre-Nursery */}
//           <button
//             onClick={() => navigate("/pre-nursery")}
//             className="bg-linear-to-r from-pink-500 to-red-500 hover:scale-105 transition transform text-white py-4 rounded-xl shadow-md font-semibold tracking-wide"
//           >
//             🧸 Pre-Nursery
//           </button>

//           {/* Nursery */}
//           <button
//             onClick={() => navigate("/nursery")}
//             className="bg-linear-to-r from-orange-400 to-yellow-500 hover:scale-105 transition transform text-white py-4 rounded-xl shadow-md font-semibold tracking-wide"
//           >
//             🎨 Nursery
//           </button>

//           {/* Primary */}
//           <button
//             onClick={() => navigate("/primary")}
//             className="bg-linear-to-r from-indigo-500 to-blue-600 hover:scale-105 transition transform text-white py-4 rounded-xl shadow-md font-semibold tracking-wide"
//           >
//             📚 Primary Classes
//           </button>
//         </div>

//         <div className="mt-10">
//           <button
//             onClick={() => navigate("/")}
//             className="text-indigo-600 hover:underline font-medium"
//           >
//             ← Back to Main Menu
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }













import React from "react";
import { useNavigate } from "react-router-dom";

export default function AnglophoneSection() {
  const navigate = useNavigate();

  const handleSelect = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-blue-50 via-indigo-100 to-purple-50 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          🇬🇧 Anglophone Section
        </h1>
        <p className="text-gray-600 mb-8">
          Choose a level to access the corresponding report card
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleSelect("/pre-nursery")}
            className="w-full bg-linear-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Pre-Nursery
          </button>

          <button
            onClick={() => handleSelect("/nursery")}
            className="w-full bg-linear-to-r from-purple-500 to-fuchsia-600 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Nursery
          </button>

          <button
            onClick={() => handleSelect("/bulletin-anglophone")}
            className="w-full bg-linear-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Primary Classes
          </button>
        </div>

        <hr className="my-8 border-gray-300" />

        <button
          onClick={() => navigate("/dashboard")}
          className="text-blue-600 font-semibold hover:underline transition"
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

