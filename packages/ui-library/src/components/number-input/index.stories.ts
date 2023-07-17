/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrNumberInputRenderFunction, BlrNumberInputType } from './index';
import './index';
import { FormSizes, NumberFormats } from '../../globals/constants';
import { Themes } from '../../foundation/_tokens-generated/index.themes';
import { PureIconKeys } from '@boiler/icons/icons-optimized/icons';

export default {
  title: 'Design System/Web Components',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    variant: {
      options: ['mode1', 'mode2', 'mode3'],
      control: { type: 'select' },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
    label: {
      if: { arg: 'hasLabel', eq: true },
    },
    value: {
      control: { type: 'text' },
    },
    unit: {
      control: { type: 'text' },
    },
    hintIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    numberFormat: {
      options: NumberFormats,
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrNumberInput = ({
  variant,
  disabled,
  placeholder,
  readonly,
  required,
  hasLabel,
  hasError,
  label,
  size,
  labelAppendix,
  numberInputId,
  theme,
  value,
  showHint,
  hintIcon,
  numberFormat,
  unit,
}: BlrNumberInputType) =>
  html`
    ${BlrNumberInputRenderFunction({
      variant,
      theme,
      disabled,
      label,
      hasLabel,
      placeholder,
      readonly,
      required,
      hasError,
      size,
      labelAppendix,
      numberInputId,
      value,
      showHint,
      hintIcon,
      numberFormat,
      unit,
    })}
  `;

BlrNumberInput.storyName = 'BlrNumberInput';

BlrNumberInput.args = {
  value: undefined,
  numberFormat: '%g',
  unit: '',
  variant: 'mode1',
  theme: 'Light',
  hasLabel: true,
  label: 'Label',
  disabled: false,
  placeholder: 'Uschi',
  readonly: false,
  required: false,
  hasError: false,
  size: 'md',
  labelAppendix: '(Optional)',
  numberInputId: 'Input ID',
  showHint: true,
  hintText: 'Field is used for hint',
  hintIcon: 'blrInfo',
};
