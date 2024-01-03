import { TemplateResult } from 'lit';
import { BlrButtonGroupType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const BlrButtonGroupFunction = (params: BlrButtonGroupType, children?: TemplateResult<1>) =>
  genericBlrComponentRenderer<BlrButtonGroupType>(TAG_NAME, { ...params }, children);
