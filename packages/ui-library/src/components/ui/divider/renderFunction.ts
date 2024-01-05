import { BlrDividerType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const BlrDividerRenderFunction = (params: BlrDividerType) =>
  genericBlrComponentRenderer<BlrDividerType>(TAG_NAME, { ...params });
