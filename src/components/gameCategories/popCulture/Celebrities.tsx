import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const Celebrities = () => {
  const { quizType } = useQuizType();

  return <Game category={26} header='Celebrities' type={quizType} />;
};

export default Celebrities;
