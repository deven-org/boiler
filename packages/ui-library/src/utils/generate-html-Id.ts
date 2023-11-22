const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;

const validFirstCharactersLength = charactersLength - 10;

const getRandomCharacter = (validFirstChar: boolean) => {
  // the bitwise OR replaces Math.floor which is much faster,
  // but will fail on very large numbers, which is not the case here
  if (validFirstChar) {
    return characters.charAt((Math.random() * validFirstCharactersLength) | 0);
  } else {
    return characters.charAt((Math.random() * charactersLength) | 0);
  }
};

export const generateId = (length?: number) => {
  length = length || 12;
  let result = getRandomCharacter(true);

  for (let i = 0, l = length - 1; i < l; i++) {
    result += getRandomCharacter(false);
  }

  return result;
};
