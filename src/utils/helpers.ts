export const getRandomInt: (top: number) => number = (top) =>
  Math.floor(Math.random() * top);

export const getCapitalizedWord: (word: string) => string = (word) =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
