import { BlrFormLabelType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const BlrFormLabelRenderFunction = (params: BlrFormLabelType) =>
  genericBlrComponentRenderer<BlrFormLabelType>(TAG_NAME, { ...params });
