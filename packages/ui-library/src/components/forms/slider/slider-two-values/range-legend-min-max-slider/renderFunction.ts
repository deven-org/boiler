import { BlrRangeLegendMinMaxSliderType } from '.';
import { genericBlrComponentRenderer } from '../../../../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-range-legend-min-max-slider';

export const BlrRangeLegendMinMaxSliderRenderFunction = (params: BlrRangeLegendMinMaxSliderType) =>
  genericBlrComponentRenderer<BlrRangeLegendMinMaxSliderType>(TAG_NAME, { ...params });
