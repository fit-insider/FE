const isNumber = (char) => {
  return /^\d$/.test(char);
};

const isProcent =(char) => {
  return /^[*\u00BC-\u00BE\u2150-\u215E]$/.test(char);
};

export const removeUnit = (val: string) => {
  const words = val.split(' ');
  let wordPosition = 0;
  while (
    isNumber(words[wordPosition].charAt(0)) ||
    isProcent(words[wordPosition].charAt(0))
    ) {
    wordPosition += 1;
  }
  return words.slice(wordPosition, words.length).join(' ');
};