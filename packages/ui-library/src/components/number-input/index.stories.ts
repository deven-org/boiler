/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrNumberInputRenderFunction, BlrNumberInputType } from './index';
import { ActionVariants, DividerVariations, FormSizes } from '../../globals/constants';
import { IconKeys } from '@boiler/icons';
import './index';
import { getIconName } from '../../utils/get-icon-name';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    hintIcon: {
      options: [...getIconName(IconKeys)],
      control: { type: 'select' },
    },
    /*
    directionVariant: {
      options: DividerVariations,
      control: { type: 'select' },
    },
    */

    directionVariant: {
      options: DividerVariations,
      control: {
        type: 'radio',
        labels: {
          horizontal: 'horizontal',
          vertical: 'vertical',
        },
      },
    },

    // Only enabled if warningLimitType is Whole Number
    spaceBetween: {
      name: 'spaceBetween',
      if: { arg: 'directionVariant', eq: 'horizontal' },
      description: 'Changes button layout in horizontal mode',
    },

    variant: {
      options: ActionVariants,
      control: { type: 'select' },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  },
  parameters: {
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: 'docs',
  },
};

export const BlrNumberInput = ({
  numberInputId,
  label,
  labelAppendix,
  hasLabel,
  value,
  placeholder,
  disabled,
  size,
  required,
  readonly,
  maxLength,
  errorMessage,
  showHint,
  hintText,
  hintIcon,
  hasError,
  spaceBetween,
  variant,
  directionVariant,
  theme,
}: BlrNumberInputType) =>
  html`
    <style>
      .wrapper {
        width: 250px;
      }
    </style>
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        numberInputId,
        label,
        labelAppendix,
        hasLabel,
        value,
        placeholder,
        disabled,
        size,
        required,
        readonly,
        maxLength,
        errorMessage,
        showHint,
        hintText,
        hintIcon,
        hasError,
        variant,
        spaceBetween,
        directionVariant,
        theme,
      })}
    </div>
  `;

BlrNumberInput.storyName = 'BlrNumberInput';

BlrNumberInput.args = {
  theme: 'Light',
  numberInputId: 'Input ID',
  label: 'Label',
  labelAppendix: '(Optional)',
  hasLabel: true,
  value: '',
  placeholder: 'Test placeholder',
  disabled: false,
  required: false,
  readonly: false,
  maxLength: '200',
  size: 'sm',
  errorMessage: 'This is error message',
  showHint: true,
  hintText: 'Field is used for hint',
  hintIcon: 'blrInfo',
  hasError: false,
  pattern: '',
  directionVariant: 'horizontal',
  spaceBetween: true,
  variant: 'silent',
};
