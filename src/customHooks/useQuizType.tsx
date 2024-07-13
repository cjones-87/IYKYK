import { useContext } from 'react';
import { QuizTypeContext } from '../context/QuizContext';

const useQuizType = () => {
  const quizMode = useContext(QuizTypeContext);

  if (quizMode === null) {
    throw Error(
      'useQuizType requires QuizContext to be used higher in the component tree'
    );
  }

  return quizMode;
};

export default useQuizType;
