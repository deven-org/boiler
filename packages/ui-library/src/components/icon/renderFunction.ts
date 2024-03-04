import type { BlrIconType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const IconTagName = `${componentsPrefix}-icon`;

export const BlrIconRenderFunction = (
  params: BlrIconType,
  htmlAttributes?: { [s: string]: string | boolean | number }
) => genericBlrComponentRenderer<BlrIconType>(IconTagName, { ...params }, undefined, htmlAttributes);
