import { BlrCounterType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const CounterTagName = `${componentsPrefix}-counter`;

export const BlrCounterRenderFunction = (params: BlrCounterType) =>
  genericBlrComponentRenderer<BlrCounterType>(CounterTagName, { ...params });
