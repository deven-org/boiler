import { BlrToggleSwitchType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const BlrToggleSwitchRenderFunction = (params: BlrToggleSwitchType) =>
  genericBlrComponentRenderer<BlrToggleSwitchType>(TAG_NAME, { ...params });
