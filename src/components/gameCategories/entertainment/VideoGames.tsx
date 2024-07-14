import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const VideoGames = () => {
  const { quizType } = useQuizType();

  return <Game category={15} header={'Video Games'} type={quizType} />;
};

export default VideoGames;
