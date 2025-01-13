import { TemplateResult } from 'lit';
import { BlrTooltipType } from './index.js';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer.js';

export const TAG_NAME = 'blr-tooltip';

export const BlrTooltipRenderFunction = (params: BlrTooltipType, children: TemplateResult<1>) =>
  genericBlrComponentRenderer<BlrTooltipType>(TAG_NAME, { ...params }, children);
