import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const MusicalsAndTheater = () => {
  const { quizType } = useQuizType();

  return <Game category={13} header={'Musicals And Theater'} type={quizType} />;
};

export default MusicalsAndTheater;
