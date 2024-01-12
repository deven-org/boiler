import { TemplateResult } from 'lit';
import { BlrSelectType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

export const BlrSelectRenderFunction = (params: BlrSelectType, children?: TemplateResult<1>) =>
  genericBlrComponentRenderer<BlrSelectType>(TAG_NAME, { ...params }, children);
