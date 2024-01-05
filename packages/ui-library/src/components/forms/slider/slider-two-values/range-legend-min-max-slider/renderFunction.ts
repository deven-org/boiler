import { BlrRangeLegendMinMaxSliderType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../../../utils/typesafe-generic-component-renderer';

export const BlrRangeLegendMinMaxSliderRenderFunction = (params: BlrRangeLegendMinMaxSliderType) =>
  genericBlrComponentRenderer<BlrRangeLegendMinMaxSliderType>(TAG_NAME, { ...params });
