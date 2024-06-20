import type { BlrRangeSliderType } from './index.js';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer.js';

export const TAG_NAME = 'blr-range-slider';

export const BlrRangeSliderRenderFunction = (params: BlrRangeSliderType) =>
  genericBlrComponentRenderer<BlrRangeSliderType>(TAG_NAME, { ...params });
