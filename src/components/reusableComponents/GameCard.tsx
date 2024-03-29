import React from 'react';
import { GameCardProps } from '../../utils/utils';

const GameCard: React.FC<GameCardProps> = ({
  answers,
  callback,
  question,
  questionNumber,
  totalQuestions,
  userAnswer,
}) => {
  return (
    <div className="gameCardContainer">
      <div className="gameCardGrid2">
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
      <div className="gameCardGrid">
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
