import { BlrIconLinkType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const IconLinkTagName = `${componentsPrefix}-icon-link`;

export const BlrIconLinkRenderFunction = (params: BlrIconLinkType) =>
  genericBlrComponentRenderer<BlrIconLinkType>(IconLinkTagName, { ...params });
