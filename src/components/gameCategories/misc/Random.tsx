import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const Random = () => {
  const { quizType } = useQuizType();

  return <Game category={32} header={'Random'} type={quizType} />;
};

export default Random;
