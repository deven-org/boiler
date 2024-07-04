import { BlrSelectType } from './index.js';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer.js';

export const TAG_NAME = 'blr-select';

export const BlrSelectRenderFunction = (params: BlrSelectType) =>
  genericBlrComponentRenderer<BlrSelectType>(TAG_NAME, { ...params });
