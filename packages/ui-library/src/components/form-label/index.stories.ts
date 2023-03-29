import { html } from 'lit-html';
import { BlrFormLabel as BlrFormLabelClass } from './index';
import { FormSizes } from '../../globals/constants';
import './index';

export default {
  title: 'BlrFormLabel',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
  },
};

export const BlrFormLabel = ({ label, size, required, disabled }: BlrFormLabelClass) =>
  html`
    <blr-form-label
      .label=${label}
      .size=${size}
      .required=${required}
      .disabled=${disabled}
      class="example-layout-class"
    ></blr-form-label>
  `;

BlrFormLabel.storyName = 'BlrFormLabel';

BlrFormLabel.args = {
  label: 'Form-label',
  size: 'md',
  required: false,
  disabled: false,
};
