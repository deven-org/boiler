import { BlrTextInputType } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-text-input';

export const BlrTextInputRenderFunction = (params: BlrTextInputType) =>
  genericBlrComponentRenderer<BlrTextInputType>(TAG_NAME, { ...params });
