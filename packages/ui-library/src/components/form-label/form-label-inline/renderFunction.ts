import { html } from 'lit';
import { BlrFormLabelInlineType } from './index.js';

export const BlrFormLabelInlineRenderFunction = ({ labelSize, forValue, labelText, theme }: BlrFormLabelInlineType) =>
  html`<label class="blr-form-label-inline ${labelSize} ${theme}" for=${forValue}>${labelText}</label>`;
