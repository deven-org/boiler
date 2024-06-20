import { BlrInputFieldTextType } from './index.js';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer.js';

export const TAG_NAME = 'blr-input-field-text';

export const BlrInputFieldTextRenderFunction = (params: BlrInputFieldTextType) =>
  genericBlrComponentRenderer<BlrInputFieldTextType>(TAG_NAME, { ...params });
