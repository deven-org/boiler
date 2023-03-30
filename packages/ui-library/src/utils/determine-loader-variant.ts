import { ActionVariants } from '../globals/types';

export const determineLoaderVariant = (variant: ActionVariants): string => {
  return variant === 'secondary' || variant === 'silent' ? 'default' : 'inverted';
};
