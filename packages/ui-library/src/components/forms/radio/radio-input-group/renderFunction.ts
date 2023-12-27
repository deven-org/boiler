import { BlrRadioGroupType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../../utils/typesafe-generic-component-renderer';

export const BlrRadioGroupRenderFunction = (params: BlrRadioGroupType) =>
  genericBlrComponentRenderer<BlrRadioGroupType>(TAG_NAME, { ...params });
