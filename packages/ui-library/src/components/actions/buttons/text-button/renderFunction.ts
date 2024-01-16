import { BlrTextButtonType } from '.';
import { genericBlrComponentRenderer } from '../../../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-text-button';

export const BlrTextButtonRenderFunction = (params: BlrTextButtonType) =>
  genericBlrComponentRenderer<BlrTextButtonType>(TAG_NAME, { ...params });
