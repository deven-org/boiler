import { html } from 'lit';
import { BlrFormLabelInlineType } from '.';

export const BlrFormLabelInlineRenderFunction = ({ labelSize, forValue, labelText, theme }: BlrFormLabelInlineType) =>
  html`<label class="blr-form-label-inline ${labelSize} ${theme}" for=${forValue}>${labelText}</label>`;
