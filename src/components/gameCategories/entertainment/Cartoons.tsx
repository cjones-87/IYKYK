import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const Cartoons = () => {
  const { quizType } = useQuizType();

  return <Game category={32} header={'Cartoons'} type={quizType} />;
};

export default Cartoons;
