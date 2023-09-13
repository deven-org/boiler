import { componentConfig } from '../foundation/_tokens-generated/config-tokens/__component-config.generated';
import { SizesType } from '../globals/types';

/* Its not typesafe now because the input file is js in the first place. we need to adjust the transformer */

export const getComponentConfigToken = (
  componentTokenName: string,
  size: SizesType,
  configTokenName = 'IconSize'
): SizesType => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const foundAction = componentConfig.Action[componentTokenName];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const foundForm = componentConfig.Forms[componentTokenName];
  let returnValue: string | undefined = undefined;

  if (foundAction && foundAction[size?.toUpperCase()] && foundAction[size?.toUpperCase()][configTokenName]) {
    returnValue = foundAction[size?.toUpperCase()][configTokenName];
  } else if (foundForm && foundForm[size?.toUpperCase()] && foundForm[size?.toUpperCase()][configTokenName]) {
    returnValue = foundForm[size?.toUpperCase()][configTokenName];
  }

  if (returnValue !== undefined) {
    return returnValue as SizesType;
  }
  // eslint-disable-next-line no-console
  console.warn(
    'getComponentConfigToken',
    `no match found for name:${componentTokenName} and size:${size} and token:${configTokenName}!`,
    { foundAction, foundForm }
  );

  return 'sm';
};
