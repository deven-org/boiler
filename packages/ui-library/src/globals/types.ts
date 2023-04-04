import { FeedbackSizes, Sizes, InputTypes } from './constants';

export type SizesType = (typeof Sizes)[number];

export type ActionVariants = 'primary' | 'secondary' | 'cta' | 'silent' | 'destructive' | 'encourage';

export type FeedbackVariants = 'default' | 'inverted';

export type FeedbackSizesType = (typeof FeedbackSizes)[number];

export type InputTypes = (typeof InputTypes)[number];
