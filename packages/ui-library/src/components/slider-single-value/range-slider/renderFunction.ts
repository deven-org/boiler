// import { TAG_NAME } from '.';
import type { BlrRangeSliderType } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../../prefix.js';

export const RangeSliderTagName = `${componentsPrefix}-range-slider`;

export const BlrRangeSliderRenderFunction = (params: BlrRangeSliderType) =>
  genericBlrComponentRenderer<BlrRangeSliderType>(RangeSliderTagName, { ...params });
