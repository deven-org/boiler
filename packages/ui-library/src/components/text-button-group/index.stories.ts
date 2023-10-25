/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrTextButtonGroupType, BlrTextButtonGroupRenderFunction } from './index';
import { PureIconKeys } from '@boiler/icons';
import { ActionVariants, ButtonGroupSizes, ButtonsAlignmentVariants } from '../../globals/constants';
import './index';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/UI/Button Group',
  argTypes: {
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
  trailingIcon: 'blr360',
  loading: false,
  disabled: false,
  variant: 'primary',
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
      trailingIcon: 'blr360',
      buttonVariant: '',
      loading: false,
    },
    {
      label: 'Two',
      size: 'md',
      loadingStatus: 'Loading',
      disabled: false,
      buttonId: 'button-id-2',
      buttonVariant: '',
      trailingIcon: 'blr360',
      loading: false,
    },
    {
      label: 'Three',
      size: 'md',
      loadingStatus: 'Loading',
      disabled: false,
      buttonId: 'button-id-3',
      buttonVariant: '',
      trailingIcon: 'blr360',
      loading: false,
    },
  ],
};

export const VariantButtonGroupRight = ({
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

VariantButtonGroupRight.storyName = 'VariantButtonGroupRight';

VariantButtonGroupRight.args = {
  theme: 'Light',
  alignment: 'flex-end',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  leadingIcon: undefined,
  trailingIcon: 'blr360',
  loading: false,
  disabled: false,
  variant: 'primary',
  buttonId: 'button-variant-id',
  size: 'md',
  loadingStatus: 'Loading',
  buttons: [
    {
      label: 'Destructive',
      size: 'md',
      loadingStatus: 'Loading',
      disabled: false,
      buttonId: 'button-primary-id',
      buttonVariant: 'destructive',
      trailingIcon: 'blr360',
      loading: false,
    },
    {
      label: 'Encourage',
      size: 'md',
      loadingStatus: 'Loading',
      disabled: false,
      buttonId: 'button-cta-id',
      trailingIcon: 'blr360',
      buttonVariant: 'encourage',
      loading: false,
    },
    {
      label: 'Secondary',
      size: 'md',
      loadingStatus: 'Loading',
      disabled: false,
      buttonId: 'button-silent-id',
      trailingIcon: 'blr360',
      buttonVariant: 'secondary',
      loading: false,
    },
  ],
};

export const VariantButtonGroupCenter = ({
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

VariantButtonGroupCenter.storyName = 'VariantButtonGroupCenter';

VariantButtonGroupCenter.args = {
  theme: 'Light',
  size: 'md',
  variant: 'destructive',
  alignment: 'center',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  leadingIcon: undefined,
  trailingIcon: 'blr360',
  loading: false,
  disabled: false,
  buttonId: 'button-variant-id',
  loadingStatus: 'Loading',
  buttons: [
    {
      label: 'Primary',
      size: 'md',
      loadingStatus: 'Loading',
      disabled: false,
      buttonId: 'button-primary-id',
      buttonVariant: 'primary',
      trailingIcon: 'blr360',
      loading: false,
    },
    {
      label: 'CTA',
      size: 'md',
      loadingStatus: 'Loading',
      disabled: false,
      buttonId: 'button-cta-id',
      buttonVariant: 'cta',
      trailingIcon: 'blr360',
      loading: false,
    },
    {
      label: 'Silent',
      buttonVariant: 'silent',
      size: 'md',
      loadingStatus: 'Loading',
      disabled: false,
      buttonId: 'button-silent-id',
      trailingIcon: 'blr360',
      loading: false,
    },
  ],
};
