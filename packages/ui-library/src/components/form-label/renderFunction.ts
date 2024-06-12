import type { BlrFormLabelType } from './index.js';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer.js';

export const TAG_NAME = 'blr-form-label';

export const BlrFormLabelRenderFunction = (params: BlrFormLabelType) =>
  genericBlrComponentRenderer<BlrFormLabelType>(TAG_NAME, { ...params });
