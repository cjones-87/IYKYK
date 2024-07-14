import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const Mythology = () => {
  const { quizType } = useQuizType();

  return <Game category={20} header='Mythology' type={quizType} />;
};

export default Mythology;
