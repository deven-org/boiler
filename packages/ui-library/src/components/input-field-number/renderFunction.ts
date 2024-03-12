import { BlrInputFieldNumberType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-input-field-number';

export const BlrInputFieldNumberRenderFunction = (params: BlrInputFieldNumberType) =>
  genericBlrComponentRenderer<BlrInputFieldNumberType>(TAG_NAME, { ...params });
