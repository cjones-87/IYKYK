import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const Art = () => {
  const { quizType } = useQuizType();

  return <Game category={25} header='Art' type={quizType} />;
};

export default Art;
