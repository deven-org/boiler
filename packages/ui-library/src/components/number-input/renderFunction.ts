import { BlrNumberInputType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const NumberInputTagName = `${componentsPrefix}-number-input`;

export const BlrNumberInputRenderFunction = (params: BlrNumberInputType) =>
  genericBlrComponentRenderer<BlrNumberInputType>(NumberInputTagName, { ...params });
