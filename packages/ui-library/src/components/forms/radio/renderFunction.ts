import { BlrRadioType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-radio';

export const BlrRadioRenderFunction = (params: BlrRadioType) =>
  genericBlrComponentRenderer<BlrRadioType>(TAG_NAME, { ...params });
