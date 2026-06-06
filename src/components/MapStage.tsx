import React from "react";
import { motion } from "motion/react";
import { Lock, Check, MapPin, Landmark, Compass } from "lucide-react";
import { Chapter } from "../types";

interface MapStageProps {
  chapters: Chapter[];
  unlockedStages: number[];
  completedStages: number[];
  onSelectStage: (stageId: number) => void;
  animatingInkTo: number | null;
}

export const MapStage: React.FC<MapStageProps> = ({
  chapters,
  unlockedStages,
  completedStages,
  onSelectStage,
  animatingInkTo,
}) => {
  // Florence streets decoration coordinates for a rustic vintage look
  const streets = [
    { name: "Ponte Vecchio", d: "M 130,290 L 150,340" },
    { name: "Via de' Calzaiuoli", d: "M 245,130 L 235,210" },
    { name: "Via dell'Alighieri", d: "M 235,210 L 290,195" },
    { name: "Borgo de' Greci", d: "M 235,210 L 320,240" },
    { name: "Via de' Cerretani", d: "M 250,130 L 170,110" },
    { name: "Ponte Santa Trinita", d: "M 70,310 L 105,355" },
    { name: "Via del Proconsolo", d: "M 255,130 L 290,195" },
  ];

  return (
    <div className="w-full h-full relative flex flex-col justify-between p-6 select-none">
      {/* Editorial Header */}
      <div>
        <span className="font-mono text-[9px] tracking-widest text-[#8D6E63] uppercase block">
          Documento di Viaggio Accademico
        </span>
        <h3 className="font-display text-xl font-bold text-[#4E342E] tracking-tight uppercase mt-1">
          Florentia Illustrata
        </h3>
        <p className="font-serif italic text-xs text-[#795548] mt-1 leading-snug">
          Mappa topografica delle tappe di studio nell'alveo urbano del Rinascimento.
        </p>
      </div>

      {/* Interactive Map Box */}
      <div className="my-3 border-2 border-double border-[#8D6E63]/40 rounded-lg p-2 bg-[#FAF6EE] relative shadow-inner overflow-hidden flex-1 min-h-[340px]">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: "radial-gradient(#8D6E63 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
        
        <svg viewBox="0 0 400 400" className="w-[100%] h-full">
          {/* Fiume Arno (River Arno) stylized waves */}
          <path
            d="M -20,280 Q 80,310 160,320 T 320,380 T 420,390"
            fill="none"
            stroke="#90CAF9"
            strokeWidth="16"
            strokeLinecap="round"
            opacity="0.35"
          />
          <path
            d="M -20,280 Q 80,310 160,320 T 320,380 T 420,390"
            fill="none"
            stroke="#81D4FA"
            strokeWidth="1.5"
            strokeDasharray="5 3"
            strokeLinecap="round"
            opacity="0.6"
          />
          <text x="40" y="315" transform="rotate(10, 40, 315)" className="font-serif italic text-[9px] tracking-widest fill-[#0D47A1]/40 select-none">
            FIUME ARNO
          </text>

          {/* Historic Street Overlays */}
          {streets.map((st, i) => (
            <g key={i}>
              <path d={st.d} fill="none" stroke="#CAA293" strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />
              {/* Optional label for streets on hover */}
            </g>
          ))}

          {/* Compass Rose (Rosa dei Venti) */}
          <g transform="translate(60, 60)" className="text-[#8D6E63]/30" stroke="currentColor" strokeWidth="1" fill="none">
            <circle cx="0" cy="0" r="18" strokeDasharray="1 2" />
            <circle cx="0" cy="0" r="24" strokeWidth="0.5" />
            <path d="M 0,-28 L 0,28 M -28,0 L 28,0" strokeWidth="0.5" />
            <polygon points="0,-28 4,-8 0,0 -4,-8" fill="currentColor" fillOpacity="0.1" />
            <polygon points="0,28 4,8 0,0 -4,8" fill="currentColor" fillOpacity="0.1" />
            <polygon points="-28,0 -8,-4 0,0 -8,4" fill="currentColor" fillOpacity="0.1" />
            <polygon points="28,0 8,-4 0,0 8,4" fill="currentColor" fillOpacity="0.1" />
            <text x="-4" y="-31" className="font-serif text-[8px] fill-[#8D6E63]/60 stroke-all-none">N</text>
          </g>

          {/* Connections (The Ink Flow Path) */}
          {chapters.slice(0, -1).map((ch, index) => {
            const current = ch;
            const next = chapters[index + 1];
            
            // Draw path lines
            const isCompleted = completedStages.includes(current.id);
            const isNextActive = animatingInkTo === next.id;
            
            return (
              <g key={`path-${index}`}>
                {/* Underlay dash background for locked paths */}
                <line
                  x1={current.mapX}
                  y1={current.mapY}
                  x2={next.mapX}
                  y2={next.mapY}
                  stroke="#E8E1CE"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                
                {/* Active/Completed Ink Connection */}
                <motion.line
                  x1={current.mapX}
                  y1={current.mapY}
                  x2={next.mapX}
                  y2={next.mapY}
                  stroke={completedStages.includes(current.id) ? "#8D6E63" : "#C5A866"}
                  strokeWidth="2"
                  strokeDasharray="6 4"
                  strokeLinecap="round"
                  opacity={(isCompleted || isNextActive) ? 1 : 0.15}
                  initial={{ strokeDashoffset: 100 }}
                  animate={isNextActive ? { strokeDashoffset: 0 } : { strokeDashoffset: [100, 0] }}
                  transition={isNextActive ? { duration: 3, ease: "easeInOut" } : { duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </g>
            );
          })}

          {/* Legendary Landmarks Pins */}
          {chapters.map((ch, index) => {
            const isUnlocked = unlockedStages.includes(ch.id);
            const isCompleted = completedStages.includes(ch.id);
            const isCurrent = isUnlocked && !isCompleted;
            
            return (
              <g
                key={`node-${ch.id}`}
                transform={`translate(${ch.mapX}, ${ch.mapY})`}
                onClick={() => isUnlocked && onSelectStage(ch.id)}
                className={`cursor-pointer group select-none`}
              >
                {/* Active Pulse Animation outer circle */}
                {isUnlocked && !isCompleted && (
                  <circle r="20" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.4">
                    <animate attributeName="r" values="8;20" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
                  </circle>
                )}

                {/* Main Node Seal */}
                <circle
                  r={isCurrent ? "12" : "9"}
                  fill={isCompleted ? "#5D4037" : isUnlocked ? "#CA9A48" : "#E0D7C3"}
                  stroke={isCurrent ? "#5D4037" : "#8D6E63"}
                  strokeWidth={isCurrent ? "2" : "1.2"}
                  className="transition-all duration-300 group-hover:scale-110"
                />

                {/* Text Indicator inside Seal */}
                <g className="pointer-events-none select-none text-white font-serif font-bold text-[8px]" fill="currentColor" alignmentBaseline="middle">
                  {isCompleted ? (
                    <circle cx="0" cy="0" r="2.5" fill="#FFE082" />
                  ) : isUnlocked ? (
                    <text x="-3" y="2.5" fill="#FAF6EE" className="font-mono text-[7px]">{ch.id}</text>
                  ) : (
                    <circle cx="0" cy="0" r="1.5" fill="#9E9E9E" />
                  )}
                </g>

                {/* Floating Banner Label */}
                <g transform="translate(0, -18)" className="pointer-events-none">
                  {/* Banner Bg */}
                  <rect
                    x="-45"
                    y="-8"
                    width="90"
                    height="14"
                    rx="2"
                    fill={isUnlocked ? "#4E342E" : "#D7CCC8"}
                    opacity={isCurrent ? "1.0" : "0.85"}
                    stroke={isCurrent ? "#D4AF37" : "#A1887F"}
                    strokeWidth="0.5"
                  />
                  <text
                    x="0"
                    y="1"
                    className="font-display text-[7px] font-bold tracking-tight text-center"
                    fill={isUnlocked ? "#FFECB3" : "#5D4037"}
                    textAnchor="middle"
                  >
                    {ch.title.split(". ")[1]}
                  </text>
                </g>

                {/* Interactive visual helper, padlock for locked stages */}
                {!isUnlocked && (
                  <g transform="translate(0, 15)">
                    <circle cx="0" cy="-4" r="5" fill="#B0BEC5" stroke="#78909C" strokeWidth="0.5" />
                    <path d="M -2.5,-3 L 2.5,-3 L 2.5,-6 A 1,1 0 0 0 -2.5,-6 Z" fill="none" stroke="#FAF6EE" strokeWidth="0.75" />
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Aesthetic Footer Note */}
      <div className="flex justify-between items-center text-[9px] font-mono text-[#8D6E63]/70 pt-2 border-t border-[#8D6E63]/20">
        <span>Toscana • Firenze</span>
        <span className="flex items-center gap-1">
          <Compass className="w-3.5 h-3.5 stroke-[1.5]" />
          Scala Grafica 1:5000
        </span>
      </div>
    </div>
  );
};
