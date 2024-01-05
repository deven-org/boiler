import { BlrIconLinkType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../../utils/typesafe-generic-component-renderer';

export const BlrIconLinkRenderFunction = (params: BlrIconLinkType) =>
  genericBlrComponentRenderer<BlrIconLinkType>(TAG_NAME, { ...params });
