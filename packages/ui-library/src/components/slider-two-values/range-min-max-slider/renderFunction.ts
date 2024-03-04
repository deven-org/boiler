import { BlrRangeMinMaxSliderType } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../../prefix.js';

export const RangeMinMaxSliderTagName = `${componentsPrefix}-range-min-max-slider`;

export const BlrRangeMinMaxSliderRenderFunction = (params: BlrRangeMinMaxSliderType) =>
  genericBlrComponentRenderer<BlrRangeMinMaxSliderType>(RangeMinMaxSliderTagName, { ...params });
