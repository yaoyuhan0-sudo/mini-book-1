import React from "react";
import { IllustrationData } from "../types";

export const AcademicIllustration: React.FC<{ illustration: IllustrationData }> = ({
  illustration,
}) => {
  const renderIllustrationGraphics = () => {
    switch (illustration.type) {
      case "svg-duomo":
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full text-[#8D6E63]">
            {/* Ground line */}
            <line x1="20" y1="220" x2="380" y2="220" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
            
            {/* Drum of the dome */}
            <rect x="120" y="150" width="160" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" />
            {/* Round windows of the drum */}
            <circle cx="145" cy="170" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="172" cy="170" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="200" cy="170" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="228" cy="170" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="255" cy="170" r="8" fill="none" stroke="currentColor" strokeWidth="1" />

            {/* Dome - Inner Shell */}
            <path d="M 124 150 Q 200 45 276 150" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
            
            {/* Dome - Outer Shell */}
            <path d="M 120 150 Q 200 20 280 150" fill="none" stroke="currentColor" strokeWidth="2.5" />
            
            {/* Ribs (costoloni) */}
            <path d="M 160 150 Q 200 28 200 150" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M 240 150 Q 200 28 200 150" fill="none" stroke="currentColor" strokeWidth="1" />
            
            {/* Herringbone brick pattern details (in miniature) */}
            <g stroke="currentColor" strokeWidth="0.75" opacity="0.7">
              {/* Left inclinings */}
              <line x1="140" y1="110" x2="148" y2="105" />
              <line x1="145" y1="120" x2="153" y2="115" />
              <line x1="150" y1="130" x2="158" y2="125" />
              
              {/* Right inclinings */}
              <line x1="260" y1="110" x2="252" y2="105" />
              <line x1="255" y1="120" x2="247" y2="115" />
              <line x1="250" y1="130" x2="242" y2="125" />

              {/* Central vertical herringbone teeth */}
              <path d="M 197 60 L 200 57 L 203 60 M 197 70 L 200 67 L 203 70 M 197 80 L 200 77 L 203 80" fill="none" />
            </g>

            {/* Lantern on top (lanterna) */}
            <rect x="188" y="24" width="24" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <polygon points="185,24 200,5 215,24" fill="none" stroke="currentColor" strokeWidth="1.5" />
            
            {/* Dimension labels and annotation lines */}
            <line x1="285" y1="85" x2="330" y2="85" stroke="currentColor" strokeWidth="0.5" />
            <text x="335" y="88" className="font-mono text-[9px]" fill="currentColor">Est. (Calotta Esterna)</text>
            
            <line x1="115" y1="115" x2="70" y2="115" stroke="currentColor" strokeWidth="0.5" />
            <text x="30" y="118" className="font-mono text-[9px]" fill="currentColor">Int. (Calotta Interna)</text>

            <line x1="200" y1="90" x2="200" y2="140" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
            <text x="204" y="110" className="font-mono text-[8px] italic" fill="currentColor">Asse di scarica</text>
          </svg>
        );
      case "svg-signoria":
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full text-[#8D6E63]">
            {/* Ground and steps */}
            <line x1="20" y1="210" x2="380" y2="210" stroke="currentColor" strokeWidth="1.5" />
            <line x1="18" y1="215" x2="382" y2="215" stroke="currentColor" strokeWidth="1" />
            
            {/* Classical Pier Left */}
            <rect x="50" y="80" width="25" height="130" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="50" y1="88" x2="75" y2="88" stroke="currentColor" strokeWidth="1.5" />
            <line x1="50" y1="95" x2="75" y2="95" stroke="currentColor" strokeWidth="1" />

            {/* Classical Pier Right */}
            <rect x="325" y="80" width="25" height="130" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="325" y1="88" x2="350" y2="88" stroke="currentColor" strokeWidth="1.5" />
            <line x1="325" y1="95" x2="350" y2="95" stroke="currentColor" strokeWidth="1" />

            {/* Central Pier if typical loggia */}
            <rect x="188" y="80" width="24" height="130" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="188" y1="88" x2="212" y2="88" stroke="currentColor" strokeWidth="1.5" />

            {/* Arches (Archi a tutto sesto) */}
            <path d="M 75 80 Q 131 20 188 80" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M 212 80 Q 268 20 325 80" fill="none" stroke="currentColor" strokeWidth="2" />
            
            {/* Cornice on top of the loggia */}
            <rect x="40" y="10" width="320" height="15" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="40" y1="18" x2="360" y2="18" stroke="currentColor" strokeWidth="1" />
            
            {/* Decorative circles inside spandrels */}
            <circle cx="131" cy="65" r="10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1" />
            <circle cx="268" cy="65" r="10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1" />

            {/* Minimal SVG outline representation of David statue */}
            <g transform="translate(100, 140)" stroke="currentColor" strokeWidth="1" fill="none">
              <path d="M 10 70 L 10 50 L 5 45 L 5 22 L 20 22 L 20 45 L 14 50 L 14 70" /> {/* Legs and trunk */}
              <circle cx="12.5" cy="15" r="5" /> {/* Head */}
              <path d="M 5 22 L 2 35 M 20 22 L 23 35" /> {/* Arms */}
              {/* Sling cord representation */}
              <path d="M 3 24 Q 10 18 15 25" strokeWidth="0.5" strokeDasharray="1 1" />
              {/* Pedestal */}
              <rect x="-2" y="70" width="30" height="10" />
              <text x="-4" y="92" className="font-mono text-[7px]" fill="currentColor">DAVID (Mic.)</text>
            </g>

            {/* Minimal SVG outline representing Perseo holding Medusa head */}
            <g transform="translate(250, 135)" stroke="currentColor" strokeWidth="1" fill="none">
              <path d="M 12 75 L 10 50 L 3 45 L 6 22 L 18 22 L 21 45 L 15 50 L 13 75" />
              <circle cx="12" cy="14" r="5" />
              <path d="M 3 22 L -4 20 M 18 22 L 26 35 L 29 40" /> {/* Raised hand holding head */}
              <circle cx="-5" cy="20" r="3" /> {/* Medusa cut off head */}
              <line x1="-5" y1="23" x2="-5" y2="28" strokeWidth="0.5" /> {/* Blood drips representation */}
              <path d="M 13 50 L 11 65" strokeWidth="0.5" />
              <rect x="2" y="75" width="22" height="10" />
              <text x="-2" y="97" className="font-mono text-[7px]" fill="currentColor">PERSEO (Cellini)</text>
            </g>
          </svg>
        );
      case "svg-mercato":
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full text-[#8D6E63]">
            {/* The Florin coin container */}
            <circle cx="130" cy="120" r="55" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="130" cy="120" r="50" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 1" />
            
            {/* Lily of Florence (Giglio di Firenze) */}
            <g transform="translate(100, 92) scale(1.1)" stroke="currentColor" fill="none" strokeWidth="1.5">
              <path d="M 27 40 C 27 20, 10 20, 10 10 C 10 25, 25 35, 27 50" /> {/* Left petal */}
              <path d="M 27 40 C 27 20, 44 20, 44 10 C 44 25, 29 35, 27 50" /> {/* Right petal */}
              <path d="M 27 8 Q 27 25 27 50" strokeWidth="2" /> {/* Center stem */}
              <path d="M 17 38 L 37 38" /> {/* Tie ribbon */}
              <path d="M 22 25 Q 16 12 12 10 M 32 25 Q 38 12 42 10" strokeWidth="1" /> {/* Small stigmas */}
              <circle cx="12" cy="9" r="1.5" />
              <circle cx="42" cy="9" r="1.5" />
            </g>
            <text x="100" y="195" className="font-display text-[9px] tracking-widest text-[#8D6E63]" fill="currentColor">FLOR. DECVS</text>

            {/* Scale of Balance (La bilancia di Zecca) */}
            <g transform="translate(280, 80)" stroke="currentColor" strokeWidth="1.5" fill="none">
              <line x1="0" y1="120" x2="80" y2="120" strokeWidth="1" /> {/* Ground */}
              
              <line x1="40" y1="120" x2="40" y2="40" strokeWidth="2" /> {/* Main Pillar */}
              <line x1="15" y1="40" x2="65" y2="40" strokeWidth="2" /> {/* Crosspiece */}
              
              {/* Chains Left */}
              <line x1="15" y1="40" x2="5" y2="75" strokeWidth="0.75" />
              <line x1="15" y1="40" x2="25" y2="75" strokeWidth="0.75" />
              <rect x="2" y="75" width="26" height="4" rx="1" /> {/* Left pan */}
              <circle cx="15" cy="71" r="3.5" fill="currentColor" opacity="0.3" /> {/* Gold Florin on weight */}

              {/* Chains Right */}
              <line x1="65" y1="40" x2="55" y2="85" strokeWidth="0.75" />
              <line x1="65" y1="40" x2="75" y2="85" strokeWidth="0.75" />
              <rect x="52" y="85" width="26" height="4" rx="1" /> {/* Right pan (tilted lower for heavy weight) */}
              
              {/* Weighted object */}
              <path d="M 58 85 L 62 72 L 68 72 L 72 85 Z" fill="currentColor" opacity="0.1" />
              <text x="59" y="81" className="font-mono text-[6px] fill-[#8D6E63] stroke-none">LANA</text>
              
              <text x="1" y="27" className="font-mono text-[8px]" fill="currentColor">BILANCIA DI ZECCA</text>
            </g>
          </svg>
        );
      case "svg-oblate":
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full text-[#8D6E63]">
            {/* Ground */}
            <line x1="20" y1="210" x2="380" y2="210" stroke="currentColor" strokeWidth="1" />
            
            {/* Ground floor arcades */}
            <rect x="30" y="125" width="20" height="85" fill="none" stroke="currentColor" strokeWidth="1" />
            <rect x="110" y="125" width="20" height="85" fill="none" stroke="currentColor" strokeWidth="1" />
            <rect x="190" y="125" width="20" height="85" fill="none" stroke="currentColor" strokeWidth="1" />
            <rect x="270" y="125" width="20" height="85" fill="none" stroke="currentColor" strokeWidth="1" />
            <rect x="350" y="125" width="20" height="85" fill="none" stroke="currentColor" strokeWidth="1" />

            {/* Columns and Arches (Lower Tier) */}
            <path d="M 50 125 Q 80 85 110 125" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M 130 125 Q 160 85 190 125" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M 210 125 Q 240 85 270 125" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M 290 125 Q 320 85 350 125" fill="none" stroke="currentColor" strokeWidth="1.5" />

            {/* Mid Cornice divide */}
            <rect x="20" y="115" width="360" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" />

            {/* Upper floor columns (Finer, double layout) */}
            <line x1="50" y1="115" x2="50" y2="50" stroke="currentColor" strokeWidth="1" />
            <line x1="80" y1="115" x2="80" y2="50" stroke="currentColor" strokeWidth="1" />
            <line x1="110" y1="115" x2="110" y2="50" stroke="currentColor" strokeWidth="1" />
            <line x1="140" y1="115" x2="140" y2="50" stroke="currentColor" strokeWidth="1" />
            <line x1="170" y1="115" x2="170" y2="50" stroke="currentColor" strokeWidth="1" />
            <line x1="200" y1="115" x2="200" y2="50" stroke="currentColor" strokeWidth="1" />
            <line x1="230" y1="115" x2="230" y2="50" stroke="currentColor" strokeWidth="1" />
            <line x1="260" y1="115" x2="260" y2="50" stroke="currentColor" strokeWidth="1" />
            <line x1="290" y1="115" x2="290" y2="50" stroke="currentColor" strokeWidth="1" />
            <line x1="320" y1="115" x2="320" y2="50" stroke="currentColor" strokeWidth="1" />
            <line x1="350" y1="115" x2="350" y2="50" stroke="currentColor" strokeWidth="1" />

            {/* Upper arches */}
            <path d="M 50 50 Q 65 30 80 50" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M 80 50 Q 95 30 110 50" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M 110 50 Q 125 30 140 50" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M 140 50 Q 155 30 170 50" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M 170 50 Q 185 30 200 50" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M 200 50 Q 215 30 230 50" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M 230 50 Q 245 30 260 50" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M 260 50 Q 275 30 290 50" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M 290 50 Q 305 30 320 50" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M 320 50 Q 335 30 350 50" fill="none" stroke="currentColor" strokeWidth="1" />

            {/* Architrave roof line */}
            <rect x="20" y="20" width="360" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" />

            {/* Minimal outline representing the Dome towering in background */}
            <path d="M 220 20 Q 270 -15 320 20" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.5" />
            <line x1="270" y1="-15" x2="270" y2="-5" stroke="currentColor" strokeWidth="0.75" strokeDasharray="1 1" opacity="0.5" />
            <text x="282" y="10" className="font-mono text-[7px]" fill="currentColor" opacity="0.5">CUPOLA IN LONTANANZA</text>
          </svg>
        );
      case "svg-spirito":
        return (
          <svg viewBox="0 0 400 240" className="w-full h-full text-[#8D6E63]">
            {/* Grid of central vanishing perspective lines (Prospettiva Brunelleschiana) */}
            <g stroke="currentColor" strokeWidth="0.5" opacity="0.4" strokeDasharray="2 2">
              {/* Vanishing Point is at cx="200", cy="110" */}
              <line x1="200" y1="110" x2="0" y2="0" />
              <line x1="200" y1="110" x2="100" y2="0" />
              <line x1="200" y1="110" x2="300" y2="0" />
              <line x1="200" y1="110" x2="400" y2="0" />
              
              <line x1="200" y1="110" x2="0" y2="240" />
              <line x1="200" y1="110" x2="80" y2="240" />
              <line x1="200" y1="110" x2="160" y2="240" />
              <line x1="200" y1="110" x2="240" y2="240" />
              <line x1="200" y1="110" x2="320" y2="240" />
              <line x1="200" y1="110" x2="400" y2="240" />
            </g>

            {/* Horizontal pavement lines */}
            <line x1="40" y1="180" x2="360" y2="180" stroke="currentColor" strokeWidth="0.5" />
            <line x1="100" y1="150" x2="300" y2="150" stroke="currentColor" strokeWidth="0.5" />
            <line x1="140" y1="130" x2="260" y2="130" stroke="currentColor" strokeWidth="0.5" />
            <line x1="170" y1="120" x2="230" y2="120" stroke="currentColor" strokeWidth="0.5" />

            {/* Receding columns of the nave - Left side */}
            {/* Column 1 (Closest) */}
            <line x1="40" y1="230" x2="40" y2="90" stroke="currentColor" strokeWidth="2.5" />
            <ellipse cx="40" cy="90" rx="6" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
            
            {/* Column 2 */}
            <line x1="100" y1="190" x2="100" y2="100" stroke="currentColor" strokeWidth="1.75" />
            <ellipse cx="100" cy="100" rx="4" ry="2" fill="none" stroke="currentColor" strokeWidth="1" />

            {/* Column 3 */}
            <line x1="140" y1="160" x2="140" y2="105" stroke="currentColor" strokeWidth="1.25" />
            
            {/* Column 4 */}
            <line x1="170" y1="140" x2="170" y2="107" stroke="currentColor" strokeWidth="0.75" />

            {/* Receding columns of the nave - Right side */}
            {/* Column 1 */}
            <line x1="360" y1="230" x2="360" y2="90" stroke="currentColor" strokeWidth="2.5" />
            <ellipse cx="360" cy="90" rx="6" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
            
            {/* Column 2 */}
            <line x1="300" y1="190" x2="300" y2="100" stroke="currentColor" strokeWidth="1.75" />
            <ellipse cx="300" cy="100" rx="4" ry="2" fill="none" stroke="currentColor" strokeWidth="1" />

            {/* Column 3 */}
            <line x1="260" y1="160" x2="260" y2="105" stroke="currentColor" strokeWidth="1.25" />

            {/* Column 4 */}
            <line x1="230" y1="140" x2="230" y2="107" stroke="currentColor" strokeWidth="0.75" />

            {/* Arches linking the columns */}
            <path d="M 40 90 Q 70 80 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M 100 100 Q 120 95 140 105" fill="none" stroke="currentColor" strokeWidth="1" />
            
            <path d="M 360 90 Q 330 80 300 100" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M 300 100 Q 280 95 260 105" fill="none" stroke="currentColor" strokeWidth="1" />

            {/* Central Nave Architrave lines projection */}
            <line x1="40" y1="50" x2="180" y2="98" stroke="currentColor" strokeWidth="1.5" />
            <line x1="360" y1="50" x2="220" y2="98" stroke="currentColor" strokeWidth="1.5" />

            <circle cx="200" cy="110" r="2" fill="currentColor" />
            <text x="175" y="100" className="font-mono text-[6px]" fill="currentColor">P.F. (Punto di Fuga)</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="my-3 border border-dashed border-[#8D6E63] p-4 rounded bg-[#FCFAF6] shadow-inner flex flex-col items-center">
      <div className="w-full h-40 max-h-40 flex items-center justify-center overflow-hidden">
        {renderIllustrationGraphics()}
      </div>
      <div className="mt-3 text-center border-t border-[#8D6E63]/20 w-full pt-2">
        <p className="font-serif italic text-xs leading-relaxed text-[#5D4037] antialiased">
          {illustration.caption}
        </p>
      </div>
    </div>
  );
};
