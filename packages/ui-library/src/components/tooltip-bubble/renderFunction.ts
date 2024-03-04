import { BlrTooltipBubbleType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const TooltipBubbleTagName = `${componentsPrefix}-tooltip-bubble`;

export const BlrTooltipBubbleRenderFunction = (params: BlrTooltipBubbleType) =>
  genericBlrComponentRenderer<BlrTooltipBubbleType>(TooltipBubbleTagName, { ...params });
