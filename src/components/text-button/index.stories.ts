import { html } from 'lit-html';
import { BlrTextButton as BlrTextButtonClass } from './index';
import { IconKeys } from '../../foundation/icons';
import { Sizes } from '../../globals/constants';
import './index';

export default {
  title: 'BlrTextButton',
  argTypes: {
    icon: {
      options: IconKeys,
      control: { type: 'select' },
    },
    iconPosition: {
      options: ['left', 'right'],
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
  icon,
  disabled,
  buttonId,
  variant,
  size,
  iconPosition,
}: BlrTextButtonClass) =>
  html`
    <blr-text-button
      .label=${label}
      .icon=${icon}
      .buttonId=${buttonId}
      .onClick=${onClick}
      .onBlur=${onBlur}
      .disabled=${disabled}
      .variant=${variant}
      .size=${size}
      .iconPosition=${iconPosition}
      class="example-layout-class"
    ></blr-text-button>
  `;

BlrTextButton.storyName = 'BlrTextButton';

BlrTextButton.args = {
  label: 'Button',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  icon: 'blrChevronDownMd',
  disabled: false,
  buttonId: 'button-id',
  variant: 'cta',
  size: 'md',
  iconPosition: 'left',
};
