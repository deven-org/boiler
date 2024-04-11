import { TemplateResult } from 'lit-html';
import { BlrRadioGroupType } from './index.js';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer.js';

export const TAG_NAME = 'blr-radio-group';

export const BlrRadioGroupRenderFunction = (params: BlrRadioGroupType, children?: TemplateResult<1>) =>
  genericBlrComponentRenderer<BlrRadioGroupType>(TAG_NAME, { ...params }, children);
