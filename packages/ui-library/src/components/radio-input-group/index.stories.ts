import { html } from 'lit-html';
import { BlrRadioInputGroup as BlrRadioInputGroupClass } from './index';
import { InputSizes } from '../../globals/constants';
import { action } from '@storybook/addon-actions';
import './index';
import { IconKeys } from '@boiler/icons';
import { getIconName } from '../../utils/get-icon-name';
import { calculateIconName } from '../../utils/calculate-icon-name';

export default {
  title: 'BlrRadioInputGroup',
  argTypes: {
    size: {
      options: InputSizes,
      control: { type: 'select' },
    },
    options: { control: 'array' },
    layout: { control: 'radio', options: ['horizontal', 'vertical'] },
    hintIcon: {
      options: [undefined, ...getIconName(IconKeys)],
      control: { type: 'select' },
    },
  },
};

export const BlrRadioInputGroup = ({
  textInputId,
  label,
  disabled,
  readonly,
  invalid,
  size,
  required,
  errorMessage,
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
      .readonly=${readonly}
      .invalid=${invalid}
      .size=${size}
      .required=${required}
      .onChange=${action('onChange')}
      .onBlur=${action('onBlur')}
      .onFocus=${action('onFocus')}
      .errorMessage=${errorMessage}
      .options=${options}
      .layout=${layout}
      .hint=${hint}
      .hintIcon=${calculateIconName(hintIcon, size)}
      class="example-layout-class"
    ></blr-radio-input-group>
  `;

BlrRadioInputGroup.storyName = 'BlrRadioInputGroup';

BlrRadioInputGroup.args = {
  label: 'Radio Input',
  disabled: false,
  readonly: false,
  invalid: false,
  required: false,
  size: 'md',
  errorMessage: 'This is an error message',
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  layout: 'horizontal',
  hint: 'Field is used for hint',
  hintIcon: 'blrInfo',
};
