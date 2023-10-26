import { BlrTextareaRenderFunction, BlrTextareaType } from './index';
import { FormSizes } from '../../globals/constants';
import { action } from '@storybook/addon-actions';
import { Themes } from '../../foundation/_tokens-generated/index.themes';
import { PureIconKeys } from '@boiler/icons';

export default {
  title: 'Design System/Web Components/Forms/TextArea',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    hintIcon: {
      if: { arg: 'showHint', eq: true },
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    hintCounter: {
      if: { arg: 'showCounter', eq: true },
    },
    hintText: {
      if: { arg: 'showHint', eq: true },
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
    viewMode: 'docs',
  },
};

export const BlrTextarea = (params: BlrTextareaType) => BlrTextareaRenderFunction(params);

BlrTextarea.storyName = 'BlrTextArea';

const args: BlrTextareaType = {
  theme: 'Light',
  textareaId: '#1',
  label: 'Label',
  labelAppendix: '(Optional)',
  size: 'md',
  value: 'Rindfleischetikettierungsüberwachungsaufgabenübertragunsgesetz',
  maxLength: 140,
  warningLimitType: 'warningLimitInt',
  warningLimitInt: 105,
  warningLimitPer: 75,
  cols: 20,
  rows: 5,

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
  errorMessage: 'This is an error message',

  isResizeable: true,

  onChange: () => action('onChange'),
  onFocus: () => action('onFocus'),
  onSelect: () => action('onSelect'),
};

BlrTextarea.args = args;
