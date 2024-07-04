import { BlrRadioType } from './index.js';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer.js';

export const TAG_NAME = 'blr-radio';

export const BlrRadioRenderFunction = (params: BlrRadioType) =>
  genericBlrComponentRenderer<BlrRadioType>(TAG_NAME, { ...params });
