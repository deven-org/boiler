import { BlrFormType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-form';

export const BlrFormRenderFunction = (params: BlrFormType) =>
  genericBlrComponentRenderer<BlrFormType>(TAG_NAME, { ...params });
