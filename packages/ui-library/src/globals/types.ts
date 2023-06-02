import {
  FeedbackSizes,
  Sizes,
  ActionTypes,
  InputTypes,
  FormSizes,
  InputSizes,
  RelTypes,
  TargetTypes,
} from './constants';

export type SizesType = (typeof Sizes)[number];
export type ActionVariants = (typeof ActionTypes)[number];
export type FeedbackVariants = 'default' | 'inverted';
export type FeedbackSizesType = (typeof FeedbackSizes)[number];
export type FormSizesType = (typeof FormSizes)[number];
export type InputTypes = (typeof InputTypes)[number];
export type InputSizesType = (typeof InputSizes)[number];
export type RelTypes = (typeof RelTypes)[number];
export type TargetTypes = (typeof TargetTypes)[number];
