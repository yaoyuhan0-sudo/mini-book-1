import React, { useState, useEffect } from "react";
import { Check, Info, Hammer, Sparkles, Scale, RefreshCw } from "lucide-react";
import { ValidationTask } from "../types";

interface ValidationTaskWidgetProps {
  task: ValidationTask;
  onSuccess: () => void;
  isCompleted: boolean;
}

export const ValidationTaskWidget: React.FC<ValidationTaskWidgetProps> = ({
  task,
  onSuccess,
  isCompleted,
}) => {
  const [success, setSuccess] = useState(isCompleted);

  // Task-specific states
  const [brickAngle, setBrickAngle] = useState(15); // brick-align state
  
  // statue-match state
  const [matchedStatues, setMatchedStatues] = useState<Record<string, string>>({});
  const statuesList = [
    { id: "david", name: "David di Michelangelo", correctId: "rep" },
    { id: "perseo", name: "Perseo di Cellini", correctId: "med" },
    { id: "giuditta", name: "Giuditta e Oloferne", correctId: "virtue" },
  ];
  const politicalMeanings = [
    { id: "rep", label: "Libertà Repubblicana: La difesa vigile dei cittadini contro i giganti oppressori" },
    { id: "med", label: "Assolutismo Granducale: Lo schiacciamento definitivo della sedizione repubblicana" },
    { id: "virtue", label: "Morale Civica: Il trionfo della virtù umile sulla tirannia superba" },
  ];

  // guild-trade state
  const [woolAmount, setWoolAmount] = useState(12);
  const [florinCount, setFlorinCount] = useState(1); // user tries to balance

  // manuscript state
  const [selectedWordIndex, setSelectedWordIndex] = useState<number | null>(null);
  const manuscriptOptions = [
    { idx: 0, text: "Guerra e penitenza punitiva per riparare i peccati" },
    { idx: 1, text: "Pietà e dedizione nell'assistenza quotidiana ad infermi e bisognosi" }, // correct
    { idx: 2, text: "Accumulo di ricchezze e monopolio commerciale della seta" },
  ];

  // golden-ratio state
  const [modularRatio, setModularRatio] = useState(1); // target is 2 (for 1:2)

  // Reset local states when task changes
  useEffect(() => {
    setSuccess(isCompleted);
    // Reset specific states
    setBrickAngle(15);
    setMatchedStatues({});
    setFlorinCount(1);
    setSelectedWordIndex(null);
    setModularRatio(1);
  }, [task, isCompleted]);

  const handleValidate = () => {
    if (task.type === "brick-align") {
      if (brickAngle >= 43 && brickAngle <= 47) {
        setSuccess(true);
        onSuccess();
      }
    } else if (task.type === "statue-match") {
      const isAllMatchedCorrectly = 
        matchedStatues["david"] === "rep" &&
        matchedStatues["perseo"] === "med" &&
        matchedStatues["giuditta"] === "virtue";
      if (isAllMatchedCorrectly) {
        setSuccess(true);
        onSuccess();
      }
    } else if (task.type === "guild-trade") {
      // 12 lbs of wool at 1 Florin per 3 lbs of wool equals 4 Florins
      if (florinCount === 4) {
        setSuccess(true);
        onSuccess();
      }
    } else if (task.type === "manuscript-translate") {
      if (selectedWordIndex === 1) {
        setSuccess(true);
        onSuccess();
      }
    } else if (task.type === "golden-ratio") {
      if (Math.abs(modularRatio - 2) < 0.1) {
        setSuccess(true);
        onSuccess();
      }
    }
  };

  return (
    <div className="border border-[#8D6E63]/40 p-4 rounded bg-[#FCFAF5] shadow-sm select-none">
      {/* Task Header */}
      <div className="flex items-center gap-2 border-b border-[#8D6E63]/20 pb-2 mb-3">
        <Hammer className="w-4 h-4 text-[#8D6E63]" />
        <span className="font-display text-xs font-bold text-[#5D4037] tracking-wider uppercase">
          Taccuino dei Rilievi e Studi edili
        </span>
      </div>

      {/* Task Description */}
      <p className="font-serif italic text-xs leading-relaxed text-[#5D4037] mb-4">
        {task.instruction}
      </p>

      {/* Interactive Visual Playfield based on task type */}
      <div className="bg-[#FAF6EE] border border-[#8D6E63]/20 rounded p-4 mb-4 relative min-h-[140px] flex flex-col justify-center">
        {success ? (
          <div className="text-center p-2 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mb-3">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <p className="font-serif text-xs font-bold text-emerald-800 tracking-wide max-w-sm">
              {task.successMessage}
            </p>
          </div>
        ) : (
          <>
            {/* Task: Brick Alignment for Duomo (Cattedrale) */}
            {task.type === "brick-align" && (
              <div className="space-y-4">
                <div className="flex justify-around items-center h-20">
                  {/* Visual Bricks angle display */}
                  <div className="w-24 h-16 border border-[#8D6E63]/30 rounded bg-[#EFEBE9] flex items-center justify-center relative overflow-hidden">
                    <div 
                      className="w-12 h-4 bg-[#A34F35] border border-[#5D2D1E] shadow-sm flex items-center justify-center text-[8px] font-mono text-white/80 transition-transform"
                      style={{ transform: `rotate(${brickAngle}deg)` }}
                    >
                      MATTONE
                    </div>
                    {/* Concentric guide lines */}
                    <div className="absolute inset-0 border-t border-dashed border-[#8D6E63]/20 pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-4 border-b border-dashed border-[#8D6E63]/20 pointer-events-none" />
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[10px] text-[#795548] block">Inclinazione Corrente</span>
                    <span className="font-display text-lg font-bold text-[#5D4037] block">{brickAngle}°</span>
                    <span className="font-mono text-[8px] text-amber-800 block">Obiettivo: 45° (Costolone Spina di Pesce)</span>
                  </div>
                </div>
                
                {/* Control Slider */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-[#8D6E63]">15°</span>
                  <input
                    type="range"
                    min="15"
                    max="75"
                    step="1"
                    value={brickAngle}
                    onChange={(e) => setBrickAngle(parseInt(e.target.value))}
                    className="flex-1 accent-[#8D6E63] cursor-pointer"
                  />
                  <span className="font-mono text-[10px] text-[#8D6E63]">75°</span>
                </div>
              </div>
            )}

            {/* Task: Statue Match for Piazza della Signoria */}
            {task.type === "statue-match" && (
              <div className="space-y-3">
                <div className="text-center mb-1">
                  <span className="font-mono text-[9px] text-[#8D6E63] uppercase tracking-wider">
                    Associa la Statua al Significato Politico
                  </span>
                </div>
                
                <div className="space-y-2">
                  {statuesList.map((st) => (
                    <div key={st.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#8D6E63]/10 pb-2 last:border-b-0">
                      <span className="font-serif text-xs font-bold text-[#5D4037] w-full sm:w-1/3 mb-1 sm:mb-0">
                        {st.name}
                      </span>
                      <select
                        value={matchedStatues[st.id] || ""}
                        onChange={(e) => setMatchedStatues({ ...matchedStatues, [st.id]: e.target.value })}
                        className="text-xs bg-[#FCFAF6] border border-[#8D6E63]/35 rounded px-2 py-1 text-[#5D4037] font-serif focus:outline-none focus:border-[#D4AF37] w-full sm:w-2/3"
                      >
                        <option value="">-- Seleziona il significato --</option>
                        {politicalMeanings.map((m) => (
                          <option key={m.id} value={m.id}>
                            {m.label.length > 55 ? m.label.substring(0, 55) + "..." : m.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Task: Guild Trade Currency for Mercato del Porcellino */}
            {task.type === "guild-trade" && (
              <div className="space-y-4">
                <div className="flex justify-around items-center h-22">
                  <div className="text-center bg-[#EFEBE9] p-2 rounded border border-[#8D6E63]/25 w-24">
                    <span className="font-mono text-[8px] text-[#8D6E63] uppercase block">Peso Lana</span>
                    <span className="font-display text-lg font-bold text-[#5D4037] block">{woolAmount} Lbs</span>
                    <span className="font-mono text-[8px] text-[#A1887F] block">Tasso: 3 Lbs = 1 Fior.</span>
                  </div>

                  {/* Weight balance visualization */}
                  <div className="flex flex-col items-center justify-center">
                    <Scale className={`w-8 h-8 ${florinCount === 4 ? "text-emerald-700" : "text-[#8D6E63]"}`} />
                    <span className="font-mono text-[8px] mt-1 text-[#8D6E63]">
                      {florinCount === 4 ? "Bilanciata!" : "Sbilanciata"}
                    </span>
                  </div>

                  <div className="text-center bg-amber-50 p-2 rounded border border-amber-300 w-24">
                    <span className="font-mono text-[8px] text-amber-700 uppercase block">Zecca d'Oro</span>
                    <span className="font-display text-lg font-bold text-amber-800 block">{florinCount} Fior.</span>
                    <span className="font-mono text-[8px] text-amber-600 block">Fiorini d'Oro</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setFlorinCount(Math.max(1, florinCount - 1))}
                    className="w-8 h-8 rounded bg-[#FCFAF6] border border-[#8D6E63]/30 text-[#8D6E63] flex items-center justify-center font-bold text-sm cursor-pointer hover:bg-stone-100 active:bg-stone-200 outline-none"
                  >
                    -
                  </button>
                  <span className="font-mono text-xs text-[#5D4037] px-4 font-bold">Imposta Peso Fiorini</span>
                  <button
                    onClick={() => setFlorinCount(Math.min(10, florinCount + 1))}
                    className="w-8 h-8 rounded bg-[#FCFAF6] border border-[#8D6E63]/30 text-[#8D6E63] flex items-center justify-center font-bold text-sm cursor-pointer hover:bg-stone-100 active:bg-stone-200 outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Task: Manuscript translation for Oblate (Biblioteca) */}
            {task.type === "manuscript-translate" && (
              <div className="space-y-3">
                <div className="text-center border border-double border-[#8D6E63]/30 p-2 bg-[#F5EFE1] rounded">
                  <span className="font-mono text-[8px] text-[#8D6E63]/70 uppercase block">Scriptorium S. Maria Nuova</span>
                  <span className="font-display text-sm italic font-bold tracking-widest text-[#4E342E] block">
                    “ Misericordia et Cura ”
                  </span>
                </div>

                <div className="space-y-2">
                  {manuscriptOptions.map((opt) => (
                    <button
                      key={opt.idx}
                      onClick={() => setSelectedWordIndex(opt.idx)}
                      className={`w-full text-left font-serif text-xs px-3 py-2 rounded border transition-all text-[#5D4037] cursor-pointer outline-none ${
                        selectedWordIndex === opt.idx
                          ? "bg-amber-100/60 border-amber-500 font-medium"
                          : "bg-[#FCFAF6] border-[#8D6E63]/20 hover:border-[#8D6E63]/60"
                      }`}
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Task: Golden Ratio alignment for Santo Spirito */}
            {task.type === "golden-ratio" && (
              <div className="space-y-4">
                <div className="flex justify-around items-end h-24 pb-2 border-b border-[#8D6E63]/25">
                  {/* Left Column (Reference modulo base) */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 bg-[#8D6E63]/30 border-t border-x border-[#8D6E63] text-center" style={{ height: "40px" }} />
                    <span className="font-mono text-[8px] text-[#8D6E63]">Base (1)</span>
                  </div>

                  {/* Brunelleschi pillar reference perspective ratio */}
                  <div className="flex flex-col items-center relative">
                    <div className="w-10 bg-[#5D4037] border-t border-x border-[#3E2723] rounded-t-sm transition-all" style={{ height: `${modularRatio * 40}px` }} />
                    {/* Marks showing the exact correct height 1:2 */}
                    <div className="absolute bottom-[80px] w-12 border-b border-dashed border-red-600 pointer-events-none" />
                    <span className="font-mono text-[8px] text-[#5D4037] font-bold mt-1">Altezza della Navata ({modularRatio.toFixed(1)})</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-[#795548] font-mono">
                    <span>Proporzione: {modularRatio.toFixed(1)} : 1</span>
                    <span className="text-red-700 font-bold">{Math.abs(modularRatio - 2) < 0.1 ? "Rapporto Divino 1:2 Raggiunto!" : "Fuori Asse Prospettico"}</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="3.0"
                    step="0.1"
                    value={modularRatio}
                    onChange={(e) => setModularRatio(parseFloat(e.target.value))}
                    className="w-full accent-[#8D6E63] cursor-pointer"
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Manual Check / Validation Trigger */}
      {!success && (
        <button
          onClick={handleValidate}
          className="w-full py-2 bg-[#8D6E63] hover:bg-[#5D4037] text-white font-display font-medium text-xs rounded tracking-wider uppercase transition-colors outline-none cursor-pointer border border-[#5D4037]/10"
        >
          Valida Studio Tecnico
        </button>
      )}
    </div>
  );
};
