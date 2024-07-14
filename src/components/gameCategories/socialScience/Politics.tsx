import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const Politics = () => {
  const { quizType } = useQuizType();

  return <Game category={24} header='Politics' type={quizType} />;
};

export default Politics;
