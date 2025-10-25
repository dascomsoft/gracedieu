

// import React, { useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const MONTH_OPTIONS = Array.from({ length: 10 }, (_, i) => `Mont-${i + 1}`);
// const NOTE_OPTIONS = Array.from({ length: 20 }, (_, i) => i + 1);
// const APPRECIATIONS = ["Not acquired", "In the process of acquire", "Expert", "Acquired"];
// const MONTH_APPRECIATIONS = ["A", "NS", "A+"];

// const SKILLS_TEMPLATE = [
//     {
//         key: "1A",
//         title: "1A- Communicate in English",
//         description: "Listening - speaking - writing - reading",
//         sclValues: { Attitude: 5, Oral: 20, Written: 15 },
//         evaluations: ["Attitude", "Oral", "Written"]
//     },
//     {
//         key: "1B",
//         title: "1B- Communicate in French",
//         description: "Compréhension orale - lecture - production écrite - grammar - conjugation - vocabulary",
//         sclValues: { Attitude: 5, Oral: 20, Written: 15 },
//         evaluations: ["Attitude", "Oral", "Written"]
//     },
//     {
//         key: "1C",
//         title: "1C- Communicate in One National Language",
//         description: "Customs - traditions - mode of life - interpretation of phenomena",
//         sclValues: { Oral: 15, Practical: 5 },
//         evaluations: ["Oral", "Practical"]
//     },
//     {
//         key: "2A",
//         title: "2A- Use basic Notions in Mathematics",
//         description: "Sets and logic - number and numeration - measurement - graphs and statistics - geometry",
//         sclValues: { Attitude: 5, Oral: 10, Practical: 15, Written: 20 },
//         evaluations: ["Attitude", "Oral", "Practical", "Written"]
//     },
//     {
//         key: "2B",
//         title: "2B- Use basic Notions in science and technology",
//         description: "Health and environmental education - technology and engineering",
//         sclValues: { Attitude: 5, Oral: 10, Practical: 15, Written: 20 },
//         evaluations: ["Attitude", "Oral", "Practical", "Written"]
//     },
//     {
//         key: "3A",
//         title: "3A- Practise Social Value",
//         description: "History and geography",
//         sclValues: { Attitude: 10, Oral: 5, Practical: 2, Written: 2 },
//         evaluations: ["Attitude", "Oral", "Practical", "Written"]
//     },
//     {
//         key: "3B",
//         title: "3B- Practise Citizenship values",
//         description: "Civics - human right - moral education",
//         sclValues: { Attitude: 10, Oral: 5, Practical: 2, Written: 2 },
//         evaluations: ["Attitude", "Oral", "Practical", "Written"]
//     },
//     {
//         key: "4A",
//         title: "4A- Demonstrate Autonomy, Spirit of Initiative Creativity and Entrepreneurship in Vocational Studies",
//         description: "Needles work - house craft - laundry and food nutrition",
//         sclValues: { Attitude: 2, Oral: 3, Practical: 10, Written: 5 },
//         evaluations: ["Attitude", "Oral", "Practical", "Written"]
//     },
//     {
//         key: "4B",
//         title: "4B- Demonstrate autonomy, Spirit of Initiative Creativity and entrepreneurship",
//         description: "Agricultural tool - farming and gardening - livestock farming",
//         sclValues: { Attitude: 2, Oral: 3, Practical: 10, Written: 5 },
//         evaluations: ["Attitude", "Oral", "Practical", "Written"]
//     },
//     {
//         key: "5",
//         title: "5- Use Basic Concepts and Tools of Information and Communication Technologies",
//         description: "The computer and ICT tools - Internet and communication ethics",
//         sclValues: { Attitude: 5, Oral: 5, Practical: 20, Written: 10 },
//         evaluations: ["Attitude", "Oral", "Practical", "Written"]
//     },
//     {
//         key: "6A",
//         title: "6-A Practise Physical and Sports Activities",
//         description: "Movement - jumping - team sports - gymnastics - relay - sprint",
//         sclValues: { Attitude: 3, Oral: 3, Practical: 10, Written: 4 },
//         evaluations: ["Attitude", "Oral", "Practical", "Written"]
//     },
//     {
//         key: "6B",
//         title: "6-B Practice Artistic Activities",
//         description: "Visual arts - performing arts",
//         sclValues: { Attitude: 4, Oral: 4, Practical: 10, Written: 2 },
//         evaluations: ["Attitude", "Oral", "Practical", "Written"]
//     }
// ];

// export default function BulletinForm() {
//     const navigate = useNavigate();

//     const [periodHeaders, setPeriodHeaders] = useState({ h1: MONTH_OPTIONS[0], h2: MONTH_OPTIONS[1], h3: MONTH_OPTIONS[2] });
//     const [meta, setMeta] = useState({
//         studentName: "",
//         sex: "",
//         className: "",
//         level: "",
//         term: "",
//         year: "",
//         teacher: ""
//     });

//     const [data, setData] = useState(() => {
//         const root = {};
//         SKILLS_TEMPLATE.forEach(s => {
//             const evals = {};
//             s.evaluations.forEach(ev => (evals[ev] = { m1: "", m2: "", m3: "" }));
//             root[s.key] = { appreciation: "", evals };
//         });
//         return root;
//     });

//     const [periodInfo, setPeriodInfo] = useState({
//         pos1: "", pos2: "", pos3: "",
//         app1: "", app2: "", app3: ""
//     });

//     const changeHeader = (k, v) => setPeriodHeaders(p => ({ ...p, [k]: v }));
//     const changeMeta = (k, v) => setMeta(m => ({ ...m, [k]: v }));

//     const changeNote = (skillKey, evalLabel, monthKey, value) => {
//         setData(prev => ({
//             ...prev,
//             [skillKey]: {
//                 ...prev[skillKey],
//                 evals: {
//                     ...prev[skillKey].evals,
//                     [evalLabel]: { ...prev[skillKey].evals[evalLabel], [monthKey]: value ? Number(value) : "" }
//                 }
//             }
//         }));
//     };

//     const changeGroupApp = (skillKey, value) => {
//         setData(prev => ({ ...prev, [skillKey]: { ...prev[skillKey], appreciation: value } }));
//     };

//     const changePeriodInfo = (k, v) => setPeriodInfo(p => ({ ...p, [k]: v }));

//     // Nouveaux calculs selon vos spécifications
//     const totals = useMemo(() => {
//         let sumNotes1 = 0, sumNotes2 = 0, sumNotes3 = 0;
//         let sumSCL1 = 0, sumSCL2 = 0, sumSCL3 = 0;

//         SKILLS_TEMPLATE.forEach(skill => {
//             const skillData = data[skill.key];
//             skill.evaluations.forEach(ev => {
//                 const evalData = skillData.evals[ev];

//                 if (evalData.m1 !== "" && !isNaN(evalData.m1)) {
//                     sumNotes1 += Number(evalData.m1);
//                     sumSCL1 += skill.sclValues[ev];
//                 }

//                 if (evalData.m2 !== "" && !isNaN(evalData.m2)) {
//                     sumNotes2 += Number(evalData.m2);
//                     sumSCL2 += skill.sclValues[ev];
//                 }

//                 if (evalData.m3 !== "" && !isNaN(evalData.m3)) {
//                     sumNotes3 += Number(evalData.m3);
//                     sumSCL3 += skill.sclValues[ev];
//                 }
//             });
//         });

//         return {
//             t1: `${sumNotes1}/${sumSCL1}`,
//             t2: `${sumNotes2}/${sumSCL2}`,
//             t3: `${sumNotes3}/${sumSCL3}`,
//             raw: { sumNotes1, sumSCL1, sumNotes2, sumSCL2, sumNotes3, sumSCL3 }
//         };
//     }, [data]);

//     // Nouveaux calculs des averages selon vos spécifications
//     const averages = useMemo(() => {
//         const { sumNotes1, sumSCL1, sumNotes2, sumSCL2, sumNotes3, sumSCL3 } = totals.raw;

//         const a1 = sumSCL1 > 0 ? Math.round((sumNotes1 / sumSCL1) * 20 * 100) / 100 : 0;
//         const a2 = sumSCL2 > 0 ? Math.round((sumNotes2 / sumSCL2) * 20 * 100) / 100 : 0;
//         const a3 = sumSCL3 > 0 ? Math.round((sumNotes3 / sumSCL3) * 20 * 100) / 100 : 0;

//         return {
//             a1: sumSCL1 > 0 ? `${a1}/20` : "0/20",
//             a2: sumSCL2 > 0 ? `${a2}/20` : "0/20",
//             a3: sumSCL3 > 0 ? `${a3}/20` : "0/20",
//             raw: { a1, a2, a3 }
//         };
//     }, [totals]);

//     // calcul overall average 
//     const overallAvg = useMemo(() => {
//         const { a1, a2, a3 } = averages.raw;
//         const average = Math.round(((a1 + a2 + a3) / 3) * 100) / 100;
//         return `${average}/20`;
//     }, [averages]);

//     const handlePreview = () => {
//         const payload = { meta, periodHeaders, data, totals, averages, periodInfo, overallAvg };
//         navigate("/preview", { state: payload });
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 p-2 sm:p-4 flex flex-col items-center print:p-0 print:bg-white">
//             {/* Header - Version responsive */}
//             <div className="w-full max-w-4xl mb-2 print:max-w-full print:mb-1">
//                 <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs text-gray-600 print:text-[10px] gap-2 sm:gap-0">
//                     {/* Left - French */}
//                     <div className="text-center sm:text-left">
//                         <div className="font-bold">RÉPUBLIQUE DU CAMEROUN</div>
//                         <div className="text-[8px]">Paix-Travail-Patrie</div>
//                         <div>Ministère de l'Education de base</div>
//                         <div>Délégation Régionale du Centre</div>
//                     </div>
                    
//                     {/* Center - School Info */}
//                     <div className="text-center order-first sm:order-none">
//                         <div className="font-bold text-xs sm:text-sm">GROUPE SCOLAIRE BILINGUE LA GRÂCE DE DIEU</div>
//                         <div className="text-sm sm:text-[15px] font-bold">BULLETIN DE NOTES</div>
//                         <div className="text-[10px] italic">Report card</div>
//                     </div>
                    
//                     {/* Right - English */}
//                     <div className="text-center sm:text-right">
//                         <div className="font-bold">REPUBLIC OF CAMEROON</div>
//                         <div className="text-[8px]">Peace-Work-Fatherland</div>
//                         <div>Ministry of Basic Education</div>
//                         <div>Centre Regional Delegation</div>
//                     </div>
//                 </div>
//             </div>

//             {/* Form container - Optimisé pour A4 */}
//             <div className="bg-white w-full max-w-4xl rounded-lg shadow-sm p-3 sm:p-4 print:shadow-none print:rounded-none print:p-2 print:max-w-full">
//                 {/* meta inputs - Plus compact */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-3 print:gap-1 print:mb-2">
//                     <input className="border px-2 py-1 rounded text-sm print:py-0.5" placeholder="Full name" value={meta.studentName} onChange={(e) => changeMeta("studentName", e.target.value)} />
//                     <select className="border px-2 py-1 rounded text-sm print:py-0.5" value={meta.sex} onChange={e => changeMeta("sex", e.target.value)}>
//                         <option value="">Sex</option><option>Male</option><option>Female</option>
//                     </select>
//                     <select className="border px-2 py-1 rounded text-sm print:py-0.5" value={meta.className} onChange={e => changeMeta("className", e.target.value)}>
//                         <option value="">Class</option>
//                         <option>SIL</option><option>CP</option><option>CE1</option><option>CE2</option><option>CM1</option><option>CM2</option>
//                         <option>Class 1</option><option>Class 2</option><option>Class 3</option><option>Class 4</option><option>Class 5</option><option>Class 6</option>
//                     </select>

//                     <select className="border px-2 py-1 rounded text-sm print:py-0.5" value={meta.level} onChange={e => changeMeta("level", e.target.value)}>
//                         <option value="">Level / Niveau</option>
//                         <option>Level 1</option><option>Level 2</option><option>Level 3</option><option>Level 4</option><option>Level 5</option><option>Level 6</option>
//                         <option>Niveau 1</option><option>Niveau 2</option><option>Niveau 3</option><option>Niveau 4</option><option>Niveau 5</option><option>Niveau 6</option>
//                     </select>

//                     <select className="border px-2 py-1 rounded text-sm print:py-0.5" value={meta.term} onChange={e => changeMeta("term", e.target.value)}>
//                         <option value="">Term / Trimestre</option>
//                         <option>Term 1</option><option>Term 2</option><option>Term 3</option><option>Trimestre 1</option><option>Trimestre 2</option><option>Trimestre 3</option>
//                     </select>

//                     <select className="border px-2 py-1 rounded text-sm print:py-0.5" value={meta.year} onChange={e => changeMeta("year", e.target.value)}>
//                         <option value="">Academic Year</option>
//                         {Array.from({ length: 27 }, (_, i) => 2024 + i).map(y => <option key={y}>{y}-{y + 1}</option>)}
//                     </select>

//                     <input className="border px-2 py-1 rounded text-sm print:py-0.5" placeholder="Teacher" value={meta.teacher} onChange={e => changeMeta("teacher", e.target.value)} />
//                 </div>

//                 {/* table: Optimisé pour l'impression */}
//                 <div className="overflow-x-auto print:overflow-visible">
//                     <table className="w-full text-[10px] border-collapse print:text-[9px]">
//                         <thead>
//                             <tr className="bg-gray-100 print:bg-gray-200">
//                                 <th className="border p-1 w-24 print:p-0.5">Skills</th>
//                                 <th className="border p-1 w-48 print:p-0.5">Description</th>
//                                 <th className="border p-1 text-center w-16 print:p-0.5">Evaluation</th>
//                                 <th className="border p-1 text-center w-12 print:p-0.5">SCl</th>
//                                 <th className="border p-1 text-center w-20 print:p-0.5">
//                                     <select className="text-[10px] w-full print:text-[9px]" value={periodHeaders.h1} onChange={(e) => changeHeader("h1", e.target.value)}>
//                                         {MONTH_OPTIONS.map(m => <option key={m}>{m}</option>)}
//                                     </select>
//                                 </th>
//                                 <th className="border p-1 text-center w-20 print:p-0.5">
//                                     <select className="text-[10px] w-full print:text-[9px]" value={periodHeaders.h2} onChange={(e) => changeHeader("h2", e.target.value)}>
//                                         {MONTH_OPTIONS.map(m => <option key={m}>{m}</option>)}
//                                     </select>
//                                 </th>
//                                 <th className="border p-1 text-center w-20 print:p-0.5">
//                                     <select className="text-[10px] w-full print:text-[9px]" value={periodHeaders.h3} onChange={(e) => changeHeader("h3", e.target.value)}>
//                                         {MONTH_OPTIONS.map(m => <option key={m}>{m}</option>)}
//                                     </select>
//                                 </th>
//                                 <th className="border p-1 text-center w-24 print:p-0.5">Appreciation</th>
//                             </tr>
//                         </thead>

//                         <tbody>
//                             {SKILLS_TEMPLATE.map(skill => {
//                                 const state = data[skill.key];
//                                 return (
//                                     <React.Fragment key={skill.key}>
//                                         {skill.evaluations.map((ev, i) => (
//                                             <tr key={ev + i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
//                                                 {i === 0 && (
//                                                     <td className="border p-1 align-top font-semibold print:p-0.5" rowSpan={skill.evaluations.length}>
//                                                         <div className="text-[11px] print:text-[10px] leading-tight">{skill.title}</div>
//                                                     </td>
//                                                 )}
//                                                 {i === 0 && (
//                                                     <td className="border p-1 align-top print:p-0.5" rowSpan={skill.evaluations.length}>
//                                                         <div className="text-[9px] text-gray-600 print:text-[8px] leading-tight">{skill.description}</div>
//                                                     </td>
//                                                 )}

//                                                 <td className="border p-1 text-center align-top print:p-0.5">{ev}</td>

//                                                 {/* SCl: afficher la valeur SCl correspondante */}
//                                                 <td className="border p-1 text-center align-top print:p-0.5">{skill.sclValues[ev]}</td>

//                                                 {/* month selects */}
//                                                 <td className="border p-0.5 text-center print:p-0">
//                                                     <select className="w-full text-[10px] p-0.5 print:text-[9px] print:p-0" value={state.evals[ev].m1 || ""} onChange={(e) => changeNote(skill.key, ev, "m1", e.target.value)}>
//                                                         <option value="">-</option>
//                                                         {NOTE_OPTIONS.map(n => <option key={n} value={n}>{n}</option>)}
//                                                     </select>
//                                                 </td>

//                                                 <td className="border p-0.5 text-center print:p-0">
//                                                     <select className="w-full text-[10px] p-0.5 print:text-[9px] print:p-0" value={state.evals[ev].m2 || ""} onChange={(e) => changeNote(skill.key, ev, "m2", e.target.value)}>
//                                                         <option value="">-</option>
//                                                         {NOTE_OPTIONS.map(n => <option key={n} value={n}>{n}</option>)}
//                                                     </select>
//                                                 </td>

//                                                 <td className="border p-0.5 text-center print:p-0">
//                                                     <select className="w-full text-[10px] p-0.5 print:text-[9px] print:p-0" value={state.evals[ev].m3 || ""} onChange={(e) => changeNote(skill.key, ev, "m3", e.target.value)}>
//                                                         <option value="">-</option>
//                                                         {NOTE_OPTIONS.map(n => <option key={n} value={n}>{n}</option>)}
//                                                     </select>
//                                                 </td>

//                                                 {i === 0 && (
//                                                     <td className="border p-1 align-top print:p-0.5" rowSpan={skill.evaluations.length}>
//                                                         <select className="w-full text-[11px] p-0.5 print:text-[10px] print:p-0" value={state.appreciation || ""} onChange={(e) => changeGroupApp(skill.key, e.target.value)}>
//                                                             <option value="">-</option>
//                                                             {APPRECIATIONS.map(a => <option key={a} value={a}>{a}</option>)}
//                                                         </select>
//                                                     </td>
//                                                 )}
//                                             </tr>
//                                         ))}
//                                     </React.Fragment>
//                                 );
//                             })}
//                         </tbody>
//                     </table>
//                 </div>

//                 {/* Appreciation Legend + Periods - Réorganisé pour l'impression */}
//                 <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 print:mt-2 print:gap-2">
//                     {/* Appreciation Legend */}
//                     <div className="border rounded p-3 text-[11px] print:p-2 print:text-[10px]">
//                         <div className="font-semibold mb-2 print:mb-1">Appreciation Legend</div>
//                         <ul className="list-disc ml-4 space-y-1 print:space-y-0.5">
//                             <li><strong>Acquired</strong> — The student has mastered the skill.</li>
//                             <li><strong>In the process of acquire</strong> — Progressing but not yet mastered.</li>
//                             <li><strong>Expert</strong> — Performance above expectations.</li>
//                             <li><strong>Not acquired</strong> — Skill not yet acquired.</li>
//                         </ul>
//                     </div>

//                     {/* Periods */}
//                     <div className="border rounded p-3 text-[11px] print:p-2 print:text-[10px]">
//                         <div className="font-semibold mb-2 print:mb-1">Periods</div>

//                         <div className="grid grid-cols-3 gap-2 text-[10px] mb-3 print:mb-2 print:gap-1">
//                             {['h1', 'h2', 'h3'].map((header, index) => (
//                                 <div key={header}>
//                                     <div className="text-gray-600">Mont-{index + 1}</div>
//                                     <select className="w-full border px-1 py-0.5 rounded text-[10px] print:text-[9px]" 
//                                             value={periodHeaders[header]} 
//                                             onChange={e => changeHeader(header, e.target.value)}>
//                                         {MONTH_OPTIONS.map(m => <option key={m}>{m}</option>)}
//                                     </select>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Totals */}
//                         <div className="grid grid-cols-3 gap-2 text-[10px] items-center mb-2 print:mb-1 print:gap-1">
//                             {['t1', 't2', 't3'].map((total, index) => (
//                                 <div key={total} className="text-center">
//                                     <div className="text-gray-600">Totals</div>
//                                     <div className="font-semibold mt-1 print:mt-0.5">{totals[total]}</div>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Average per month */}
//                         <div className="grid grid-cols-3 gap-2 text-[10px] items-center mb-2 print:mb-1 print:gap-1">
//                             {['a1', 'a2', 'a3'].map((avg, index) => (
//                                 <div key={avg} className="text-center">
//                                     <div className="text-gray-600">Average (on 20)</div>
//                                     <div className="font-semibold mt-1 print:mt-0.5">{averages[avg]}</div>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Appreciation per month */}
//                         <div className="grid grid-cols-3 gap-2 text-[10px] print:gap-1">
//                             {['app1', 'app2', 'app3'].map((app, index) => (
//                                 <div key={app} className="text-center">
//                                     <div className="text-gray-600">Appreciation</div>
//                                     <select className="mt-1 w-full border px-1 py-0.5 rounded text-[10px] print:text-[9px] print:mt-0.5" 
//                                             value={periodInfo[app]} 
//                                             onChange={(e) => changePeriodInfo(app, e.target.value)}>
//                                         <option value="">-</option>
//                                         {MONTH_APPRECIATIONS.map(a => <option key={a}>{a}</option>)}
//                                     </select>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Summary + Signatures - Optimisé pour A4 */}
//                 <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-3 print:mt-4 print:gap-2">
//                     {/* Summary of Work */}
//                     <div className="border-2 border-gray-300 rounded-lg p-3 bg-white print:p-2">
//                         <div className="font-bold text-sm mb-2 text-center text-gray-800 print:text-xs">Summary</div>
                        
//                         <div className="space-y-2 print:space-y-1">
//                             <div className="text-center">
//                                 <div className="text-[10px] text-gray-600 mb-1">Overall Average</div>
//                                 <div className="text-base font-bold text-blue-700 print:text-sm">{overallAvg}</div>
//                             </div>

//                             <div>
//                                 <div className="text-[10px] font-medium mb-1">Appreciation</div>
//                                 <select className="w-full border border-gray-300 px-1 py-0.5 rounded text-[10px] print:text-[9px]">
//                                     <option value="">- Select -</option>
//                                     <option>Not acquired</option>
//                                     <option>In the process</option>
//                                     <option>Acquired</option>
//                                     <option>Expert</option>
//                                 </select>
//                             </div>

//                             <div>
//                                 <div className="text-[10px] font-medium mb-1">Position</div>
//                                 <input className="w-full text-center border border-gray-300 px-1 py-0.5 rounded text-[10px] print:text-[9px]" placeholder="e.g. 5/45" />
//                             </div>

//                             <div>
//                                 <div className="text-[10px] font-medium mb-1">Decision</div>
//                                 <select className="w-full border border-gray-300 px-1 py-0.5 rounded text-[10px] print:text-[9px]">
//                                     <option value="">- Select -</option>
//                                     <option>Has succeeded</option>
//                                     <option>Has failed</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Signatures */}
//                     {['Teacher', 'Headmaster', 'Parent'].map((role) => (
//                         <div key={role} className="border-2 border-gray-300 rounded-lg p-3 bg-white print:p-2">
//                             <div className="font-bold text-sm mb-3 text-center text-gray-800 print:text-xs print:mb-2">{role}'s Visa</div>
//                             <div className="h-20 border border-dashed border-gray-400 rounded mb-2 flex items-center justify-center print:h-16">
//                                 <span className="text-gray-500 text-[10px] print:text-[9px]">Signature & stamp</span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Contact Information */}
//                 <div className="mt-4 text-center text-[11px] bg-blue-50 border border-blue-200 rounded-lg p-3 print:mt-3 print:p-2 print:text-[10px]">
//                     <div className="font-bold text-blue-800 mb-1">School Information</div>
//                     <div className="flex flex-col sm:flex-row justify-center items-center gap-3 print:gap-2">
//                         <div><strong>Phone:</strong> +237 696 308 503</div>
//                         <div><strong>Head Office:</strong> Yaounde - Nkolbisson (Quartier Mbouda)</div>
//                     </div>
//                 </div>

//                 {/* Actions - Caché à l'impression */}
//                 <div className="flex justify-between items-center mt-4 print:hidden">
//                     <button onClick={() => navigate(-1)} className="px-3 py-1 border rounded text-sm">Back</button>
//                     <div className="flex gap-2">
//                         <button onClick={() => {
//                             if (confirm("Reset form?")) window.location.reload();
//                         }} className="px-3 py-1 border rounded text-sm">Reset</button>

//                         <button onClick={handlePreview} className="px-3 py-1 bg-blue-600 text-white rounded text-sm">Preview & Print</button>
//                     </div>
//                 </div>
//             </div>

//             {/* CSS pour l'impression */}
//             <style jsx>{`
//                 @media print {
//                     @page {
//                         size: A4 portrait;
//                         margin: 0.5cm;
//                     }
//                     body {
//                         -webkit-print-color-adjust: exact;
//                     }
//                     .print\\:p-0 {
//                         padding: 0 !important;
//                     }
//                     .print\\:bg-white {
//                         background: white !important;
//                     }
//                     .print\\:shadow-none {
//                         box-shadow: none !important;
//                     }
//                     .print\\:rounded-none {
//                         border-radius: 0 !important;
//                     }
//                 }
//             `}</style>
//         </div>
//     );
// }












































import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MONTH_OPTIONS = Array.from({ length: 10 }, (_, i) => `Mont-${i + 1}`);
const NOTE_OPTIONS = Array.from({ length: 20 }, (_, i) => i + 1);
const APPRECIATIONS = ["Not acquired", "In the process of acquire", "Expert", "Acquired"];
const MONTH_APPRECIATIONS = ["A", "NS", "A+"];

const SKILLS_TEMPLATE = [
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
];

export default function BulletinForm() {
    const navigate = useNavigate();

    // Fonction pour charger les données sauvegardées
    const loadSavedData = () => {
        try {
            const saved = localStorage.getItem('bulletinFormData');
            if (saved) {
                return JSON.parse(saved);
            }
        } catch (error) {
            console.error('Error loading saved data:', error);
        }
        return null;
    };

    // Fonction pour sauvegarder les données
    const saveData = (data) => {
        try {
            localStorage.setItem('bulletinFormData', JSON.stringify(data));
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    // Fonction pour effacer les données sauvegardées
    const clearSavedData = () => {
        try {
            localStorage.removeItem('bulletinFormData');
        } catch (error) {
            console.error('Error clearing saved data:', error);
        }
    };

    // Charger les données sauvegardées au montage du composant
    const savedData = loadSavedData();

    const [periodHeaders, setPeriodHeaders] = useState(
        savedData?.periodHeaders || { h1: MONTH_OPTIONS[0], h2: MONTH_OPTIONS[1], h3: MONTH_OPTIONS[2] }
    );

    const [meta, setMeta] = useState(savedData?.meta || {
        studentName: "",
        sex: "",
        className: "",
        level: "",
        term: "",
        year: "",
        teacher: ""
    });

    const [data, setData] = useState(() => {
        if (savedData?.data) {
            return savedData.data;
        } else {
            const root = {};
            SKILLS_TEMPLATE.forEach(s => {
                const evals = {};
                s.evaluations.forEach(ev => (evals[ev] = { m1: "", m2: "", m3: "" }));
                root[s.key] = { appreciation: "", evals };
            });
            return root;
        }
    });

    const [periodInfo, setPeriodInfo] = useState(savedData?.periodInfo || {
        pos1: "", pos2: "", pos3: "",
        app1: "", app2: "", app3: ""
    });

    // Sauvegarder les données à chaque changement
    useEffect(() => {
        const formData = {
            periodHeaders,
            meta,
            data,
            periodInfo
        };
        saveData(formData);
    }, [periodHeaders, meta, data, periodInfo]);

    const changeHeader = (k, v) => setPeriodHeaders(p => ({ ...p, [k]: v }));
    const changeMeta = (k, v) => setMeta(m => ({ ...m, [k]: v }));

    const changeNote = (skillKey, evalLabel, monthKey, value) => {
        setData(prev => ({
            ...prev,
            [skillKey]: {
                ...prev[skillKey],
                evals: {
                    ...prev[skillKey].evals,
                    [evalLabel]: { ...prev[skillKey].evals[evalLabel], [monthKey]: value ? Number(value) : "" }
                }
            }
        }));
    };

    const changeGroupApp = (skillKey, value) => {
        setData(prev => ({ ...prev, [skillKey]: { ...prev[skillKey], appreciation: value } }));
    };

    const changePeriodInfo = (k, v) => setPeriodInfo(p => ({ ...p, [k]: v }));

    // Nouveaux calculs selon vos spécifications
    const totals = useMemo(() => {
        let sumNotes1 = 0, sumNotes2 = 0, sumNotes3 = 0;
        let sumSCL1 = 0, sumSCL2 = 0, sumSCL3 = 0;

        SKILLS_TEMPLATE.forEach(skill => {
            const skillData = data[skill.key];
            skill.evaluations.forEach(ev => {
                const evalData = skillData.evals[ev];

                if (evalData.m1 !== "" && !isNaN(evalData.m1)) {
                    sumNotes1 += Number(evalData.m1);
                    sumSCL1 += skill.sclValues[ev];
                }

                if (evalData.m2 !== "" && !isNaN(evalData.m2)) {
                    sumNotes2 += Number(evalData.m2);
                    sumSCL2 += skill.sclValues[ev];
                }

                if (evalData.m3 !== "" && !isNaN(evalData.m3)) {
                    sumNotes3 += Number(evalData.m3);
                    sumSCL3 += skill.sclValues[ev];
                }
            });
        });

        return {
            t1: `${sumNotes1}/${sumSCL1}`,
            t2: `${sumNotes2}/${sumSCL2}`,
            t3: `${sumNotes3}/${sumSCL3}`,
            raw: { sumNotes1, sumSCL1, sumNotes2, sumSCL2, sumNotes3, sumSCL3 }
        };
    }, [data]);

    // Nouveaux calculs des averages selon vos spécifications
    const averages = useMemo(() => {
        const { sumNotes1, sumSCL1, sumNotes2, sumSCL2, sumNotes3, sumSCL3 } = totals.raw;

        const a1 = sumSCL1 > 0 ? Math.round((sumNotes1 / sumSCL1) * 20 * 100) / 100 : 0;
        const a2 = sumSCL2 > 0 ? Math.round((sumNotes2 / sumSCL2) * 20 * 100) / 100 : 0;
        const a3 = sumSCL3 > 0 ? Math.round((sumNotes3 / sumSCL3) * 20 * 100) / 100 : 0;

        return {
            a1: sumSCL1 > 0 ? `${a1}/20` : "0/20",
            a2: sumSCL2 > 0 ? `${a2}/20` : "0/20",
            a3: sumSCL3 > 0 ? `${a3}/20` : "0/20",
            raw: { a1, a2, a3 }
        };
    }, [totals]);

    // calcul overall average 
    const overallAvg = useMemo(() => {
        const { a1, a2, a3 } = averages.raw;
        const average = Math.round(((a1 + a2 + a3) / 3) * 100) / 100;
        return `${average}/20`;
    }, [averages]);

    const handlePreview = () => {
        const payload = { meta, periodHeaders, data, totals, averages, periodInfo, overallAvg };
        // Sauvegarder avant de naviguer
        saveData(payload);
        navigate("/preview", { state: payload });
    };

    const handleReset = () => {
        if (confirm("Are you sure you want to reset the form? All data will be lost.")) {
            clearSavedData();
            window.location.reload();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
            {/* Header */}
            <div className="w-full max-w-6xl mb-4">
                <div className="flex justify-between items-start text-xs text-gray-600">
                    <div className="">
                    <div className="font-extrabold">RÉPUBLIQUE DU CAMEROUN</div>
                       <div className="text-[9px] text-center">Paix-Travail-Patrie</div>
                       <div>Ministere de l'Education de base</div>
                       <div>Delegtion Regionale du Centre</div>
                    </div>
                    <div className="text-center">
                        <div className="font-bold text-sm">GROUPE SCOLAIRE BILINGUE LA GRÂCE DE DIEU</div>
                        <div className="text-[15px] font-bold">Report card</div>
                    </div>
                    <div className="text-center">
                        <div className="font-extrabold">REPUBLIC OF CAMEROON</div>
                        <div className="text-[9px]">Peace-Work-Fatherland</div>
                        <div>Ministry of Basic Education</div>
                        <div>Centre Regional Delegation</div>
                    </div>
                </div>
            </div>

            {/* Form container */}
            <div className="bg-white w-full max-w-6xl rounded-xl shadow-lg p-6">
                {/* meta inputs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    <input className="border px-3 py-2 rounded" placeholder="Full name" value={meta.studentName} onChange={(e) => changeMeta("studentName", e.target.value)} />
                    <select className="border px-3 py-2 rounded" value={meta.sex} onChange={e => changeMeta("sex", e.target.value)}>
                        <option value="">Sex</option><option>Male</option><option>Female</option>
                    </select>
                    <select className="border px-3 py-2 rounded" value={meta.className} onChange={e => changeMeta("className", e.target.value)}>
                        <option value="">Class</option>
                        <option>SIL</option><option>CP</option><option>CE1</option><option>CE2</option><option>CM1</option><option>CM2</option>
                        <option>Class 1</option><option>Class 2</option><option>Class 3</option><option>Class 4</option><option>Class 5</option><option>Class 6</option>
                    </select>

                    <select className="border px-3 py-2 rounded" value={meta.level} onChange={e => changeMeta("level", e.target.value)}>
                        <option value="">Level / Niveau</option>
                        <option>Level 1</option><option>Level 2</option><option>Level 3</option><option>Level 4</option><option>Level 5</option><option>Level 6</option>
                        <option>Niveau 1</option><option>Niveau 2</option><option>Niveau 3</option><option>Niveau 4</option><option>Niveau 5</option><option>Niveau 6</option>
                    </select>

                    <select className="border px-3 py-2 rounded" value={meta.term} onChange={e => changeMeta("term", e.target.value)}>
                        <option value="">Term / Trimestre</option>
                        <option>Term 1</option><option>Term 2</option><option>Term 3</option><option>Trimestre 1</option><option>Trimestre 2</option><option>Trimestre 3</option>
                    </select>

                    <select className="border px-3 py-2 rounded" value={meta.year} onChange={e => changeMeta("year", e.target.value)}>
                        <option value="">Academic Year</option>
                        {Array.from({ length: 27 }, (_, i) => 2024 + i).map(y => <option key={y}>{y}-{y + 1}</option>)}
                    </select>

                    <input className="border px-3 py-2 rounded" placeholder="Teacher" value={meta.teacher} onChange={e => changeMeta("teacher", e.target.value)} />
                </div>

                {/* debut du tableau*/}
                <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-2 w-36">Skills</th>
                                <th className="border p-2 w-96">Description</th>
                                <th className="border p-2 text-center w-20">Evaluation</th>
                                <th className="border p-2 text-center w-14">SCl</th>
                                <th className="border p-2 text-center w-24">
                                    <select className="text-xs" value={periodHeaders.h1} onChange={(e) => changeHeader("h1", e.target.value)}>
                                        {MONTH_OPTIONS.map(m => <option key={m}>{m}</option>)}
                                    </select>
                                </th>
                                <th className="border p-2 text-center w-24">
                                    <select className="text-xs" value={periodHeaders.h2} onChange={(e) => changeHeader("h2", e.target.value)}>
                                        {MONTH_OPTIONS.map(m => <option key={m}>{m}</option>)}
                                    </select>
                                </th>
                                <th className="border p-2 text-center w-24">
                                    <select className="text-xs" value={periodHeaders.h3} onChange={(e) => changeHeader("h3", e.target.value)}>
                                        {MONTH_OPTIONS.map(m => <option key={m}>{m}</option>)}
                                    </select>
                                </th>
                                <th className="border p-2 text-center w-28">Appreciation</th>
                            </tr>
                        </thead>

                        <tbody>
                            {SKILLS_TEMPLATE.map(skill => {
                                const state = data[skill.key];
                                return (
                                    <React.Fragment key={skill.key}>
                                        {skill.evaluations.map((ev, i) => (
                                            <tr key={ev + i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                                {i === 0 && (
                                                    <td className="border p-2 align-top font-semibold" rowSpan={skill.evaluations.length}>
                                                        <div className="text-sm">{skill.title}</div>
                                                    </td>
                                                )}
                                                {i === 0 && (
                                                    <td className="border p-2 align-top" rowSpan={skill.evaluations.length}>
                                                        <div className="text-xs text-gray-600">{skill.description}</div>
                                                    </td>
                                                )}

                                                <td className="border p-2 text-center align-top">{ev}</td>

                                                {/* SCl: afficher la valeur SCl correspondante */}
                                                <td className="border p-2 text-center align-top">{skill.sclValues[ev]}</td>

                                                {/* month selects */}
                                                <td className="border p-1 text-center">
                                                    <select className="w-full text-xs p-1" value={state.evals[ev].m1 || ""} onChange={(e) => changeNote(skill.key, ev, "m1", e.target.value)}>
                                                        <option value="">-</option>
                                                        {NOTE_OPTIONS.map(n => <option key={n} value={n}>{n}</option>)}
                                                    </select>
                                                </td>

                                                <td className="border p-1 text-center">
                                                    <select className="w-full text-xs p-1" value={state.evals[ev].m2 || ""} onChange={(e) => changeNote(skill.key, ev, "m2", e.target.value)}>
                                                        <option value="">-</option>
                                                        {NOTE_OPTIONS.map(n => <option key={n} value={n}>{n}</option>)}
                                                    </select>
                                                </td>

                                                <td className="border p-1 text-center">
                                                    <select className="w-full text-xs p-1" value={state.evals[ev].m3 || ""} onChange={(e) => changeNote(skill.key, ev, "m3", e.target.value)}>
                                                        <option value="">-</option>
                                                        {NOTE_OPTIONS.map(n => <option key={n} value={n}>{n}</option>)}
                                                    </select>
                                                </td>

                                                {i === 0 && (
                                                    <td className="border p-2 align-top" rowSpan={skill.evaluations.length}>
                                                        <select className="w-full text-sm p-1" value={state.appreciation || ""} onChange={(e) => changeGroupApp(skill.key, e.target.value)}>
                                                            <option value="">-</option>
                                                            {APPRECIATIONS.map(a => <option key={a} value={a}>{a}</option>)}
                                                        </select>
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

                {/* Appreciation Legend + Periods */}
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Appreciation Legend */}
                    <div className="border rounded p-4 text-xs">
                        <div className="font-semibold mb-2">Appreciation Legend</div>
                        <ul className="list-disc ml-5">
                            <li><strong>Acquired</strong> — The student has mastered the skill.</li>
                            <li><strong>In the process of acquire</strong> — Progressing but not yet mastered.</li>
                            <li><strong>Expert</strong> — Performance above expectations.</li>
                            <li><strong>Not acquired</strong> — Skill not yet acquired.</li>
                        </ul>
                    </div>

                    {/* Periods */}
                    <div className="border rounded p-4 text-sm">
                        <div className="font-semibold mb-2">Periods</div>

                        <div className="grid grid-cols-3 gap-2 text-xs mb-3">
                            <div>
                                {/* <div className="text-white-600">Mont-1</div> */}
                                <select className="w-full border px-2 py-1 rounded text-sm" value={periodHeaders.h1} onChange={e => changeHeader("h1", e.target.value)}>
                                    {MONTH_OPTIONS.map(m => <option key={m}>{m}</option>)}
                                </select>
                            </div>

                            <div>
                                {/* <div className="text-white-600">Mont-2</div> */}
                                <select className="w-full border px-2 py-1 rounded text-sm" value={periodHeaders.h2} onChange={e => changeHeader("h2", e.target.value)}>
                                    {MONTH_OPTIONS.map(m => <option key={m}>{m}</option>)}
                                </select>
                            </div>

                            <div>
                                {/* <div className="text-white-600">Mont-3</div> */}
                                <select className="w-full border px-2 py-1 rounded text-sm" value={periodHeaders.h3} onChange={e => changeHeader("h3", e.target.value)}>
                                    {MONTH_OPTIONS.map(m => <option key={m}>{m}</option>)}
                                </select>
                            </div>
                        </div>

                        {/* Totals (auto) - Nouveau format */}
                        <div className="grid grid-cols-3 gap-2 text-xs items-center mb-2">
                            <div className="text-center">
                                <div className="text-gray-600">Totals</div>
                                <div className="font-semibold mt-1">{totals.t1}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-gray-600">Totals</div>
                                <div className="font-semibold mt-1">{totals.t2}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-gray-600">Totals</div>
                                <div className="font-semibold mt-1">{totals.t3}</div>
                            </div>
                        </div>

                        {/* Average per month (auto, on 20) - Nouveau format */}
                        <div className="grid grid-cols-3 gap-2 text-xs items-center mb-2">
                            <div className="text-center">
                                <div className="text-gray-600">Average (/20)</div>
                                <div className="font-semibold mt-1">{averages.a1}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-gray-600">Average (/20)</div>
                                <div className="font-semibold mt-1">{averages.a2}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-gray-600">Average (/20)</div>
                                <div className="font-semibold mt-1">{averages.a3}</div>
                            </div>
                        </div>

                        {/* Appreciation per month (A / NS / A+) */}
                        <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="text-center">
                                <div className="text-gray-600">Appreciation</div>
                                <select className="mt-1 w-full border px-2 py-1 rounded text-sm" value={periodInfo.app1} onChange={(e) => changePeriodInfo("app1", e.target.value)}>
                                    <option value="">-</option>
                                    {MONTH_APPRECIATIONS.map(a => <option key={a}>{a}</option>)}
                                </select>
                            </div>

                            <div className="text-center">
                                <div className="text-gray-600">Appreciation</div>
                                <select className="mt-1 w-full border px-2 py-1 rounded text-sm" value={periodInfo.app2} onChange={(e) => changePeriodInfo("app2", e.target.value)}>
                                    <option value="">-</option>
                                    {MONTH_APPRECIATIONS.map(a => <option key={a}>{a}</option>)}
                                </select>
                            </div>

                            <div className="text-center">
                                <div className="text-gray-600">Appreciation</div>
                                <select className="mt-1 w-full border px-2 py-1 rounded text-sm" value={periodInfo.app3} onChange={(e) => changePeriodInfo("app3", e.target.value)}>
                                    <option value="">-</option>
                                    {MONTH_APPRECIATIONS.map(a => <option key={a}>{a}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Summary + Signatures - COMPACT VERSION */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Summary of Work - Compact */}
                    <div className="border-2 border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                        <div className="font-bold text-base mb-3 text-center text-gray-800">Summary</div>

                        <div className="space-y-3">
                            <div className="text-center">
                                <div className="text-xs text-gray-600 mb-1">Overall Average</div>
                                <div className="text-lg font-bold text-blue-700">{overallAvg}</div>
                            </div>

                            <div>
                                <div className="text-xs font-medium mb-1">Appreciation</div>
                                <select className="w-full border border-gray-300 px-2 py-1 rounded text-sm">
                                    <option value="">- Select -</option>
                                    <option>Not acquired</option>
                                    <option>In the process</option>
                                    <option>Acquired</option>
                                    <option>Expert</option>
                                </select>
                            </div>
                            <div className="text-xs font-medium mb-1">Position</div>
                            <input className=" w-full text-center border border-gray-300 px-2 py-1 rounded text-sm" />

                            <div>
                                <div className="text-xs font-medium mb-1">Decision</div>
                                <select className="w-full border border-gray-300 px-2 py-1 rounded text-sm">
                                    <option value="">- Select -</option>
                                    <option>Has succeeded</option>
                                    <option>Has failed</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Teacher's Visa - Compact */}
                    <div className="border-2 border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                        <div className="font-bold text-base mb-3 text-center text-gray-800">Teacher's Visa</div>
                    </div>

                    {/* Headmaster's Visa - Compact */}
                    <div className="border-2 border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                        <div className="font-bold text-base mb-3 text-center text-gray-800">Headmaster's Visa</div>
                    </div>

                    {/* Parent's Visa - Compact */}
                    <div className="border-2 border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                        <div className="font-bold text-base mb-3 text-center text-gray-800">Parent's Visa</div>
                    </div>
                </div>

                {/* Contact Information - Below the signatures */}
                <div className="mt-6 text-center text-sm bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="font-bold text-blue-800 mb-2">School Information</div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <div><strong>Phone:</strong> +237 696 308 503</div>
                        <div><strong>Head Office:</strong> Yaounde - Nkolbisson (Quartier Mbouda)</div>
                    </div>
                </div>

                {/* actions */}
                <div className="flex justify-between items-center mt-6">
                    <button onClick={() => navigate(-1)} className="px-4 py-2 border rounded text-sm">Back</button>
                    <div className="flex gap-3">
                        <button onClick={handleReset} className="px-4 py-2 border rounded text-sm">Reset</button>
                        <button onClick={handlePreview} className="px-4 py-2 bg-blue-600 text-white rounded text-sm">Preview & Print</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

