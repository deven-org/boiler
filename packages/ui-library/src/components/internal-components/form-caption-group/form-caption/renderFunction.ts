import { BlrFormCaptionType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../../utils/typesafe-generic-component-renderer';

export const BlrFormCaptionRenderFunction = (params: BlrFormCaptionType) =>
  genericBlrComponentRenderer<BlrFormCaptionType>(TAG_NAME, { ...params });
