import React, { useState } from 'react';

import QuestionCard from './components/QuestionCard';

import { Difficulty, QuestionState, fetchQuizQuestions } from './API';

export type AnswerObject = {
  answer: string;
  correct: boolean;
  correctAnswer: string;
  question: string;
};

const TotalQuestions = 20;

const App = () => {
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
      Difficulty.EASY
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
      <h2>All I Know Is</h2>
      <h1>
        <big>
          <b>IYKYK</b>
        </big>
      </h1>
      <h2>Quiz Game</h2>
      {gameOver || userAnswers.length === TotalQuestions ? (
        <button className="start button" onClick={startTrivia}>
          Start
        </button>
      ) : null}
      {!gameOver ? <p className="score">Score: {score}</p> : null}
      {loading ? <p>Loading Questions {'\n'} Please Wait ...</p> : null}
      {!loading && !gameOver ? (
        <QuestionCard
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

export default App;
