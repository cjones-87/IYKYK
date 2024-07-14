import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const ScienceAndNature = () => {
  const { quizType } = useQuizType();

  return <Game category={17} header='Science And Nature' type={quizType} />;
};

export default ScienceAndNature;
