/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrTextButtonGroupType, BlrTextButtonGroupRenderFunction } from './index';
import { PureIconKeys } from '@boiler/icons';
import { ActionVariants, ButtonGroupSizes, ButtonsAlignmentVariants } from '../../globals/constants';
import './index';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Button',
  argTypes: {
    'buttons[0].variant': {
      options: ActionVariants,
      control: { type: 'select' },
    },
    'buttons[1].variant': {
      options: ActionVariants,
      control: { type: 'select' },
    },
    'buttons[2].variant': {
      options: ActionVariants,
      control: { type: 'select' },
    },
    'leadingIcon': {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    'trailingIcon': {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    'size': {
      options: ButtonGroupSizes,
      control: { type: 'select' },
    },
    // variant: {
    //   options: ActionVariants,
    //   control: { type: 'select' },
    // },
    'theme': {
      options: Themes,
      control: { type: 'select' },
    },
    'alignment': {
      options: ButtonsAlignmentVariants,
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
    })}
  `;

BlrTextButtonGroup.storyName = 'BlrTextButtonGroup';

BlrTextButtonGroup.args = {
  theme: 'Light',
  alignment: 'flex-start',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  leadingIcon: undefined,
  trailingIcon: 'blrChevronDown',
  loading: false,
  disabled: false,
  buttonId: 'button-id',
  size: 'md',
  loadingStatus: 'Loading',
  buttons: [
    {
      label: 'One',
      size: 'md',
      loadingStatus: 'Loading',
      disabled: false,
      buttonId: 'button-id-1',
      trailingIcon: 'ChevronUp',
      variant: 'silent',
      loading: false,
    },
    {
      label: 'Two',
      size: 'md',
      loadingStatus: 'Loading',
      disabled: false,
      buttonId: 'button-id-2',
      variant: 'cta',
      trailingIcon: 'ChevronDown',
      loading: false,
    },
    {
      label: 'Three',
      size: 'md',
      loadingStatus: 'Loading',
      disabled: false,
      buttonId: 'button-id-3',
      variant: 'primary',
      trailingIcon: 'ChevronLeft',
      loading: false,
    },
  ],
};

export const VariantButtonGroup = ({
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
    })}
  `;

VariantButtonGroup.storyName = 'VariantButtonGroup';

VariantButtonGroup.args = {
  theme: 'Light',
  alignment: 'center',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  leadingIcon: undefined,
  trailingIcon: 'blrChevronDown',
  loading: false,
  disabled: false,
  buttonId: 'button-variant-id',
  size: 'md',
  loadingStatus: 'Loading',
  buttons: [
    {
      label: 'Primary',
      variant: 'primary',
      size: 'md',
      loadingStatus: 'Loading',
      disabled: false,
      buttonId: 'button-primary-id',
      trailingIcon: 'blrChevronUp',
      loading: false,
    },
    {
      label: 'CTA',
      variant: 'cta',
      size: 'md',
      loadingStatus: 'Loading',
      disabled: false,
      buttonId: 'button-cta-id',
      trailingIcon: 'blrChevronRight',
      loading: false,
    },
    {
      label: 'Silent',
      variant: 'silent',
      size: 'md',
      loadingStatus: 'Loading',
      disabled: false,
      buttonId: 'button-silent-id',
      trailingIcon: 'blrChevronRight',
      loading: false,
    },
  ],
};
