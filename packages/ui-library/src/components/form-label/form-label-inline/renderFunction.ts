import { html } from 'lit';
import { BlrFormLabelInlineType } from './index.js';

export const BlrFormLabelInlineRenderFunction = ({
  labelSize,
  forValue,
  labelText,
  theme,
  asSpan,
}: BlrFormLabelInlineType & { asSpan?: boolean }) =>
  asSpan
    ? html`<span class="blr-form-label-inline ${labelSize} ${theme}">${labelText}</span>`
    : html`<label class="blr-form-label-inline ${labelSize} ${theme}" for=${forValue}>${labelText}</label>`;
