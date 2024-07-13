import React, { useState } from 'react';

import GameCard from './GameCard';

import {
  AnswerObject,
  GameProps,
  QuestionState,
  TotalQuestions,
} from '../../utils/utils';
import { fetchAPIQuizQuestions } from './fetchAPIQuizQuestions';

const Game: React.FC<GameProps> = ({ category, header, type }) => {
  const [gameOver, setGameOver] = useState(true);
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [difficulty, setDifficulty] = useState('medium');

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    //need to implement try catch
    const newQuestions = await fetchAPIQuizQuestions(
      TotalQuestions,
      difficulty,
      category,
      type
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

  const handleDifficultyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value: string = event.target.value;

    setDifficulty(value);
  };

  return (
    <div className='centered'>
      <h1 id='gameHeader' style={{ display: gameOver ? 'block' : 'none' }}>
        {header}
      </h1>

      {gameOver || userAnswers.length === TotalQuestions ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <h2 style={{ textShadow: '2px 2px 2px black' }}>
            Choose your difficulty level
          </h2>
          <select
            value={difficulty}
            onChange={handleDifficultyChange}
            style={{ margin: 'auto' }}
          >
            <option value={'easy'}>EASY</option>
            <option value={'medium'}>MEDIUM</option>
            <option value={'hard'}>HARD</option>
          </select>

          <button
            className='start button'
            onClick={startTrivia}
            style={{ margin: 'auto' }}
            title='press here to start'
          >
            Start Game
          </button>
        </div>
      ) : null}
      {!gameOver ? (
        <p className='score'>Score: {(score / TotalQuestions) * 100}%</p>
      ) : null}
      {loading ? <p>Loading Questions {'\n'} Please Wait ...</p> : null}
      {!loading && !gameOver ? (
        <GameCard
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
        <button className='next button' onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
    </div>
  );
};

export default Game;
