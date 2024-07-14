import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const Music = () => {
  const { quizType } = useQuizType();

  return <Game category={12} header={'Music'} type={quizType} />;
};

export default Music;
