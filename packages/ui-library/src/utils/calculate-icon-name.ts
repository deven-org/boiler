import { IconKeys, IconType } from '@boiler/icons';
import { SizesType } from '../globals/types';

const capturingRegex = /(?<size>Xxs|Xs|Sm|Md|Lg|Xl)/;

const hasIconSize = (icon: string) => IconKeys.includes(icon);

const getSizeSubstitute = (icon: string) => {
  const iconIndex =
    IconKeys[
      IconKeys.findIndex((i) => {
        return i.startsWith(icon);
      }, icon)
    ];
  const foundSize = iconIndex.match(capturingRegex);
  if (foundSize && foundSize.groups) {
    return foundSize.groups.size.toLowerCase();
  }
};

export const calculateIconName = (icon: string | undefined, size: SizesType) => {
  if (!icon) {
    return undefined;
  }
  const formattedIcon = `${icon.toString()}${size.charAt(0).toUpperCase() + size.slice(1)}` as IconType;
  return hasIconSize(formattedIcon) ? formattedIcon : getIconReplacement(icon);
};

export const getIconReplacement = (icon: string): IconType | undefined => {
  const sizeSubstitute = getSizeSubstitute(icon);
  return sizeSubstitute
    ? (`${icon.toString()}${sizeSubstitute.charAt(0).toUpperCase() + sizeSubstitute.slice(1)}` as IconType)
    : undefined;
};
