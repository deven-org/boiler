import { html } from 'lit';
import { InputSizesType } from '../../globals/types';

type FormLabelInlineType = {
  labelText: string;
  labelAppendix?: string;
  labelSize: InputSizesType;
  forValue: string;
};

export const BlrFormLabelInline = ({ labelText, labelSize: size, forValue }: FormLabelInlineType) => {
  return html` <label class="blr-form-label-inline ${size}" for=${forValue}> ${labelText} </label> `;
};
