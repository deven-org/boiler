/* eslint-disable no-console */
import { html } from 'lit-html';
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
  onClick,
  onBlur,
  onFocus,
  onChange,
  disabled,
  size,
}: BlrLabelCheckboxClass) =>
  html`
    <blr-label-checkbox
      .label=${label}
      .onClick=${onClick}
      .onFocus=${onFocus}
      .onBlur=${onBlur}
      .onChange=${onChange}
      class="example-layout-class"
    ></blr-label-checkbox>
  `;

BlrLabelCheckbox.storyName = 'BlrLabelCheckbox';

const logEventType = (event: Event) => {
  console.log(event.type);
};

BlrLabelCheckbox.args = {
  label: 'Checky',
  onClick: logEventType,
  onChange: logEventType,
  onFocus: logEventType,
  onBlur: logEventType,
  disabled: false,
  size: 'md',
};
