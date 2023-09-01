/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrNumberInputRenderFunction, BlrNumberInputType } from './index';
import './index';
import { FormSizes } from '../../globals/constants';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

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
    currencyUnit: {
      options: ['EUR', 'USD', 'JPY'],
      control: { type: 'select' },
      if: { arg: 'hasCurrency', eq: true },
    },
    weightUnit: {
      options: ['kilogram', 'gram'],
      control: { type: 'select' },
      if: { arg: 'hasWeight', eq: true },
    },
    locale: {
      options: ['de-DE', 'en-US'],
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrNumberInput = ({
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
  currencyUnit,
  hasCurrency,
  locale,
  weightUnit,
  hasWeight,
  useValueFormat,
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
      currencyUnit,
      hasCurrency,
      locale,
      weightUnit,
      hasWeight,
      useValueFormat,
      unit,
    })}
  `;

BlrNumberInput.storyName = 'BlrNumberInput';

BlrNumberInput.args = {
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
  currencyUnit: 'EUR',
  hasCurrency: false,
  locale: 'DE',
  weightUnit: 'kilogram',
  hasWeight: false,
  useValueFormat: false,
};
