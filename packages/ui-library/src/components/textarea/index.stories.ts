/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrTextareaRenderFunction, BlrTextareaType } from './index';

import { FormSizes } from '../../globals/constants';
import './index';
import { action } from '@storybook/addon-actions';
import { Themes } from '../../foundation/_tokens-generated/index.themes';
import { PureIconKeys } from '@boiler/icons';

export default {
  title: 'Design System/Web Components/BlrTextarea',
  argTypes: {
    size: {
      name: 'Size',
      description: ' Description ',
      options: FormSizes,
      control: { type: 'radio' },
      table: {
        category: 'Appearance',
      },
    },
    hintIcon: {
      if: { arg: 'showHint', eq: true },
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      table: {
        category: 'Content/ Settings',
      },
    },
    hintCounter: {
      if: { arg: 'showCounter', eq: true },
      table: {
        category: 'Content/ Settings',
      },
    },
    hintText: {
      if: { arg: 'showHint', eq: true },
      table: {
        category: 'Content/ Settings',
      },
    },
    errorIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasError', eq: true },
    },

    errorMessage: {
      if: { arg: 'hasError', eq: true },
    },

    warningLimitType: {
      name: 'Warning Limit Type',
      options: ['warningLimitInt', 'warningLimitPer'],
      control: {
        type: 'radio',
        labels: {
          warningLimitInt: 'Whole Number',
          warningLimitPer: 'Percentage',
        },
      },
    },
    // Only enabled if warningLimitType is Whole Number
    warningLimitInt: {
      control: 'number',
      name: 'Warning Limit (Whole Number)',
      if: { arg: 'warningLimitType', eq: 'warningLimitInt' },
      description: 'Please provide a whole number',
    },
    // Only enabled if warningLimitType is Percentage
    warningLimitPer: {
      control: { type: 'range', min: 1, max: 100, step: 1 },
      name: 'Warning Limit (Percentage)',
      if: { arg: 'warningLimitType', eq: 'warningLimitPer' },
      description:
        'Please provide a percentage. Warning limit is calculated based on the percentage of the maximum length reached ((maximum length / 100) * percentage value)',
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'story',
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
};

export const BlrTextarea = ({
  textareaId,
  label,
  labelAppendix,
  placeholder,
  required,
  disabled,
  size,
  maxLength,
  warningLimitType,
  warningLimitInt,
  warningLimitPer,
  cols,
  rows,
  errorMessage,
  hintText,
  hintIcon,
  errorIcon,
  hasError,
  onChange,
  onFocus,
  onSelect,
  readonly,
  isResizeable,
  showHint,
  showCounter,
  value,
  theme,
}: BlrTextareaType) =>
  html`
    ${BlrTextareaRenderFunction({
      textareaId,
      label,
      labelAppendix,
      placeholder,
      required,
      disabled,
      size,
      maxLength,
      warningLimitType,
      warningLimitInt,
      warningLimitPer,
      cols,
      rows,
      errorMessage,
      hintText,
      hintIcon,
      errorIcon,
      hasError,
      onChange,
      onFocus,
      onSelect,
      readonly,
      isResizeable,
      showHint,
      showCounter,
      value,
      theme,
    })}
  `;

BlrTextarea.storyName = 'BlrTextarea-Docs';

BlrTextarea.args = {
  theme: 'Light',
  size: 'md',
  textareaId: '#1',
  cols: 20,
  rows: 5,
  minLength: 0,
  maxLength: 140,

  value: 'Rindfleischetikettierungsüberwachungsaufgabenübertragunsgesetz',
  label: 'Label',
  labelAppendix: '(Optional)',
  warningLimitType: 'warningLimitInt',
  warningLimitInt: 105,
  warningLimitPer: 75,

  placeholder: 'Type your message here ..',
  required: false,
  disabled: false,
  readonly: false,

  showCounter: true,
  showHint: true,
  hintIcon: 'blrInfo',
  hintText: 'Rindfleischetikettierungs',

  errorIcon: undefined,
  hasError: false,
  errorMessage: ' ',

  isResizeable: true,

  onChange: () => action('onChange'),
  onFocus: () => action('onFocus'),
  onSelect: () => action('onSelect'),
};
