import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const Animals = () => {
  const { quizType } = useQuizType();

  return <Game category={27} header={'Animals'} type={quizType} />;
};

export default Animals;
