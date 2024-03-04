import { BlrDividerType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const DividerTagName = `${componentsPrefix}-divider`;

export const BlrDividerRenderFunction = (params: BlrDividerType) =>
  genericBlrComponentRenderer<BlrDividerType>(DividerTagName, { ...params });
