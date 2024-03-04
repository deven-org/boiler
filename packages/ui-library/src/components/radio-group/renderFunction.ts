import { BlrRadioGroupType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const RadioGroupTagName = `${componentsPrefix}-radio-group`;

export const BlrRadioGroupRenderFunction = (params: BlrRadioGroupType) =>
  genericBlrComponentRenderer<BlrRadioGroupType>(RadioGroupTagName, { ...params });
