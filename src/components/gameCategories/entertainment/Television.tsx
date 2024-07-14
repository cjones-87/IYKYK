import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const Television = () => {
  const { quizType } = useQuizType();

  return <Game category={14} header={'Television'} type={quizType} />;
};

export default Television;
