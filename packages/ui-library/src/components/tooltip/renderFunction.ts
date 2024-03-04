import { TemplateResult } from 'lit';
import { BlrTooltipType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const TooltipTagName = `${componentsPrefix}-tooltip`;

export const BlrTooltipRenderFunction = (params: BlrTooltipType, children: TemplateResult<1>) =>
  genericBlrComponentRenderer<BlrTooltipType>(TooltipTagName, { ...params }, children);
