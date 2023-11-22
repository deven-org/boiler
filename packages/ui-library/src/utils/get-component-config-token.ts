/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { componentConfig } from '../foundation/_tokens-generated/config-tokens/__component-config.generated.mjs';

/* Its not typesafe now because the input file is js in the first place. we need to adjust the transformer */

const createComponentConfigTokenGetter = (data: any) => {
  return (keys: string[]) => {
    let currentObj = data;
    for (const key of keys) {
      if (currentObj.hasOwnProperty(key)) {
        currentObj = currentObj[key];
      } else {
        console.log('createComponentConfigTokenGetter: did not found ' + key);
        return 'xxs'; // Key not found
      }
    }

    return currentObj;
  };
};

export const getComponentConfigToken = createComponentConfigTokenGetter(componentConfig);
