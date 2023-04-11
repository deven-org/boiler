/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrTextButton as BlrTextButtonClass } from './index';
import { IconKeys } from '@boiler/icons';
import { Sizes } from '../../globals/constants';
import './index';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { getIconName } from '../../utils/get-icon-name';

export default {
  title: 'BlrTextButton',
  argTypes: {
    leadingIcon: {
      options: [undefined, ...getIconName(IconKeys)],
      control: { type: 'select' },
    },
    trailingIcon: {
      options: [undefined, ...getIconName(IconKeys)],
      control: { type: 'select' },
    },
    size: {
      options: Sizes,
      control: { type: 'select' },
    },
    variant: {
      options: ['cta', 'primary', 'secondary', 'silent', 'destructive', 'encourage'],
      control: { type: 'select' },
    },
  },
};

export const BlrTextButton = ({
  label,
  onClick,
  onBlur,
  loading,
  disabled,
  buttonId,
  variant,
  size,
  leadingIcon,
  trailingIcon,
  loadingStatus,
}: BlrTextButtonClass) =>
  html`
    <blr-text-button
      .label=${label}
      .leadingIcon=${calculateIconName(leadingIcon, size)}
      .trailingIcon=${calculateIconName(trailingIcon, size)}
      .buttonId=${buttonId}
      .onClick=${onClick}
      .onBlur=${onBlur}
      .loading=${loading}
      .disabled=${disabled}
      .variant=${variant}
      .size=${size}
      .loadingStatus=${loadingStatus}
      class="example-layout-class"
    ></blr-text-button>
  `;

BlrTextButton.storyName = 'BlrTextButton';

BlrTextButton.args = {
  label: 'Button',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  leadingIcon: 'undefined',
  trailingIcon: 'blrChevronDown',
  loading: false,
  disabled: false,
  buttonId: 'button-id',
  variant: 'cta',
  size: 'md',
  iconPosition: 'left',
  loadingStatus: 'Loading',
};
