import type { BlrIconType } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-icon';

export const BlrIconRenderFunction = (
  params: BlrIconType,
  htmlAttributes?: { [s: string]: string | boolean | number }
) => genericBlrComponentRenderer<BlrIconType>(TAG_NAME, { ...params }, undefined, htmlAttributes);
