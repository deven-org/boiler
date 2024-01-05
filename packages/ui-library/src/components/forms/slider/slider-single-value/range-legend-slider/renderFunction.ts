import { BlrRangeLegendSliderType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../../../utils/typesafe-generic-component-renderer';

export const BlrRangeLegendSliderRenderFunction = (params: BlrRangeLegendSliderType) =>
  genericBlrComponentRenderer<BlrRangeLegendSliderType>(TAG_NAME, { ...params });
