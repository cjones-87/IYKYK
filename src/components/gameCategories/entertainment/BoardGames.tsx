import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const BoardGames = () => {
  const { quizType } = useQuizType();

  return <Game category={16} header={'Board Games'} type={quizType} />;
};

export default BoardGames;
