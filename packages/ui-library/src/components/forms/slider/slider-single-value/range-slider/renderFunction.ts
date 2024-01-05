import { BlrRangeSliderType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../../../utils/typesafe-generic-component-renderer';

export const BlrRangeSliderRenderFunction = (params: BlrRangeSliderType) =>
  genericBlrComponentRenderer<BlrRangeSliderType>(TAG_NAME, { ...params });
