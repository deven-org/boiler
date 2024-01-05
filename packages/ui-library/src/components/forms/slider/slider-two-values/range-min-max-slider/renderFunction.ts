import { BlrRangeMinMaxSliderType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../../../utils/typesafe-generic-component-renderer';

export const BlrRangeMinMaxSliderRenderFunction = (params: BlrRangeMinMaxSliderType) =>
  genericBlrComponentRenderer<BlrRangeMinMaxSliderType>(TAG_NAME, { ...params });
