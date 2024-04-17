import { TemplateResult } from 'lit';
import { BlrTooltipUsingFloatingUIType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-tooltip-using-floating-ui';

export const BlrTooltipUsingFloatingUIRenderFunction = (
  params: BlrTooltipUsingFloatingUIType,
  children: TemplateResult<1>
) => genericBlrComponentRenderer<BlrTooltipUsingFloatingUIType>(TAG_NAME, { ...params }, children);
