import { html } from 'lit';
import { InputSizesType } from '../../../globals/types';
import { ifNotEmptyString } from '../../../utils/if-not-empty-string';

type FormLabelType = {
  labelText: string;
  forInputId?: string;
  labelAppendix?: string;
  labelSize: InputSizesType;
  forValue: string;
};

export const BlrFormLabel = ({ labelText, forValue, labelSize, labelAppendix: additionalInfo }: FormLabelType) => {
  return html`
    <label class="blr-form-label" for="${ifNotEmptyString(forValue)}">
      ${labelText}
      <span class="blr-form-label-appendix ${size}">${additionalInfo}</span>
    </label>
  `;
};
