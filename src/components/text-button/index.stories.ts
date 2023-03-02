import { html } from 'lit-html';
import { BlrTextButton as BlrTextButtonClass } from './index';
import { IconKeys } from '../../foundation/icons';
import './index';

export default {
  title: 'BlrTextButton',
  argTypes: {
    icon: {
      options: IconKeys,
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
}: BlrTextButtonClass) =>
  html`
    <blr-text-button
      label=${label}
      icon=${icon}
      buttonId=${buttonId}
      .onClick=${onClick}
      .onBlur=${onBlur}
      .disabled=${disabled}
      .variant=${variant}
      .size=${size}
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
};
