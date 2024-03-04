import type { BlrFormLabelType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const FormLabelTagName = `${componentsPrefix}-form-label`;

export const BlrFormLabelRenderFunction = (params: BlrFormLabelType) =>
  genericBlrComponentRenderer<BlrFormLabelType>(FormLabelTagName, { ...params });
