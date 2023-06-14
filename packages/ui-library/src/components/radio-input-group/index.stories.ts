import { html } from 'lit-html';
import { BlrRadioGroup as BlrRadioGroupClass } from './index';
import { InputSizes } from '../../globals/constants';
import { action } from '@storybook/addon-actions';
import './index';

export default {
  title: 'BlrRadio',
  argTypes: {
    size: {
      options: InputSizes,
      control: { type: 'select' },
    },
    options: { control: 'array' },
    layout: { control: 'radio', options: ['horizontal', 'vertical'] },
  },
};

export const BlrRadioGroup = ({
  textInputId,
  label,
  disabled,
  readonly,
  invalid,
  size,
  required,
  options,
  layout,
}: BlrRadioGroupClass) =>
  html`
    <blr-radio-group
      .textInputId=${textInputId}
      .label=${label}
      .disabled=${disabled}
      .readonly=${readonly}
      .invalid=${invalid}
      .size=${size}
      .required=${required}
      .onChange=${action('onChange')}
      .onBlur=${action('onBlur')}
      .onFocus=${action('onFocus')}
      .options=${options}
      .layout=${layout}
      class="example-layout-class"
    ></blr-radio-group>
  `;

BlrRadioGroup.storyName = 'BlrRadio';

BlrRadioGroup.args = {
  label: 'Radio Input',
  disabled: false,
  readonly: false,
  invalid: false,
  required: false,
  size: 'md',
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  layout: 'horizontal',
};
