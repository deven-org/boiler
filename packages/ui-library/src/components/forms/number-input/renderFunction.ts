import { BlrNumberInputType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const BlrNumberInputRenderFunction = (params: BlrNumberInputType) =>
  genericBlrComponentRenderer<BlrNumberInputType>(TAG_NAME, { ...params });
