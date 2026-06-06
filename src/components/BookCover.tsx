import React from "react";
import { motion } from "motion/react";
import { BookOpen, Compass } from "lucide-react";

interface BookCoverProps {
  onOpenBook: () => void;
}

export const BookCover: React.FC<BookCoverProps> = ({ onOpenBook }) => {
  return (
    <div className="w-full max-w-xl mx-auto h-[550px] relative parchment-paper rounded-r-lg shadow-2xl overflow-hidden border-2 border-[#3E2723] flex flex-col justify-between p-12 select-none select-none">
      {/* Physical Leather Texture Overlay with subtle lighting gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#2D1210] to-[#591B18] pointer-events-none" />
      
      {/* Florentine Gold Foil Filigree Corners */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37]/50 rounded-tl-sm pointer-events-none flex items-start justify-start p-1 text-[#D4AF37]/40 font-serif text-xs">†</div>
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#D4AF37]/50 rounded-tr-sm pointer-events-none flex items-start justify-end p-1 text-[#D4AF37]/40 font-serif text-xs">†</div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#D4AF37]/50 rounded-bl-sm pointer-events-none flex items-end justify-start p-1 text-[#D4AF37]/40 font-serif text-xs">†</div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37]/50 rounded-br-sm pointer-events-none flex items-end justify-end p-1 text-[#D4AF37]/40 font-serif text-xs">†</div>

      {/* Internal gold frame line */}
      <div className="absolute inset-6 border border-[#D4AF37]/30 pointer-events-none" />

      {/* Heavy Embossed Visual Lines */}
      <div className="z-10 text-center mt-6">
        <span className="font-mono text-xs tracking-[0.25em] text-[#D4AF37]/80 uppercase block">
          Studio Culturalis Florentinae
        </span>
        <div className="w-16 h-[1px] bg-[#D4AF37]/40 mx-auto mt-3 mb-8" />
      </div>

      {/* Main Classical Title */}
      <div className="z-10 text-center my-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-4"
        >
          <img 
            src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><path d='M50,85 C50,60 20,60 20,40 C20,20 40,25 50,10 C60,25 80,20 80,40 C80,60 50,60 50,85 Z' fill='none' stroke='%23D4AF37' stroke-width='1.5'/><line x1='30' y1='38' x2='70' y2='38' stroke='%23D4AF37' stroke-width='1'/><circle cx='50' cy='38' r='3' fill='%23D4AF37'/></svg>"
            alt="Giglio di Firenze"
            className="w-16 h-16 opacity-75 mb-6 mx-auto filter drop-shadow"
            referrerPolicy="no-referrer"
          />
          <h1 className="font-display text-4xl font-bold tracking-wide text-[#F3E5F5] drop-shadow-md text-amber-50">
            FIRENZE
          </h1>
          <h2 className="font-display text-2xl font-semibold tracking-[0.15em] text-[#D4AF37] mt-1 drop-shadow-xs">
            ODYSSEY
          </h2>
          <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent mx-auto mt-4" />
          <p className="font-serif italic text-base text-[#D7CCC8]/90 mt-5 leading-relaxed max-w-sm antialiased">
            “Un giorno a Firenze”<br />
            <span className="text-sm font-sans tracking-wide uppercase text-stone-300 not-italic">
              Itinerario culturale per studenti
            </span>
          </p>
        </motion.div>
      </div>

      {/* Bottom Button Action */}
      <div className="z-10 text-center mb-6">
        <motion.button
          onClick={onOpenBook}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 bg-gradient-to-b from-[#D4AF37] to-[#AA7C11] text-[#2D1210] font-display font-bold tracking-widest text-xs rounded uppercase shadow-lg hover:brightness-110 active:brightness-95 transition-all outline-none border border-[#FFECB3]/30 cursor-pointer flex items-center gap-2 mx-auto"
        >
          <BookOpen className="w-4 h-4" />
          Apri il Libro
        </motion.button>
        <span className="font-mono text-[9px] text-[#A1887F]/60 uppercase tracking-[0.2em] block mt-5">
          Anno Accademico MMXXVI • Firenze, Toscana
        </span>
      </div>

      {/* Spine Thickness Shadow Visual */}
      <div className="absolute right-0 top-0 bottom-0 w-3 bg-gradient-to-l from-black/50 to-transparent pointer-events-none" />
    </div>
  );
};
