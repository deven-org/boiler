import { BlrLoaderType } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-loader';

export const BlrLoaderRenderFunction = (params: BlrLoaderType) =>
  genericBlrComponentRenderer<BlrLoaderType>(TAG_NAME, { ...params });
