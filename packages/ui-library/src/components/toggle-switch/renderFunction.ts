import { BlrToggleSwitchType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { componentsPrefix } from '../../../../../prefix.js';

export const ToggleSwitchTagName = `${componentsPrefix}-label-toggleswitch`;

export const BlrToggleSwitchRenderFunction = (params: BlrToggleSwitchType) =>
  genericBlrComponentRenderer<BlrToggleSwitchType>(ToggleSwitchTagName, { ...params });
