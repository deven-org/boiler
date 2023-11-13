/* eslint-disable no-console */
import { BlrSelectRenderFunction, BlrSelectType } from './index';
import { FormSizes } from '../../../globals/constants';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Forms/Select',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    icon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    hintMessage: {
      if: { arg: 'showHint', eq: true },
    },
    hintIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'showHint', eq: true },
    },
    errorMessage: {
      if: { arg: 'hasError', eq: true },
    },
    errorIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasError', eq: true },
    },
    options: {
      control: 'array',
      options: [
        { value: 'uschi', label: 'Uschi', selected: false, disabled: false },
        { value: '1', label: 'Option 1', selected: false, disabled: false },
        { value: '2', label: 'Option 2', selected: true, disabled: false },
        { value: 'dieter', label: 'Dieter', selected: true, disabled: false },
      ],
    },
    onChange: {
      action: 'onChange',
      description: '(@change)="onChange($event)"',
    },
    onFocus: {
      action: 'onFocus',
      description: '(@change)="onFocus($event)"',
    },
    onBlur: {
      action: 'onBlur',
      description: '(@change)="onBlur($event)"',
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

export const BlrSelect = (params: BlrSelectType) => BlrSelectRenderFunction(params);

BlrSelect.storyName = 'Select';

const args: BlrSelectType = {
  arialabel: 'Select',
  theme: 'Light',
  name: 'Text Input',
  showHint: false,
  hintMessage: 'This is a hint message',
  hintIcon: 'blrInfo',
  label: 'Label',
  labelAppendix: '(Optional)',
  size: 'md',
  hasError: false,
  errorMessage: 'This is an error message',
  errorIcon: 'blrInfo',
  disabled: false,
  required: false,
  selectId: 'Peter',
  icon: 'blrChevronDown',
  options: [
    { value: 'uschi', label: 'Uschi', disabled: true },
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2', selected: true },
    { value: 'dieter', label: 'Dieter' },
  ],
  onChange: (event: Event) => console.log(event.type),
  onFocus: (event: Event) => console.log(event.type),
  onBlur: (event: Event) => console.log(event.type),
};

BlrSelect.args = args;
