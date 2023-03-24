import { FormSizes, Sizes } from './constants';

export type SizesType = (typeof Sizes)[number];
export type FormSizesType = (typeof FormSizes)[number];

export type ActionVariants = 'primary' | 'secondary' | 'cta' | 'silent' | 'destructive' | 'encourage';
