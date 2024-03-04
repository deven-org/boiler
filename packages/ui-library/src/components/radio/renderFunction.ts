import { BlrRadioType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const RadioTagName = `${componentsPrefix}-radio`;

export const BlrRadioRenderFunction = (params: BlrRadioType) =>
  genericBlrComponentRenderer<BlrRadioType>(RadioTagName, { ...params });
