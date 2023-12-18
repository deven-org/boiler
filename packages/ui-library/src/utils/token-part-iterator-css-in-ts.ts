type cssAttributeValue = string | number;

const typeSafeCss = (strings: TemplateStringsArray, ...values: cssAttributeValue[]): string => {
  let result = '';

  for (let i = 0; i < values.length; i++) {
    result += strings[i] + values[i];
  }

  result += strings[values.length];

  return result;
};

export const makeIterator = <TokenPart extends object>() => {
  return (
    tokenPartType: TokenPart,
    renderFunction: <T extends keyof TokenPart>(
      key: keyof TokenPart,
      tokenPart: TokenPart[T],
      css: typeof typeSafeCss
    ) => string
  ) => {
    let returnValue = '';

    Object.keys(tokenPartType).forEach(function (key) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      returnValue += renderFunction(key, tokenPartType[key], typeSafeCss);
    });

    return returnValue;
  };
};
