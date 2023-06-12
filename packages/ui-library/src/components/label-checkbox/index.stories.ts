/* eslint-disable no-console */
import { html } from 'lit';

import { BlrLabelCheckbox as BlrLabelCheckboxClass } from './index';

import { FormSizes } from '../../globals/constants';
import './index';

export default {
  title: 'BlrLabelCheckbox',
  argTypes: {
    size: {
      options: FormSizes,
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
  hasError,
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
      .size=${size}
      .hasError=${hasError}
    ></blr-label-checkbox>
  `;

BlrLabelCheckbox.storyName = 'BlrLabelCheckbox';

const logEventType = (event: Event) => {
  console.log('storybook:story:logEventType', event.type);
};

BlrLabelCheckbox.args = {
  label: 'Checkbox Option',
  checkInputId: 'Checky',
  onChange: logEventType,
  onFocus: logEventType,
  onBlur: logEventType,
  disabled: false,
  checked: false,
  hasError: false,
  size: 'md',
};
