/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrTextButtonGroupType, BlrTextButtonGroupRenderFunction } from './index';
import { PureIconKeys } from '@boiler/icons';
import { ActionVariants, ButtonGroupSizes, AlignmentVariants, ButtonNumbers } from '../../globals/constants';
import './index';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Button',
  argTypes: {
    buttons: {
      control: { type: 'array' },
    },
    leadingIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    trailingIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    size: {
      options: ButtonGroupSizes,
      control: { type: 'select' },
    },
    variant: {
      options: ActionVariants,
      control: { type: 'select' },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
    alignment: {
      options: AlignmentVariants,
      control: { type: 'select' },
    },
    numberOfButtons: {
      options: ButtonNumbers,
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrTextButtonGroup = ({
  label,
  onClick,
  buttons,
  onBlur,
  loading,
  disabled,
  buttonId,
  variant,
  size,
  leadingIcon,
  trailingIcon,
  loadingStatus,
  theme,
  alignment,
  numberOfButtons,
}: BlrTextButtonGroupType) =>
  html`
    ${BlrTextButtonGroupRenderFunction({
      label,
      onClick,
      buttons,
      onBlur,
      loading,
      disabled,
      buttonId,
      variant,
      size,
      leadingIcon,
      trailingIcon,
      loadingStatus,
      theme,
      alignment,
      numberOfButtons,
    })}
  `;

BlrTextButtonGroup.storyName = 'BlrTextButtonGroup';

BlrTextButtonGroup.args = {
  theme: 'Light',
  alignment: 'flex-start',
  numberOfButtons: 1,
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
  buttons: [
    {
      label: 'Button 1',
      variant: 'cta',
      size: 'md',
      loadingStatus: 'Loading',
      disabled: false,
      buttonId: 'button-id-1',
      trailingIcon: 'ChevronUp',
      loading: false,
    },
    {
      label: 'Button 2',
      variant: 'cta',
      size: 'md',
      loadingStatus: 'Loading',
      disabled: false,
      buttonId: 'button-id-2',
      trailingIcon: 'ChevronDown',
      loading: false,
    },
    {
      label: 'Button 3',
      variant: 'cta',
      size: 'md',
      loadingStatus: 'Loading',
      disabled: false,
      buttonId: 'button-id-3',
      trailingIcon: 'ChevronLeft',
      loading: false,
    },
  ],
};
