import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const Sports = () => {
  const { quizType } = useQuizType();

  return <Game category={21} header='Sports' type={quizType} />;
};

export default Sports;
