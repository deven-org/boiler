import { FeedbackSizes, Sizes, InputTypes, InputSizes } from './constants';

export type SizesType = (typeof Sizes)[number];

export type ActionVariants = 'primary' | 'secondary' | 'cta' | 'silent' | 'destructive' | 'encourage';

export type FeedbackVariants = 'default' | 'inverted';

export type FeedbackSizesType = (typeof FeedbackSizes)[number];

export type InputTypes = (typeof InputTypes)[number];

export type InputSizesType = (typeof InputSizes)[number];

export type RadioOption = {
  label: string;
  value: string;
};
