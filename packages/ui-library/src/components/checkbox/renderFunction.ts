import { BlrCheckboxType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const CheckboxTagName = `${componentsPrefix}-checkbox`;

export const BlrCheckboxRenderFunction = (params: BlrCheckboxType) =>
  genericBlrComponentRenderer<BlrCheckboxType>(CheckboxTagName, { ...params });
