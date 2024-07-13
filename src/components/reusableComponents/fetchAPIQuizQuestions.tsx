import { Question, shuffleArray } from '../../utils/utils';

export const fetchAPIQuizQuestions = async (
  amount: number,
  difficulty: string,
  category: number,
  type: string
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;

  const data = await (await fetch(endpoint)).json();

  if (!data.results.length) {
    alert(
      'This quiz type or difficulty setting is not available for this quiz category. Please change either difficulty or quiz type to continue'
    );
    window.location.reload();
  }

  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
