import type { BlrTextareaType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const TextareaTagName = `${componentsPrefix}-textarea`;

export const BlrTextareaRenderFunction = (params: BlrTextareaType) =>
  genericBlrComponentRenderer<BlrTextareaType>(TextareaTagName, { ...params });
