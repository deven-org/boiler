import { html } from 'lit-html';
import { BlrRadioInputGroup as BlrRadioInputGroupClass } from './index';
import { Sizes } from '../../globals/constants';
import { action } from '@storybook/addon-actions';
import './index';
import { IconKeys } from '@boiler/icons';

export default {
  title: 'BlrRadioInputGroup',
  argTypes: {
    size: {
      options: Sizes,
      control: { type: 'select' },
    },
    options: { control: 'array' },
    layout: { control: 'radio', options: ['horizontal', 'vertical'] },
    hintIcon: {
      options: [undefined, ...IconKeys],
      control: { type: 'select' },
    },
  },
};

export const BlrRadioInputGroup = ({
  textInputId,
  label,
  disabled,
  invalid,
  size,
  required,
  errorMessage,
  hideLabel,
  options,
  layout,
  hint,
  hintIcon,
}: BlrRadioInputGroupClass) =>
  html`
    <blr-radio-input-group
      .textInputId=${textInputId}
      .label=${label}
      .disabled=${disabled}
      .invalid=${invalid}
      .size=${size}
      .required=${required}
      .onChange=${action('onChange')}
      .onBlur=${action('onBlur')}
      .onFocus=${action('onFocus')}
      .errorMessage=${errorMessage}
      .hideLabel=${hideLabel}
      .options=${options}
      .layout=${layout}
      .hint=${hint}
      .hintIcon=${hintIcon}
      class="example-layout-class"
    ></blr-radio-input>
  `;

BlrRadioInputGroup.storyName = 'BlrRadioInputGroup';

BlrRadioInputGroup.args = {
  label: 'Radio Input',
  disabled: false,
  invalid: false,
  required: false,
  size: 'md',
  errorMessage: 'This is an error message',
  hideLabel: false,
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  layout: 'horizontal',
  hint: 'Field is used for hint',
  hintIcon: 'blrInfoSm',
  hasError: false,
};
