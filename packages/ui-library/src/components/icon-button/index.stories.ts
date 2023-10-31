/* eslint-disable no-console */
import { BlrIconButtonType, BlrIconButtonRenderFunction } from './index';
import { PureIconKeys } from '@boiler/icons';
import { ActionVariants, Sizes, TargetTypes } from '../../globals/constants';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Actions/Buttons/IconButton',
  argTypes: {
    icon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    size: {
      options: Sizes,
      control: { type: 'select' },
    },
    variant: {
      options: ActionVariants,
      control: { type: 'select' },
    },
    href: {
      if: { arg: 'isLink', eq: true },
    },
    target: {
      options: TargetTypes,
      control: { type: 'select' },
      if: { arg: 'isLink', eq: true },
    },
    linkTitle: {
      if: { arg: 'isLink', eq: true },
    },
    hreflang: {
      if: { arg: 'isLink', eq: true },
    },
    download: {
      if: { arg: 'isLink', eq: true },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrIconButton = (params: BlrIconButtonType) => BlrIconButtonRenderFunction(params);

BlrIconButton.storyName = 'BlrIconButton';

const args: BlrIconButtonType = {
  theme: 'Light',
  variant: 'cta',
  size: 'md',
  arialabel: 'Button',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  icon: 'blr360',
  loading: false,
  disabled: false,
  buttonId: 'button-id',
  loadingStatus: 'Loading',
  isLink: false,
  href: '',
  linkTitle: '',
  hreflang: 'en',
  download: false,
};

BlrIconButton.args = args;
