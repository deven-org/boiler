import { BlrNumberInputType } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-number-input';

export const BlrNumberInputRenderFunction = (params: BlrNumberInputType) =>
  genericBlrComponentRenderer<BlrNumberInputType>(TAG_NAME, { ...params });
