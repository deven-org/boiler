import { BlrRangeMinMaxSliderType } from './index.js';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer.js';

export const TAG_NAME = 'blr-range-min-max-slider';

export const BlrRangeMinMaxSliderRenderFunction = (params: BlrRangeMinMaxSliderType) =>
  genericBlrComponentRenderer<BlrRangeMinMaxSliderType>(TAG_NAME, { ...params });
