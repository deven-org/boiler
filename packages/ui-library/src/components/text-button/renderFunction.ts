import { BlrTextButtonType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const TextButtonTagName = `${componentsPrefix}-text-button`;

export const BlrTextButtonRenderFunction = (params: BlrTextButtonType) =>
  genericBlrComponentRenderer<BlrTextButtonType>(TextButtonTagName, { ...params });
