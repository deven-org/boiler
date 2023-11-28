import { html } from 'lit';
import { InputSizesType } from '../../../../globals/types';

type FormLabelInlineType = {
  labelText: string;
  labelSize: InputSizesType;
  forValue: string;
};

export const BlrFormLabelInline = ({ labelSize, forValue, labelText }: FormLabelInlineType) =>
  html`<label class="blr-form-label-inline ${labelSize}" for=${forValue}>${labelText}</label>`;
