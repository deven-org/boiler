import type { BlrTextareaType } from './index.js';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer.js';

export const TAG_NAME = 'blr-textarea';

export const BlrTextareaRenderFunction = (params: BlrTextareaType) =>
  genericBlrComponentRenderer<BlrTextareaType>(TAG_NAME, { ...params });
