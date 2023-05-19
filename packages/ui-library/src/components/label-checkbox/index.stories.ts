/* eslint-disable no-console */
import { html } from 'lit';

import { BlrLabelCheckbox as BlrLabelCheckboxClass } from './index';

import { Sizes } from '../../globals/constants';
import './index';

export default {
  title: 'BlrLabelCheckbox',
  argTypes: {
    size: {
      options: Sizes,
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
      class="example-layout-class"
    ></blr-label-checkbox>
  `;

BlrLabelCheckbox.storyName = 'BlrLabelCheckbox';

const logEventType = (event: Event) => {
  console.log(event.type);
};

BlrLabelCheckbox.args = {
  label: 'McCheckyTheCheckboxFace',
  checkInputId: 'Checky',
  onClick: logEventType,
  onChange: logEventType,
  onFocus: logEventType,
  onBlur: logEventType,
  disabled: false,
  checked: false,
  size: 'md',
};
