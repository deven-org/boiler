import { BlrInputNumberType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-input-number';

export const BlrInputNumberRenderFunction = (params: BlrInputNumberType) =>
  genericBlrComponentRenderer<BlrInputNumberType>(TAG_NAME, { ...params });
