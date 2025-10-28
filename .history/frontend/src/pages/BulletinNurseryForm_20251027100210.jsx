// BulletinMaternelle.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PERIODE_OPTIONS = [
    "Mois-1", "Mois-2", "Mois-3", "Mois-4", "Mois-5", "Mois-6", "Mois-7",
    "Trimestre-1", "Trimestre-2", "Trimestre-3"
];

const APPRECIATIONS = ["Acquis", "Non Acquis", "Expert"];
const DECISIONS = ["Admis", "Echoue"];
const CLASS_OPTIONS = ["Petite Section", "Moyenne Section", "Grande Section"];
const SEX_OPTIONS = ["Masculin", "Féminin"];

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
        nomEleve: "OLAMA TOURE TONNYO MANEL",
        matricule: "",
        sexe: "Masculin",
        classe: "Moyenne Section",
        anneeScolaire: "2022/2023"
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

    const handlePreview = () => {
        const payload = { 
            meta, 
            entetesPeriodes, 
            donnees, 
            resume
        };
        saveData(payload);
        navigate("/preview-maternelle", { state: payload });
    };

    const handleReset = () => {
        if (confirm("Êtes-vous sûr de vouloir réinitialiser le formulaire ? Toutes les données seront perdues.")) {
            clearSavedData();
            window.location.reload();
        }
    };

    // Générer les options d'année scolaire
    const anneesScolaires = Array.from({ length: 27 }, (_, i) => 2024 + i).map(y => `${y}-${y + 1}`);

    return (
        <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
            {/* Header - Identique à BulletinNurseryForm mais en français */}
            <div className="w-full max-w-6xl mb-4 px-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start text-xs text-gray-600 text-center md:text-left space-y-3 md:space-y-0">
                    
                    {/* Colonne gauche */}
                    <div>
                        <div className="font-extrabold">RÉPUBLIQUE DU CAMEROUN</div>
                        <div className="text-[9px] text-center md:text-left">Paix-Travail-Patrie</div>
                        <div>Ministère de l'Éducation de base</div>
                        <div>Délégation Régionale du Centre</div>
                        <div>Délégation Départementale du Mourad</div>
                    </div>

                    {/* Colonne centrale */}
                    <div className="text-center">
                        <div className="font-bold text-sm">GROUPE SCOLAIRE BILINGUE LA GRACE DE DIEU</div>
                        <div className="text-[15px] font-bold">Bulletin de notes annuel</div>
                    </div>

                    {/* Colonne droite */}
                    <div>
                        <div className="font-extrabold">REPUBLIC OF CAMEROON</div>
                        <div className="text-[9px] text-center md:text-left">Peace-Work-Fatherland</div>
                        <div>Ministry of Basic Education</div>
                        <div>Centre Regional Delegation</div>
                    </div>

                </div>
            </div>

            {/* Form container */}
            <div className="bg-white w-full max-w-6xl rounded-xl shadow-lg p-6">
                {/* Student Information */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6 text-sm">
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">NOM</label>
                        <input 
                            className="border px-3 py-2 rounded w-full" 
                            placeholder="Nom de l'élève"
                            value={meta.nomEleve} 
                            onChange={(e) => changerMeta("nomEleve", e.target.value)} 
                        />
                    </div>
                    
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">N° MATRICULE</label>
                        <input 
                            className="border px-3 py-2 rounded w-full" 
                            placeholder="Numéro matricule"
                            value={meta.matricule} 
                            onChange={(e) => changerMeta("matricule", e.target.value)} 
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">SEXE</label>
                        <select 
                            className="border px-3 py-2 rounded w-full" 
                            value={meta.sexe} 
                            onChange={e => changerMeta("sexe", e.target.value)}
                        >
                            <option value="">Sélectionner</option>
                            {SEX_OPTIONS.map(sexe => <option key={sexe} value={sexe}>{sexe}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">CLASSE</label>
                        <select 
                            className="border px-3 py-2 rounded w-full" 
                            value={meta.classe} 
                            onChange={e => changerMeta("classe", e.target.value)}
                        >
                            <option value="">Sélectionner</option>
                            {CLASS_OPTIONS.map(classe => <option key={classe} value={classe}>{classe}</option>)}
                        </select>
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-xs font-medium text-gray-700 mb-1">ANNÉE SCOLAIRE</label>
                        <select 
                            className="border px-3 py-2 rounded w-full" 
                            value={meta.anneeScolaire} 
                            onChange={e => changerMeta("anneeScolaire", e.target.value)}
                        >
                            <option value="">Sélectionner</option>
                            {anneesScolaires.map(annee => <option key={annee} value={annee}>{annee}</option>)}
                        </select>
                    </div>
                </div>

                {/* Main Table */}
                <div className="overflow-x-auto mb-6">
                    <table className="w-full text-xs border-collapse border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-400 p-2 text-left w-48">DOMAINES</th>
                                <th className="border border-gray-400 p-2 text-left w-96">ACTIVITÉS</th>
                                <th className="border border-gray-400 p-2 text-center">
                                    <select 
                                        className="text-xs bg-transparent border-none outline-none" 
                                        value={entetesPeriodes.h1} 
                                        onChange={(e) => changerEntete("h1", e.target.value)}
                                    >
                                        {PERIODE_OPTIONS.map(p => <option key={p} value={p}>{p}</option>)}
                                    </select>
                                </th>
                                <th className="border border-gray-400 p-2 text-center">
                                    <select 
                                        className="text-xs bg-transparent border-none outline-none" 
                                        value={entetesPeriodes.h2} 
                                        onChange={(e) => changerEntete("h2", e.target.value)}
                                    >
                                        {PERIODE_OPTIONS.map(p => <option key={p} value={p}>{p}</option>)}
                                    </select>
                                </th>
                                <th className="border border-gray-400 p-2 text-center">
                                    <select 
                                        className="text-xs bg-transparent border-none outline-none" 
                                        value={entetesPeriodes.h3} 
                                        onChange={(e) => changerEntete("h3", e.target.value)}
                                    >
                                        {PERIODE_OPTIONS.map(p => <option key={p} value={p}>{p}</option>)}
                                    </select>
                                </th>
                                <th className="border border-gray-400 p-2 text-center w-32">EXPRESSION DOMAINE</th>
                            </tr>
                        </thead>

                        <tbody>
                            {DOMAINES_TEMPLATE.map((domaine, index) => {
                                const state = donnees[domaine.key];
                                return (
                                    <tr key={domaine.key} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                        <td className="border border-gray-400 p-2 font-medium">{domaine.title}</td>
                                        <td className="border border-gray-400 p-2">{domaine.activities}</td>
                                        
                                        {/* Période 1 */}
                                        <td className="border border-gray-400 p-1 text-center">
                                            <select 
                                                className="w-full text-xs p-1 border-none outline-none bg-transparent"
                                                value={state.periode1 || ""}
                                                onChange={(e) => changerEvaluation(domaine.key, "periode1", e.target.value)}
                                            >
                                                <option value="">-</option>
                                                {APPRECIATIONS.map(appreciation => (
                                                    <option key={appreciation} value={appreciation}>{appreciation}</option>
                                                ))}
                                            </select>
                                        </td>

                                        {/* Période 2 */}
                                        <td className="border border-gray-400 p-1 text-center">
                                            <select 
                                                className="w-full text-xs p-1 border-none outline-none bg-transparent"
                                                value={state.periode2 || ""}
                                                onChange={(e) => changerEvaluation(domaine.key, "periode2", e.target.value)}
                                            >
                                                <option value="">-</option>
                                                {APPRECIATIONS.map(appreciation => (
                                                    <option key={appreciation} value={appreciation}>{appreciation}</option>
                                                ))}
                                            </select>
                                        </td>

                                        {/* Période 3 */}
                                        <td className="border border-gray-400 p-1 text-center">
                                            <select 
                                                className="w-full text-xs p-1 border-none outline-none bg-transparent"
                                                value={state.periode3 || ""}
                                                onChange={(e) => changerEvaluation(domaine.key, "periode3", e.target.value)}
                                            >
                                                <option value="">-</option>
                                                {APPRECIATIONS.map(appreciation => (
                                                    <option key={appreciation} value={appreciation}>{appreciation}</option>
                                                ))}
                                            </select>
                                        </td>

                                        {/* Expression Domaine */}
                                        <td className="border border-gray-400 p-1 text-center">
                                            <select 
                                                className="w-full text-xs p-1 border-none outline-none bg-transparent"
                                                value={state.expression || ""}
                                                onChange={(e) => changerExpression(domaine.key, e.target.value)}
                                            >
                                                <option value="">-</option>
                                                {APPRECIATIONS.map(appreciation => (
                                                    <option key={appreciation} value={appreciation}>{appreciation}</option>
                                                ))}
                                            </select>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Bottom Section - Légende des Appréciations + Résumé du Travail */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Légende des Appréciations */}
                    <div className="border rounded p-4 text-xs">
                        <div className="font-semibold mb-2">Légende des Appréciations</div>
                        <ul className="list-disc ml-5 space-y-1">
                            <li><strong>Acquis</strong> — L'élève maîtrise la compétence</li>
                            <li><strong>Non Acquis</strong> — L'élève ne maîtrise pas encore la compétence</li>
                            <li><strong>Expert</strong> — L'élève maîtrise parfaitement la compétence</li>
                        </ul>
                    </div>

                    {/* Résumé du Travail */}
                    <div className="border-2 border-gray-400 rounded p-4">
                        <div className="font-bold text-base mb-3 text-center text-gray-800">Résumé du Travail</div>

                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <div className="text-xs font-medium mb-1">Appréciation</div>
                                    <select 
                                        className="w-full border border-gray-300 px-2 py-1 rounded text-sm"
                                        value={resume.appreciation}
                                        onChange={(e) => changerResume("appreciation", e.target.value)}
                                    >
                                        <option value="">- Sélectionner -</option>
                                        {APPRECIATIONS.map(appreciation => (
                                            <option key={appreciation} value={appreciation}>{appreciation}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <div className="text-xs font-medium mb-1">Rang</div>
                                    <input 
                                        className="w-full border border-gray-300 px-2 py-1 rounded text-sm"
                                        value={resume.rang}
                                        onChange={(e) => changerResume("rang", e.target.value)}
                                        placeholder="Position dans la classe"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="text-xs font-medium mb-1">Décision</div>
                                <select 
                                    className="w-full border border-gray-300 px-2 py-1 rounded text-sm"
                                    value={resume.decision}
                                    onChange={(e) => changerResume("decision", e.target.value)}
                                >
                                    <option value="">- Sélectionner -</option>
                                    {DECISIONS.map(decision => (
                                        <option key={decision} value={decision}>{decision}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Signatures */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                                <div className="text-center">
                                    <div className="text-xs font-medium mb-1">Visa de l'enseignant</div>
                                    <div className="border border-gray-300 rounded p-2 h-16 flex items-center justify-center">
                                        <span className="text-gray-500 text-xs">Signature</span>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <div className="text-xs font-medium mb-1">Visa Chef d'établissement</div>
                                    <div className="border border-gray-300 rounded p-2 h-16 flex items-center justify-center">
                                        <span className="text-gray-500 text-xs">Signature</span>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <div className="text-xs font-medium mb-1">Visa du parent</div>
                                    <div className="border border-gray-300 rounded p-2 h-16 flex items-center justify-center">
                                        <span className="text-gray-500 text-xs">Signature</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="mt-10 text-center text-sm bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="font-bold text-blue-800 mb-2">GROUPE SCOLAIRE BILINGUE LA GRACE DE DIEU</div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <div><strong>Téléphone:</strong> +237 696 308 503</div>
                        <div><strong>Siège Social:</strong> Yaoundé - Nkolbisson (Quartier Mbouda)</div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center mt-6">
                    <button onClick={() => navigate(-1)} className="px-4 py-2 border rounded text-sm">Retour</button>
                    <div className="flex gap-3">
                        <button onClick={handleReset} className="px-4 py-2 border rounded text-sm">Réinitialiser</button>
                        <button onClick={handlePreview} className="px-4 py-2 bg-blue-600 text-white rounded text-sm">Aperçu & Impression</button>
                    </div>
                </div>
            </div>
        </div>
    );
}