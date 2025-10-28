



import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PreviewMaternelle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { meta, entetesPeriodes, donnees, resume } = location.state || {};

  const handlePrint = () => window.print();
  const handleDownload = () => window.print();
  const handleBackToEdit = () => navigate(-1);

  const handleFinalSubmit = () => {
    if (confirm("Êtes-vous sûr de vouloir finaliser et vider le formulaire ?")) {
      localStorage.removeItem("bulletinMaternelleData");
      navigate("/");
    }
  };

  if (!location.state) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl font-bold text-red-600 mb-4">
            Aucune donnée trouvée
          </div>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Retour au Formulaire
          </button>
        </div>
      </div>
    );
  }

  const DOMAINES_TEMPLATE = [
    {
      key: "art",
      title: "CREATION ARTISTIQUE ET ACTIVITES MANUELLES",
      activities: "Activités manuelles Colorisée Dessin Peinture",
    },
    {
      key: "sciences",
      title: "EVEIL SCIENTIFIQUE ET TECHNOLOGIQUE",
      activities:
        "Education sensorielle et perceptive Initiation aux mathématiques Sciences et technologies Technologies de l'information et de la communication",
    },
    {
      key: "langues",
      title: "LANGUES ET COMMUNICATIONS",
      activities:
        "Anglais Copie Graphisme Langage Langue nationale Lecture et écriture Poésie et comptine Vocabulaire",
    },
    {
      key: "motricite",
      title: "MOTRICITE GENERALE",
      activities: "Athlétisme Gymnastique",
    },
    {
      key: "vie",
      title: "VIE COURANTE",
      activities:
        "Education à la santé et à l'environnement Education à la santé et à la nutrition Education à la sécurité Education civique et morale",
    },
  ];

  const getEvaluationColor = (value) => {
    switch (value) {
      case "Acquis":
        return "text-green-600 font-semibold";
      case "Non Acquis":
        return "text-red-600 font-semibold";
      case "Expert":
        return "text-blue-600 font-semibold";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-2 flex flex-col items-center print:p-0 print:bg-white">
      {/* Header (non imprimé) */}
      <div className="w-full max-w-6xl mb-2 print:hidden">
        <div className="bg-blue-600 text-white p-2 rounded shadow">
          <h1 className="text-lg font-bold text-center">
            Aperçu du Bulletin Maternelle
          </h1>
          <p className="text-center text-blue-100 text-xs">
            Vérifiez toutes les informations avant l'impression.
          </p>
        </div>
      </div>

      {/* Page principale */}
      <div className="bg-white w-full max-w-6xl shadow-sm p-4 print:shadow-none print:max-w-full print:p-4 print:h-[29.5cm] flex flex-col justify-between">
        {/* En-tête */}
        <div className="w-full mb-2 print:mb-1 border-b border-gray-300 pb-2 print:pb-1">
          <div className="flex justify-between items-start text-xs text-gray-600 print:text-xs">
            <div className="text-left">
              <div className="font-bold">RÉPUBLIQUE DU CAMEROUN</div>
              <div className="text-[10px]">Paix-Travail-Patrie</div>
              <div>Ministère de l'Éducation de base</div>
              <div>Délégation Régionale du Centre</div>
              <div>Délégation Départementale du Mfoundi</div>
            </div>

            <div className="text-center flex-1 mx-2">
              <div className="font-extrabold text-sm print:text-xs">GROUPE SCOLAIRE BILINGUE LA GRÂCE DE DIEU</div>
              <div className="text-[15px] font-bold print:text-sm">BULLETIN SCOLAIRE</div>
            </div>

            <div className="text-right">
              <div className="font-bold">REPUBLIC OF CAMEROON</div>
              <div className="text-[10px]">Peace-Work-Fatherland</div>
              <div>Ministry of Basic Education</div>
              <div>Centre Regional Delegation</div>
              <div>Divisional Delegation of Mfoundi Division</div>
            </div>
          </div>
        </div>

        {/* Informations de l'élève */}
        <div className="grid grid-cols-2 gap-3 mb-3 text-[11px] border-b border-gray-300 pb-2">
          <div><strong>Nom:</strong> {meta.nomEleve || "................................."}</div>
          <div><strong>N° Matricule:</strong> {meta.matricule || "................................."}</div>
          <div><strong>Sexe:</strong> {meta.sexe || "................................."}</div>
          <div><strong>Classe:</strong> {meta.classe || "................................."}</div>
          <div><strong>Trimestre:</strong> {meta.trimestre || "................................."}</div>
          <div><strong>Enseignant:</strong> {meta.enseignant || "................................."}</div>
        </div>

        {/* Tableau principal */}
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-[10px] border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200 text-center">
                <th className="border border-gray-400 p-3 w-[30%]">DOMAINES</th>
                <th className="border border-gray-400 p-3 w-[25%]">ACTIVITÉS</th>
                <th className="border border-gray-400 p-3 w-[11.25%]">{entetesPeriodes.h1}</th>
                <th className="border border-gray-400 p-3 w-[11.25%]">{entetesPeriodes.h2}</th>
                <th className="border border-gray-400 p-3 w-[11.25%]">{entetesPeriodes.h3}</th>
                <th className="border border-gray-400 p-3 w-[11.25%]">EXPRESSION DOMAINE</th>
              </tr>
            </thead>
            <tbody>
              {DOMAINES_TEMPLATE.map((domaine, index) => {
                const state = donnees[domaine.key];
                return (
                  <tr key={domaine.key} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="border border-gray-400 p-3 font-medium align-top text-[11px] leading-tight">
                      {domaine.title}
                    </td>
                    <td className="border border-gray-400 p-3 align-top text-[10px] leading-snug">
                      {domaine.activities}
                    </td>
                    <td className="border border-gray-400 text-center p-3">
                      <span className={getEvaluationColor(state.periode1)}>{state.periode1 || "-"}</span>
                    </td>
                    <td className="border border-gray-400 text-center p-3">
                      <span className={getEvaluationColor(state.periode2)}>{state.periode2 || "-"}</span>
                    </td>
                    <td className="border border-gray-400 text-center p-3">
                      <span className={getEvaluationColor(state.periode3)}>{state.periode3 || "-"}</span>
                    </td>
                    <td className="border border-gray-400 text-center p-3">
                      <span className={getEvaluationColor(state.expression)}>{state.expression || "-"}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Section inférieure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Légende */}
          <div className="border border-gray-300 rounded p-3 text-[10px]">
            <div className="font-semibold text-center mb-2">Légende des Appréciations</div>
            <div className="space-y-1">
              <div><strong>Acquis</strong> — L'élève maîtrise la compétence</div>
              <div><strong>Non Acquis</strong> — L'élève ne maîtrise pas encore la compétence</div>
              <div><strong>Expert</strong> — L'élève maîtrise parfaitement la compétence</div>
            </div>
          </div>

          {/* Résumé */}
          <div className="border-2 border-gray-400 rounded p-3 text-[10px]">
            <div className="font-bold text-center mb-2">Résumé du Travail</div>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <div className="text-gray-600">Appréciation</div>
                  <div className="font-semibold border-b border-gray-300 py-2 min-h-8 flex items-center justify-center">
                    {resume.appreciation || "-"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-gray-600">Rang</div>
                  <div className="font-semibold border-b border-gray-300 py-2 min-h-8 flex items-center justify-center">
                    {resume.rang || "-"}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-gray-600">Décision</div>
                <div className="font-semibold border-b border-gray-300 py-2 min-h-8 flex items-center justify-center">
                  {resume.decision || "-"}
                </div>
              </div>

              {/* Signatures AGGRANDIES */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { label: "Visa de l'enseignant", key: "enseignant" },
                  { label: "Visa Chef d'établissement", key: "chef" },
                  { label: "Visa du parent", key: "parent" }
                ].map((item, i) => (
                  <div className="text-center" key={i}>
                    <div className="text-gray-600 text-[9px] mb-2 font-medium">{item.label}</div>
                    <div className="border-2 border-gray-400 rounded h-20 flex items-center justify-center bg-gray-50">
                      <span className="text-gray-500 text-[8px]">Signature et cachet</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pied de page */}
        <div className="text-center text-[10px] mt-1 bg-blue-50 border border-blue-200 rounded p-2">
          <div className="font-bold text-blue-800">GROUPE SCOLAIRE BILINGUE LA GRACE DE DIEU</div>
          <div>Téléphone: +237 696 308 503 | Siège Social: Yaoundé - Nkolbisson (Quartier Mbouda)</div>
        </div>
      </div>

      {/* Boutons d'action */}
      <div className="w-full max-w-6xl mt-4 print:hidden">
        <div className="flex justify-between gap-2">
          <button
            onClick={handleBackToEdit}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm"
          >
            ← Retour à l'édition
          </button>

          <div className="flex gap-2">
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
            >
              📥 Télécharger
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
            >
              🖨️ Imprimer
            </button>
            <button
              onClick={handleFinalSubmit}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm"
            >
              ✅ Finaliser
            </button>
          </div>
        </div>
      </div>

      {/* CSS impression */}
      <style jsx>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 0.5cm;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            font-size: 9px;
          }
          th, td {
            padding: 6px 8px !important;
          }
          .border-gray-400 { border-color: #9ca3af !important; }
          .bg-gray-200 { background-color: #f3f4f6 !important; }
          .bg-gray-50 { background-color: #fafafa !important; }
        }
      `}</style>
    </div>
  );
};

export default PreviewMaternelle;


















































