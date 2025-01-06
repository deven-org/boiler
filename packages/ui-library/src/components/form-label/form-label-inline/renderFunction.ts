import { html } from 'lit';
import { BlrFormLabelInlineType } from '.';

export const BlrFormLabelInlineRenderFunction = ({ labelSize, forValue, labelText }: BlrFormLabelInlineType) =>
  html`<label class="blr-form-label-inline ${labelSize}" for=${forValue}>${labelText}</label>`;
