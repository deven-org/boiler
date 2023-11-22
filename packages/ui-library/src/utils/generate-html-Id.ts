export const generateId = (length?: number) => {
  let result = '';
  length = length || 12;

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  const validFirstCharactersLength = charactersLength - 10;

  result += characters.charAt(Math.floor(Math.random() * validFirstCharactersLength));

  let counter = 0;
  while (counter < length - 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};
