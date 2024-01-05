import { BlrCounterType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const BlrCounterRenderFunction = (params: BlrCounterType) =>
  genericBlrComponentRenderer<BlrCounterType>(TAG_NAME, { ...params });
