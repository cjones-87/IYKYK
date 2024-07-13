import useQuizType from '../../customHooks/useQuizType';

const QuizTypeToggle = () => {
  const { quizType, toggleQuizType } = useQuizType();

  return (
    <label
      className='switch'
      title={quizType === 'boolean' ? 'multiple choice' : 'true/false'}
    >
      <input
        checked={quizType === 'boolean'}
        type='checkbox'
        onChange={toggleQuizType}
      />
      <span className='slider round'></span>
    </label>
  );
};
export default QuizTypeToggle;
