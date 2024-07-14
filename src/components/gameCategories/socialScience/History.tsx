import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const History = () => {
  const { quizType } = useQuizType();

  return <Game category={23} header='History' type={quizType} />;
};

export default History;
