import { BlrTextInputType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const BlrTextInputRenderFunction = (params: BlrTextInputType) =>
  genericBlrComponentRenderer<BlrTextInputType>(TAG_NAME, { ...params });
