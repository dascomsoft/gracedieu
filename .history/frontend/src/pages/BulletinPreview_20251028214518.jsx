import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BulletinPreview = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {
        meta,
        periodHeaders,
        data,
        totals,
        averages,
        periodInfo,
        overallAvg,
        summary // AJOUT: Récupérer le summary
    } = location.state || {};

    const handlePrint = () => {
        window.print();
    };

    const handleDownload = () => {
        window.print();
    };

    const handleBackToEdit = () => {
        // Ne pas effacer les données, simplement revenir en arrière
        navigate(-1);
    };

    const handleFinalSubmit = () => {
        // Effacer les données seulement quand on soumet définitivement
        if (confirm("Are you sure you want to finalize and clear the form?")) {
            localStorage.removeItem('bulletinFormData');
            navigate("/");
        }
    };

    if (!location.state) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-xl font-bold text-red-600 mb-4">No data found</div>
                    <button
                        onClick={() => navigate("/")}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg"
                    >
                        Back to Form
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-2 flex flex-col items-center print:p-0 print:bg-white">
            {/* tete de page - invisible durant l'impression*/}
            <div className="w-full max-w-4xl mb-2 print:hidden">
                <div className="bg-blue-600 text-white p-2 rounded shadow">
                    <h1 className="text-lg font-bold text-center">Report Card Preview</h1>
                    <p className="text-center text-blue-100 text-xs">
                        Check all information before printing. Your data is automatically saved.
                    </p>
                </div>
            </div>

            {/* page principale */}
            <div className="bg-white w-full max-w-4xl shadow-sm p-3 print:shadow-none print:max-w-full print:p-2" style={{ minHeight: '27.5cm' }}>

                {/* Header */}
                <div className="w-full max-w-6xl mb-2 print:mb-1 border-b border-gray-300 pb-2 print:pb-1">
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


                {/* Student Information - ALL fields from original */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-2 print:mb-1 text-xs print:text-[10px]">
                    <div><strong>Full name:</strong> {meta.studentName || "-"}</div>
                    <div><strong>Sex:</strong> {meta.sex || "-"}</div>
                    <div><strong>Class:</strong> {meta.className || "-"}</div>
                    <div><strong>Level:</strong> {meta.level || "-"}</div>
                    <div><strong>Term:</strong> {meta.term || "-"}</div>
                    <div><strong>Academic Year:</strong> {meta.year || "-"}</div>
                    <div className="md:col-span-2"><strong>Teacher:</strong> {meta.teacher || "-"}</div>
                </div>

                {/* Skills Table - Identical to original but more compact */}
                <div className="overflow-x-auto print:overflow-visible mb-2 print:mb-1">
                    <table className="w-full text-[10px] border-collapse print:text-[9px] border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-400 p-1 w-28 print:p-0.5">Skills</th>
                                <th className="border border-gray-400 p-1 w-40 print:p-0.5">Description</th>
                                <th className="border border-gray-400 p-1 text-center w-16 print:p-0.5">Evaluation</th>
                                <th className="border border-gray-400 p-1 text-center w-12 print:p-0.5">SCl</th>
                                <th className="border border-gray-400 p-1 text-center w-16 print:p-0.5">
                                    {periodHeaders.h1}
                                </th>
                                <th className="border border-gray-400 p-1 text-center w-16 print:p-0.5">
                                    {periodHeaders.h2}
                                </th>
                                <th className="border border-gray-400 p-1 text-center w-16 print:p-0.5">
                                    {periodHeaders.h3}
                                </th>
                                <th className="border border-gray-400 p-1 text-center w-20 print:p-0.5">Appreciation</th>
                            </tr>
                        </thead>

                        <tbody>
                            {[
                                {
                                    key: "1A",
                                    title: "1A- Communicate in English",
                                    description: "Listening - speaking - writing - reading",
                                    sclValues: { Attitude: 5, Oral: 20, Written: 15 },
                                    evaluations: ["Attitude", "Oral", "Written"]
                                },
                                {
                                    key: "1B",
                                    title: "1B- Communicate in French",
                                    description: "Compréhension orale - lecture - production écrite - grammar - conjugation - vocabulary",
                                    sclValues: { Attitude: 5, Oral: 20, Written: 15 },
                                    evaluations: ["Attitude", "Oral", "Written"]
                                },
                                {
                                    key: "1C",
                                    title: "1C- Communicate in One National Language",
                                    description: "Customs - traditions - mode of life - interpretation of phenomena",
                                    sclValues: { Oral: 15, Practical: 5 },
                                    evaluations: ["Oral", "Practical"]
                                },
                                {
                                    key: "2A",
                                    title: "2A- Use basic Notions in Mathematics",
                                    description: "Sets and logic - number and numeration - measurement - graphs and statistics - geometry",
                                    sclValues: { Attitude: 5, Oral: 10, Practical: 15, Written: 20 },
                                    evaluations: ["Attitude", "Oral", "Practical", "Written"]
                                },
                                {
                                    key: "2B",
                                    title: "2B- Use basic Notions in science and technology",
                                    description: "Health and environmental education - technology and engineering",
                                    sclValues: { Attitude: 5, Oral: 10, Practical: 15, Written: 20 },
                                    evaluations: ["Attitude", "Oral", "Practical", "Written"]
                                },
                                {
                                    key: "3A",
                                    title: "3A- Practise Social Value",
                                    description: "History and geography",
                                    sclValues: { Attitude: 10, Oral: 6, Practical: 2, Written: 2 },
                                    evaluations: ["Attitude", "Oral", "Practical", "Written"]
                                },
                                {
                                    key: "3B",
                                    title: "3B- Practise Citizenship values",
                                    description: "Civics - human right - moral education",
                                    sclValues: { Attitude: 10, Oral: 6, Practical: 2, Written: 2 },
                                    evaluations: ["Attitude", "Oral", "Practical", "Written"]
                                },
                                {
                                    key: "4A",
                                    title: "4A- Demonstrate Autonomy, Spirit of Initiative Creativity and Entrepreneurship in Vocational Studies",
                                    description: "Needles work - house craft - laundry and food nutrition",
                                    sclValues: { Attitude: 2, Oral: 3, Practical: 10, Written: 5 },
                                    evaluations: ["Attitude", "Oral", "Practical", "Written"]
                                },
                                {
                                    key: "4B",
                                    title: "4B- Demonstrate autonomy, Spirit of Initiative Creativity and entrepreneurship",
                                    description: "Agricultural tool - farming and gardening - livestock farming",
                                    sclValues: { Attitude: 2, Oral: 3, Practical: 10, Written: 5 },
                                    evaluations: ["Attitude", "Oral", "Practical", "Written"]
                                },
                                {
                                    key: "5",
                                    title: "5- Use Basic Concepts and Tools of Information and Communication Technologies",
                                    description: "The computer and ICT tools - Internet and communication ethics",
                                    sclValues: { Attitude: 5, Oral: 5, Practical: 20, Written: 10 },
                                    evaluations: ["Attitude", "Oral", "Practical", "Written"]
                                },
                                {
                                    key: "6A",
                                    title: "6-A Practise Physical and Sports Activities",
                                    description: "Movement - jumping - team sports - gymnastics - relay - sprint",
                                    sclValues: { Attitude: 3, Oral: 3, Practical: 10, Written: 4 },
                                    evaluations: ["Attitude", "Oral", "Practical", "Written"]
                                },
                                {
                                    key: "6B",
                                    title: "6-B Practice Artistic Activities",
                                    description: "Visual arts - performing arts",
                                    sclValues: { Attitude: 4, Oral: 4, Practical: 10, Written: 2 },
                                    evaluations: ["Attitude", "Oral", "Practical", "Written"]
                                }
                            ].map(skillTemplate => {
                                const skillData = data[skillTemplate.key];
                                if (!skillData) return null;

                                return (
                                    <React.Fragment key={skillTemplate.key}>
                                        {skillTemplate.evaluations.map((ev, i) => (
                                            <tr key={ev + i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                                {i === 0 && (
                                                    <td className="border border-gray-400 p-1 align-top font-semibold print:p-0.5" rowSpan={skillTemplate.evaluations.length}>
                                                        <div className="text-[11px] print:text-[10px] leading-tight">{skillTemplate.title}</div>
                                                    </td>
                                                )}
                                                {i === 0 && (
                                                    <td className="border border-gray-400 p-1 align-top print:p-0.5" rowSpan={skillTemplate.evaluations.length}>
                                                        <div className="text-[9px] text-gray-600 print:text-[8px] leading-tight">{skillTemplate.description}</div>
                                                    </td>
                                                )}

                                                <td className="border border-gray-400 p-1 text-center align-top print:p-0.5">{ev}</td>
                                                <td className="border border-gray-400 p-1 text-center align-top print:p-0.5">{skillTemplate.sclValues[ev]}</td>
                                                <td className="border border-gray-400 p-1 text-center align-top print:p-0.5">{skillData.evals[ev].m1 || "-"}</td>
                                                <td className="border border-gray-400 p-1 text-center align-top print:p-0.5">{skillData.evals[ev].m2 || "-"}</td>
                                                <td className="border border-gray-400 p-1 text-center align-top print:p-0.5">{skillData.evals[ev].m3 || "-"}</td>

                                                {i === 0 && (
                                                    <td className="border border-gray-400 p-1 align-top text-center print:p-0.5" rowSpan={skillTemplate.evaluations.length}>
                                                        {skillData.appreciation || "-"}
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


<div
  className="
    flex flex-col gap-4 mt-3 mb-3 print:mb-0 print:gap-1
    md:flex-row md:flex-wrap md:justify-between md:items-start md:gap-2
    lg:flex-nowrap
    text-[9px]
  "
>
  {/* Appreciation Legend */}
  <div className="w-full md:w-[48%] lg:w-1/4 border border-gray-300 rounded p-1">
    <div className="font-semibold text-center mb-0.5">Appreciation Legend</div>
    <div className="space-y-0.5">
      <div><strong>Acquired</strong> - The student has mastered the skill</div>
      <div><strong>In the process of acquire</strong> - Progressing but not yet mastered</div>
      <div><strong>Expert</strong> - Performance above expectations</div>
      <div><strong>Not acquired</strong> - Skill not yet acquired</div>
    </div>
  </div>

  {/* Periods */}
  <div className="w-full md:w-[48%] lg:w-1/4 border border-gray-300 rounded p-1">
    <div className="font-semibold text-center mb-0.5">Periods</div>

    <div className="grid grid-cols-3 gap-0.5 mb-1">
      {['h1', 'h2', 'h3'].map((header) => (
        <div key={header} className="text-center">
          <div className="font-semibold">{periodHeaders[header]}</div>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-0.5 mb-1">
      {['t1', 't2', 't3'].map((total) => (
        <div key={total} className="text-center">
          <div className="text-gray-600">Totals</div>
          <div className="font-semibold">{totals[total]}</div>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-0.5 mb-1">
      {['a1', 'a2', 'a3'].map((avg) => (
        <div key={avg} className="text-center">
          <div className="text-gray-600">Average</div>
          <div className="font-semibold">{averages[avg]}</div>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-0.5">
      {['app1', 'app2', 'app3'].map((app) => (
        <div key={app} className="text-center">
          <div className="text-gray-600">Appreciation</div>
          <div className="font-semibold">{periodInfo[app] || "-"}</div>
        </div>
      ))}
    </div>
  </div>

  {/* Summary of Work */}
  <div className="w-full md:w-[48%] lg:w-1/4 border-2 border-gray-400 rounded p-1">
    <div className="font-semibold text-center mb-0.5">Summary of Work</div>

    <div className="space-y-1">
      <div className="text-center">
        <div className="text-gray-600">Avrg (Overall)</div>
        <div className="font-bold text-blue-700 text-[10px]">{overallAvg}</div>
      </div>

      <div>
        <div className="text-gray-600">Appreciation (Overall)</div>
        <div className="border border-gray-300 rounded p-0.5 min-h-5 text-center flex items-center justify-center">
          {summary?.overallAppreciation || "-"}
        </div>
      </div>

      <div>
        <div className="text-gray-600">Position</div>
        <div className="border border-gray-300 rounded p-0.5 min-h-5 text-center flex items-center justify-center">
          {summary?.position || "-"}
        </div>
      </div>

      <div>
        <div className="text-gray-600">Decision</div>
        <div className="border border-gray-300 rounded p-0.5 min-h-5 text-center flex items-center justify-center">
          {summary?.decision || "-"}
        </div>
      </div>
    </div>
  </div>

  {/* Signatures */}
  <div className="w-full md:w-[48%] lg:w-1/4">
    <div className="space-y-1">
      {['Teacher', 'Headmaster', 'Parent'].map((role) => (
        <div key={role} className="border border-gray-300 rounded p-1 text-center">
          <div className="font-semibold text-[8px]">{role}'s Visa</div>
          <div className="h-8 mt-0.5 flex items-center justify-center">
            {/* Signature area */}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>








                {/* Contact  */}
                <div className="text-center text-[9px] bg-blue-50 border border-blue-200 rounded p-1 mt-3 print:mt-3">
                    <div className="font-bold text-blue-800">Phone: +237 696 308 503 | Head Office: Yaounde - Nkolbisson (Quartier Mbouda)</div>
                </div>
            </div>

            {/* Action Buttons - MODIFIÉS pour la gestion des données */}
            <div className="w-full max-w-4xl mt-3 print:hidden">
                <div className="flex justify-between gap-2">
                    <button
                        onClick={handleBackToEdit}
                        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm"
                    >
                        ← Back to Edit
                    </button>

                    <div className="flex gap-2">
                        <button
                            onClick={handleDownload}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm"
                        >
                            📥 Download
                        </button>

                        <button
                            onClick={handlePrint}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                        >
                            🖨️ Print
                        </button>

                        <button
                            onClick={handleFinalSubmit}
                            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors text-sm"
                        >
                            ✅ Finalize
                        </button>
                    </div>
                </div>
            </div>

            {/* Print CSS optimized for single page */}
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