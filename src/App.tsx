/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Compass, 
  MapPin, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  RotateCcw, 
  HelpCircle, 
  Info,
  ExternalLink,
  Map,
  BadgeAlert,
  Sparkles
} from "lucide-react";

import { chaptersData } from "./data/chaptersData";
import { BookCover } from "./components/BookCover";
import { MapStage } from "./components/MapStage";
import { AcademicIllustration } from "./components/AcademicIllustration";
import { ValidationTaskWidget } from "./components/ValidationTaskWidget";
import { AcademicQuiz } from "./components/AcademicQuiz";
import { Chapter } from "./types";

export default function App() {
  // --- STATE SYSTEM ---
  const [currentSpread, setCurrentSpread] = useState<number>(0); 
  // Spreads: 0: Cover, 1: Map, 2: Ch 1 (Duomo), 3: Ch 2 (Signoria), 4: Ch 3 (Mercato), 5: Ch 4 (Oblate), 6: Ch 5 (Santo Spirito), 7: Epilogue
  
  const [unlockedStages, setUnlockedStages] = useState<number[]>([1]); // Stage IDs (1-5)
  const [completedStages, setCompletedStages] = useState<number[]>([]); // Completed stages
  const [animatingInkTo, setAnimatingInkTo] = useState<number | null>(null);
  
  // Track visual task and quiz validations independently per chapter
  const [taskSuccess, setTaskSuccess] = useState<Record<number, boolean>>({});
  const [quizSuccess, setQuizSuccess] = useState<Record<number, boolean>>({});

  const [turnDirection, setTurnDirection] = useState<"forward" | "backward">("forward");

  // Load state from localStorage on mount for student persistence
  useEffect(() => {
    const saved = localStorage.getItem("firenze-odyssey-save");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.unlockedStages) setUnlockedStages(parsed.unlockedStages);
        if (parsed.completedStages) setCompletedStages(parsed.completedStages);
        if (parsed.taskSuccess) setTaskSuccess(parsed.taskSuccess);
        if (parsed.quizSuccess) setQuizSuccess(parsed.quizSuccess);
        if (typeof parsed.currentSpread === "number") setCurrentSpread(parsed.currentSpread);
      } catch (e) {
        console.error("Errore di caricamento stato salvato:", e);
      }
    }
  }, []);

  // Sync state to localStorage on changes
  useEffect(() => {
    if (currentSpread > 0) {
      const stateObj = {
        currentSpread,
        unlockedStages,
        completedStages,
        taskSuccess,
        quizSuccess
      };
      localStorage.setItem("firenze-odyssey-save", JSON.stringify(stateObj));
    }
  }, [currentSpread, unlockedStages, completedStages, taskSuccess, quizSuccess]);

  // --- NAVIGATION SYSTEM ---
  const turnToPage = (spreadIdx: number) => {
    if (spreadIdx === currentSpread) return;
    setTurnDirection(spreadIdx > currentSpread ? "forward" : "backward");
    setCurrentSpread(spreadIdx);
  };

  const currentChapter = chaptersData.find(ch => ch.id === currentSpread - 1);

  const handleOpenBook = () => {
    turnToPage(1); // Turn to the Map spread
  };

  const handleStageSelectFromMap = (stageId: number) => {
    // Stage 1 translates to Spread 2, Stage 2 to Spread 3, etc.
    turnToPage(stageId + 1);
  };

  const handleTaskSuccess = (stageId: number) => {
    setTaskSuccess(prev => ({ ...prev, [stageId]: true }));
  };

  const handleQuizSuccess = (stageId: number) => {
    setQuizSuccess(prev => ({ ...prev, [stageId]: true }));
  };

  // The core unlock loop
  const handleValidateStageAndUnlockNext = (stageId: number) => {
    const nextStageId = stageId + 1;
    const isLastStage = stageId === 5;

    if (isLastStage) {
      // Proceed directly to the Epilogue / Diploma spread
      setCompletedStages(prev => [...Array.from(new Set([...prev, stageId]))]);
      turnToPage(7);
      return;
    }

    // Go back to the Map spread, trigger the ink animations, then unlock other node
    setCompletedStages(prev => [...Array.from(new Set([...prev, stageId]))]);
    turnToPage(1);

    // Run ink path tracing animation
    setAnimatingInkTo(nextStageId);
    setTimeout(() => {
      setUnlockedStages(prev => [...Array.from(new Set([...prev, nextStageId]))]);
      setAnimatingInkTo(null);
    }, 3200); // Wait for ink dashed path to complete
  };

  const handleResetJourney = () => {
    if (window.confirm("Sei sicuro di voler ricominciare l'itinerario da capo? Tutti i progressi accademici andranno perduti.")) {
      localStorage.removeItem("firenze-odyssey-save");
      setUnlockedStages([1]);
      setCompletedStages([]);
      setTaskSuccess({});
      setQuizSuccess({});
      setCurrentSpread(0);
    }
  };

  const romanNumerals = ["Copertina", "I - II", "III - IV", "V - VI", "VII - VIII", "IX - X", "XI - XII", "XIII - XIV"];

  // --- RENDERING CONFIGURATION ---
  const transitionVariants = {
    enter: (dir: "forward" | "backward") => ({
      x: dir === "forward" ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: (dir: "forward" | "backward") => ({
      x: dir === "forward" ? -80 : 80,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" }
    })
  };

  return (
    <main className="desk-background min-h-screen w-full flex flex-col items-center justify-between p-4 sm:p-6 overflow-x-hidden">
      {/* Editorial Header bar above desk */}
      <header className="w-full max-w-5xl flex justify-between items-center px-4 py-3 border-b border-[#D4AF37]/20 select-none">
        <div className="flex items-center gap-2.5">
          <img 
            src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><path d='M50,85 C50,60 20,60 20,40 C20,20 40,25 50,10 C60,25 80,20 80,40 C80,60 50,60 50,85 Z' fill='none' stroke='%23D4AF37' stroke-width='2'/></svg>"
            alt="Florence Lily Logo" 
            className="w-5 h-5 filter drop-shadow opacity-90"
            referrerPolicy="no-referrer"
          />
          <div>
            <h1 className="font-display text-sm font-bold tracking-wider text-amber-50">
              FIRENZE ODYSSEY
            </h1>
            <p className="font-sans text-[9px] text-[#A1887F] uppercase tracking-widest leading-none">
              Taccuino Rinascimentale per Studenti
            </p>
          </div>
        </div>

        {currentSpread > 0 && (
          <div className="flex items-center gap-3">
            <button
              onClick={() => turnToPage(1)}
              className={`px-3 py-1 bg-[#4E342E]/70 text-xs font-serif text-[#FFE082] border border-[#8D6E63]/30 rounded flex items-center gap-1.5 transition-colors cursor-pointer hover:bg-[#4E342E]/100 outline-none ${currentSpread === 1 ? 'opacity-50 pointer-events-none' : ''}`}
            >
              <Map className="w-3.5 h-3.5" />
              <span>Mappa di Firenze</span>
            </button>
            <button
              onClick={handleResetJourney}
              className="px-2.5 py-1 bg-transparent hover:bg-stone-800/40 border border-[#8D6E63]/25 text-[10px] uppercase font-mono text-[#A1887F] rounded transition-colors cursor-pointer outline-none flex items-center gap-1"
              title="Ricomincia l'itinerario"
            >
              <RotateCcw className="w-2.5 h-2.5" />
              <span>Ricomincia</span>
            </button>
          </div>
        )}
      </header>

      {/* --- CORE SKEUOMORPHIC BOOK ENVIRONMENT --- */}
      <div className="w-full max-w-5xl my-auto py-6 sm:py-10 flex items-center justify-center">
        {currentSpread === 0 ? (
          /* Render Cover View */
          <div className="p-4 relative">
            {/* Soft Shadow below Book Cover */}
            <div className="absolute -inset-1 rounded-r-lg bg-black/40 blur-xl translate-x-2 translate-y-3 pointer-events-none" />
            <BookCover onOpenBook={handleOpenBook} />
          </div>
        ) : (
          /* Render Dual-Page Spread View */
          <div className="w-full relative px-2 sm:px-4">
            
            {/* Visual Book Layer Stacking Depth simulating thick parchment bound stack */}
            <div className="absolute inset-0 bg-[#E8E1CE] rounded-lg translate-y-[5px] scale-x-[0.992] pointer-events-none shadow-md" />
            <div className="absolute inset-0 bg-[#DCD4BE] rounded-lg translate-y-[10px] scale-x-[0.985] pointer-events-none shadow-lg" />
            <div className="absolute inset-x-[-10px] inset-y-0 bg-transparent rounded-lg pointer-events-none border-l-4 border-r-4 border-[#3E2723]/30" />

            {/* Main Open Book Spread Container */}
            <div className="w-full parchment-paper rounded-lg border-2 border-[#3E2723] relative flex flex-col md:flex-row min-h-[560px] overflow-hidden shadow-2xl">
              
              {/* --- The Deep Binding Spine (中缝凹陷折痕) in the Exact Center --- */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-8 z-30 pointer-events-none bg-gradient-to-r from-black/5 via-black/25 to-black/5 border-l border-r border-[#8D6E63]/10" />

              {/* Page layout with fading transitions */}
              <AnimatePresence initial={false} custom={turnDirection} mode="wait">
                <motion.div
                  key={currentSpread}
                  custom={turnDirection}
                  variants={transitionVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#8D6E63]/25"
                >
                  
                  {/* ================= LEFT PAGE ================= */}
                  <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between relative min-h-[500px]">
                    
                    {/* Left Page content based on active spread */}
                    {currentSpread === 1 ? (
                      /* Map Spread Left Side: The Interactive Map Component */
                      <div className="flex-1 flex flex-col justify-between">
                        <MapStage
                          chapters={chaptersData}
                          unlockedStages={unlockedStages}
                          completedStages={completedStages}
                          onSelectStage={handleStageSelectFromMap}
                          animatingInkTo={animatingInkTo}
                        />
                      </div>
                    ) : currentSpread === 7 ? (
                      /* Epilogue / Diploma Left Side */
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <span className="font-mono text-[9px] tracking-widest text-[#8D6E63] uppercase block">
                            Conclusione delle Ricerche
                          </span>
                          <h3 className="font-display text-2xl font-bold text-[#4E342E] mt-1 leading-tight">
                            EPILOGO ACADEMICO
                          </h3>
                          <div className="w-12 h-[1px] bg-[#8D6E63] my-4" />
                          
                          <p className="font-serif text-sm leading-relaxed text-[#5D4037] mb-4">
                            Avete terminato l'itinerario formativo racchiuso tra le mura e le piazze della vetusta città di Firenze. Dall'ardito calcolo di ingegneria della Cupola brunelleschiana, sino alle modulari armonie geometriche dell'Oltrarno in Santo Spirito, avete esaminato con rigore filologico e pazienza storica le testimonianze vive della grande fioritura umanistica.
                          </p>

                          <p className="font-serif text-sm leading-relaxed text-[#5D4037]">
                            Ogni rilievo tecnico è stato approvato dalla Commissione della Zecca e delle Arti. Ogni pergamena d'esame compilata reca i sigilli delle relative corporazioni fiorentine, attestate dalla stesura e dal fluire dell'inchiostro rosso della conoscenza sulla carta.
                          </p>
                        </div>

                        {/* Classic Fig Icon */}
                        <div className="my-4 border border-dashed border-[#8D6E63]/40 p-3 rounded bg-[#FAF6EE] text-center">
                          <Compass className="w-8 h-8 text-[#8D6E63] mx-auto opacity-75 animate-spin-slow mb-1" />
                          <p className="font-serif italic text-[10px] text-[#795548]">
                            [Fig. VI — Strumento di orientamento e misurazione delle proporzioni urbane]
                          </p>
                        </div>
                      </div>
                    ) : (
                      /* Chapter Spread Left Side: Scholarly Text & Interactive Validation Task */
                      currentChapter && (
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            {/* Academic Chapter Badge */}
                            <span className="font-mono text-[9px] tracking-widest text-amber-900 border border-amber-800/30 px-2 py-0.5 rounded-sm bg-amber-50 uppercase inline-block mb-3">
                              {currentChapter.leftPage.chapterLabel}
                            </span>
                            
                            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#4E342E] tracking-tight leading-none mb-1">
                              {currentChapter.leftPage.title}
                            </h2>
                            <p className="font-mono text-[8px] text-[#8D6E63] uppercase tracking-widest border-b border-[#8D6E63]/25 pb-2 mb-4">
                              Ambito: {currentChapter.period}
                            </p>

                            {/* Dense historical paragraphs */}
                            <div className="space-y-3 font-serif text-xs leading-relaxed text-[#5D4037] antialiased">
                              {currentChapter.leftPage.paragraphs.map((p, pIdx) => (
                                <p key={pIdx} className="indent-4 text-justify">
                                  {p}
                                </p>
                              ))}
                            </div>
                          </div>

                          {/* Interactive Gamified Work-Widget */}
                          <div className="mt-6">
                            <ValidationTaskWidget
                              task={currentChapter.leftPage.task}
                              onSuccess={() => handleTaskSuccess(currentChapter.id)}
                              isCompleted={!!taskSuccess[currentChapter.id]}
                            />
                          </div>
                        </div>
                      )
                    )}

                    {/* Left Page Numbering */}
                    <div className="mt-4 pt-3 border-t border-[#8D6E63]/15 flex justify-between items-center text-[10px] font-serif italic text-[#8D6E63]">
                      <span>{romanNumerals[currentSpread]?.split(" - ")[0] || "I"}</span>
                      <span>Firenze Odyssey</span>
                    </div>
                  </div>

                  {/* ================= RIGHT PAGE ================= */}
                  <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between relative min-h-[500px]">
                    
                    {/* Right Page Content */}
                    {currentSpread === 1 ? (
                      /* Map Spread Right Side: Editorial Introduction & Travel logs */
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <span className="font-mono text-[9px] tracking-widest text-amber-950 uppercase block">
                            Consilium e Istruzioni Accademiche
                          </span>
                          <h3 className="font-display text-2xl font-bold text-[#4E342E] tracking-tight mt-1 mb-3">
                            GUIDA DI VIAGGIO
                          </h3>
                          <div className="w-16 h-[2.5px] bg-[#CA9A48] mb-5" />

                          <div className="space-y-4 font-serif text-xs leading-relaxed text-[#5D4037]">
                            <p className="first-line:font-mono first-line:tracking-wide">
                              Benvenuto, giovane erudito, in questo volume interattivo di studi fiorentini. Il presente manufatto è stato congegnato per guidarti lungo un itinerario di rilievo storico strutturato in 5 tappe principali del Rinascimento.
                            </p>
                            
                            <p>
                              Per completare degnamente gli studi e sbloccare la tappa successiva, dovrai soddisfare due rigorosi requisiti intellettuali ad ogni fermata civile:
                            </p>

                            <ol className="list-decimal pl-5 space-y-1.5 font-bold text-[#4E342E]">
                              <li>
                                <span className="font-normal text-[#5D4037]">Risolvere il </span>
                                Rilievo Tecnico costruttivo
                                <span className="font-normal text-[#5D4037]"> sul foglio sinistro di studio.</span>
                              </li>
                              <li>
                                <span className="font-normal text-[#5D4037]">Superare la </span>
                                Verifica delle Fonti
                                <span className="font-normal text-[#5D4037]"> rispondendo correttamente al questionario a destra.</span>
                              </li>
                            </ol>

                            <p className="italic">
                              Una volta assecondate entrambe le discipline di analisi teorica e manuale, potrai apporre il sigillo di convalida ed azionare l'inchiostro d'oro per procedere nell'itinerario.
                            </p>
                          </div>
                        </div>

                        {/* Guide CTA: Click to go to Stage 1 */}
                        <div className="mt-6 p-4 rounded border border-amber-800/20 bg-amber-50/40 text-center">
                          <span className="font-mono text-[8px] text-amber-800 uppercase block tracking-widest mb-2">Prima tappa disponibile</span>
                          <button
                            onClick={() => handleStageSelectFromMap(1)}
                            className="px-6 py-2 bg-gradient-to-b from-[#8D6E63] to-[#5D4037] hover:brightness-110 active:scale-[0.98] text-white font-display text-xs rounded tracking-widest font-bold uppercase transition-all shadow cursor-pointer outline-none"
                          >
                            Inizia lo Studio: Duomo
                          </button>
                        </div>
                      </div>
                    ) : currentSpread === 7 ? (
                      /* Epilogue / Diploma Right Side: The Graduation Document */
                      <div className="flex-1 flex flex-col justify-between items-center text-center p-4">
                        <div className="border-4 border-double border-[#D4AF37] p-6 bg-[#FCFAF6] rounded w-full max-w-sm relative shadow-md">
                          {/* Laurels Graphic */}
                          <Award className="w-12 h-12 text-[#D4AF37] mx-auto mb-3 stroke-[1.25]" />
                          
                          <span className="font-mono text-[8px] tracking-[0.25em] text-[#8D6E63] uppercase block">
                            Regesto Università degli Studi
                          </span>
                          <h4 className="font-display text-lg font-bold text-[#4E342E] tracking-tight mt-1 mb-3 uppercase">
                            Laurea d'Onore
                          </h4>
                          
                          <div className="w-16 h-[0.5px] bg-[#D4AF37] mx-auto mb-4" />
                          
                          <p className="font-serif text-[11px] leading-relaxed text-[#5D4037] mb-4">
                            Si attesta solennemente che il candidato studente ha superato con massimo profitto l'itinerario critico di <strong>Firenze Odyssey</strong>, completando i capitoli scientifici di Santa Maria del Fiore, Signoria, Mercato Nuovo, Oblate e Santo Spirito.
                          </p>

                          <span className="font-display text-[9px] text-[#A34F35] tracking-widest font-bold uppercase block mt-6">
                            MAGISTER FLORENTIAE
                          </span>
                          <span className="font-mono text-[7px] text-[#8D6E63]/50 block mt-1">
                            Annuum MMXXVI • Sigillo di Marmo Apposto
                          </span>
                        </div>

                        {/* Restart Action */}
                        <div className="mt-6 text-center">
                          <p className="font-serif text-[11px] italic text-[#795548] mb-3">
                            Desideri riavviare la ricognizione d'archivio?
                          </p>
                          <button
                            onClick={handleResetJourney}
                            className="px-6 py-2 border border-[#8D6E63] text-[#8D6E63] hover:bg-[#8D6E63] hover:text-white font-display text-xs rounded tracking-wider uppercase transition-all shadow cursor-pointer outline-none"
                          >
                            Ricomincia l'Avventura
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Chapter Spread Right Side: Additional paragraphs, pure code illustration & multi-choice quiz */
                      currentChapter && (
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            {/* Academic body text on right */}
                            <div className="space-y-3 font-serif text-xs leading-relaxed text-[#5D4037] antialiased">
                              {currentChapter.rightPage.paragraphs.map((p, pIdx) => (
                                <p key={pIdx} className="indent-4 text-justify">
                                  {p}
                                </p>
                              ))}
                            </div>

                            {/* Pure-code visual illustration inside dashed sepia layout */}
                            <AcademicIllustration illustration={currentChapter.rightPage.illustration} />
                          </div>

                          <div className="mt-4">
                            {/* Academic Multi-choice quiz */}
                            <AcademicQuiz
                              quiz={currentChapter.rightPage.quiz}
                              onSuccess={() => handleQuizSuccess(currentChapter.id)}
                              isCompleted={!!quizSuccess[currentChapter.id]}
                            />

                            {/* GOLDEN NEXT STAGE UNLOCK BUTTON */}
                            {taskSuccess[currentChapter.id] && quizSuccess[currentChapter.id] && (
                              <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mt-4"
                              >
                                <button
                                  onClick={() => handleValidateStageAndUnlockNext(currentChapter.id)}
                                  className="w-full py-3 bg-gradient-to-b from-[#D4AF37] to-[#B58A18] text-stone-950 font-display font-black text-xs rounded tracking-widest uppercase shadow-lg select-all hover:brightness-110 cursor-pointer border border-[#FFECB3]/35 flex items-center justify-center gap-2"
                                >
                                  <Sparkles className="w-4 h-4 text-stone-950 animate-pulse" />
                                  Valida Studio e Sblocca Prossima Tappa
                                </button>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      )
                    )}

                    {/* Right Page Numbering */}
                    <div className="mt-4 pt-3 border-t border-[#8D6E63]/15 flex justify-between items-center text-[10px] font-serif italic text-[#8D6E63] select-none">
                      <span>Firenze, Toscana</span>
                      <span>{romanNumerals[currentSpread]?.split(" - ")[1] || "II"}</span>
                    </div>

                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        )}
      </div>

      {/* --- PROGRESS RIBBON & BOTTOM CONTROLLER (Desk Bottom) --- */}
      {currentSpread > 0 && (
        <footer className="w-full max-w-5xl bg-[#1D1714]/90 border border-[#8D6E63]/30 px-6 py-4 rounded-lg shadow-2xl flex flex-col sm:flex-row justify-between items-center gap-4 z-40 select-none">
          {/* Timeline and Completed Chapters ticks */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-wider">
              Studio:
            </span>
            <div className="flex gap-2">
              {chaptersData.map((ch) => {
                const isUnlocked = unlockedStages.includes(ch.id);
                const isCompleted = completedStages.includes(ch.id);
                const isCurrent = currentSpread === ch.id + 1;
                
                return (
                  <button
                    key={ch.id}
                    disabled={!isUnlocked}
                    onClick={() => turnToPage(ch.id + 1)}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono leading-none border transition-all cursor-pointer outline-none ${
                      isCurrent
                        ? "bg-[#D4AF37] text-stone-950 border-[#D4AF37] font-bold"
                        : isCompleted
                        ? "bg-[#8D6E63]/20 text-[#D4AF37] border-[#8D6E63]/40"
                        : isUnlocked
                        ? "bg-transparent text-stone-300 border-stone-600 hover:border-stone-400"
                        : "bg-transparent text-stone-600 border-stone-800 cursor-not-allowed"
                    }`}
                    title={ch.title}
                  >
                    Tappa {ch.id}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Central Page Numbers in Roman numerals */}
          <div className="text-center">
            <p className="font-serif italic text-xs text-[#D7CCC8]">
              {currentSpread === 1 ? "Mappa delle Tappe" : currentSpread === 7 ? "Epilogo Accademico" : `Capitolo ${currentSpread - 1}: ${chaptersData[currentSpread - 2]?.title.split(". ")[1]}`}
            </p>
            <span className="font-mono text-[9px] text-[#A1887F] uppercase tracking-widest block mt-0.5">
              Pagine: {romanNumerals[currentSpread]}
            </span>
          </div>

          {/* Arrow Pagination buttons */}
          <div className="flex items-center gap-2">
            <button
              disabled={currentSpread <= 1}
              onClick={() => turnToPage(currentSpread - 1)}
              className="p-2 bg-[#4E342E]/50 hover:bg-[#4E342E]/90 text-stone-200 border border-stone-700 rounded-md transition-colors cursor-pointer outline-none disabled:opacity-30 disabled:cursor-not-allowed"
              title="Pagina Precedente"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              disabled={currentSpread >= 7 || !completedStages.includes(currentSpread - 1)}
              onClick={() => turnToPage(currentSpread + 1)}
              className="p-2 bg-[#4E342E]/50 hover:bg-[#4E342E]/90 text-stone-200 border border-stone-700 rounded-md transition-colors cursor-pointer outline-none disabled:opacity-30 disabled:cursor-not-allowed"
              title="Pagina Successiva"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </footer>
      )}
    </main>
  );
}
