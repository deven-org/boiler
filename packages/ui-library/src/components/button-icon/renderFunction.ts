import { BlrButtonIconType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-button-icon';

export const BlrButtonIconRenderFunction = (params: BlrButtonIconType) =>
  genericBlrComponentRenderer<BlrButtonIconType>(TAG_NAME, { ...params });
