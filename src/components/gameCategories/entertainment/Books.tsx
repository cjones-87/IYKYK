import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const Books = () => {
  const { quizType } = useQuizType();

  return <Game category={10} header={'Books'} type={quizType} />;
};

export default Books;
