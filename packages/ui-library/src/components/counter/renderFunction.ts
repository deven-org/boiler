import { BlrCounterType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-counter';

export const BlrCounterRenderFunction = (params: BlrCounterType) =>
  genericBlrComponentRenderer<BlrCounterType>(TAG_NAME, { ...params });
