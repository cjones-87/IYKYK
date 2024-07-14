import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const Anime = () => {
  const { quizType } = useQuizType();

  return <Game category={31} header='Anime' type={quizType} />;
};

export default Anime;
