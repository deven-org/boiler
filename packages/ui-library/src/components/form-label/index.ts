import { html } from 'lit';
import { InputSizesType } from '../../globals/types';

type FormLabelType = {
  labelText: string;
  labelAppendix?: string;
  labelSize: InputSizesType;
};

export const BlrFormLabel = ({ labelText, labelAppendix: additionalInfo, labelSize: size }: FormLabelType) => {
  return html`
    <label class="blr-form-label ${size}">
      ${labelText}
      <span class="blr-form-label-appendix ${size}">${additionalInfo}</span>
    </label>
  `;
};
