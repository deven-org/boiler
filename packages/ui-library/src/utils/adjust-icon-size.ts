import { SizesType, FormSizesType } from '../globals/types';

export const adjustIconSize = (size: FormSizesType): SizesType => {
  switch (size) {
    case 'sm':
      return 'xs';
    case 'md':
      return 'sm';
    case 'lg':
      return 'md';
    default:
      return 'No valid size';
  }
};
