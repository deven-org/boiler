import { TemplateResult } from 'lit';
import { BlrButtonGroupType } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-button-group';

export const BlrButtonGroupRenderFunction = (params: BlrButtonGroupType, children?: TemplateResult<1>) =>
  genericBlrComponentRenderer<BlrButtonGroupType>(TAG_NAME, { ...params }, children);
