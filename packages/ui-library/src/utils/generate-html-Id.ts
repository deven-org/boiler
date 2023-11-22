const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;

const validFirstCharactersLength = charactersLength - 10;

const getRandomCharacter = (validFirstChar: boolean) => {
  if (validFirstChar) {
    return characters.charAt(Math.floor(Math.random() * validFirstCharactersLength));
  } else {
    return characters.charAt(Math.floor(Math.random() * validFirstCharactersLength));
  }
};

export const generateId = (length?: number) => {
  length = length || 12;
  let result = getRandomCharacter(true);
  let counter = 0;
  while (counter < length - 1) {
    result += getRandomCharacter(false);
    counter += 1;
  }
  return result;
};
