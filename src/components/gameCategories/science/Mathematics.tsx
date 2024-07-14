import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const Mathematics = () => {
  const { quizType } = useQuizType();

  return <Game category={19} header='Mathematics' type={quizType} />;
};

export default Mathematics;
