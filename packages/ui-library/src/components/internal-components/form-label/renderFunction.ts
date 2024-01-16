import type { BlrFormLabelType } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-form-label';

export const BlrFormLabelRenderFunction = (params: BlrFormLabelType) =>
  genericBlrComponentRenderer<BlrFormLabelType>(TAG_NAME, { ...params });
