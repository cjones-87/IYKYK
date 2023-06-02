import { Difficulty, Question, shuffleArray } from '../../utils/utils';

export const fetchAPIQuizQuestions = async (
  amount: number,
  difficulty: Difficulty,
  category: number,
  type: string
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;

  const data = await (await fetch(endpoint)).json();

  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
