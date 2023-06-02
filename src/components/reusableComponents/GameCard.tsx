import React from 'react';
import { Props } from '../../utils/utils';

const GameCard: React.FC<Props> = ({
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
        <p className="pBackground" style={{ width: window.innerHeight / 3.5 }}>
          Question: {questionNumber} of {totalQuestions}
        </p>
        <p
          className="pBackground"
          dangerouslySetInnerHTML={{ __html: question }}
          style={{
            lineHeight: '6rem',
            marginBottom: '30px',
            width: 'auto',
          }}
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
                width: 'auto',
              }}
            >
              <span
                className="answerSpan"
                dangerouslySetInnerHTML={{ __html: answer }}
                style={{ lineHeight: '2.5rem' }}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameCard;
