import { createContext, useEffect, useState, ReactNode } from 'react';

export interface QuizProps {
  quizType: string;
  toggleQuizType: () => void;
}

export const QuizTypeContext = createContext<QuizProps | null>(null);

const QuizContext = ({ children }: { children: ReactNode }) => {
  const [quizType, setQuizType] = useState(() => {
    const storedQuizType = localStorage.getItem('quizMode');
    return storedQuizType ? JSON.parse(storedQuizType) : 'multiple';
  });

  const toggleQuizType = (): void =>
    setQuizType((current: string) =>
      current === 'multiple' ? 'boolean' : 'multiple'
    );

  useEffect(() => {
    localStorage.setItem('quizMode', JSON.stringify(quizType));
  }, [quizType]);

  return (
    <QuizTypeContext.Provider value={{ quizType, toggleQuizType }}>
      {children}
    </QuizTypeContext.Provider>
  );
};

export default QuizContext;
