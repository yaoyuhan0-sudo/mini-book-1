import React, { useState, useEffect } from "react";
import { HelpCircle, CheckCircle, AlertCircle } from "lucide-react";
import { QuizQuestion } from "../types";

interface AcademicQuizProps {
  quiz: QuizQuestion;
  onSuccess: () => void;
  isCompleted: boolean;
}

export const AcademicQuiz: React.FC<AcademicQuizProps> = ({
  quiz,
  onSuccess,
  isCompleted,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(isCompleted);
  const [isCorrect, setIsCorrect] = useState(isCompleted);

  useEffect(() => {
    // Reset state when the quiz question changes between chapters
    setSelectedOption(null);
    setShowResult(isCompleted);
    setIsCorrect(isCompleted);
  }, [quiz, isCompleted]);

  const handleOptionSelect = (index: number) => {
    if (showResult && isCorrect) return; // Locked once answered correctly

    setSelectedOption(index);
    const correct = index === quiz.correctIndex;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      onSuccess();
    }
  };

  return (
    <div className="border border-[#8D6E63]/40 p-4 rounded bg-[#FCFAF5] shadow-sm select-none">
      {/* Quiz Header */}
      <div className="flex items-center gap-2 border-b border-[#8D6E63]/20 pb-2 mb-3">
        <HelpCircle className="w-4 h-4 text-[#8D6E63]" />
        <span className="font-display text-xs font-bold text-[#5D4037] tracking-wider uppercase">
          Verifica Accademica delle Fonti
        </span>
      </div>

      {/* Quiz Question */}
      <p className="font-serif font-bold text-xs leading-relaxed text-[#4E342E] mb-3">
        {quiz.question}
      </p>

      {/* Quiz Options */}
      <div className="space-y-2 mb-4">
        {quiz.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isThisCorrect = index === quiz.correctIndex;
          
          let optionStyle = "border-[#8D6E63]/25 bg-[#FCFAF6] hover:border-[#8D6E63]/60";
          if (showResult) {
            if (isThisCorrect) {
              optionStyle = "border-emerald-500 bg-emerald-50/60 font-medium text-emerald-900";
            } else if (isSelected) {
              optionStyle = "border-rose-400 bg-rose-50/60 text-rose-900";
            }
          } else if (isSelected) {
            optionStyle = "border-amber-500 bg-amber-50/60";
          }

          return (
            <button
              key={index}
              disabled={showResult && isCorrect}
              onClick={() => handleOptionSelect(index)}
              className={`w-full text-left font-serif text-xs px-3 py-2 rounded border transition-all text-[#5D4037] cursor-pointer outline-none ${optionStyle}`}
            >
              <div className="flex items-start gap-2">
                <span className="font-mono text-[10px] text-[#A1887F] mt-0.5 font-bold">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span className="leading-snug">{option}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation Banner */}
      {showResult && (
        <div className={`p-3 rounded border text-xs font-serif leading-relaxed ${
          isCorrect 
            ? "bg-emerald-50/70 border-emerald-300 text-emerald-800"
            : "bg-rose-50/70 border-rose-200 text-rose-800"
        }`}>
          <div className="flex items-center gap-2 mb-1">
            {isCorrect ? (
              <>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                <span className="font-serif font-bold text-emerald-900">Risposta Esatta!</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-3.5 h-3.5 text-[#C62828] stroke-[2.5]" />
                <span className="font-serif font-bold text-[#C62828]">Tentativo Errato</span>
              </>
            )}
          </div>
          <p className="italic text-[11px] mt-1 antialiased">
            {isCorrect 
              ? quiz.explanation 
              : "La fonte analizzata non conferma questa ipotesi. Rileggi attentamente il saggio della pagina a sinistra e riprova."}
          </p>
        </div>
      )}
    </div>
  );
};
