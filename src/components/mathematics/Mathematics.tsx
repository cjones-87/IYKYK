import React, { useState } from 'react';

import MathematicsCard from './MathematicsCard';

import {
  AnswerObject,
  Difficulty,
  QuestionState,
  TotalQuestions,
} from '../../utils/utils';
import { fetchQuizQuestions } from './MathematicsAPI';

const Mathematics = () => {
  const [gameOver, setGameOver] = useState(true);
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    //need to implement try catch
    const newQuestions = await fetchQuizQuestions(
      TotalQuestions,
      Difficulty.MEDIUM
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = event.currentTarget.value;

      const correct = questions[number].correct_answer === answer;

      if (correct) setScore((current) => current + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((previous) => [...previous, answerObject]);
    }
  };

  const nextQuestion = () => {
    const next_Question = number + 1;

    next_Question === TotalQuestions
      ? setGameOver(true)
      : setNumber(next_Question);
  };

  return (
    <div className="centered">
      {gameOver || userAnswers.length === TotalQuestions ? (
        <button className="start button" onClick={startTrivia}>
          Start Game
        </button>
      ) : null}
      {!gameOver ? (
        <p className="score">Score: {(score / TotalQuestions) * 100}%</p>
      ) : null}
      {loading ? <p>Loading Questions {'\n'} Please Wait ...</p> : null}
      {!loading && !gameOver ? (
        <MathematicsCard
          questionNumber={number + 1}
          totalQuestions={TotalQuestions}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      ) : null}
      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== TotalQuestions - 1 ? (
        <button className="next button" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
    </div>
  );
};

export default Mathematics;
