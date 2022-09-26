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
    <div>
      <p className="number">
        Question: {questionNumber} of {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button disabled={!!userAnswer} onClick={callback} value={answer}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
