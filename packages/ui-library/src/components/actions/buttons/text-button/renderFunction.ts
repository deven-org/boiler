import { BlrTextButtonType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../../utils/typesafe-generic-component-renderer';

export const BlrTextButtonRenderFunction = (params: BlrTextButtonType) =>
  genericBlrComponentRenderer<BlrTextButtonType>(TAG_NAME, { ...params });
