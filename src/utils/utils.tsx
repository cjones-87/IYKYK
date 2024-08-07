export interface GameProps {
  category: number;
  header: string;
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

export const shuffleArray = (array: string[]): string[] => {
  let remainingElementsToBeShuffled = array.length;
  let temp: string;
  let index: number;

  while (remainingElementsToBeShuffled) {
    index = Math.floor(Math.random() * remainingElementsToBeShuffled--);
    temp = array[remainingElementsToBeShuffled];
    array[remainingElementsToBeShuffled] = array[index];
    array[index] = temp;
  }

  return array;
};

export type NavbarObject = {
  header: string;
  href: string;
  dropdown: boolean;
  options?: { content: string; href: string }[];
};

export type CategoryPageProps = {
  header: string;
  listItems: { content: string; href: string }[];
};
