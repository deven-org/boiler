import { SizesType, ButtonSizesType } from '../globals/types';

export const adjustIconSize = (size: ButtonSizesType): SizesType => {
  switch (size) {
    case 'xs':
      return 'xxs';
    case 'sm':
      return 'xs';
    case 'md':
      return 'sm';
    case 'lg':
      return 'md';
    case 'xl':
      return 'md';
    default:
      return 'md';
  }
};

export const adjustLoaderSize = (size: ButtonSizesType): SizesType => {
  switch (size) {
    case 'xs':
      return 'xxs';
    case 'sm':
      return 'xs';
    case 'md':
      return 'sm';
    case 'lg':
      return 'sm';
    case 'xl':
      return 'lg';
    default:
      return 'md';
  }
};
