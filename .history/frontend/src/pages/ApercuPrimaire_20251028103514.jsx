import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BulletinPreview = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {
        meta,
        entetesPeriodes,
        donnees,
        totaux,
        moyennes,
        infoPeriodes,
        moyenneGenerale,
        resume
    } = location.state || {};

    const handlePrint = () => {
        window.print();
    };

    const handleDownload = () => {
        window.print();
    };

    const handleBackToEdit = () => {
        navigate(-1);
    };

    const handleFinalSubmit = () => {
        if (confirm("Êtes-vous sûr de vouloir finaliser et vider le formulaire ?")) {
            localStorage.removeItem('bulletinFormData');
            navigate("/");
        }
    };

    if (!location.state) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-xl font-bold text-red-600 mb-4">Aucune donnée trouvée</div>
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

    return (
        <div className="min-h-screen bg-gray-50 p-2 flex flex-col items-center print:p-0 print:bg-white">
            {/* En-tête - invisible durant l'impression */}
            <div className="w-full max-w-4xl mb-2 print:hidden">
                <div className="bg-blue-600 text-white p-2 rounded shadow">
                    <h1 className="text-lg font-bold text-center">Aperçu du Bulletin</h1>
                    <p className="text-center text-blue-100 text-xs">
                        Vérifiez toutes les informations avant l'impression. Vos données sont automatiquement sauvegardées.
                    </p>
                </div>
            </div>

            {/* Page principale */}
            <div className="bg-white w-full max-w-4xl shadow-sm p-3 print:shadow-none print:max-w-full print:p-2" style={{ minHeight: '27.5cm' }}>

                {/* En-tête */}
              <div className="w-full max mb-2 print:mb-1 border-b border-gray-300 pb-2 print:pb-1">
  <div
    className="
      flex flex-col items-center text-gray-600 text-xs print:text-xs
      md:flex-row md:justify-between md:items-start
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


                {/* Informations de l'Élève */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-2 print:mb-1 text-xs print:text-[10px]">
                    <div><strong>Nom complet:</strong> {meta.nomEleve || "-"}</div>
                    <div><strong>Sexe:</strong> {meta.sexe || "-"}</div>
                    <div><strong>Classe:</strong> {meta.classe || "-"}</div>
                    <div><strong>Niveau:</strong> {meta.niveau || "-"}</div>
                    <div><strong>Trimestre:</strong> {meta.trimestre || "-"}</div>
                    <div><strong>Année Scolaire:</strong> {meta.anneeScolaire || "-"}</div>
                    <div className="md:col-span-2"><strong>Enseignant:</strong> {meta.enseignant || "-"}</div>
                </div>

                {/* Tableau des Compétences */}
                <div className="overflow-x-auto print:overflow-visible mb-2 print:mb-1">
                    <table className="w-full text-[10px] border-collapse print:text-[9px] border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-400 p-1 w-28 print:p-0.5">Compétences</th>
                                <th className="border border-gray-400 p-1 w-40 print:p-0.5">Description</th>
                                <th className="border border-gray-400 p-1 text-center w-16 print:p-0.5">Évaluation</th>
                                <th className="border border-gray-400 p-1 text-center w-12 print:p-0.5">SCl</th>
                                <th className="border border-gray-400 p-1 text-center w-16 print:p-0.5">
                                    {entetesPeriodes.h1}
                                </th>
                                <th className="border border-gray-400 p-1 text-center w-16 print:p-0.5">
                                    {entetesPeriodes.h2}
                                </th>
                                <th className="border border-gray-400 p-1 text-center w-16 print:p-0.5">
                                    {entetesPeriodes.h3}
                                </th>
                                <th className="border border-gray-400 p-1 text-center w-20 print:p-0.5">Appréciation</th>
                            </tr>
                        </thead>

                        <tbody>
                            {[
                                {
                                    key: "1A",
                                    title: "1A- Communiquer en Anglais",
                                    description: "Écoute - expression orale - écriture - lecture",
                                    sclValues: { Attitude: 5, Oral: 20, Écrit: 15 },
                                    evaluations: ["Attitude", "Oral", "Écrit"]
                                },
                                {
                                    key: "1B",
                                    title: "1B- Communiquer en Français",
                                    description: "Compréhension orale - lecture - production écrite - grammaire - conjugaison - vocabulaire",
                                    sclValues: { Attitude: 5, Oral: 20, Écrit: 15 },
                                    evaluations: ["Attitude", "Oral", "Écrit"]
                                },
                                {
                                    key: "1C",
                                    title: "1C- Communiquer dans une Langue Nationale",
                                    description: "Coutumes - traditions - mode de vie - interprétation des phénomènes",
                                    sclValues: { Oral: 15, Pratique: 5 },
                                    evaluations: ["Oral", "Pratique"]
                                },
                                {
                                    key: "2A",
                                    title: "2A- Utiliser les Notions de Base en Mathématiques",
                                    description: "Ensembles et logique - nombre et numération - mesure - graphiques et statistiques - géométrie",
                                    sclValues: { Attitude: 5, Oral: 10, Pratique: 15, Écrit: 20 },
                                    evaluations: ["Attitude", "Oral", "Pratique", "Écrit"]
                                },
                                {
                                    key: "2B",
                                    title: "2B- Utiliser les Notions de Base en Sciences et Technologie",
                                    description: "Éducation à la santé et à l'environnement - technologie et ingénierie",
                                    sclValues: { Attitude: 5, Oral: 10, Pratique: 15, Écrit: 20 },
                                    evaluations: ["Attitude", "Oral", "Pratique", "Écrit"]
                                },
                                {
                                    key: "3A",
                                    title: "3A- Pratiquer les Valeurs Sociales",
                                    description: "Histoire et géographie",
                                    sclValues: { Attitude: 10, Oral: 6, Pratique: 2, Écrit: 2 },
                                    evaluations: ["Attitude", "Oral", "Pratique", "Écrit"]
                                },
                                {
                                    key: "3B",
                                    title: "3B- Pratiquer les Valeurs Civiques",
                                    description: "Éducation civique - droits de l'homme - éducation morale",
                                    sclValues: { Attitude: 10, Oral: 6, Pratique: 2, Écrit: 2 },
                                    evaluations: ["Attitude", "Oral", "Pratique", "Écrit"]
                                },
                                {
                                    key: "4A",
                                    title: "4A- Démontrer l'Autonomie, l'Esprit d'Initiative, la Créativité et l'Entreprenariat dans les Études Professionnelles",
                                    description: "Travaux d'aiguille - arts ménagers - blanchisserie et nutrition alimentaire",
                                    sclValues: { Attitude: 2, Oral: 3, Pratique: 10, Écrit: 5 },
                                    evaluations: ["Attitude", "Oral", "Pratique", "Écrit"]
                                },
                                {
                                    key: "4B",
                                    title: "4B- Démontrer l'autonomie, l'esprit d'initiative, la créativité et l'entreprenariat",
                                    description: "Outils agricoles - agriculture et jardinage - élevage",
                                    sclValues: { Attitude: 2, Oral: 3, Pratique: 10, Écrit: 5 },
                                    evaluations: ["Attitude", "Oral", "Pratique", "Écrit"]
                                },
                                {
                                    key: "5",
                                    title: "5- Utiliser les Concepts de Base et les Outils des Technologies de l'Information et de la Communication",
                                    description: "L'ordinateur et les outils TIC - Internet et éthique de la communication",
                                    sclValues: { Attitude: 5, Oral: 5, Pratique: 20, Écrit: 10 },
                                    evaluations: ["Attitude", "Oral", "Pratique", "Écrit"]
                                },
                                {
                                    key: "6A",
                                    title: "6-A Pratiquer les Activités Physiques et Sportives",
                                    description: "Mouvement - saut - sports d'équipe - gymnastique - relais - sprint",
                                    sclValues: { Attitude: 3, Oral: 3, Pratique: 10, Écrit: 4 },
                                    evaluations: ["Attitude", "Oral", "Pratique", "Écrit"]
                                },
                                {
                                    key: "6B",
                                    title: "6-B Pratiquer les Activités Artistiques",
                                    description: "Arts visuels - arts du spectacle",
                                    sclValues: { Attitude: 4, Oral: 4, Pratique: 10, Écrit: 2 },
                                    evaluations: ["Attitude", "Oral", "Pratique", "Écrit"]
                                }
                            ].map(competenceTemplate => {
                                const donneesCompetence = donnees[competenceTemplate.key];
                                if (!donneesCompetence) return null;

                                return (
                                    <React.Fragment key={competenceTemplate.key}>
                                        {competenceTemplate.evaluations.map((ev, i) => (
                                            <tr key={ev + i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                                {i === 0 && (
                                                    <td className="border border-gray-400 p-1 align-top font-semibold print:p-0.5" rowSpan={competenceTemplate.evaluations.length}>
                                                        <div className="text-[11px] print:text-[10px] leading-tight">{competenceTemplate.title}</div>
                                                    </td>
                                                )}
                                                {i === 0 && (
                                                    <td className="border border-gray-400 p-1 align-top print:p-0.5" rowSpan={competenceTemplate.evaluations.length}>
                                                        <div className="text-[9px] text-gray-600 print:text-[8px] leading-tight">{competenceTemplate.description}</div>
                                                    </td>
                                                )}

                                                <td className="border border-gray-400 p-1 text-center align-top print:p-0.5">{ev}</td>
                                                <td className="border border-gray-400 p-1 text-center align-top print:p-0.5">{competenceTemplate.sclValues[ev]}</td>
                                                <td className="border border-gray-400 p-1 text-center align-top print:p-0.5">{donneesCompetence.evaluations[ev].m1 || "-"}</td>
                                                <td className="border border-gray-400 p-1 text-center align-top print:p-0.5">{donneesCompetence.evaluations[ev].m2 || "-"}</td>
                                                <td className="border border-gray-400 p-1 text-center align-top print:p-0.5">{donneesCompetence.evaluations[ev].m3 || "-"}</td>

                                                {i === 0 && (
                                                    <td className="border border-gray-400 p-1 align-top text-center print:p-0.5" rowSpan={competenceTemplate.evaluations.length}>
                                                        {donneesCompetence.appreciation || "-"}
                                                    </td>
                                                )}
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Section Inférieure COMPACTE - Une seule ligne avec toutes les informations */}
                <div className="flex justify-between items-start gap-2 print:gap-1 mt-10 mb-20 print:mb-1" style={{ fontSize: '9px' }}>

                    {/* Légende des Appréciations compacte */}
                    <div className="w-1/4 border border-gray-300 rounded p-1">
                        <div className="font-semibold text-center mb-0.5">Légende des Appréciations</div>
                        <div className="space-y-0.5">
                            <div><strong>Acquis</strong> - L'élève a maîtrisé la compétence</div>
                            <div><strong>En cours d'acquisition</strong> - Progression mais pas encore maîtrisé</div>
                            <div><strong>Expert</strong> - Performance au-dessus des attentes</div>
                            <div><strong>Non acquis</strong> - Compétence pas encore acquise</div>
                        </div>
                    </div>

                    {/* Périodes compactes avec TOUTES les informations */}
                    <div className="w-1/4 border border-gray-300 rounded p-1">
                        <div className="font-semibold text-center mb-0.5">Périodes</div>

                        {/* En-têtes des Mois */}
                        <div className="grid grid-cols-3 gap-0.5 mb-1">
                            {['h1', 'h2', 'h3'].map((header, index) => (
                                <div key={header} className="text-center">
                                    <div className="font-semibold">{entetesPeriodes[header]}</div>
                                </div>
                            ))}
                        </div>

                        {/* Totaux */}
                        <div className="grid grid-cols-3 gap-0.5 mb-1">
                            {['t1', 't2', 't3'].map((total, index) => (
                                <div key={total} className="text-center">
                                    <div className="text-gray-600">Totaux</div>
                                    <div className="font-semibold">{totaux[total]}</div>
                                </div>
                            ))}
                        </div>

                        {/* Moyennes */}
                        <div className="grid grid-cols-3 gap-0.5 mb-1">
                            {['m1', 'm2', 'm3'].map((moy, index) => (
                                <div key={moy} className="text-center">
                                    <div className="text-gray-600">Moyenne</div>
                                    <div className="font-semibold">{moyennes[moy]}</div>
                                </div>
                            ))}
                        </div>

                        {/* Appréciations */}
                        <div className="grid grid-cols-3 gap-0.5">
                            {['app1', 'app2', 'app3'].map((app, index) => (
                                <div key={app} className="text-center">
                                    <div className="text-gray-600">Appréciation</div>
                                    <div className="font-semibold">{infoPeriodes[app] || "-"}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Résumé compact avec TOUTES les informations */}
                    <div className="w-1/4 border-2 border-gray-400 rounded p-1">
                        <div className="font-semibold text-center mb-0.5">Résumé du Travail</div>

                        <div className="space-y-1">
                            <div className="text-center">
                                <div className="text-gray-600">Moy (Générale)</div>
                                <div className="font-bold text-blue-700 text-[10px]">{moyenneGenerale}</div>
                            </div>

                            <div>
                                <div className="text-gray-600">Appréciation (Globale)</div>
                                <div className="border border-gray-300 rounded p-0.5 min-h-8 text-center flex items-center justify-center">
                                    {resume?.appreciationGlobale || "-"}
                                </div>
                            </div>

                            <div>
                                <div className="text-gray-600">Position</div>
                                <div className="border border-gray-300 rounded p-0.5 min-h-8 text-center flex items-center justify-center">
                                    {resume?.position || "-"}
                                </div>
                            </div>

                            <div>
                                <div className="text-gray-600">Décision</div>
                                <div className="border border-gray-300 rounded p-0.5 min-h-8 text-center flex items-center justify-center">
                                    {resume?.decision || "-"}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Signatures Compactes */}
                    <div className="w-1/4">
                        <div className="space-y-1">
                            {['Enseignant', 'Directeur', 'Parent'].map((role) => (
                                <div key={role} className="border border-gray-300 rounded p-1 text-center">
                                    <div className="font-semibold text-[8px]">Visa {role}</div>
                                    <div className="h-8 mt-0.5 flex items-center justify-center">
                                        {/* Espace pour signature */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact  */}
                <div className="text-center text-[9px] bg-blue-50 border border-blue-200 rounded p-1 mt-20 print:mt-10">
                    <div className="font-bold text-blue-800">Téléphone: +237 696 308 503 | Siège Social: Yaoundé - Nkolbisson (Quartier Mbouda)</div>
                </div>
            </div>

            {/* Boutons d'Action */}
            <div className="w-full max-w-4xl mt-3 print:hidden">
                <div className="flex justify-between gap-2">
                    <button
                        onClick={handleBackToEdit}
                        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm"
                    >
                        ← Retour à l'Édition
                    </button>

                    <div className="flex gap-2">
                        <button
                            onClick={handleDownload}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm"
                        >
                            📥 Télécharger
                        </button>

                        <button
                            onClick={handlePrint}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                        >
                            🖨️ Imprimer
                        </button>

                        <button
                            onClick={handleFinalSubmit}
                            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors text-sm"
                        >
                            ✅ Finaliser
                        </button>
                    </div>
                </div>
            </div>

            {/* CSS d'impression optimisé pour une seule page */}
            <style jsx>{`
                @media print {
                    @page {
                        size: A4 portrait;
                        margin: 0.4cm;
                    }
                    body {
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                        margin: 0;
                        padding: 0;
                        font-size: 9px;
                        line-height: 1.2;
                    }
                    .print-container {
                        width: 100%;
                        min-height: 27.5cm;
                        padding: 0.4cm;
                    }
                    table {
                        page-break-inside: avoid;
                        font-size: 8px;
                    }
                    th, td {
                        padding: 2px;
                        line-height: 1.1;
                    }
                    * {
                        box-sizing: border-box;
                    }
                }
            `}</style>
        </div>
    );
};

export default BulletinPreview;