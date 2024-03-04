import { TemplateResult } from 'lit';
import { BlrFormCaptionGroupType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const FormCaptionGroupTagName = `${componentsPrefix}-form-caption-group`;

export const BlrFormCaptionGroupRenderFunction = (params: BlrFormCaptionGroupType, children?: TemplateResult<1>) =>
  genericBlrComponentRenderer<BlrFormCaptionGroupType>(FormCaptionGroupTagName, { ...params }, children);
