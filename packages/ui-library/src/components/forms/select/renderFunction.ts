import { BlrSelectType } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-select';

export const BlrSelectRenderFunction = (params: BlrSelectType) =>
  genericBlrComponentRenderer<BlrSelectType>(TAG_NAME, { ...params });
