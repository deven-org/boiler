import { TemplateResult } from 'lit-html';
import { BlrTabBarType } from './index.js';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer.js';

export const TAG_NAME = 'blr-tab-bar';

export const BlrTabBarRenderFunction = (params: BlrTabBarType, children?: TemplateResult<1>) =>
  genericBlrComponentRenderer<BlrTabBarType>(TAG_NAME, { ...params }, children);
