import { BlrRangeLegendSliderType } from './index.js';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer.js';

export const TAG_NAME = 'blr-range-legend-slider';

export const BlrRangeLegendSliderRenderFunction = (params: BlrRangeLegendSliderType) =>
  genericBlrComponentRenderer<BlrRangeLegendSliderType>(TAG_NAME, { ...params });
