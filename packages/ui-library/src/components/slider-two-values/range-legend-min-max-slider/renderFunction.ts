import { BlrRangeLegendMinMaxSliderType } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../../prefix.js';

export const RangeLegendMinMaxSliderTagName = `${componentsPrefix}-range-legend-min-max-slider`;

export const BlrRangeLegendMinMaxSliderRenderFunction = (params: BlrRangeLegendMinMaxSliderType) =>
  genericBlrComponentRenderer<BlrRangeLegendMinMaxSliderType>(RangeLegendMinMaxSliderTagName, { ...params });
