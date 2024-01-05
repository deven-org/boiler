import { BlrTooltipBubbleType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../../utils/typesafe-generic-component-renderer';

export const BlrTooltipBubbleRenderFunction = (params: BlrTooltipBubbleType) =>
  genericBlrComponentRenderer<BlrTooltipBubbleType>(TAG_NAME, { ...params });
