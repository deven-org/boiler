import { html } from 'lit';
import { InputSizesType } from '../../globals/types';

type FormLabelInlineType = {
  labelText: string;
  labelAppendix?: string;
  labelSize: InputSizesType;
  forValue: string;
};

export const BlrFormLabelInline = (params: FormLabelInlineType) => {
  return html`
    <label class="blr-form-label-inline ${params.labelSize}" for=${params.forValue}> ${params.labelText} </label>
  `;
};
