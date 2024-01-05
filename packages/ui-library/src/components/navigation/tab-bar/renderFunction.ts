import { BlrTabBarType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const BlrTabBarRenderFunction = (params: BlrTabBarType) =>
  genericBlrComponentRenderer<BlrTabBarType>(TAG_NAME, { ...params });
