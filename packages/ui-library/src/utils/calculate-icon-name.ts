import { IconKeys, IconType } from '@boiler/icons';
import { SizesType } from '../globals/types';

const capturingRegex = /(?<size>Xxs|Xs|Sm|Md|Lg|Xl)/;

const hasIconSize = (icon: string) => {
  if (IconKeys.includes(icon)) {
    return true;
  }
};

const getSizeSubstitute = (icon: string) => {
  const subIndex =
    IconKeys[
      IconKeys.findIndex((i) => {
        return i.startsWith(icon);
      }, icon)
    ];
  const foundSize = subIndex.match(capturingRegex);
  if (foundSize && foundSize.groups) {
    return foundSize.groups.size.toLowerCase();
  }
};

export const calculateIconName = (icon: IconType, size: SizesType) => {
  return hasIconSize(icon)
    ? `${icon.toString()}${size.charAt(0).toUpperCase() + size.slice(1)}`
    : getIconReplacement(icon);
};

export const getIconReplacement = (icon: IconType) => {
  const sizeSubstitute = getSizeSubstitute(icon);
  return sizeSubstitute
    ? `${icon.toString()}${sizeSubstitute.charAt(0).toUpperCase() + sizeSubstitute.slice(1)}`
    : 'Icon Does not exist in this size';
};
