import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const Gadgets = () => {
  const { quizType } = useQuizType();

  return <Game category={18} header='Gadgets' type={quizType} />;
};

export default Gadgets;
