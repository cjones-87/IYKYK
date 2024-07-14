import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const Geography = () => {
  const { quizType } = useQuizType();

  return <Game category={22} header={'Geography'} type={quizType} />;
};

export default Geography;
