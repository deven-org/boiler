import { html } from 'lit';
import { InputSizesType } from '../../../globals/types';

type FormLabelType = {
  labelText: string;
  forInputId?: string;
  labelAppendix?: string;
  labelSize: InputSizesType;
  forValue: string;
};

export const BlrFormLabel = ({ labelText, forValue, labelSize, labelAppendix: additionalInfo }: FormLabelType) => {
  return html`
    <label class="blr-form-label" for="${forValue || nothing}">
      ${labelText}
      <span class="blr-form-label-appendix ${size}">${additionalInfo}</span>
    </label>
  `;
};
