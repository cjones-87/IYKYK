import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const Film = () => {
  const { quizType } = useQuizType();

  return <Game category={11} header={'Film'} type={quizType} />;
};

export default Film;
