/* eslint-disable no-console */
import { html } from 'lit';

import { BlrLabelCheckbox as BlrLabelCheckboxClass } from './index';

import { InputSizes } from '../../globals/constants';
import './index';
import { getIconName } from '../../utils/get-icon-name';
import { IconKeys } from '@boiler/icons';

export default {
  title: 'BlrLabelCheckbox',
  argTypes: {
    size: {
      options: InputSizes,
      control: { type: 'select' },
    },
    errorIcon: {
      options: [...getIconName(IconKeys)],
      control: { type: 'select' },
    },
  },
};

export const BlrLabelCheckbox = ({
  label,
  checkInputId,
  onBlur,
  onFocus,
  onChange,
  disabled,
  size,
  checked,
  indeterminate,
  readonly,
  hasError,
  errorMessage,
  errorIcon,
  showHint,
  hintIcon,
  hintMessage,
}: BlrLabelCheckboxClass) =>
  html`
    <blr-label-checkbox
      .label=${label}
      .checkInputId=${checkInputId}
      .onFocus=${onFocus}
      .onBlur=${onBlur}
      .onChange=${onChange}
      .disabled=${disabled}
      .checked=${checked}
      .indeterminate=${indeterminate}
      .readonly=${readonly}
      .size=${size}
      .hasError=${hasError}
      .errorMessage=${errorMessage}
      .errorIcon=${errorIcon}
      .showHint=${showHint}
      .hintIcon=${hintIcon}
      .hintMessage=${hintMessage}
    ></blr-label-checkbox>
  `;

BlrLabelCheckbox.storyName = 'BlrLabelCheckbox';

const logEventType = (event: Event) => {
  console.log('storybook:story:logEventType', event.type);
};

BlrLabelCheckbox.args = {
  label: 'Checkbox Option',
  checkInputId: 'Checky',
  disabled: false,
  checked: false,
  indeterminate: false,
  readonly: false,
  hasError: false,
  size: 'md',
  onChange: logEventType,
  onFocus: logEventType,
  onBlur: logEventType,
  errorMessage: 'This is a sample error message',
  errorIcon: '',
  showHint: false,
  hintMessage: 'This is a sample hint',
  hintIcon: '',
};
