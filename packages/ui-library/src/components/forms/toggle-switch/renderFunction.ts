import { BlrToggleSwitchType } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-label-toggleswitch';

export const BlrToggleSwitchRenderFunction = (params: BlrToggleSwitchType) =>
  genericBlrComponentRenderer<BlrToggleSwitchType>(TAG_NAME, { ...params });
