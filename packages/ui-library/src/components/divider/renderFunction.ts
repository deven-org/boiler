import { BlrDividerType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-divider';

export const BlrDividerRenderFunction = (params: BlrDividerType) =>
  genericBlrComponentRenderer<BlrDividerType>(TAG_NAME, { ...params });
