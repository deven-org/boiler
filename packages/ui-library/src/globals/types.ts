import {
  FeedbackSizes,
  Sizes,
  InputTypes,
  FormSizes,
  InputSizes,
  ActionVariants,
  FeedbackVariants,
  HintVariants,
  CounterVariants,
} from './constants';

export type SizesType = (typeof Sizes)[number];

export type ActionVariantType = (typeof ActionVariants)[number];
export type FeedbackVariantType = (typeof FeedbackVariants)[number];
export type HintVariantType = (typeof HintVariants)[number];
export type CounterVariantType = (typeof CounterVariants)[number];

export type FeedbackSizesType = (typeof FeedbackSizes)[number];
export type FormSizesType = (typeof FormSizes)[number];
export type InputTypes = (typeof InputTypes)[number];

export type InputSizesType = (typeof InputSizes)[number];
export type RadioOption = {
  label: string;
  value: string;
  hintMessage?: string;
  errorMessage?: string;
  checked?: boolean;
};
export type WrapperVariant = 'leading' | 'trailing';
