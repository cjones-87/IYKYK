export interface Dimensions {
  height: number;
  width: number;
}

export interface GameProps {
  category: number;
  type: string;
}

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export type AnswerObject = {
  answer: string;
  correct: boolean;
  correctAnswer: string;
  question: string;
};

export type GameCardProps = {
  question: string;
  answers: string[];
  callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

export const TotalQuestions = 10;

export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
//   let remainingElements: number = array.length,
//     temp,
//     index: number;

export type NavbarObject = {
  content: string;
  href: string;
};
