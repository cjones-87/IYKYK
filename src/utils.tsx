export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
//   let remainingElements: number = array.length,
//     temp,
//     index: number;
