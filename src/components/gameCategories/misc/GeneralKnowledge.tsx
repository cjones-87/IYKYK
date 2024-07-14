import useQuizType from '../../../customHooks/useQuizType';
import Game from '../../reusableComponents/Game';

const GeneralKnowledge = () => {
  const { quizType } = useQuizType();

  return <Game category={9} header={'General Knowledge'} type={quizType} />;
};

export default GeneralKnowledge;
