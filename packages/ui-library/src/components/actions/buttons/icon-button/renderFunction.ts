import { BlrIconButtonType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../../utils/typesafe-generic-component-renderer';

export const BlrIconButtonRenderFunction = (params: BlrIconButtonType) =>
  genericBlrComponentRenderer<BlrIconButtonType>(TAG_NAME, { ...params });
