import { BlrFormExampleWithoutSlotType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-form-example-without-slot';

export const BlrFormExampleWithoutSlotRenderFunction = (params: BlrFormExampleWithoutSlotType) =>
  genericBlrComponentRenderer<BlrFormExampleWithoutSlotType>(TAG_NAME, { ...params });
