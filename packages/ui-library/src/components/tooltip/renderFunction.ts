import { BlrTooltipType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-tooltip';

export const BlrTooltipRenderFunction = (params: BlrTooltipType) =>
  genericBlrComponentRenderer<BlrTooltipType>(TAG_NAME, { ...params });
