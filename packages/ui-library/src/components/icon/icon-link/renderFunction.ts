import { BlrIconLinkType } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-icon-link';

export const BlrIconLinkRenderFunction = (params: BlrIconLinkType) =>
  genericBlrComponentRenderer<BlrIconLinkType>(TAG_NAME, { ...params });
