export interface IllustrationData {
  id: string;
  figureNumber: number;
  title: string;
  caption: string;
  type: "svg-duomo" | "svg-signoria" | "svg-mercato" | "svg-oblate" | "svg-spirito";
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ValidationTask {
  type: "brick-align" | "statue-match" | "guild-trade" | "manuscript-translate" | "golden-ratio";
  instruction: string;
  successMessage: string;
}

export interface Chapter {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  mapX: number;
  mapY: number;
  leftPage: {
    chapterLabel: string;
    title: string;
    paragraphs: string[];
    task: ValidationTask;
  };
  rightPage: {
    paragraphs: string[];
    illustration: IllustrationData;
    quiz: QuizQuestion;
  };
}

export interface BookState {
  currentSpread: number; // 0: Cover, 1: Map, 2: Ch 1 (spread 2), 3: Ch 2, 4: Ch 3, 5: Ch 4, 6: Ch 5, 7: Epilogue
  unlockedStages: number[]; // [1] initially, unlocks 2, 3, 4, 5
  completedStages: number[]; // empty initially, adds completed stages
  activeMapNode: number | null; // currently selected node on the map
  hasSeenIntro: boolean;
}
