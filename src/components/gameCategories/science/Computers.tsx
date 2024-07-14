import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const Computers = () => {
  const { quizType } = useQuizType();

  return <Game category={18} header='Computers' type={quizType} />;
};

export default Computers;
