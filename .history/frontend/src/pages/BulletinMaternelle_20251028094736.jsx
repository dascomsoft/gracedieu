// // BulletinMaternelle.js
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const PERIODE_OPTIONS = [
//     "Mois-1", "Mois-2", "Mois-3", "Mois-4", "Mois-5", "Mois-6", "Mois-7",
//     "Trimestre-1", "Trimestre-2", "Trimestre-3"
// ];

// const APPRECIATIONS = ["Acquis", "Non Acquis", "Expert"];
// const DECISIONS = ["Admis", "Echoue"];
// const CLASS_OPTIONS = ["Petite Section", "Moyenne Section", "Grande Section"];

// const DOMAINES_TEMPLATE = [
//     {
//         key: "art",
//         title: "CREATION ARTISTIQUE ET ACTIVITES MANUELLES",
//         activities: "Activités manuelles Colorisée Desai Peinture"
//     },
//     {
//         key: "sciences",
//         title: "EVEIL SCIENTIFIQUE ET TECHNOLOGIQUE",
//         activities: "Education sensorielle et perceptive Initiation aux mathématiques Sciences et technologies Technologies de l'information et de la communication"
//     },
//     {
//         key: "langues",
//         title: "LANGUES ET COMMUNICATIONS",
//         activities: "Anglais Copie Graphisme Langage Langue nationale Lecture et écriture Poésie et compline Vocabulaire"
//     },
//     {
//         key: "motricite",
//         title: "MOTRICITE GENERALE",
//         activities: "Athlétisme Gymnastique"
//     },
//     {
//         key: "vie",
//         title: "VIE COURANTE",
//         activities: "Education à la santé et à l'environnement Education à la santé et à la nutrition Education à la sécurité Education civique et morale"
//     }
// ];

// export default function BulletinMaternelle() {
//     const navigate = useNavigate();

//     // Fonction pour charger les données sauvegardées
//     const loadSavedData = () => {
//         try {
//             const saved = localStorage.getItem('bulletinMaternelleData');
//             if (saved) {
//                 return JSON.parse(saved);
//             }
//         } catch (error) {
//             console.error('Erreur lors du chargement des données:', error);
//         }
//         return null;
//     };

//     // Fonction pour sauvegarder les données
//     const saveData = (data) => {
//         try {
//             localStorage.setItem('bulletinMaternelleData', JSON.stringify(data));
//         } catch (error) {
//             console.error('Erreur lors de la sauvegarde des données:', error);
//         }
//     };

//     // Fonction pour effacer les données sauvegardées
//     const clearSavedData = () => {
//         try {
//             localStorage.removeItem('bulletinMaternelleData');
//         } catch (error) {
//             console.error('Erreur lors de la suppression des données:', error);
//         }
//     };

//     // Charger les données sauvegardées au montage du composant
//     const savedData = loadSavedData();

//     const [entetesPeriodes, setEntetesPeriodes] = useState(
//         savedData?.entetesPeriodes || { 
//             h1: PERIODE_OPTIONS[0], 
//             h2: PERIODE_OPTIONS[1], 
//             h3: PERIODE_OPTIONS[2] 
//         }
//     );

//     const [meta, setMeta] = useState(savedData?.meta || {
//         nomEleve: "",
//         sexe: "",
//         classe: "",
//         anneeScolaire: "",
//         enseignant: ""
//     });

//     const [donnees, setDonnees] = useState(() => {
//         if (savedData?.donnees) {
//             return savedData.donnees;
//         } else {
//             const racine = {};
//             DOMAINES_TEMPLATE.forEach(domaine => {
//                 racine[domaine.key] = { 
//                     periode1: "", 
//                     periode2: "", 
//                     periode3: "", 
//                     expression: "" 
//                 };
//             });
//             return racine;
//         }
//     });

//     const [resume, setResume] = useState(savedData?.resume || {
//         appreciation: "",
//         rang: "",
//         decision: ""
//     });

//     // Sauvegarder les données à chaque changement
//     useEffect(() => {
//         const formData = {
//             entetesPeriodes,
//             meta,
//             donnees,
//             resume
//         };
//         saveData(formData);
//     }, [entetesPeriodes, meta, donnees, resume]);

//     const changerEntete = (k, v) => setEntetesPeriodes(p => ({ ...p, [k]: v }));
//     const changerMeta = (k, v) => setMeta(m => ({ ...m, [k]: v }));

//     const changerEvaluation = (cleDomaine, periode, valeur) => {
//         setDonnees(prev => ({
//             ...prev,
//             [cleDomaine]: {
//                 ...prev[cleDomaine],
//                 [periode]: valeur
//             }
//         }));
//     };

//     const changerExpression = (cleDomaine, valeur) => {
//         setDonnees(prev => ({
//             ...prev,
//             [cleDomaine]: {
//                 ...prev[cleDomaine],
//                 expression: valeur
//             }
//         }));
//     };

//     const changerResume = (k, v) => setResume(s => ({ ...s, [k]: v }));

//     const handleApercu = () => {
//         const payload = { 
//             meta, 
//             entetesPeriodes, 
//             donnees, 
//             resume
//         };
//         saveData(payload);
//         navigate("/preview-maternelle", { state: payload });
//     };

//     const handleReinitialiser = () => {
//         if (confirm("Êtes-vous sûr de vouloir réinitialiser le formulaire ? Toutes les données seront perdues.")) {
//             clearSavedData();
//             window.location.reload();
//         }
//     };

//     // Générer les options d'année scolaire
//     const anneesScolaires = Array.from({ length: 27 }, (_, i) => 2024 + i).map(y => `${y}-${y + 1}`);

//     return (
//         <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
//             {/* En-tête */}
//             <div className="w-full max-w-6xl mb-4">
//                 <div className="flex justify-between items-start text-xs text-gray-600">
//                     <div className="">
//                         <div className="font-extrabold">RÉPUBLIQUE DU CAMEROUN</div>
//                         <div className="text-[9px] text-center">Paix-Travail-Patrie</div>
//                         <div>Ministère de l'Éducation de base</div>
//                         <div>Délégation Régionale du Centre</div>
//                         <div>Délégation Départementale du Mourad</div>
//                     </div>
//                     <div className="text-center">
//                         <div className="font-bold text-sm">GROUPE SCOLAIRE BILINGUE LA GRACE DE DIEU</div>
//                         <div className="text-[15px] font-bold">Bulletin de notes annuel</div>
//                     </div>
//                     <div className="text-center">
//                         <div className="font-extrabold">REPUBLIC OF CAMEROON</div>
//                         <div className="text-[9px]">Peace-Work-Fatherland</div>
//                         <div>Ministry of Basic Education</div>
//                         <div>Centre Regional Delegation</div>
//                     </div>
//                 </div>
//             </div>

//             {/* Conteneur du formulaire */}
//             <div className="bg-white w-full max-w-6xl rounded-xl shadow-lg p-6">
//                 {/* Champs d'information - Identique à BulletinForm */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
//                     <input 
//                         className="border px-3 py-2 rounded" 
//                         placeholder="Nom complet" 
//                         value={meta.nomEleve} 
//                         onChange={(e) => changerMeta("nomEleve", e.target.value)} 
//                     />
//                     <select 
//                         className="border px-3 py-2 rounded" 
//                         value={meta.sexe} 
//                         onChange={e => changerMeta("sexe", e.target.value)}
//                     >
//                         <option value="">Sexe</option>
//                         <option>Masculin</option>
//                         <option>Féminin</option>
//                     </select>
//                     <select 
//                         className="border px-3 py-2 rounded" 
//                         value={meta.classe} 
//                         onChange={e => changerMeta("classe", e.target.value)}
//                     >
//                         <option value="">Classe</option>
//                         {CLASS_OPTIONS.map(classe => (
//                             <option key={classe} value={classe}>{classe}</option>
//                         ))}
//                     </select>


//                     <select 
//                         className="border px-3 py-2 rounded" 
//                         value={meta.anneeScolaire} 
//                         onChange={e => changerMeta("anneeScolaire", e.target.value)}
//                     >
//                         <option value="">Année Scolaire</option>
//                         {anneesScolaires.map(annee => (
//                             <option key={annee} value={annee}>{annee}</option>
//                         ))}
//                     </select>

//                     <input 
//                         className="border px-3 py-2 rounded md:col-span-2" 
//                         placeholder="Enseignant" 
//                         value={meta.enseignant} 
//                         onChange={e => changerMeta("enseignant", e.target.value)} 
//                     />
//                 </div>

//                 {/* Début du tableau */}
//                 <div className="overflow-x-auto">
//                     <table className="w-full text-xs border-collapse">
//                         <thead>
//                             <tr className="bg-gray-100">
//                                 <th className="border p-2 w-48">Domaines</th>
//                                 <th className="border p-2 w-96">Activités</th>
//                                 <th className="border p-2 text-center w-24">
//                                     <select className="text-xs" value={entetesPeriodes.h1} onChange={(e) => changerEntete("h1", e.target.value)}>
//                                         {PERIODE_OPTIONS.map(m => <option key={m}>{m}</option>)}
//                                     </select>
//                                 </th>
//                                 <th className="border p-2 text-center w-24">
//                                     <select className="text-xs" value={entetesPeriodes.h2} onChange={(e) => changerEntete("h2", e.target.value)}>
//                                         {PERIODE_OPTIONS.map(m => <option key={m}>{m}</option>)}
//                                     </select>
//                                 </th>
//                                 <th className="border p-2 text-center w-24">
//                                     <select className="text-xs" value={entetesPeriodes.h3} onChange={(e) => changerEntete("h3", e.target.value)}>
//                                         {PERIODE_OPTIONS.map(m => <option key={m}>{m}</option>)}
//                                     </select>
//                                 </th>
//                                 <th className="border p-2 text-center w-32">Expression Domaine</th>
//                             </tr>
//                         </thead>

//                         <tbody>
//                             {DOMAINES_TEMPLATE.map(domaine => {
//                                 const state = donnees[domaine.key];
//                                 return (
//                                     <tr key={domaine.key} className="bg-white">
//                                         <td className="border p-2 font-semibold">
//                                             <div className="text-sm">{domaine.title}</div>
//                                         </td>
//                                         <td className="border p-2">
//                                             <div className="text-xs text-gray-600">{domaine.activities}</div>
//                                         </td>

//                                         {/* Évaluations pour chaque période */}
//                                         <td className="border p-1 text-center">
//                                             <select 
//                                                 className="w-full text-xs p-1" 
//                                                 value={state.periode1 || ""} 
//                                                 onChange={(e) => changerEvaluation(domaine.key, "periode1", e.target.value)}
//                                             >
//                                                 <option value="">-</option>
//                                                 {APPRECIATIONS.map(a => <option key={a} value={a}>{a}</option>)}
//                                             </select>
//                                         </td>

//                                         <td className="border p-1 text-center">
//                                             <select 
//                                                 className="w-full text-xs p-1" 
//                                                 value={state.periode2 || ""} 
//                                                 onChange={(e) => changerEvaluation(domaine.key, "periode2", e.target.value)}
//                                             >
//                                                 <option value="">-</option>
//                                                 {APPRECIATIONS.map(a => <option key={a} value={a}>{a}</option>)}
//                                             </select>
//                                         </td>

//                                         <td className="border p-1 text-center">
//                                             <select 
//                                                 className="w-full text-xs p-1" 
//                                                 value={state.periode3 || ""} 
//                                                 onChange={(e) => changerEvaluation(domaine.key, "periode3", e.target.value)}
//                                             >
//                                                 <option value="">-</option>
//                                                 {APPRECIATIONS.map(a => <option key={a} value={a}>{a}</option>)}
//                                             </select>
//                                         </td>

//                                         <td className="border p-1 text-center">
//                                             <select 
//                                                 className="w-full text-xs p-1" 
//                                                 value={state.expression || ""} 
//                                                 onChange={(e) => changerExpression(domaine.key, e.target.value)}
//                                             >
//                                                 <option value="">-</option>
//                                                 {APPRECIATIONS.map(a => <option key={a} value={a}>{a}</option>)}
//                                             </select>
//                                         </td>
//                                     </tr>
//                                 );
//                             })}
//                         </tbody>
//                     </table>
//                 </div>

//                 {/* Légende des Appréciations */}
//                 <div className="mt-6 border rounded p-4 text-xs">
//                     <div className="font-semibold mb-2">Légende des Appréciations</div>
//                     <ul className="list-disc ml-5">
//                         <li><strong>Acquis</strong> — L'élève maîtrise la compétence</li>
//                         <li><strong>Non Acquis</strong> — L'élève ne maîtrise pas encore la compétence</li>
//                         <li><strong>Expert</strong> — L'élève maîtrise parfaitement la compétence</li>
//                     </ul>
//                 </div>

//                 {/* Résumé du Travail */}
//                 <div className="mt-6 border-2 border-gray-300 rounded-lg p-4 bg-white shadow-sm">
//                     <div className="font-bold text-base mb-3 text-center text-gray-800">Résumé du Travail</div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                         <div>
//                             <div className="text-xs font-medium mb-1">Appréciation</div>
//                             <select 
//                                 className="w-full border border-gray-300 px-2 py-1 rounded text-sm"
//                                 value={resume.appreciation}
//                                 onChange={(e) => changerResume("appreciation", e.target.value)}
//                             >
//                                 <option value="">- Sélectionner -</option>
//                                 {APPRECIATIONS.map(a => <option key={a} value={a}>{a}</option>)}
//                             </select>
//                         </div>

//                         <div>
//                             <div className="text-xs font-medium mb-1">Rang</div>
//                             <input 
//                                 className="w-full border border-gray-300 px-2 py-1 rounded text-sm"
//                                 value={resume.rang}
//                                 onChange={(e) => changerResume("rang", e.target.value)}
//                                 placeholder="Ex: 5ème"
//                             />
//                         </div>

//                         <div>
//                             <div className="text-xs font-medium mb-1">Décision</div>
//                             <select 
//                                 className="w-full border border-gray-300 px-2 py-1 rounded text-sm"
//                                 value={resume.decision}
//                                 onChange={(e) => changerResume("decision", e.target.value)}
//                             >
//                                 <option value="">- Sélectionner -</option>
//                                 {DECISIONS.map(d => <option key={d} value={d}>{d}</option>)}
//                             </select>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Section des Visas */}
//                 <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div className="border-2 border-gray-300 rounded-lg p-4 bg-white shadow-sm">
//                         <div className="font-bold text-base mb-3 text-center text-gray-800">Visa de l'Enseignant</div>
//                     </div>

//                     <div className="border-2 border-gray-300 rounded-lg p-4 bg-white shadow-sm">
//                         <div className="font-bold text-base mb-3 text-center text-gray-800">Visa Chef d'établissement</div>
//                     </div>

//                     <div className="border-2 border-gray-300 rounded-lg p-4 bg-white shadow-sm">
//                         <div className="font-bold text-base mb-3 text-center text-gray-800">Visa du Parent</div>
//                     </div>
//                 </div>

//                 {/* Information de Contact */}
//                 <div className="mt-6 text-center text-sm bg-blue-50 border border-blue-200 rounded-lg p-4">
//                     <div className="font-bold text-blue-800 mb-2">GROUPE SCOLAIRE BILINGUE LA GRACE DE DIEU</div>
//                     <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
//                         <div><strong>Téléphone:</strong> +237 696 308 503</div>
//                         <div><strong>Siège Social:</strong> Yaoundé - Nkolbisson (Quartier Mbouda)</div>
//                     </div>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mt-6 w-full">
//                     <button
//                         onClick={() => navigate(-1)}
//                         className="px-4 py-2 border rounded text-sm w-full sm:w-auto hover:bg-gray-100 transition"
//                     >
//                         Retour
//                     </button>

//                     <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
//                         <button
//                             onClick={handleReinitialiser}
//                             className="px-4 py-2 border rounded text-sm hover:bg-gray-100 transition w-full sm:w-auto"
//                         >
//                             Réinitialiser
//                         </button>
//                         <button
//                             onClick={handleApercu}
//                             className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition w-full sm:w-auto"
//                         >
//                             Aperçu & Impression
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


















































// BulletinMaternelle.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PERIODE_OPTIONS = [
    "Mois-1", "Mois-2", "Mois-3", "Mois-4", "Mois-5", "Mois-6", "Mois-7",
    "Trimestre-1", "Trimestre-2", "Trimestre-3"
];

const TRIMESTRE_OPTIONS = ["Trimestre-1", "Trimestre-2", "Trimestre-3"];
const APPRECIATIONS = ["Acquis", "Non Acquis", "Expert"];
const DECISIONS = ["Admis", "Echoue"];
const CLASS_OPTIONS = ["Petite Section", "Moyenne Section", "Grande Section"];

const DOMAINES_TEMPLATE = [
    {
        key: "art",
        title: "CREATION ARTISTIQUE ET ACTIVITES MANUELLES",
        activities: "Activités manuelles Colorisée Desai Peinture"
    },
    {
        key: "sciences",
        title: "EVEIL SCIENTIFIQUE ET TECHNOLOGIQUE",
        activities: "Education sensorielle et perceptive Initiation aux mathématiques Sciences et technologies Technologies de l'information et de la communication"
    },
    {
        key: "langues",
        title: "LANGUES ET COMMUNICATIONS",
        activities: "Anglais Copie Graphisme Langage Langue nationale Lecture et écriture Poésie et compline Vocabulaire"
    },
    {
        key: "motricite",
        title: "MOTRICITE GENERALE",
        activities: "Athlétisme Gymnastique"
    },
    {
        key: "vie",
        title: "VIE COURANTE",
        activities: "Education à la santé et à l'environnement Education à la santé et à la nutrition Education à la sécurité Education civique et morale"
    }
];

export default function BulletinMaternelle() {
    const navigate = useNavigate();

    // Fonction pour charger les données sauvegardées
    const loadSavedData = () => {
        try {
            const saved = localStorage.getItem('bulletinMaternelleData');
            if (saved) {
                return JSON.parse(saved);
            }
        } catch (error) {
            console.error('Erreur lors du chargement des données:', error);
        }
        return null;
    };

    // Fonction pour sauvegarder les données
    const saveData = (data) => {
        try {
            localStorage.setItem('bulletinMaternelleData', JSON.stringify(data));
        } catch (error) {
            console.error('Erreur lors de la sauvegarde des données:', error);
        }
    };

    // Fonction pour effacer les données sauvegardées
    const clearSavedData = () => {
        try {
            localStorage.removeItem('bulletinMaternelleData');
        } catch (error) {
            console.error('Erreur lors de la suppression des données:', error);
        }
    };

    // Charger les données sauvegardées au montage du composant
    const savedData = loadSavedData();

    const [entetesPeriodes, setEntetesPeriodes] = useState(
        savedData?.entetesPeriodes || {
            h1: PERIODE_OPTIONS[0],
            h2: PERIODE_OPTIONS[1],
            h3: PERIODE_OPTIONS[2]
        }
    );

    const [meta, setMeta] = useState(savedData?.meta || {
        nomEleve: "",
        matricule: "",
        sexe: "",
        classe: "",
        trimestre: "",
        anneeScolaire: "",
        enseignant: ""
    });

    const [donnees, setDonnees] = useState(() => {
        if (savedData?.donnees) {
            return savedData.donnees;
        } else {
            const racine = {};
            DOMAINES_TEMPLATE.forEach(domaine => {
                racine[domaine.key] = {
                    periode1: "",
                    periode2: "",
                    periode3: "",
                    expression: ""
                };
            });
            return racine;
        }
    });

    const [resume, setResume] = useState(savedData?.resume || {
        appreciation: "",
        rang: "",
        decision: ""
    });

    // Sauvegarder les données à chaque changement
    useEffect(() => {
        const formData = {
            entetesPeriodes,
            meta,
            donnees,
            resume
        };
        saveData(formData);
    }, [entetesPeriodes, meta, donnees, resume]);

    const changerEntete = (k, v) => setEntetesPeriodes(p => ({ ...p, [k]: v }));
    const changerMeta = (k, v) => setMeta(m => ({ ...m, [k]: v }));

    const changerEvaluation = (cleDomaine, periode, valeur) => {
        setDonnees(prev => ({
            ...prev,
            [cleDomaine]: {
                ...prev[cleDomaine],
                [periode]: valeur
            }
        }));
    };

    const changerExpression = (cleDomaine, valeur) => {
        setDonnees(prev => ({
            ...prev,
            [cleDomaine]: {
                ...prev[cleDomaine],
                expression: valeur
            }
        }));
    };

    const changerResume = (k, v) => setResume(s => ({ ...s, [k]: v }));

    const handleApercu = () => {
        const payload = {
            meta,
            entetesPeriodes,
            donnees,
            resume
        };
        saveData(payload);
        navigate("/preview-maternelle", { state: payload });
    };

    const handleReinitialiser = () => {
        if (confirm("Êtes-vous sûr de vouloir réinitialiser le formulaire ? Toutes les données seront perdues.")) {
            clearSavedData();
            window.location.reload();
        }
    };

    // Générer les options d'année scolaire
    const anneesScolaires = Array.from({ length: 27 }, (_, i) => 2024 + i).map(y => `${y}-${y + 1}`);

    return (
        <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
            {/* En-tête */}
            <div className="w-full mb-2 print:mb-1 border-b border-gray-300 pb-2 print:pb-1">
                <div className="flex flex-col items-center text-gray-600 text-xs print:text-xs md:flex-row md:justify-between md:items-start
 "
                >
                    {/* Bloc gauche */}
                    <div className="text-left mb-2 md:mb-0 md:w-1/3">
                        <div className="font-bold text-[11px] sm:text-xs md:text-sm">RÉPUBLIQUE DU CAMEROUN</div>
                        <div className="text-[9px] sm:text-[10px] md:text-xs">Paix-Travail-Patrie</div>
                        <div className="text-[10px] sm:text-xs md:text-sm">Ministère de l'Éducation de base</div>
                        <div className="text-[10px] sm:text-xs md:text-sm">Délégation Régionale du Centre</div>
                        <div className="text-[10px] sm:text-xs md:text-sm">Délégation Départementale du Mfoundi</div>
                    </div>

                    {/* Bloc centre */}
                    <div className="text-center md:flex-1 md:mx-2">
                        <div className="font-extrabold text-sm sm:text-base md:text-lg print:text-xs">
                            GROUPE SCOLAIRE BILINGUE LA GRÂCE DE DIEU
                        </div>
                        <div className="text-[13px] sm:text-[16px] md:text-xl font-bold print:text-sm">
                            BULLETIN SCOLAIRE
                        </div>
                    </div>

                    {/* Bloc droite */}
                    <div className="text-right mt-2 md:mt-0 md:w-1/3">
                        <div className="font-bold text-[11px] sm:text-xs md:text-sm">REPUBLIC OF CAMEROON</div>
                        <div className="text-[9px] sm:text-[10px] md:text-xs">Peace-Work-Fatherland</div>
                        <div className="text-[10px] sm:text-xs md:text-sm">Ministry of Basic Education</div>
                        <div className="text-[10px] sm:text-xs md:text-sm">Centre Regional Delegation</div>
                        <div className="text-[10px] sm:text-xs md:text-sm">Divisional Delegation of Mfoundi Division</div>
                    </div>
                </div>
            </div>



            {/* Conteneur du formulaire */}
            <div className="bg-white w-full max-w-6xl rounded-xl shadow-lg p-6">
                {/* Champs d'information - Identique à BulletinForm */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    <input
                        className="border px-3 py-2 rounded"
                        placeholder="Nom complet"
                        value={meta.nomEleve}
                        onChange={(e) => changerMeta("nomEleve", e.target.value)}
                    />
                    <input
                        className="border px-3 py-2 rounded"
                        placeholder="Numéro Matricule"
                        value={meta.matricule}
                        onChange={(e) => changerMeta("matricule", e.target.value)}
                    />
                    <select
                        className="border px-3 py-2 rounded"
                        value={meta.sexe}
                        onChange={e => changerMeta("sexe", e.target.value)}
                    >
                        <option value="">Sexe</option>
                        <option>Masculin</option>
                        <option>Féminin</option>
                    </select>

                    <select
                        className="border px-3 py-2 rounded"
                        value={meta.classe}
                        onChange={e => changerMeta("classe", e.target.value)}
                    >
                        <option value="">Classe</option>
                        {CLASS_OPTIONS.map(classe => (
                            <option key={classe} value={classe}>{classe}</option>
                        ))}
                    </select>

                    <select
                        className="border px-3 py-2 rounded"
                        value={meta.trimestre}
                        onChange={e => changerMeta("trimestre", e.target.value)}
                    >
                        <option value="">Trimestre</option>
                        {TRIMESTRE_OPTIONS.map(trimestre => (
                            <option key={trimestre} value={trimestre}>{trimestre}</option>
                        ))}
                    </select>

                    <select
                        className="border px-3 py-2 rounded"
                        value={meta.anneeScolaire}
                        onChange={e => changerMeta("anneeScolaire", e.target.value)}
                    >
                        <option value="">Année Scolaire</option>
                        {anneesScolaires.map(annee => (
                            <option key={annee} value={annee}>{annee}</option>
                        ))}
                    </select>

                    <input
                        className="border px-3 py-2 rounded md:col-span-3"
                        placeholder="Enseignant"
                        value={meta.enseignant}
                        onChange={e => changerMeta("enseignant", e.target.value)}
                    />
                </div>

                {/* Début du tableau */}
                <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-2 w-48">Domaines</th>
                                <th className="border p-2 w-96">Activités</th>
                                <th className="border p-2 text-center w-24">
                                    <select className="text-xs" value={entetesPeriodes.h1} onChange={(e) => changerEntete("h1", e.target.value)}>
                                        {PERIODE_OPTIONS.map(m => <option key={m}>{m}</option>)}
                                    </select>
                                </th>
                                <th className="border p-2 text-center w-24">
                                    <select className="text-xs" value={entetesPeriodes.h2} onChange={(e) => changerEntete("h2", e.target.value)}>
                                        {PERIODE_OPTIONS.map(m => <option key={m}>{m}</option>)}
                                    </select>
                                </th>
                                <th className="border p-2 text-center w-24">
                                    <select className="text-xs" value={entetesPeriodes.h3} onChange={(e) => changerEntete("h3", e.target.value)}>
                                        {PERIODE_OPTIONS.map(m => <option key={m}>{m}</option>)}
                                    </select>
                                </th>
                                <th className="border p-2 text-center w-32">Expression Domaine</th>
                            </tr>
                        </thead>

                        <tbody>
                            {DOMAINES_TEMPLATE.map(domaine => {
                                const state = donnees[domaine.key];
                                return (
                                    <tr key={domaine.key} className="bg-white">
                                        <td className="border p-2 font-semibold">
                                            <div className="text-sm">{domaine.title}</div>
                                        </td>
                                        <td className="border p-2">
                                            <div className="text-xs text-gray-600">{domaine.activities}</div>
                                        </td>

                                        {/* Évaluations pour chaque période */}
                                        <td className="border p-1 text-center">
                                            <select
                                                className="w-full text-xs p-1"
                                                value={state.periode1 || ""}
                                                onChange={(e) => changerEvaluation(domaine.key, "periode1", e.target.value)}
                                            >
                                                <option value="">-</option>
                                                {APPRECIATIONS.map(a => <option key={a} value={a}>{a}</option>)}
                                            </select>
                                        </td>

                                        <td className="border p-1 text-center">
                                            <select
                                                className="w-full text-xs p-1"
                                                value={state.periode2 || ""}
                                                onChange={(e) => changerEvaluation(domaine.key, "periode2", e.target.value)}
                                            >
                                                <option value="">-</option>
                                                {APPRECIATIONS.map(a => <option key={a} value={a}>{a}</option>)}
                                            </select>
                                        </td>

                                        <td className="border p-1 text-center">
                                            <select
                                                className="w-full text-xs p-1"
                                                value={state.periode3 || ""}
                                                onChange={(e) => changerEvaluation(domaine.key, "periode3", e.target.value)}
                                            >
                                                <option value="">-</option>
                                                {APPRECIATIONS.map(a => <option key={a} value={a}>{a}</option>)}
                                            </select>
                                        </td>

                                        <td className="border p-1 text-center">
                                            <select
                                                className="w-full text-xs p-1"
                                                value={state.expression || ""}
                                                onChange={(e) => changerExpression(domaine.key, e.target.value)}
                                            >
                                                <option value="">-</option>
                                                {APPRECIATIONS.map(a => <option key={a} value={a}>{a}</option>)}
                                            </select>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Légende des Appréciations */}
                <div className="mt-6 border rounded p-4 text-xs">
                    <div className="font-semibold mb-2">Légende des Appréciations</div>
                    <ul className="list-disc ml-5">
                        <li><strong>Acquis</strong> — L'élève maîtrise la compétence</li>
                        <li><strong>Non Acquis</strong> — L'élève ne maîtrise pas encore la compétence</li>
                        <li><strong>Expert</strong> — L'élève maîtrise parfaitement la compétence</li>
                    </ul>
                </div>

                {/* Résumé du Travail */}
                <div className="mt-6 border-2 border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                    <div className="font-bold text-base mb-3 text-center text-gray-800">Résumé du Travail</div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <div className="text-xs font-medium mb-1">Appréciation</div>
                            <select
                                className="w-full border border-gray-300 px-2 py-1 rounded text-sm"
                                value={resume.appreciation}
                                onChange={(e) => changerResume("appreciation", e.target.value)}
                            >
                                <option value="">- Sélectionner -</option>
                                {APPRECIATIONS.map(a => <option key={a} value={a}>{a}</option>)}
                            </select>
                        </div>

                        <div>
                            <div className="text-xs font-medium mb-1">Rang</div>
                            <input
                                className="w-full border border-gray-300 px-2 py-1 rounded text-sm"
                                value={resume.rang}
                                onChange={(e) => changerResume("rang", e.target.value)}
                                placeholder="Ex: 5ème"
                            />
                        </div>

                        <div>
                            <div className="text-xs font-medium mb-1">Décision</div>
                            <select
                                className="w-full border border-gray-300 px-2 py-1 rounded text-sm"
                                value={resume.decision}
                                onChange={(e) => changerResume("decision", e.target.value)}
                            >
                                <option value="">- Sélectionner -</option>
                                {DECISIONS.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Section des Visas */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border-2 border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                        <div className="font-bold text-base mb-3 text-center text-gray-800">Visa de l'Enseignant</div>
                    </div>

                    <div className="border-2 border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                        <div className="font-bold text-base mb-3 text-center text-gray-800">Visa Chef d'établissement</div>
                    </div>

                    <div className="border-2 border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                        <div className="font-bold text-base mb-3 text-center text-gray-800">Visa du Parent</div>
                    </div>
                </div>

                {/* Information de Contact */}
                <div className="mt-6 text-center text-sm bg-blue-50 border border-blue-200 rounded-lg p-4">
                    {/* <div className="font-bold text-blue-800 mb-2">GROUPE SCOLAIRE BILINGUE LA GRACE DE DIEU</div> */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        {/* <div><strong>Téléphone:</strong> +237 696 308 503</div> */}
                        {/* <div><strong>Siège Social:</strong> Yaoundé - Nkolbisson (Quartier Mbouda)</div> */}
                        <div>Téléphone: +237 696 308 503 | Siège Social: Yaoundé - Nkolbisson (Quartier Mbouda)</div>

                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mt-6 w-full">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-4 py-2 border rounded text-sm w-full sm:w-auto hover:bg-gray-100 transition"
                    >
                        Retour
                    </button>

                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <button
                            onClick={handleReinitialiser}
                            className="px-4 py-2 border rounded text-sm hover:bg-gray-100 transition w-full sm:w-auto"
                        >
                            Réinitialiser
                        </button>
                        <button
                            onClick={handleApercu}
                            className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition w-full sm:w-auto"
                        >
                            Aperçu & Impression
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
























