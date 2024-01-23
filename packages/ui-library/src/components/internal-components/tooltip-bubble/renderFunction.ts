import { BlrTooltipBubbleType } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-tooltip-bubble';

export const BlrTooltipBubbleRenderFunction = (params: BlrTooltipBubbleType) =>
  genericBlrComponentRenderer<BlrTooltipBubbleType>(TAG_NAME, { ...params });
