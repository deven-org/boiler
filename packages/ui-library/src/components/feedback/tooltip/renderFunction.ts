import { TemplateResult } from 'lit';
import { BlrTooltipType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const BlrTooltipRenderFunction = (params: BlrTooltipType, children: TemplateResult<1>) =>
  genericBlrComponentRenderer<BlrTooltipType>(TAG_NAME, { ...params }, children);
