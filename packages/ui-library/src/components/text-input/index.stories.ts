/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrPassword as BlrPasswordClass } from './index';
import { Sizes } from '../../globals/constants';
import { IconKeys } from '@boiler/icons';
import { action } from '@storybook/addon-actions';
import './index';

export default {
  title: 'BlrPassword',
  argTypes: {
    size: {
      options: Sizes.filter((x) => x != 'xxs'),
      control: { type: 'select' },
    },
    hintIcon: {
      options: [undefined, ...IconKeys],
      control: { type: 'select' },
    },
  },
};

export const BlrPassword = ({
  passwordId,
  value,
  label,
  placeholder,
  disabled,
  size,
  required,
  errorMessage,
  hint,
  hintIcon,
  hasError,
}: BlrPasswordClass) =>
  html`
    <blr-password
      .passwordId=${passwordId}
      .value=${value}
      .label=${label}
      .placeholder=${placeholder}
      .disabled=${disabled}
      .size=${size}
      .required=${required}
      .onChange=${action('onChange')}
      .onBlur=${action('onBlur')}
      .onFocus=${action('onFocus')}
      .errorMessage=${errorMessage}
      .hint=${hint}
      .hintIcon=${hintIcon}
      .hasError=${hasError}
      class="example-layout-class"
    ></blr-password>
  `;

BlrPassword.storyName = 'BlrPassword';

BlrPassword.args = {
  label: 'Password Input',
  placeholder: '*****',
  disabled: false,
  required: false,
  size: 'md',
  errorMessage: 'Wrong Password',
  hint: 'Field is used for hint',
  hintIcon: 'blr360Sm',
  hasError: false,
};
