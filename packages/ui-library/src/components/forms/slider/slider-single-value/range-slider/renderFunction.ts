// import { TAG_NAME } from '.';
import type { BlrRangeSliderType } from '.';
import { genericBlrComponentRenderer } from '../../../../../utils/typesafe-generic-component-renderer';

export const BlrRangeSliderRenderFunction = (params: BlrRangeSliderType) =>
  genericBlrComponentRenderer<BlrRangeSliderType>('blr-range-slider', { ...params });
