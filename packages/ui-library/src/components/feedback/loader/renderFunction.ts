import { BlrLoaderType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const BlrLoaderRenderFunction = (params: BlrLoaderType) =>
  genericBlrComponentRenderer<BlrLoaderType>(TAG_NAME, { ...params });
