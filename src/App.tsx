import React, { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Sparkles,
  FlaskConical,
  ClipboardCheck,
  GraduationCap,
  Send,
  HelpCircle,
  CheckCircle,
  AlertCircle,
  Undo2,
  RefreshCcw,
  FileText,
  ChevronRight,
  User,
  Server,
  Brain,
  Award,
  Download,
  Flame,
  Check,
  ChevronDown,
  Info
} from "lucide-react";
import {
  IDENTITAS_MODUL,
  LANDASAN_MODUL,
  CAPAIAN_PEMBELAJARAN,
  PENDAHULUAN,
  PERSPEKTIF_ISLAM_SAINS,
  KONSEP_KIMIA_KURMA,
  DATA_PROKSIMAT_KURMA,
  PBL_PROBLEM_CASE,
  SINTAKS_PBL,
  LKPD_LIST,
  ASESMEN_SISTEM,
  SOAL_PILIHAN_GANDA,
  SOAL_ESSAY,
  REFERENSI_ILMIAH
} from "./data";

export default function App() {
  // Tab Navigation State
  const [activeTab, setActiveTab] = useState<"beranda" | "bab1-2" | "bab3" | "simulator" | "pbl-lkpd" | "kuis" | "ai">("beranda");

  // AI Chat State
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content:
        "Ahlan wa Sahlan! 👋 Saya adalah **Asisten AI E-Modul Kimia Kurma**. Saya di sini untuk membantu Anda mengkaji sains kimia di balik pohon dan buah kurma dalam tinjauan sains modern dan Al-Qur'an. Tanyakan apa saja, atau klik pertanyaan pemantik di bawah!"
    }
  ]);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  // Virtual Lab Simulator State
  const [selectedSample, setSelectedSample] = useState<"khalal" | "rutab" | "tamr" | "sukrosa">("khalal");
  const [selectedTest, setSelectedTest] = useState<"benedict" | "fehling" | "dpph">("benedict");
  const [isSimulating, setIsSimulating] = useState(false);
  const [testStage, setTestStage] = useState<"awal" | "proses" | "selesai">("awal");
  
  // Custom states inside simulator for visual effects
  const [solutionColor, setSolutionColor] = useState("bg-blue-400");
  const [precipitateText, setPrecipitateText] = useState("");
  const [sampleAnalysis, setSampleAnalysis] = useState("");

  // Kuis HOTS State
  const [userAnswersPg, setUserAnswersPg] = useState<{ [key: number]: string }>({});
  const [isPgSubmitted, setIsPgSubmitted] = useState<boolean>(false);
  const [showExplanation, setShowExplanation] = useState<{ [key: number]: boolean }>({});
  const [scorePg, setScorePg] = useState<number | null>(null);

  // Kuis Essay self-grading
  const [essayInputs, setEssayInputs] = useState<{ [key: number]: string }>({});
  const [showEssayAnswer, setShowEssayAnswer] = useState<{ [key: number]: boolean }>({});
  const [essayGrades, setEssayGrades] = useState<{ [key: number]: number }>({});

  // LKPD State
  const [lkpdAnswers, setLkpdAnswers] = useState<{ [lkpdId: string]: { [qIdx: number]: string } }>({
    "lkpd-1": { 0: "", 1: "" },
    "lkpd-2": { 0: "", 1: "" },
    "lkpd-3": { 0: "", 1: "" }
  });
  const [submittingLkpd, setSubmittingLkpd] = useState<{ [key: string]: boolean }>({});
  const [submittedLkpd, setSubmittedLkpd] = useState<{ [key: string]: boolean }>({});
  const [showLkpdFeedback, setShowLkpdFeedback] = useState<{ [lkpdId: string]: boolean }>({});

  // Trigger Chat from dynamic source (guided question buttons)
  const triggerAiResponse = async (question: string) => {
    if (isAiLoading) return;
    const newMsgs = [...chatMessages, { role: "user" as const, content: question }];
    setChatMessages(newMsgs);
    setIsAiLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMsgs })
      });
      const data = await response.json();
      if (data.reply) {
        setChatMessages([...newMsgs, { role: "assistant" as const, content: data.reply }]);
      } else {
        setChatMessages([...newMsgs, { role: "assistant" as const, content: "Maaf, terjadi kesalahan pemrosesan server. Silakan coba lagi." }]);
      }
    } catch (err: any) {
      setChatMessages([...newMsgs, { role: "assistant" as const, content: `Gagal menghubungi satelit server AI: ${err.message}` }]);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleSendChatMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const q = chatInput;
    setChatInput("");
    await triggerAiResponse(q);
  };

  // Run Virtual Experiment Simulation
  const runSimulator = () => {
    setIsSimulating(true);
    setTestStage("proses");
    
    // Set initial solution color dynamically based on test
    if (selectedTest === "dpph") {
      setSolutionColor("bg-purple-700 animate-pulse");
    } else {
      setSolutionColor("bg-blue-500 animate-pulse");
    }

    // Process simulation with time-out representing heating/incubation
    setTimeout(() => {
      setTestStage("selesai");
      setIsSimulating(false);

      if (selectedTest === "benedict") {
        if (selectedSample === "khalal") {
          setSolutionColor("bg-yellow-500 border-b-8 border-orange-600");
          setPrecipitateText("Endapan Kuning-Hijau Sedikit (Gula Pereduksi Sedang)");
          setSampleAnalysis("Reaksi reduksi Cu²⁺ (Benedict) sedang. Hal ini disebabkan kandungan gula pereduksi bebas pada kurma muda masih berkisar 18-25% karena sebagian masih terikat atau terpolimerasi sebagai pati dinding sel.");
        } else if (selectedSample === "rutab") {
          setSolutionColor("bg-orange-500 border-b-12 border-red-700");
          setPrecipitateText("Endapan Jingga-Merah Bata Jelas (Gula Pereduksi Tinggi)");
          setSampleAnalysis("Reaksi reduksi Cu²⁺ melimpah menghasilkan ion tembaga(I) kation Cu⁺ yang berikatan oksida membentuk Cu₂O jingga menyebar. Rutab mengandung sekitar 45-55% glukosa-fruktosa monomer bebas larut air.");
        } else if (selectedSample === "tamr") {
          setSolutionColor("bg-red-700 border-b-16 border-red-900");
          setPrecipitateText("Endapan Merah Bata Pekat Tebal (Gula Pereduksi Sangat Tinggi)");
          setSampleAnalysis("Reduksi Cu²⁺ maksimal secara stoikiometrik menghasilkan endapan tembaga(I) oksida Cu₂O merah tua tebal. Karbohidrat kurma Tamr melimpah ruah (60-75% gula pereduksi instan).");
        } else {
          setSolutionColor("bg-blue-500 border-b-2 border-blue-600");
          setPrecipitateText("Tidak Ada Endapan (Tetap Biru Jernih)");
          setSampleAnalysis("Sukrosa adalah disakarida non-pereduksi karena ikatan glikosidis menutupi gugus hemiasetal/anomerik C1 glukosa dan C2 fruktosa, sehingga reagen Benedict tidak mampu mengoksidasinya.");
        }
      } else if (selectedTest === "fehling") {
        if (selectedSample === "khalal") {
          setSolutionColor("bg-yellow-600 border-b-4 border-amber-800");
          setPrecipitateText("Endapan Hijau Tua Kekuningan");
          setSampleAnalysis("Reagen Fehling menghasilkan endapan Cu₂O tipis. Kompleks tartrat Fehling menuntut pH alkali yang sangat stabil.");
        } else if (selectedSample === "rutab") {
          setSolutionColor("bg-red-500 border-b-8 border-red-800");
          setPrecipitateText("Endapan Merah Bata Sedang");
          setSampleAnalysis("Monomer glukosa sedia direduksi sempurna di bawah suhu didih.");
        } else if (selectedSample === "tamr") {
          setSolutionColor("bg-red-950 border-b-12 border-orange-950");
          setPrecipitateText("Endapan Merah Bata Gelap Berlapis");
          setSampleAnalysis("Fase Tamr mentransfer elektron secara masif kepada larutan Fehling dalam hitungan detik penangas air.");
        } else {
          setSolutionColor("bg-blue-600");
          setPrecipitateText("Tidak Ada Reaksi (Tetap Biru Larutan)");
          setSampleAnalysis("Tanpa gugus karbonil bebas yang fungsional, sukrosa menolak mentransfer muatan elektron kepada larutan ion Cu²⁺ kompleks alkali.");
        }
      } else { // DPPH Antioksidan
        if (selectedSample === "khalal") {
          setSolutionColor("bg-yellow-100 border-2 border-yellow-200");
          setPrecipitateText("Dekolorisasi Sempurna (Ungu -> Kuning Jerami Terang)");
          setSampleAnalysis("Kapastias antioksidan PALING KUAT (IC50 terkecil)! Kurma muda Khalal menyimpan kadar flavonoid bebas aktif dan Vitamin C paling melimpah (sebelum tereduksi/teroksidasi seiring penuaan sel buah). Unsur fenolik mendonorkan hidrogen secara penuh menetralisir radikal ungu.");
        } else if (selectedSample === "rutab") {
          setSolutionColor("bg-yellow-200 border-2 border-yellow-300");
          setPrecipitateText("Dekolorisasi Kuat (Ungu -> Kuning-Kehijauan)");
          setSampleAnalysis("Menunjukkan kekuatan antioksidan tinggi. Flavonoid Rutab menetralkan spesi elektron bebas radikal dengan sangat memadai.");
        } else if (selectedSample === "tamr") {
          setSolutionColor("bg-rose-200");
          setPrecipitateText("Dekolorisasi Sebagian (Ungu -> Merah Muda Pucat/Cokelat Muda)");
          setSampleAnalysis("Kandungan antioksidan fungsional menurun di fase kering karena Vitamin C terdegradasi suhu alamiah dan polifenol terasimilasi menjadi polimer dinding sel, namun sisa flavonoidnya tetap memadai menstabilkan radikal.");
        } else {
          setSolutionColor("bg-purple-700");
          setPrecipitateText("Warna Tetap Ungu Pekat (Sama Sekali Tanpa Dekolorisasi)");
          setSampleAnalysis("Sukrosa tidak mempunyai gugus donor elektron ataupun gugus hidroksil fenol bebas untuk mentransfer kation hidrogen, sehingga larutan radikal bebas DPPH tidak tereduksi.");
        }
      }
    }, 2500);
  };

  // Reset Simulator
  const resetSimulatorTab = () => {
    setTestStage("awal");
    setPrecipitateText("");
    setSampleAnalysis("");
  };

  // Kuis PG Grader
  const selectPgAnswer = (qNo: number, selection: string) => {
    if (isPgSubmitted) return;
    setUserAnswersPg({ ...userAnswersPg, [qNo]: selection });
  };

  const submitPgQuiz = () => {
    let matches = 0;
    SOAL_PILIHAN_GANDA.forEach((s) => {
      if (userAnswersPg[s.nomor] === s.kunci) {
        matches++;
      }
    });
    const finalScore = (matches / SOAL_PILIHAN_GANDA.length) * 100;
    setScorePg(finalScore);
    setIsPgSubmitted(true);

    // Auto open explanations
    const expls: { [key: number]: boolean } = {};
    SOAL_PILIHAN_GANDA.forEach((s) => {
      expls[s.nomor] = true;
    });
    setShowExplanation(expls);
  };

  const resetPgQuiz = () => {
    setUserAnswersPg({});
    setIsPgSubmitted(false);
    setShowExplanation({});
    setScorePg(null);
  };

  // LKPD Handler
  const handleLkpdInputChange = (lkpdId: string, qIdx: number, val: string) => {
    setLkpdAnswers({
      ...lkpdAnswers,
      [lkpdId]: {
        ...lkpdAnswers[lkpdId],
        [qIdx]: val
      }
    });
  };

  const submitLkpdAnswer = (lkpdId: string) => {
    setSubmittingLkpd({ ...submittingLkpd, [lkpdId]: true });
    setTimeout(() => {
      setSubmittingLkpd({ ...submittingLkpd, [lkpdId]: false });
      setSubmittedLkpd({ ...submittedLkpd, [lkpdId]: true });
      setShowLkpdFeedback({ ...showLkpdFeedback, [lkpdId]: true });
    }, 1500);
  };

  const downloadCompiledReport = (lkpdId: string) => {
    const lkpdObj = LKPD_LIST.find((l) => l.id === lkpdId);
    if (!lkpdObj) return;

    const answers = lkpdAnswers[lkpdId];
    let content = `=========================================================\n`;
    content += ` LAPORAN JAWABAN LKPD DIGITAL - ELEKTRONIK MODUL KIMIA\n`;
    content += ` TEMA: "Kurma: Mukjizat Buah Surga - Integrasi Islam & Sains"\n`;
    content += `=========================================================\n\n`;
    content += `Identitas LKPD: ${lkpdObj.judul}\n`;
    content += `Tujuan Eksperimen: ${lkpdObj.tujuan}\n\n`;
    content += `---------------- JAWABAN SISWA ----------------\n\n`;
    
    lkpdObj.pertanyaanHots.forEach((q, idx) => {
      content += `Pertanyaan ${idx + 1}:\n${q.tanya}\n\n`;
      content += `Jawaban Anda:\n${answers[idx] || "(Belum dijawab)"}\n\n`;
      content += `Kunci Panduan Akademik Pelengkap:\n${q.panduanJawab}\n`;
      content += `---------------------------------------------------------\n\n`;
    });

    content += `Dicetak otomatis melalui platform pembelajaran pintar AI E-Modul.`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Laporan_LKPD_${lkpdId}_KimiaKurma.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col antialiased">
      {/* Dynamic Upper Hero banner with Islamic Green and Gold Theme */}
      <header className="bg-emerald-950 text-emerald-100 border-b-4 border-amber-500 shadow-lg relative overflow-hidden" id="header-section">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900 rounded-full filter blur-3xl opacity-30 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-800 rounded-full filter blur-3xl opacity-20 -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 py-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900 border border-emerald-700 text-amber-300 uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" /> E-Modul Kimia Kurikulum Merdeka
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Kurma: Mukjizat Buah Surga
            </h1>
            <p className="text-amber-400 font-serif text-lg md:text-xl mt-2 italic font-medium">
              Integrasi Al-Qur'an dan Sains Modern
            </p>
            <p className="text-slate-300 text-sm md:text-base mt-2 max-w-2xl font-light">
              Materi Ajar Kimia SMA/MA Kelas X Fase E Berbasis Pendekatan <strong className="text-white font-medium">Problem Based Learning (PBL)</strong>. Mengintegrasikan hukum alam yang presisi dengan kalam Ilahi.
            </p>
          </div>

          <div className="bg-emerald-900/80 backdrop-blur-sm border border-emerald-800 p-5 rounded-2xl w-full md:w-80 shadow-md">
            <h3 className="text-amber-400 font-semibold text-xs uppercase tracking-wider mb-2 flex items-center gap-1">
              <Info className="w-3.5 h-3.5" /> Spesifikasi Modul:
            </h3>
            <ul className="space-y-1.5 text-xs text-emerald-100 font-mono">
              <li><strong className="text-slate-300">Kelas:</strong> X SMA/MA (Fase E)</li>
              <li><strong className="text-slate-300">Semester:</strong> Genap / 5 JP</li>
              <li><strong className="text-slate-300">Metode:</strong> Problem Based Learning</li>
              <li><strong className="text-slate-300">Fokus:</strong> Karbohidrat, Redoks, Antioksidan</li>
              <li><strong className="text-slate-300">Model:</strong> Integrasi Islam-Sains</li>
            </ul>
            <div className="mt-4 pt-3 border-t border-emerald-800 flex justify-between items-center text-[11px] text-emerald-300">
              <span>Sistem: <span className="text-amber-300 font-semibold">Online & Interactive</span></span>
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-amber-400 font-semibold">v3.5</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Inner Layout with Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full flex flex-col lg:flex-row gap-8">
        
        {/* Navigation Sidebar */}
        <aside className="w-full lg:w-72 shrink-0 flex flex-col gap-4">
          <div className="sticky top-6 flex flex-col gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="p-4 bg-slate-100 border-b border-slate-200">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Daftar Menu E-Modul</span>
              </div>
              <nav className="p-2 space-y-1" id="e-modul-navigation">
                <button
                  id="tab-beranda"
                  onClick={() => setActiveTab("beranda")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === "beranda"
                      ? "bg-emerald-900 text-white shadow-xs"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <BookOpen className="w-5 h-5 shrink-0" />
                  <span>Identitas & Landasan</span>
                </button>

                <button
                  id="tab-bab1-2"
                  onClick={() => {
                    setActiveTab("bab1-2");
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === "bab1-2"
                      ? "bg-emerald-900 text-white shadow-xs"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <Brain className="w-5 h-5 shrink-0" />
                  <span>Bab I & II: Islam & Sains</span>
                </button>

                <button
                  id="tab-bab3"
                  onClick={() => {
                    setActiveTab("bab3");
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === "bab3"
                      ? "bg-emerald-900 text-white shadow-xs"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <FlaskConical className="w-5 h-5 shrink-0" />
                  <span>Bab III: Konsep Kimia</span>
                </button>

                <button
                  id="tab-simulator"
                  onClick={() => {
                    setActiveTab("simulator");
                    resetSimulatorTab();
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === "simulator"
                      ? "bg-amber-500 text-slate-950 font-bold shadow-md"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <Flame className="w-5 h-5 shrink-0 text-amber-700" />
                  <span>Virtual Lab Simulator</span>
                </button>

                <button
                  id="tab-pbl-lkpd"
                  onClick={() => {
                    setActiveTab("pbl-lkpd");
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === "pbl-lkpd"
                      ? "bg-emerald-900 text-white shadow-xs"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <ClipboardCheck className="w-5 h-5 shrink-0" />
                  <span>Sintaks PBL & LKPD</span>
                </button>

                <button
                  id="tab-kuis"
                  onClick={() => {
                    setActiveTab("kuis");
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === "kuis"
                      ? "bg-emerald-900 text-white shadow-xs"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <GraduationCap className="w-5 h-5 shrink-0" />
                  <span>Evaluasi & Kuis HOTS</span>
                </button>
              </nav>
            </div>

            {/* Quick Link block to consult Gemini AI Agent */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-5 h-5 text-emerald-800" />
                <h4 className="font-semibold text-emerald-900 text-sm">Butuh Panduan Guru?</h4>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed mb-3">
                Silakan beralih ke panel Asisten AI kapan saja untuk berkonsultasi mengenai biokimia kurma dan ayat Al-Qur'an secara real-time.
              </p>
              <button
                id="btn-switch-ai-assistant"
                onClick={() => {
                  setActiveTab("ai");
                  window.scrollTo({ top: 300, behavior: "smooth" });
                }}
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-medium text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Tanya Asisten AI</span>
                <Send className="w-3 h-3" />
              </button>
            </div>
            
            {/* Context Widget containing Quran Quotes */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl">
              <h5 className="text-xs font-extrabold text-amber-900 tracking-wider uppercase mb-1.5 font-serif">Al-An'am : 99</h5>
              <p className="text-[11px] text-amber-950 font-serif leading-relaxed italic mb-1">
                "...Perhatikanlah buahnya pada waktu berbuah, dan perilakunya yang menjadi matang. Sungguh, pada yang demikian itu terdapat tanda-tanda kekuasaan bagi orang-orang yang beriman."
              </p>
              <span className="text-[10px] text-amber-700 uppercase tracking-widest font-mono">Mukjizat Berproses</span>
            </div>
          </div>
        </aside>

        {/* Content Workspace Area */}
        <main className="flex-1 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8" id="modul-workspace-area">
          
          {/* TAB 1: BERANDA & IDENTITAS */}
          {activeTab === "beranda" && (
            <div className="space-y-8 animate-fade-in">
              <section id="identitas-modul-box" className="bg-slate-50 border border-slate-200 p-6 rounded-2xl relative">
                <div className="absolute top-0 right-0 p-3 bg-slate-200 text-slate-700 text-xs font-bold rounded-bl-xl uppercase tracking-wider font-mono">
                  Identitas Modul
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-emerald-700" />
                  1. Identitas Akademik Modul
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-3">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex flex-col justify-center">
                    <span className="text-xs text-slate-500 font-semibold uppercase font-mono">Satuan Pendidikan</span>
                    <strong className="text-slate-900 text-base">SMA / Madrasah Aliyah (MA)</strong>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex flex-col justify-center">
                    <span className="text-xs text-slate-500 font-semibold uppercase font-mono">Mata Pelajaran & Fase</span>
                    <strong className="text-slate-900 text-base">{IDENTITAS_MODUL.mataPelajaran} — Fase {IDENTITAS_MODUL.fase}</strong>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex flex-col justify-center">
                    <span className="text-xs text-slate-500 font-semibold uppercase font-mono">Kelas / Semester</span>
                    <strong className="text-slate-900 text-base">Kelas {IDENTITAS_MODUL.kelas} / Semester {IDENTITAS_MODUL.semester}</strong>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex flex-col justify-center">
                    <span className="text-xs text-slate-500 font-semibold uppercase font-mono">Alokasi Waktu Pembelajaran</span>
                    <strong className="text-slate-900 text-base">{IDENTITAS_MODUL.alokasiWaktu}</strong>
                  </div>
                </div>
              </section>

              {/* Landasan Modul Section */}
              <section id="landasan-modul-box" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Brain className="w-6 h-6 text-emerald-700" />
                    2. Landasan Pengembangan Modul
                  </h2>
                  <p className="text-slate-600 text-sm">
                    Modul ini disusun berdasarkan lima dimensi pijakan guna melahirkan pembelajaran holistik, tidak sekadar mengasah inteligensi melainkan juga membina spiritualitas peserta didik.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-100 p-5 rounded-2xl transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-3">Ⅰ</div>
                    <h3 className="font-bold text-emerald-950 text-base mb-1">Landasan Filosofis</h3>
                    <p className="text-xs text-emerald-900 leading-relaxed font-light">{LANDASAN_MODUL.filosofis}</p>
                  </div>
                  
                  <div className="bg-amber-50/50 hover:bg-amber-50 border border-amber-100 p-5 rounded-2xl transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-3">Ⅱ</div>
                    <h3 className="font-bold text-amber-950 text-base mb-1">Landasan Teologis</h3>
                    <p className="text-xs text-amber-900 leading-relaxed font-light">{LANDASAN_MODUL.teologis}</p>
                  </div>

                  <div className="bg-slate-50 hover:bg-slate-100/50 border border-slate-200 p-5 rounded-2xl transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center font-bold mb-3">Ⅲ</div>
                    <h3 className="font-bold text-slate-950 text-base mb-1">Landasan Ilmiah</h3>
                    <p className="text-xs text-slate-900 leading-relaxed font-light">{LANDASAN_MODUL.ilmiah}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-50 hover:bg-slate-100/50 border border-slate-200 p-5 rounded-2xl transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center font-bold mb-3">Ⅳ</div>
                    <h3 className="font-bold text-slate-950 text-base mb-1">Landasan Pedagogis</h3>
                    <p className="text-xs text-slate-900 leading-relaxed font-light">{LANDASAN_MODUL.pedagogis}</p>
                  </div>

                  <div className="bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-100 p-5 rounded-2xl transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-3">Ⅴ</div>
                    <h3 className="font-bold text-emerald-950 text-base mb-1">Pendidikan Nasional</h3>
                    <p className="text-xs text-emerald-900 leading-relaxed font-light">{LANDASAN_MODUL.pendidikanNasional}</p>
                  </div>

                  <div className="bg-amber-50/50 hover:bg-amber-50 border border-amber-100 p-5 rounded-2xl transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-3">Ⅵ</div>
                    <h3 className="font-bold text-amber-950 text-base mb-1">Hubungan Wahyu & Sains</h3>
                    <p className="text-xs text-amber-900 leading-relaxed font-light">{LANDASAN_MODUL.integrasiWahyuSains}</p>
                  </div>
                </div>
              </section>

              {/* Capaian Pembelajaran Box */}
              <section id="capaian-pembelajaran-box" className="border-t border-slate-200 pt-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-emerald-700" />
                    3. Capaian & Tujuan Pembelajaran
                  </h2>
                  <p className="text-slate-600 text-sm">
                    Target pencapaian akademik dan pembentukan karakter kognitif berjenjang (C2 s.d. C6) serta Profil Pelajar Pancasila.
                  </p>
                </div>

                <div className="p-5 bg-gradient-to-r from-emerald-950 to-emerald-900 rounded-2xl text-white shadow-xs">
                  <h3 className="text-xs font-bold font-mono tracking-widest text-amber-300 uppercase mb-2">Capaian Pembelajaran (CP) Fase E</h3>
                  <p className="text-sm font-light leading-relaxed text-emerald-50">{CAPAIAN_PEMBELAJARAN.faseECP}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Tujuan Pembelajaran list */}
                  <div className="bg-white border border-slate-200 p-5 rounded-2xl">
                    <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-2 mb-3 text-sm tracking-wide uppercase">Goals Akademik (Tujuan):</h4>
                    <div className="space-y-3">
                      {CAPAIAN_PEMBELAJARAN.tujuanPembelajaran.map((tp) => (
                        <div key={tp.kode} className="flex gap-3 leading-relaxed">
                          <span className="shrink-0 inline-block px-2.5 py-0.5 h-fit text-[10px] font-bold rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200 font-mono">
                            {tp.kode}
                          </span>
                          <p className="text-xs text-slate-700">
                            <strong className="text-slate-950 font-semibold">{tp.level}</strong>: {tp.deskripsi}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Profil Pelajar Pancasila List */}
                  <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                    <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-2 mb-3 text-sm tracking-wide uppercase">Profil Pelajar Pancasila:</h4>
                    <div className="space-y-3.5">
                      {CAPAIAN_PEMBELAJARAN.profilPancasila.map((p, idx) => (
                        <div key={idx} className="flex gap-2.5 items-start">
                          <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-xs text-slate-900 block">{p.dimensi}</strong>
                            <p className="text-[11px] text-slate-600 font-light mt-0.5">{p.deskripsi}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Action area leading to next tab */}
              <div className="flex justify-end pt-4">
                <button
                  id="btn-goto-bab1"
                  onClick={() => {
                    setActiveTab("bab1-2");
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className="bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm px-5 py-3 rounded-xl flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Mulai Membaca Bab I & II</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: BAB I & II (PENDAHULUAN & PERSPEKTIF ISLAM/SAINS) */}
          {activeTab === "bab1-2" && (
            <div className="space-y-10 animate-fade-in">
              
              {/* BAB I */}
              <article className="space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-extrabold tracking-widest text-emerald-800 uppercase block">Bagian Satu</span>
                  <h2 className="text-3xl font-extrabold text-slate-900 mt-1 font-serif">BAB I: Pendahuluan</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-relaxed">
                  <div className="space-y-4 text-sm text-slate-700 font-light">
                    <p>
                      <strong className="text-slate-950 font-semibold text-base">Latar Belakang Kontekstual:</strong> {PENDAHULUAN.latarBelakang}
                    </p>
                    <p>
                      <strong className="text-slate-950 font-semibold text-base">Urgensi Kimia Pangan:</strong> {PENDAHULUAN.urgensiKimiaPangan}
                    </p>
                  </div>

                  <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-amber-800 font-bold block mb-2">Ayat Inspirasi & Integrasi</span>
                      <p className="text-emerald-950 font-serif text-lg leading-relaxed text-right font-medium Arabic-Font mb-2">
                        {PENDAHULUAN.ayatQuran.teks}
                      </p>
                      <p className="text-xs font-serif text-slate-800 italic leading-relaxed">
                        "{PENDAHULUAN.ayatQuran.terjemahan}" (<strong className="text-amber-900">{PENDAHULUAN.ayatQuran.surah}: {PENDAHULUAN.ayatQuran.ayat}</strong>)
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-amber-200/60">
                      <strong className="text-xs text-amber-950 block uppercase tracking-wider mb-1">Tafsir Ilmiah Modern:</strong>
                      <p className="text-[11px] text-slate-700 leading-relaxed">{PENDAHULUAN.ayatQuran.tafsirIlmiah}</p>
                    </div>
                  </div>
                </div>

                {/* Research Gap Analysis 2020-2026 Bento */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 border border-slate-200 p-6 rounded-2xl">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm tracking-wide uppercase mb-2">Gap Penelitian Kontemporer (2020–2026)</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{PENDAHULUAN.gapResearch}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm tracking-wide uppercase mb-2">Novelty (Kebaruan) E-Modul</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{PENDAHULUAN.novelty}</p>
                  </div>
                </div>
              </article>

              {/* BAB II */}
              <article className="space-y-6 border-t border-slate-200 pt-8" id="bab-2-section">
                <div className="pb-4">
                  <span className="text-xs font-mono font-extrabold tracking-widest text-emerald-800 uppercase block">Bagian Dua</span>
                  <h2 className="text-3xl font-extrabold text-slate-900 mt-1 font-serif">BAB II: Kurma dalam Perspektif Islam & Sains</h2>
                </div>

                <div className="text-sm text-slate-700 space-y-4 leading-relaxed font-light">
                  <p>
                    {PERSPEKTIF_ISLAM_SAINS.sejarahPeradaban}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-950 text-sm uppercase tracking-wider mb-3">Kontribusi Tokoh dan Peneliti Biokimia Kurma:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {PERSPEKTIF_ISLAM_SAINS.kontribusiSains.map((k, idx) => (
                      <div key={idx} className="bg-white border border-slate-200 p-4 rounded-xl flex flex-col justify-between shadow-xs">
                        <div className="mb-2">
                          <strong className="text-xs text-emerald-900 block font-mono">{k.tokoh}</strong>
                          <p className="text-xs text-slate-600 italic mt-1 leading-relaxed">"{k.temuan}"</p>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono text-right capitalize">Peradaban & Temuan</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <div className="flex justify-between pt-4">
                <button
                  id="btn-back-to-beranda"
                  onClick={() => {
                    setActiveTab("beranda");
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className="border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-all"
                >
                  <Undo2 className="w-4 h-4" />
                  <span>Identitas</span>
                </button>
                <button
                  id="btn-goto-bab3"
                  onClick={() => {
                    setActiveTab("bab3");
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className="bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm px-5 py-3 rounded-xl flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Mempelajari Bab III: Konsep Kimia</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: BAB III (KONSEP KIMIA KURMA MENDALAM) */}
          {activeTab === "bab3" && (
            <div className="space-y-10 animate-fade-in">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-extrabold tracking-widest text-emerald-800 uppercase block">Bagian Tiga</span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-1 font-serif">BAB III: Kandungan Kimia Kurma & Eksperimen</h2>
                <p className="text-slate-600 text-xs md:text-sm mt-1.5">
                  Bab ini membahas empat pilar biokimia dan fisika-kimia penting kurma secara mendalam didukung simulasi reaksi lab kualitatif.
                </p>
              </div>

              {/* Dynamic rendering sub chapters from data.ts */}
              <div className="space-y-12">
                {KONSEP_KIMIA_KURMA.map((k, index) => (
                  <section key={index} className="space-y-4 border-b border-slate-100 pb-8 last:border-none last:pb-0">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-sm">
                        {index + 1}
                      </span>
                      {k.judul}
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      <div className="lg:col-span-7 space-y-3">
                        <p className="text-slate-700 text-sm leading-relaxed font-light">{k.teori}</p>
                        
                        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                          <strong className="text-xs text-slate-900 block font-mono">Fakta Data Ilmiah Terbaru (HPLC/Lab):</strong>
                          <p className="text-xs text-slate-600 leading-relaxed italic">{k.dataIlmiah}</p>
                        </div>

                        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                          <strong className="text-xs text-slate-900 block">Contoh Kontekstual Sehari-hari:</strong>
                          <p className="text-xs text-slate-600 leading-relaxed font-light">{k.contohKontekstual}</p>
                        </div>
                      </div>

                      <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                        {k.persamaanReaksi && (
                          <div className="p-4 bg-slate-900 text-emerald-400 font-mono text-xs rounded-2xl border border-slate-800 select-all shadow-xs leading-5">
                            <span className="text-[10px] text-slate-500 uppercase block tracking-wider mb-1">Persamaan Reaksi Kimia</span>
                            {k.persamaanReaksi.split("\n").map((line, i) => (
                              <p key={i}>{line}</p>
                            ))}
                          </div>
                        )}

                        {k.ayatTerkait && (
                          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl flex flex-col justify-between">
                            <div>
                              <span className="text-[9px] uppercase font-mono tracking-wider text-amber-800 font-bold block mb-1">
                                Integrasi Kitab Suci ({k.ayatTerkait.surah}: {k.ayatTerkait.ayat})
                              </span>
                              <p className="text-slate-900 text-right font-serif text-sm Arabic-Font inline-block w-full mb-1">
                                {k.ayatTerkait.teks}
                              </p>
                              <p className="text-[11px] text-slate-800 italic leading-relaxed">
                                "...{k.ayatTerkait.terjemahan}"
                              </p>
                            </div>
                            <div className="mt-2.5 pt-2.5 border-t border-amber-200">
                              <p className="text-[10px] text-slate-600 leading-relaxed">
                                <strong className="text-amber-900 uppercase tracking-wide inline text-[9.5px]">Implikasi Medis:</strong> {k.ayatTerkait.tafsirIlmiah}
                              </p>
                            </div>
                          </div>
                        )}
                        
                        <div className="p-3.5 border border-slate-200 bg-white rounded-xl flex items-start gap-2.5">
                          <Info className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-xs text-slate-800 block">Visual Makroskopis/Mikroskopis:</strong>
                            <p className="text-[11px] text-slate-600 leading-relaxed">{k.ilustrasiDeskripsi}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              {/* Data proksimat bento table */}
              <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4" id="table-proksimat-kurma">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-slate-200 pb-3 gap-2">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Tabel Analisis Kimia Proksimat Kurma Berbagai Fase Kematangan</h4>
                    <p className="text-xs text-slate-500">Menyajikan data kandungan zat per 100g kurma untuk 3 stadium kematangan.</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-slate-200 text-slate-700 font-mono font-semibold">Simulasi Lab 2025</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-300 bg-slate-100 text-slate-800 uppercase font-mono text-[10px]">
                        <th className="py-2.5 px-3">Parameter Analitik Kimia</th>
                        <th className="py-2.5 px-3">Fase 1: Khalal (Mengkal)</th>
                        <th className="py-2.5 px-3">Fase 2: Rutab (Basah)</th>
                        <th className="py-2.5 px-3 text-emerald-900 font-bold">Fase 3: Tamr (Kering)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {DATA_PROKSIMAT_KURMA.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-100/50">
                          <td className="py-2.5 px-3 font-medium text-slate-800">{row.parameter}</td>
                          <td className="py-2.5 px-3 text-slate-600">{row.khalal}</td>
                          <td className="py-2.5 px-3 text-slate-600">{row.rutab}</td>
                          <td className="py-2.5 px-3 text-emerald-950 font-bold">{row.tamr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-[11px] text-slate-600 leading-relaxed flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-800 shrink-0 mt-1"></span>
                  <span><strong>Kesimpulan Tren:</strong> Seiring bertambahnya tingkat kematangan (Khalal → Rutab → Tamr), kadar air dan vitamin C menurun drastis, sedangkan kadar gula pereduksi serta mineral esensial meningkat berlipat ganda, serta serat pangan kasar mengalami kondensasi meningkatkan kelengketan buah.</span>
                </div>
              </section>

              {/* Lab simulation action shortcut banner */}
              <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="space-y-1 flex-1">
                  <h4 className="font-bold text-amber-950 text-base flex items-center gap-2">
                    <FlaskConical className="w-5 h-5 text-amber-700" />
                    Ingin Membuktikan Kandungan Kimia Kurma?
                  </h4>
                  <p className="text-xs text-amber-900 leading-relaxed">
                    Kami telah merancang **Virtual Lab Simulator** interaktif di mana Anda dapat mencampur larutan kurma Khalal, Rutab, atau Tamr dengan reagen Benedict/Fehling untuk mengamati endapan kimia tembaga bebas secara langsung.
                  </p>
                </div>
                <button
                  id="btn-trigger-simulator-shortcut"
                  onClick={() => {
                    setActiveTab("simulator");
                    resetSimulatorTab();
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm px-4 py-2.5 rounded-xl transition-all shadow-md shrink-0 focus:ring-4 focus:ring-amber-200"
                >
                  Buka Virtual Lab
                </button>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  id="btn-back-to-bab1"
                  onClick={() => {
                    setActiveTab("bab1-2");
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className="border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm px-4 py-2.5 rounded-xl flex items-center gap-1.5"
                >
                  <Undo2 className="w-4 h-4" />
                  <span>Bab I & II</span>
                </button>
                <button
                  id="btn-goto-pbl"
                  onClick={() => {
                    setActiveTab("pbl-lkpd");
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className="bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm px-5 py-3 rounded-xl flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Mulai Sintaks PBL & LKPD</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: VIRTUAL LAB SIMULATOR */}
          {activeTab === "simulator" && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-extrabold tracking-widest text-amber-600 uppercase block">Laboratorium Mandiri</span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-1 font-serif">Kimia Kurma - Virtual Reagent Lab</h2>
                <p className="text-slate-600 text-sm mt-1">
                  Pilihlah jenis kurma (fase kematangan) dan larutan uji reagen laboratorium di bawah, lalu jalankan reaksi pemanasan/inkubasi kimia!
                </p>
              </div>

              <div id="simulator-grid-box" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Simulator Controls & Options */}
                <div className="lg:col-span-5 space-y-6">
                  
                  {/* Option 1: Sample Selection */}
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
                    <label className="text-xs font-bold uppercase text-slate-700 tracking-wider block mb-2">1. Pilih Sampel Kurma / Kontrol</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedSample("khalal")}
                        disabled={isSimulating}
                        className={`p-3 rounded-xl border text-xs text-left transition-all ${
                          selectedSample === "khalal"
                            ? "border-amber-500 bg-amber-50/50 text-amber-950 font-bold shadow-xs"
                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        <span className="block font-semibold">Kurma Khalal</span>
                        <span className="text-[10px] text-slate-400">Muda, asam kelat</span>
                      </button>

                      <button
                        onClick={() => setSelectedSample("rutab")}
                        disabled={isSimulating}
                        className={`p-3 rounded-xl border text-xs text-left transition-all ${
                          selectedSample === "rutab"
                            ? "border-amber-500 bg-amber-50/50 text-amber-950 font-bold shadow-xs"
                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        <span className="block font-semibold">Kurma Rutab</span>
                        <span className="text-[10px] text-slate-400">Setengah matang basah</span>
                      </button>

                      <button
                        onClick={() => setSelectedSample("tamr")}
                        disabled={isSimulating}
                        className={`p-3 rounded-xl border text-xs text-left transition-all ${
                          selectedSample === "tamr"
                            ? "border-amber-500 bg-amber-50/50 text-amber-950 font-bold shadow-xs"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <span className="block font-semibold">Kurma Tamr</span>
                        <span className="text-[10px] text-slate-400">Matang kering legit</span>
                      </button>

                      <button
                        onClick={() => setSelectedSample("sukrosa")}
                        disabled={isSimulating}
                        className={`p-3 rounded-xl border text-xs text-left transition-all ${
                          selectedSample === "sukrosa"
                            ? "border-red-400 bg-red-50/20 text-red-950 font-semibold"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <span className="block font-semibold">Sukrosa 5%</span>
                        <span className="text-[10px] text-slate-400">Kontrol disakarida</span>
                      </button>
                    </div>
                  </div>

                  {/* Option 2: Test Selection */}
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
                    <label className="text-xs font-bold uppercase text-slate-700 tracking-wider block mb-2">2. Pilih Reagen / Pengujian Kimia</label>
                    <div className="space-y-2">
                      <button
                        onClick={() => setSelectedTest("benedict")}
                        disabled={isSimulating}
                        className={`w-full p-3 rounded-xl border text-xs text-left flex items-start gap-3 transition-all ${
                          selectedTest === "benedict"
                            ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold"
                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        <FlaskConical className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-slate-900">Uji Ujung Gula Benedict (Cu²⁺)</strong>
                          <span className="text-[10px] text-slate-500 font-light block">Deteksi reduksi gula monovalen melalui pemanasan.</span>
                        </div>
                      </button>

                      <button
                        onClick={() => setSelectedTest("fehling")}
                        disabled={isSimulating}
                        className={`w-full p-3 rounded-xl border text-xs text-left flex items-start gap-3 transition-all ${
                          selectedTest === "fehling"
                            ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold"
                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        <FlaskConical className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-slate-900">Uji Fehling A & B kompleks Tartrat</strong>
                          <span className="text-[10px] text-slate-500 font-light block">Pengendapan kation tembaga bebas oleh karbonil teroksidasi.</span>
                        </div>
                      </button>

                      <button
                        onClick={() => setSelectedTest("dpph")}
                        disabled={isSimulating}
                        className={`w-full p-3 rounded-xl border text-xs text-left flex items-start gap-3 transition-all ${
                          selectedTest === "dpph"
                            ? "border-emerald-600 bg-emerald-50 text-emerald-950 font-bold"
                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        <Sparkles className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-slate-900">Uji Dekolorisasi DPPH (Antioksidan)</strong>
                          <span className="text-[10px] text-slate-500 font-light block">Melihat transfer kation hidrogen penstabil radikal ungu.</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Run Reaction Button */}
                  <button
                    onClick={runSimulator}
                    disabled={isSimulating}
                    className="w-full bg-emerald-800 hover:bg-emerald-900 disabled:bg-slate-300 text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2.5 transition-all shadow-md text-sm focus:ring-4 focus:ring-emerald-200 cursor-pointer"
                  >
                    {isSimulating ? (
                      <>
                        <RefreshCcw className="w-5 h-5 animate-spin" />
                        <span>Mereaksikan Campuran Kimia...</span>
                      </>
                    ) : (
                      <>
                        <Flame className="w-5 h-5 text-amber-400" />
                        <span>Mulai Reaksi Kimia (Sintesis)</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Simulator Glass Tube Graphic and Results Panel */}
                <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-between min-h-[400px] border border-slate-800 shadow-lg text-white">
                  
                  {/* Top Header */}
                  <div className="w-full flex justify-between items-center border-b border-slate-800 pb-3 text-xs font-mono text-slate-400">
                    <span>SEKUENSIAL REAKTOR LAB VIRTUAL</span>
                    <span className="flex items-center gap-1">
                      <span className={`w-2.5 h-2.5 rounded-full ${isSimulating ? "bg-amber-400 animate-ping" : "bg-emerald-500"}`}></span> 
                      {isSimulating ? "MEMANASKAN" : "SIAP"}
                    </span>
                  </div>

                  {/* Central Visual Glass Test Tube */}
                  <div className="my-8 relative flex flex-col items-center justify-center">
                    
                    {/* Heating fire flame beneath test tube (only when heating needed) */}
                    {isSimulating && selectedTest !== "dpph" && (
                      <div className="absolute -bottom-10 flex flex-col items-center gap-1">
                        <div className="flex gap-1.5 justify-center items-end">
                          <span className="w-3.5 h-10 bg-amber-500 rounded-full animate-bounce"></span>
                          <span className="w-4 h-12 bg-red-500 rounded-full animate-pulse"></span>
                          <span className="w-3.5 h-10 bg-yellow-400 rounded-full animate-bounce"></span>
                        </div>
                        <span className="text-[10px] text-red-400 font-mono tracking-widest block font-bold">PEMBakar SPIRITUS</span>
                      </div>
                    )}

                    {/* The physical tube rendered in HTML/CSS */}
                    <div className="w-20 h-56 rounded-b-full border-4 border-slate-500/80 bg-slate-800/40 backdrop-blur-md relative overflow-hidden flex flex-col justify-end p-1 shadow-inner group">
                      
                      {/* Fluid inside test tube with transition */}
                      <div className={`w-full rounded-b-5xl transition-all duration-1000 origin-bottom ${
                        testStage === "awal" 
                          ? selectedTest === "dpph" ? "h-2/5 bg-purple-700/80" : "h-2/5 bg-blue-500/70"
                          : testStage === "proses"
                            ? selectedTest === "dpph" ? "h-2/5 bg-purple-600/95" : "h-2/5 bg-teal-400/80"
                            : `h-2/5 ${solutionColor}`
                      }`}>
                        
                        {/* Bubbles in boiling process if simulating Benedict or Fehling */}
                        {isSimulating && selectedTest !== "dpph" && (
                          <div className="absolute inset-x-0 bottom-6 flex flex-col gap-3 items-center justify-center animate-pulse">
                            <span className="w-2 h-2 rounded-full bg-white/40 animate-ping"></span>
                            <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce"></span>
                          </div>
                        )}
                        
                      </div>

                      {/* Glass glare line */}
                      <div className="absolute top-0 right-3 w-1.5 h-full bg-white/10 rounded-full"></div>
                    </div>

                    {/* Labels indicating Sample and Test */}
                    <div className="mt-4 text-center">
                      <span className="block text-xs uppercase text-slate-400 font-mono">ISI TABUNG REAKSI:</span>
                      <strong className="block text-sm text-yellow-300 font-serif">
                        Ekstrak Kurma {selectedSample.toUpperCase()} + {selectedTest.toUpperCase()}
                      </strong>
                    </div>
                  </div>

                  {/* Experimental outcome box */}
                  <div className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 min-h-[140px] flex flex-col justify-center">
                    {testStage === "awal" && (
                      <div className="text-center space-y-2 py-4">
                        <HelpCircle className="w-8 h-8 text-amber-500/80 mx-auto animate-bounce" />
                        <p className="text-sm font-medium text-slate-300">Belum Ada Reaksi. Silakan klik "Mulai Reaksi Kimia".</p>
                        <p className="text-[10px] text-slate-500">Pampangan fasa, suhu, dan stoikiometri elektron akan termatangkan di sini.</p>
                      </div>
                    )}

                    {testStage === "proses" && (
                      <div className="text-center space-y-2 py-4">
                        <RefreshCcw className="w-8 h-8 text-amber-400 animate-spin mx-auto" />
                        <p className="text-sm font-semibold text-amber-400 tracking-wide">REDUKSI ELEKTRON BERLANGSUNG...</p>
                        <p className="text-[10.5px] text-slate-400 font-light leading-relaxed">
                          {selectedTest === "dpph" 
                            ? "Kandungan polifenol polifenolat sedang mentransfer kation hidrogen kovalen untuk menetralisir radikal bebas nitrogen radiks..."
                            : "Pemanasan penangas merangsang pembukaan fasa fungsional aldehida bebas gula mereduksi Cu(II) menjadi Cu(I) oksida..."}
                        </p>
                      </div>
                    )}

                    {testStage === "selesai" && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                          <CheckCircle className="w-5 h-5" />
                          <span>HASIL PENYELIDIKAN EKSPERIMEN:</span>
                        </div>
                        
                        {precipitateText && (
                          <div className="flex gap-2">
                            <span className="text-xs text-slate-400 font-semibold font-mono shrink-0 uppercase tracking-wide">PRESTRATE/SINTESIS:</span>
                            <span className="text-xs font-bold text-amber-300 font-sans">{precipitateText}</span>
                          </div>
                        )}

                        <p className="text-[11px] text-slate-300 leading-relaxed font-light font-sans text-justify">
                          {sampleAnalysis}
                        </p>
                        
                        {/* Instant stoichiometric formula reference */}
                        <div className="pt-2 border-t border-slate-800 text-[10px] text-emerald-400 font-mono">
                          <span>Reaksi Terlibat:</span>
                          <p className="mt-0.5 whitespace-pre-wrap">
                            {selectedTest === "dpph" 
                              ? "Ar-OH (Polifenol) + Radikal• (Ungu) → Ar-O• (Stabil) + Hidrogen-Radikal (Kuning)"
                              : "R-CHO (Gula Pereduksi) + 2Cu²⁺ + 5OH⁻ → R-COO⁻ + Cu₂O↓ (Merah Bata) + 3H₂O"}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                </div>

              </div>

              {/* Back & Forward Control */}
              <div className="flex justify-between pt-4 border-t border-slate-100">
                <button
                  id="btn-back-to-bab3"
                  onClick={() => {
                    setActiveTab("bab3");
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className="border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm px-4 py-2.5 rounded-xl flex items-center gap-1.5"
                >
                  <Undo2 className="w-4 h-4" />
                  <span>Teori Seluler Bab III</span>
                </button>
                <button
                  id="btn-goto-pbl-from-sim"
                  onClick={() => {
                    setActiveTab("pbl-lkpd");
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className="bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm px-5 py-3 rounded-xl flex items-center gap-1.5 shadow-xs"
                >
                  <span>Lanjutkan ke LKPD Interaktif</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 5: SINTAKS PBL & 3 LKPD INTERAKTIF */}
          {activeTab === "pbl-lkpd" && (
            <div className="space-y-12 animate-fade-in">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-extrabold tracking-widest text-emerald-800 uppercase block">Kerangka Kurikulum Merdeka</span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-1 font-serif">Alur Problem Based Learning & LKPD</h2>
                <p className="text-slate-600 text-sm mt-1">
                  Kaji studi kasus kontekstual Ramadan di bawah ini sesuai tuntutan 5 tahapan Problem Based Learning (PBL).
                </p>
              </div>

              {/* Central Study Case box of Ramadan energy */}
              <section id="pbl-main-case-study" className="bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 rounded-3xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/40 rounded-full filter blur-2xl"></div>
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-6 h-6 text-amber-800" />
                  <h3 className="font-serif font-extrabold text-lg text-amber-950">{PBL_PROBLEM_CASE.judul}</h3>
                </div>
                <p className="text-xs md:text-sm text-slate-800 leading-relaxed font-sans font-light">
                  {PBL_PROBLEM_CASE.konteks}
                </p>
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <h4 className="font-semibold text-xs uppercase tracking-wide text-amber-950 mb-2">Pertanyaan Investigasi Pemantik Untuk Didiskusikan:</h4>
                  <ul className="space-y-2">
                    {PBL_PROBLEM_CASE.pertanyaanPemantik.map((p, idx) => (
                      <li key={idx} className="flex gap-2 text-xs text-slate-700 leading-relaxed font-light">
                        <span className="text-amber-800 font-extrabold">{idx + 1}.</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Visualized PBL 5 Syntaxes inside expanders */}
              <section id="pbl-syntaxes-section" className="space-y-3">
                <h3 className="font-bold text-slate-900 text-base uppercase tracking-wider mb-4">5 Tahapan Problem Based Learning (PBL):</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  {SINTAKS_PBL.map((step, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col justify-between">
                      <div>
                        <strong className="text-xs text-emerald-950 font-bold block">{step.langkah}</strong>
                        <span className="inline-block mt-1 px-1.5 py-0.5 text-[8.5px] bg-slate-200 text-slate-700 font-mono rounded font-semibold">{step.waktu}</span>
                        <div className="mt-2.5 text-[10px] text-slate-600 leading-relaxed space-y-1 font-light">
                          <p><strong>Aktivitas Guru:</strong> {step.aktivitasGuru}</p>
                          <p><strong>Aktivitas Siswa:</strong> {step.aktivitasSiswa}</p>
                        </div>
                      </div>
                      <div className="mt-3 pt-2.5 border-t border-slate-200 text-[9px] text-slate-500 font-mono">
                        <span>Asesmen: {step.asesmen}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3 Interactive LKPD Worksheets */}
              <section id="interactive-lkpd-worksheets" className="space-y-8 border-t border-slate-200 pt-8">
                <div>
                  <h3 className="font-extrabold text-2xl text-slate-900 font-serif">Lembar Kerja Peserta Didik (LKPD) Interaktif</h3>
                  <p className="text-slate-600 text-xs md:text-sm">Isilah LKPD di bawah ini secara mandiri atau bersama kelompok Anda. Jawaban dapat diunduh untuk dikumpulkan!</p>
                </div>

                <div className="space-y-6">
                  {LKPD_LIST.map((lkpd) => {
                    const answers = lkpdAnswers[lkpd.id];
                    const isSubmitted = submittedLkpd[lkpd.id];
                    const showFeedback = showLkpdFeedback[lkpd.id];

                    // Count questions answered
                    const answeredCount = Object.values(answers).filter(Boolean).length;
                    const completionPercent = (answeredCount / lkpd.pertanyaanHots.length) * 100;

                    return (
                      <div key={lkpd.id} className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-xs hover:border-emerald-700/30 transition-all">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-slate-100 pb-3 gap-2">
                          <h4 className="font-bold text-slate-900 text-base md:text-lg font-serif">{lkpd.judul}</h4>
                          <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                            Kemajuan: {answeredCount}/{lkpd.pertanyaanHots.length}
                          </span>
                        </div>

                        {/* LKPD Goal & Equipment meta */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light tracking-wide">
                          <div className="p-3 bg-slate-50 text-slate-700 rounded-xl leading-relaxed">
                            <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest block font-mono">Tujuan Eksperimen:</span>
                            {lkpd.tujuan}
                          </div>
                          <div className="p-3 bg-slate-50 text-slate-700 rounded-xl leading-relaxed">
                            <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest block font-mono">Bahan & Peralatan Terkait:</span>
                            {lkpd.alatBahan}
                          </div>
                        </div>

                        {/* Procedure detail */}
                        <div className="p-4 bg-emerald-950 text-emerald-100/90 rounded-2xl">
                          <strong className="text-xs text-amber-400 uppercase tracking-wide flex items-center gap-1.5 mb-2">
                            <FlaskConical className="w-4 h-4 shrink-0" /> Prosedur Langkah Kerja Eksperimen:
                          </strong>
                          <ol className="list-decimal list-inside space-y-1 text-xs font-light">
                            {lkpd.prosedur.map((step, sIdx) => (
                              <li key={sIdx}>{step}</li>
                            ))}
                          </ol>
                        </div>

                        {/* Interactive Questionnaire */}
                        <div className="space-y-5">
                          <h5 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Pertanyaan Analitik & HOTS:</h5>
                          {lkpd.pertanyaanHots.map((q, idx) => (
                            <div key={idx} className="space-y-2 border-l-4 border-slate-300 pl-4">
                              <p className="text-xs font-medium text-slate-900 font-sans">{idx + 1}. {q.tanya}</p>
                              
                              <textarea
                                value={answers[idx] || ""}
                                onChange={(e) => handleLkpdInputChange(lkpd.id, idx, e.target.value)}
                                disabled={isSubmitted}
                                placeholder="Ketik hasil analisis kimiawi dan argumen teologis Anda di sini..."
                                className="w-full text-xs font-light p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent min-h-[90px] text-slate-800 bg-white leading-relaxed"
                              />

                              {/* Correct Answers / Key guides visible upon submission only */}
                              {showFeedback && (
                                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-[11px] leading-relaxed text-amber-950 font-serif">
                                  <strong className="text-amber-900 uppercase tracking-wider block text-[10px] mb-1">Panduan Akademis (Kunci):</strong>
                                  <p className="font-light italic">{q.panduanJawab}</p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Completion / Actions Block */}
                        <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="w-full sm:w-1/2 flex items-center gap-2">
                            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                              <div className="bg-emerald-900 h-full transition-all duration-500" style={{ width: `${completionPercent}%` }}></div>
                            </div>
                            <span className="text-[11px] text-slate-500 font-mono shrink-0">{Math.round(completionPercent)}%</span>
                          </div>

                          <div className="flex gap-2 w-full sm:w-auto">
                            {!isSubmitted ? (
                              <button
                                onClick={() => submitLkpdAnswer(lkpd.id)}
                                disabled={submittingLkpd[lkpd.id]}
                                className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-950 text-white font-semibold text-xs py-2 px-4 rounded-xl transition-colors shrink-0 disabled:bg-slate-300 cursor-pointer"
                              >
                                {submittingLkpd[lkpd.id] ? "Menyimpan..." : "Kirim Bahan LKPD"}
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  // Toggle solutions
                                  setShowLkpdFeedback({ ...showLkpdFeedback, [lkpd.id]: !showFeedback });
                                }}
                                className="w-full sm:w-auto border border-emerald-800 text-emerald-800 font-medium text-xs py-2 px-3 rounded-xl hover:bg-emerald-50 transition-colors"
                              >
                                {showFeedback ? "Sembunyikan Pembahasan" : "Lihat Kunci Pembahasan"}
                              </button>
                            )}

                            {isSubmitted && (
                              <button
                                onClick={() => downloadCompiledReport(lkpd.id)}
                                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-900 text-white font-medium text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                              >
                                <span>Unduh PDF (.txt)</span>
                                <Download className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Award Badge if 100% completed */}
                        {isSubmitted && (
                          <div className="p-3 bg-emerald-50 text-emerald-950 border border-emerald-100 rounded-2xl flex items-center gap-3 animate-pulse">
                            <Award className="w-6 h-6 text-yellow-600 shrink-0" />
                            <div>
                              <strong className="text-xs block font-bold">Lencana Kompetensi Diperoleh!</strong>
                              <span className="text-[10px] text-slate-600 leading-relaxed font-light">Siswa telah melengkapi investigasi kandungan secara akademis sesuai kaidah Kurikulum Merdeka.</span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              <div className="flex justify-between pt-4 border-t border-slate-100">
                <button
                  id="btn-back-to-sim"
                  onClick={() => {
                    setActiveTab("simulator");
                    resetSimulatorTab();
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className="border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm px-4 py-2.5 rounded-xl flex items-center gap-1.5"
                >
                  <Undo2 className="w-4 h-4" />
                  <span>Lab Virtual</span>
                </button>
                <button
                  id="btn-goto-kuis"
                  onClick={() => {
                    setActiveTab("kuis");
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className="bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm px-5 py-3 rounded-xl flex items-center gap-1.5 shadow-xs"
                >
                  <span>Mulai Uji Mandiri & Kuis HOTS</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 6: ASESMEN & KUIS HOTS */}
          {activeTab === "kuis" && (
            <div className="space-y-10 animate-fade-in">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-extrabold tracking-widest text-emerald-800 uppercase block">Asesmen Pembelajaran</span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-1 font-serif">Kuis HOTS (Higher Order Thinking Skills)</h2>
                <p className="text-slate-600 text-sm mt-1">
                  Ujilah pemahaman kognitif Anda secara komprehensif melalui 10 Soal Pilihan Ganda dan 5 Soal Uraian (Essay) HOTS terintegrasi.
                </p>
              </div>

              {/* Asesmen Diagnostik container */}
              <section className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1 text-emerald-950">
                  <Info className="w-4 h-4 shrink-0 text-emerald-700" />
                  Poin Refleksi Awal (Asesmen Diagnostik Kognitif):
                </h4>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 leading-relaxed font-light">
                  {ASESMEN_SISTEM.diagnostik.soal.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>
              </section>

              {/* 10 Multiple Choice Questions */}
              <section className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 pb-3 gap-2">
                  <h3 className="font-extrabold text-xl font-serif text-slate-900">Bagian 1: Pilihan Ganda (10 Soal Berbobot)</h3>
                  
                  {scorePg !== null && (
                    <div className="px-4 py-2 bg-emerald-950 text-white text-sm font-bold font-mono rounded-xl tracking-wide flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span>SKOR ANDA: {scorePg.toFixed(1)} / 100</span>
                    </div>
                  )}
                </div>

                <div className="space-y-8">
                  {SOAL_PILIHAN_GANDA.map((soal) => {
                    const chosen = userAnswersPg[soal.nomor];
                    const isCorrect = chosen === soal.kunci;
                    const showEx = showExplanation[soal.nomor];

                    return (
                      <div key={soal.nomor} className="space-y-3 bg-white p-5 border border-slate-200 rounded-2xl">
                        <div className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-200 font-bold text-xs font-mono shrink-0">
                            {soal.nomor}
                          </span>
                          <p className="text-xs md:text-sm text-slate-800 leading-relaxed font-sans">{soal.soal}</p>
                        </div>

                        {/* Selections column */}
                        <div className="grid grid-cols-1 gap-2.5 pl-9">
                          {Object.entries(soal.pilihan).map(([key, value]) => {
                            const isThisSelected = chosen === key;
                            let btnStyle = "border-slate-200 hover:bg-slate-50 text-slate-700";
                            
                            if (isThisSelected) {
                              if (isPgSubmitted) {
                                btnStyle = isCorrect 
                                  ? "bg-emerald-100 border-emerald-500 text-emerald-950 font-semibold"
                                  : "bg-red-100 border-red-500 text-red-950 font-semibold";
                              } else {
                                btnStyle = "bg-amber-100 border-amber-500 text-amber-950 font-semibold";
                              }
                            } else if (isPgSubmitted && key === soal.kunci) {
                              // Always highlight correct answer green on feedback
                              btnStyle = "bg-emerald-100/70 border-emerald-500 text-emerald-950 font-semibold";
                            }

                            return (
                              <button
                                key={key}
                                onClick={() => selectPgAnswer(soal.nomor, key)}
                                disabled={isPgSubmitted}
                                className={`w-full p-2.5 rounded-xl border text-xs text-left leading-relaxed transition-all flex items-start gap-4 ${btnStyle}`}
                              >
                                <span className="font-bold underline shrink-0 font-mono">{key}.</span>
                                <span>{value}</span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Interactive Explanation display */}
                        {isPgSubmitted && showEx && (
                          <div className="mt-3 ml-9 p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5 text-xs text-slate-700 leading-relaxed font-sans">
                            <div className="flex items-center gap-1.5 font-bold">
                              {isCorrect ? (
                                <span className="text-emerald-700 flex items-center gap-1">
                                  <Check className="w-4 h-4 stroke-[3]" /> Benar !
                                </span>
                              ) : (
                                <span className="text-red-700 flex items-center gap-1">
                                  <AlertCircle className="w-4 h-4" /> Salah
                                </span>
                              )}
                              <span className="text-slate-500 font-normal">| Kunci: <strong className="text-slate-900 font-semibold">{soal.kunci}</strong></span>
                            </div>
                            <p className="font-light">{soal.pembahasan}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Score verification controls */}
                <div className="flex justify-center gap-3 pt-4 border-t border-slate-100">
                  {!isPgSubmitted ? (
                    <button
                      onClick={submitPgQuiz}
                      disabled={Object.keys(userAnswersPg).length < SOAL_PILIHAN_GANDA.length}
                      className="bg-emerald-800 hover:bg-emerald-900 disabled:bg-slate-300 text-white font-bold py-3.5 px-8 rounded-2xl transition-all shadow-xs text-sm cursor-pointer"
                    >
                      Kirim & Nilai Kuis PG ({Object.keys(userAnswersPg).length}/{SOAL_PILIHAN_GANDA.length})
                    </button>
                  ) : (
                    <button
                      onClick={resetPgQuiz}
                      className="border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold py-3 px-6 rounded-2xl transition-all flex items-center gap-1.5 text-xs"
                    >
                      <RefreshCcw className="w-4 h-4" />
                      <span>Ulangi Kuis</span>
                    </button>
                  )}
                </div>
              </section>

              {/* 5 Essay HOTS / Self Grader */}
              <section className="space-y-6 border-t border-slate-200 pt-8" id="essay-kuis-section">
                <h3 className="font-extrabold text-xl font-serif text-slate-900 border-b border-slate-100 pb-3 mb-4">Bagian 2: Soal Uraian (Essay HOTS) & Swa-Penilaian</h3>
                
                <div className="space-y-6">
                  {SOAL_ESSAY.map((soal) => {
                    const text = essayInputs[soal.nomor] || "";
                    const visible = showEssayAnswer[soal.nomor];
                    const currentGrade = essayGrades[soal.nomor] || 0;

                    return (
                      <div key={soal.nomor} className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-4">
                        <div className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-6 h-6 rounded bg-slate-200 text-slate-800 font-bold border border-slate-300 text-xs font-mono shrink-0 mt-0.5">
                            ES-{soal.nomor}
                          </span>
                          <p className="text-xs md:text-sm font-semibold text-slate-900 leading-relaxed font-sans">{soal.soal}</p>
                        </div>

                        <textarea
                          value={text}
                          onChange={(e) => setEssayInputs({ ...essayInputs, [soal.nomor]: e.target.value })}
                          placeholder="Tuliskan argumen biokimia & ayat integratif rinci Anda..."
                          className="w-full text-xs font-light p-3 border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-emerald-700 focus:outline-none min-h-[90px] leading-relaxed text-slate-800"
                        />

                        {/* Interactive Key and Criteria Sliders */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                          <button
                            onClick={() => setShowEssayAnswer({ ...showEssayAnswer, [soal.nomor]: !visible })}
                            className="bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold py-2 px-3 rounded-xl transition-all w-full sm:w-auto"
                          >
                            {visible ? "Sembunyikan Panduan & Rubrik" : "Tampilkan Rubrik Penilaian"}
                          </button>

                          {/* Dynamic grading sliders */}
                          {visible && (
                            <div className="flex items-center gap-3 w-full sm:w-auto bg-white border border-slate-200 px-3 py-1.5 rounded-xl shrink-0">
                              <span className="text-[11px] text-slate-500 font-mono">Nilai Sendiri (Maks {soal.skorMaks}):</span>
                              <input
                                type="range"
                                min="0"
                                max={soal.skorMaks}
                                value={currentGrade}
                                onChange={(e) => setEssayGrades({ ...essayGrades, [soal.nomor]: parseInt(e.target.value) })}
                                className="w-24 accent-emerald-800 cursor-pointer"
                              />
                              <span className="text-xs text-emerald-950 font-bold font-mono">{currentGrade} Poin</span>
                            </div>
                          )}
                        </div>

                        {visible && (
                          <div className="p-4 bg-amber-50/50 border border-amber-200 rounded-xl text-xs space-y-2 text-slate-700 leading-relaxed font-sans">
                            <strong className="text-amber-950 block uppercase text-[10px] tracking-wide">Panduan Rubrikasi & Kriteria Skor Maksimal:</strong>
                            <p className="font-serif italic text-amber-950">{soal.rubrik}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Essay Final score estimation */}
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between">
                  <span className="text-xs text-emerald-900 font-semibold font-mono">ESTIMASI TOTAL AKUMULASI NILAI URAIAN (KOLABORASI):</span>
                  <span className="text-sm font-extrabold text-emerald-950 font-mono">
                    {(Object.values(essayGrades) as number[]).reduce((a, b) => a + b, 0)} / 100 Poin
                  </span>
                </div>
              </section>

              {/* Referensi Akademis List */}
              <section className="space-y-3 border-t border-slate-200 pt-8" id="referensi-section">
                <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Sumber Kajian Referensi Ilmiah (Daftar Pustaka):</h3>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-500 leading-relaxed font-light">
                  {REFERENSI_ILMIAH.map((ref, idx) => (
                    <li key={idx} className="text-justify">{ref}</li>
                  ))}
                </ul>
              </section>

              <div className="flex justify-start">
                <button
                  id="btn-back-to-pbl"
                  onClick={() => {
                    setActiveTab("pbl-lkpd");
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className="border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm px-4 py-2.5 rounded-xl flex items-center gap-1.5"
                >
                  <Undo2 className="w-4 h-4" />
                  <span>Sintaks & LKPD</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 7: ASISTEN AI INTEGATIF GEMINI */}
          {activeTab === "ai" && (
            <div className="space-y-6 animate-fade-in flex flex-col h-[700px] justify-between">
              
              {/* Header inside workspace detailing AI Agent roles */}
              <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold font-serif text-slate-900 flex items-center gap-2">
                    <Brain className="w-6 h-6 text-emerald-800" />
                    Asisten AI E-Modul Kimia Kurma
                  </h2>
                  <p className="text-[11px] text-slate-500">Mengkaji sains fungsional kurma, biokimia uji reduksi, radikal bebas, dan integrasi Al-Qur'an secara real-time.</p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono font-bold uppercase">
                  Gemini API Full-Stack
                </span>
              </div>

              {/* Message scroll container */}
              <div className="flex-1 bg-slate-50 border border-slate-200 rounded-3xl p-4 overflow-y-auto space-y-4 max-h-[460px]">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-2.5 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === "user" ? "bg-emerald-900 text-white" : "bg-amber-100 text-amber-900 border border-amber-200"
                    }`}>
                      {msg.role === "user" ? <User className="w-4 h-4" /> : <Brain className="w-4 h-4 text-amber-800" />}
                    </div>
                    
                    <div className={`p-4 rounded-2xl text-xs md:text-sm leading-relaxed ${
                      msg.role === "user" 
                        ? "bg-emerald-900 text-white rounded-tr-none" 
                        : "bg-white border border-slate-200 text-slate-800 rounded-tl-none font-sans"
                    }`}>
                      {msg.content.split("\n\n").map((para, pIdx) => (
                        <p key={pIdx} className="mb-2 last:mb-0">
                          {/* Formatting italic/bold manually or representing simply */}
                          {para.split("**").map((chunk, cIdx) => 
                            cIdx % 2 === 1 ? <strong key={cIdx} className="font-semibold text-amber-500">{chunk}</strong> : chunk
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}

                {isAiLoading && (
                  <div className="flex items-start gap-2.5 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-900 border border-amber-200 flex items-center justify-center">
                      <RefreshCcw className="w-4 h-4 text-amber-800 animate-spin" />
                    </div>
                    <div className="p-3 bg-white border border-slate-200 rounded-2xl text-xs text-slate-500 flex items-center gap-1.5">
                      <span>Asisten AI sedang berpikir kritis...</span>
                    </div>
                  </div>
                )}
                
                <div ref={chatEndRef} />
              </div>

              {/* Quick guides question trigger lists */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-slate-400 block">Pertanyaan Pemandu Cepat:</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => triggerAiResponse("Mengapa kurma basah (Rutab) sangat dianjurkan untuk dikonsumsi wanita pascamelahirkan secara medis?")}
                    disabled={isAiLoading}
                    className="text-[11px] bg-slate-100 hover:bg-slate-200 border border-slate-200 p-2 rounded-xl text-slate-700 transition-all font-light text-left"
                  >
                    📖 Mengapa Rutab direkomendasikan pascamelahirkan?
                  </button>
                  <button
                    onClick={() => triggerAiResponse("Bagaimana perbedaan reaksi kimia antara gula pereduksi (glukosa) dengan gula non-pereduksi (sukrosa) saat diuji Benedict?")}
                    disabled={isAiLoading}
                    className="text-[11px] bg-slate-100 hover:bg-slate-200 border border-slate-200 p-2 rounded-xl text-slate-700 transition-all font-light text-left"
                  >
                    🔬 Jelaskan reaksi redoks Benedict vs Sukrosa!
                  </button>
                  <button
                    onClick={() => triggerAiResponse("Berapa batas maksimal kadar alkohol alami hasil fermentasi cuka kurma yang diizinkan fatwa MUI asalkan halal?")}
                    disabled={isAiLoading}
                    className="text-[11px] bg-slate-100 hover:bg-slate-200 border border-slate-200 p-2 rounded-xl text-slate-700 transition-all font-light text-left"
                  >
                    👳 Kemurnian Halal Cuka Kurma & MUI
                  </button>
                </div>
              </div>

              {/* Message Input form block */}
              <form onSubmit={handleSendChatMessage} className="flex gap-2 border-t border-slate-200 pt-4">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ketik pertanyaan konsultasi kimia, Islam, sains, atau LKPD Anda di sini..."
                  disabled={isAiLoading}
                  className="flex-1 text-xs border border-slate-300 rounded-2xl px-4 py-3 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
                <button
                  type="submit"
                  disabled={isAiLoading || !chatInput.trim()}
                  className="bg-emerald-800 hover:bg-emerald-950 disabled:bg-slate-300 text-white px-5 rounded-2xl flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

            </div>
          )}

        </main>
      </div>

      {/* Styled Footer with Credits info */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-8 text-center text-xs mt-12">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <p className="font-serif italic text-slate-300 text-sm">
            "Sungguh, Kami menciptakan segala sesuatu menurut ukuran yang tepat." (QS. Al-Qamar: 49)
          </p>
          <div className="text-slate-400 font-sans font-light">
            E-Modul Kimia Kelas X SMA/MA — Ditata secara Profesional & Kompeten Terintegrasi Sistem Problem Based Learning.
          </div>
          <div className="text-slate-500 text-[11px] font-mono">
            &copy; {new Date().getFullYear()} Tim Ahli Kurikulum Merdeka Pangan & Teologi Islam-Sains. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
