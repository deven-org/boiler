import { TemplateResult } from 'lit-html';
import { BlrSelectType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const SelectTagName = `${componentsPrefix}-select`;

export const BlrSelectRenderFunction = (params: BlrSelectType, children?: TemplateResult<1>) =>
  genericBlrComponentRenderer<BlrSelectType>(SelectTagName, { ...params }, children);
