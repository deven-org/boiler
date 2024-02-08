// import { TAG_NAME } from '.';
import type { BlrRangeSliderType } from '.';
import { genericBlrComponentRenderer } from '../../../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-range-slider';

export const BlrRangeSliderRenderFunction = (params: BlrRangeSliderType) =>
  genericBlrComponentRenderer<BlrRangeSliderType>(TAG_NAME, { ...params });
