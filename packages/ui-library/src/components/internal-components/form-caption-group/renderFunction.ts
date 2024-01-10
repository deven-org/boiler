import { TemplateResult } from 'lit';
import { BlrFormCaptionGroupType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const BlrFormCaptionGroupRenderFunction = (params: BlrFormCaptionGroupType, children?: TemplateResult<1>) =>
  genericBlrComponentRenderer<BlrFormCaptionGroupType>(TAG_NAME, { ...params }, children);
