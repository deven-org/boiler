/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrTextButtonType, BlrTextButtonRenderFunction } from './index';
import { IconKeys } from '@boiler/icons';
import { FormSizes } from '../../globals/constants';
import './index';
import { getIconName } from '../../utils/get-icon-name';

export default {
  title: 'Design System/Web Components',
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
      options: FormSizes,
      control: { type: 'select' },
    },
    variant: {
      options: ['cta', 'primary', 'secondary', 'silent', 'destructive', 'encourage'],
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'docs',
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
}: BlrTextButtonType) =>
  html`
    ${BlrTextButtonRenderFunction({
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
    })}
  `;

BlrTextButton.storyName = 'BlrTextButton';

BlrTextButton.args = {
  label: 'Button',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  leadingIcon: undefined,
  trailingIcon: 'blrChevronDown',
  loading: false,
  disabled: false,
  buttonId: 'button-id',
  variant: 'cta',
  size: 'md',
  loadingStatus: 'Loading',
};
