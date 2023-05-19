import { ifDefined } from 'lit/directives/if-defined.js';

const undefinedIfEmptyString = (val?: string) => {
  if (typeof val === 'string' && val.length > 0) {
    return val;
  }
  return undefined;
};

export const ifNotEmptyString = (val?: string) => {
  return ifDefined(undefinedIfEmptyString(val));
};
