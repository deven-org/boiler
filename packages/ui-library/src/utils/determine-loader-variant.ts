import { ActionVariantType, FeedbackVariantType } from '../globals/types.js';

export const determineLoaderVariant = (variant: ActionVariantType): FeedbackVariantType =>
  variant === 'secondary' || variant === 'silent' ? 'default' : 'inverted';
