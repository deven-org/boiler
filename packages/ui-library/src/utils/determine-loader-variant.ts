import { ActionVariants } from '../globals/types';

export const determineLoaderVariant = (variant: ActionVariants): string =>
  variant === 'secondary' || variant === 'silent' ? 'default' : 'inverted';
