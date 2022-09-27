import React from 'react';

import { AnswerObject } from '../App';

type Props = {
  question: string;
  answers: string[];
  callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  answers,
  callback,
  question,
  questionNumber,
  totalQuestions,
  userAnswer,
}) => {
  return (
    <div className="container">
      <p className="number background">
        Question: {questionNumber} of {totalQuestions}
      </p>
      <p
        className="background"
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <div className="grid">
        {answers.map((answer, index) => (
          <div key={index} className="gridItem">
            <button
              className="button"
              disabled={!!userAnswer}
              onClick={callback}
              value={answer}
              style={{ width: window.screen.width / 7 }}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
