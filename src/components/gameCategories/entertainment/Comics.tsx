import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const Comics = () => {
  const { quizType } = useQuizType();

  return <Game category={30} header='Comics' type={quizType} />;
};

export default Comics;
