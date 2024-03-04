import { BlrIconButtonType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const IconButtonTagName = `${componentsPrefix}-icon-button`;

export const BlrIconButtonRenderFunction = (params: BlrIconButtonType) =>
  genericBlrComponentRenderer<BlrIconButtonType>(IconButtonTagName, { ...params });
