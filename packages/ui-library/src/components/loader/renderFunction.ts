import { BlrLoaderType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const LoaderTagName = `${componentsPrefix}-loader`;

export const BlrLoaderRenderFunction = (params: BlrLoaderType) =>
  genericBlrComponentRenderer<BlrLoaderType>(LoaderTagName, { ...params });
