import { TemplateResult } from 'lit-html';
import { BlrSelectType } from '.';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

export const TAG_NAME = 'blr-select';

export const BlrSelectRenderFunction = (params: BlrSelectType, children?: TemplateResult<1>) =>
  genericBlrComponentRenderer<BlrSelectType>(TAG_NAME, { ...params }, children);
