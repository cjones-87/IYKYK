import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const Vehicles = () => {
  const { quizType } = useQuizType();

  return <Game category={28} header='Vehicles' type={quizType} />;
};

export default Vehicles;
