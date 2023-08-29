/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrTextButtonGroupType, BlrTextButtonGroupRenderFunction } from './index';
import { PureIconKeys } from '@boiler/icons';
import {ActionVariants, FormSizes, AlignmentVariants, ButtonNumbers} from '../../globals/constants';
import './index';
import { Themes } from '../../foundation/_tokens-generated/index.themes';
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;

export default {
  title: 'Design System/Web Components/Button',
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
      options: FormSizes,
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
    }
  },
  parameters: {
    viewMode: 'docs',
  },
  
};

export const BlrTextButtonGroup = ({
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
  theme,
  alignment,
  numberOfButtons,
}: BlrTextButtonGroupType) =>
  html`
    ${BlrTextButtonGroupRenderFunction({
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
      theme,
      alignment,
      numberOfButtons
    })}
  `;

BlrTextButtonGroup.storyName = 'BlrTextButtonGroup';

BlrTextButtonGroup.args = {
  theme: 'Light',
  alignment: 'center',
  numberOfButtons: 'one',
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
