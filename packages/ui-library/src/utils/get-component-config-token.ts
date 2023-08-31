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
  const foundInAction = componentConfig.Action[componentTokenName];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const foundInForm = componentConfig.Forms[componentTokenName];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const foundInNavigation = componentConfig.Navigation[componentTokenName];

  let returnValue: string | undefined = undefined;

  if (foundInAction && foundInAction[size.toUpperCase()] && foundInAction[size.toUpperCase()][configTokenName]) {
    returnValue = foundInAction[size.toUpperCase()][configTokenName];
  } else if (foundInForm && foundInForm[size.toUpperCase()] && foundInForm[size.toUpperCase()][configTokenName]) {
    returnValue = foundInForm[size.toUpperCase()][configTokenName];
  } else if (
    foundInNavigation &&
    foundInNavigation[size.toUpperCase()] &&
    foundInNavigation[size.toUpperCase()][configTokenName]
  ) {
    returnValue = foundInNavigation[size.toUpperCase()][configTokenName];
  }

  if (returnValue !== undefined) {
    return returnValue as SizesType;
  }
  // eslint-disable-next-line no-console
  console.warn(
    'getComponentConfigToken',
    `no match found for name:${componentTokenName} and size:${size} and token:${configTokenName}!`,
    { foundInAction, foundInForm, foundInNavigation }
  );

  return 'sm';
};
