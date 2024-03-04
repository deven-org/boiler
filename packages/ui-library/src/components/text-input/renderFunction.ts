import { BlrTextInputType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const TextInputTagName = `${componentsPrefix}-text-input`;

export const BlrTextInputRenderFunction = (params: BlrTextInputType) =>
  genericBlrComponentRenderer<BlrTextInputType>(TextInputTagName, { ...params });
