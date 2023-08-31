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
    currency: {
      options: ['EUR', 'USD', 'JPY'],
      control: { type: 'select' },
      if: { arg: 'hasCurrency', eq: true },
    },
    weight: {
      options: ['Kilogramm', 'Gramm', 'Milligramm'],
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
  currency,
  hasCurrency,
  locale,
  weight,
  hasWeight,
  weightUnit,
  useValueFormat,
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
      currency,
      hasCurrency,
      locale,
      weight,
      hasWeight,
      weightUnit,
      useValueFormat,
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
  currency: 'EUR',
  hasCurrency: false,
  locale: 'DE',
  weight: 'Kilogramm',
  hasWeight: true,
  useValueFormat: true,
};
