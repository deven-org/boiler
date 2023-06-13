import { IconKeys, IconType } from '@boiler/icons';
import { SizesType } from '../globals/types';
import { capturingRegex } from './capture-size-regex';

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
  const formattedIconKey = icon.toString() + size.charAt(0).toUpperCase() + size.slice(1);

  if (IconKeys.indexOf(formattedIconKey) !== -1 && hasIconSize(formattedIconKey)) {
    return formattedIconKey as IconType;
  } else {
    return getIconReplacement(icon);
  }
};

export const getIconReplacement = (icon: string): IconType | undefined => {
  const sizeSubstitute = getSizeSubstitute(icon);
  const iconKey = icon.toString() + sizeSubstitute?.charAt(0).toUpperCase() + sizeSubstitute?.slice(1);

  if (IconKeys.indexOf(iconKey) !== -1 && sizeSubstitute) {
    return iconKey as IconType;
  }

  return undefined;
};
