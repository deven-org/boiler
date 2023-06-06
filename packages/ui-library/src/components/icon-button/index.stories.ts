/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrIconButton as BlrIconButtonClass } from './index';
import { IconKeys } from '@boiler/icons';
import { Sizes } from '../../globals/constants';
import './index';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { getIconName } from '../../utils/get-icon-name';

export default {
  title: 'BlrIconButton',
  argTypes: {
    icon: {
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
  parameters: {
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: 'docs',
  },
};

export const BlrIconButton = ({
  ariaLabel,
  onClick,
  onBlur,
  loading,
  disabled,
  buttonId,
  variant,
  size,
  icon,
  loadingStatus,
}: BlrIconButtonClass) =>
  html`
    <blr-icon-button
      .ariaLabel=${ariaLabel}
      .icon=${calculateIconName(icon, size)}
      .buttonId=${buttonId}
      .onClick=${onClick}
      .onBlur=${onBlur}
      .loading=${loading}
      .disabled=${disabled}
      .variant=${variant}
      .size=${size}
      .loadingStatus=${loadingStatus}
      class="example-layout-class"
    ></blr-icon-button>
  `;

BlrIconButton.storyName = 'BlrIconButton';

BlrIconButton.args = {
  ariaLabel: 'Button',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  icon: 'blrChevronDown',
  loading: false,
  disabled: false,
  buttonId: 'button-id',
  variant: 'cta',
  size: 'md',
  loadingStatus: 'Loading',
};
