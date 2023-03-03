import { css, unsafeCSS } from 'lit';

export const wrapValuesWithCss = (obj) => {
  // Iterate over each key-value pair in the object
  for (let key in obj) {
    let value = obj[key];
    // If the value is an object, recursively call the function
    if (typeof value === 'object') {
      obj[key] = wrapValuesWithCss(value);
    }
    // If the value is a string, wrap it with css``
    else if (typeof value === 'string') {
      obj[key] = css`
        ${unsafeCSS(value)}
      `;
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return obj;
};
