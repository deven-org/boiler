import { Sizes } from './constants';

export type SizesType = (typeof Sizes)[number];

export type ActionVariants = 'primary' | 'secondary' | 'cta' | 'silent' | 'destructive' | 'encourage';
