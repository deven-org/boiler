import { TemplateResult } from 'lit';
import { BlrButtonGroupType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const ButtonGroupTagName = `${componentsPrefix}-button-group`;

export const BlrButtonGroupRenderFunction = (params: BlrButtonGroupType, children?: TemplateResult<1>) =>
  genericBlrComponentRenderer<BlrButtonGroupType>(ButtonGroupTagName, { ...params }, children);
