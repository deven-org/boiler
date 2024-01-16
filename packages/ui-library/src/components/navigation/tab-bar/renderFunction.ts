import { BlrTabBarType } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-tab-bar';

export const BlrTabBarRenderFunction = (params: BlrTabBarType) =>
  genericBlrComponentRenderer<BlrTabBarType>(TAG_NAME, { ...params });
