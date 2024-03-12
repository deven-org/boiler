import { BlrButtonTextType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-button-text';

export const BlrButtonTextRenderFunction = (params: BlrButtonTextType) =>
  genericBlrComponentRenderer<BlrButtonTextType>(TAG_NAME, { ...params });
