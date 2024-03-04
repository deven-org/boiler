import { BlrRangeLegendSliderType } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../../prefix.js';

export const RangeLegendSliderTagName = `${componentsPrefix}-range-legend-slider`;

export const BlrRangeLegendSliderRenderFunction = (params: BlrRangeLegendSliderType) =>
  genericBlrComponentRenderer<BlrRangeLegendSliderType>(RangeLegendSliderTagName, { ...params });
