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
      <div className="grid2">
        <p className="pBackground" style={{ width: window.innerHeight / 3 }}>
          Question: {questionNumber} of {totalQuestions}
        </p>
        <p
          className="pBackground"
          dangerouslySetInnerHTML={{ __html: question }}
          style={{ marginBottom: '30px', width: window.innerHeight / 1.5 }}
        />
      </div>
      <div className="grid">
        {answers.map((answer, index) => (
          <div key={index}>
            <button
              className="button"
              disabled={!!userAnswer}
              onClick={callback}
              value={answer}
              style={{
                paddingBottom: 20,
                width: window.screen.width / 5,
              }}
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
