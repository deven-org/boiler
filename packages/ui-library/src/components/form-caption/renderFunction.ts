import { BlrFormCaptionType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const FormCaptionTagName = `${componentsPrefix}-form-caption`;

export const BlrFormCaptionRenderFunction = (params: BlrFormCaptionType) =>
  genericBlrComponentRenderer<BlrFormCaptionType>(FormCaptionTagName, { ...params });
