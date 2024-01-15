import { TemplateResult } from 'lit-html';
import { BlrTabBarType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const BlrTabBarRenderFunction = (params: BlrTabBarType, children?: TemplateResult<1>) =>
  genericBlrComponentRenderer<BlrTabBarType>(TAG_NAME, { ...params }, children);
