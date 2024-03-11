import { BlrFormExampleWithSlotType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-form-example-with-slot';

export const BlrFormExampleWithSlotRenderFunction = (params: BlrFormExampleWithSlotType) =>
  genericBlrComponentRenderer<BlrFormExampleWithSlotType>(TAG_NAME, { ...params });
