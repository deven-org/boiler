import { TemplateResult } from 'lit-html';
import { BlrTabBarType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const TabBarTagName = `${componentsPrefix}-tab-bar`;

export const BlrTabBarRenderFunction = (params: BlrTabBarType, children?: TemplateResult<1>) =>
  genericBlrComponentRenderer<BlrTabBarType>(TabBarTagName, { ...params }, children);
