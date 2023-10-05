/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrSelectRenderFunction, BlrSelectType } from './index';
import { FormSizes } from '../../globals/constants';
import { IconKeys as PureIconKeys } from '@boiler/icons';
import './index';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    trailingIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    hintIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'showHint', eq: true },
    },
    errorMessage: {
      if: { arg: 'hasError', eq: true },
    },
    hintMessage: {
      if: { arg: 'showHint', eq: true },
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
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrSelect = ({
  selectId,
  onChange,
  name,
  options,
  disabled,
  size,
  required,
  errorMessage,
  hintMessage,
  showHint,
  hintIcon,
  hasError,
  errorIcon,
  labelAppendix,
  showTrailingIcon,
  trailingIcon,
  hasLabel,
  label,
  theme,
}: BlrSelectType) =>
  html`
    ${BlrSelectRenderFunction({
      selectId,
      onChange,
      name,
      options,
      disabled,
      size,
      required,
      errorMessage,
      hintMessage,
      hintIcon,
      errorIcon,
      showHint,
      hasError,
      labelAppendix,
      showTrailingIcon,
      trailingIcon,
      hasLabel,
      label,
      theme,
    })}
  `;

BlrSelect.storyName = 'BlrSelect';

BlrSelect.args = {
  theme: 'Light',
  name: 'Text Input',
  hasLabel: true,
  showHint: false,
  hintMessage: 'This is a hint Message',
  hintIcon: undefined,
  label: 'Label',
  labelAppendix: '(Optional)',
  showTrailingIcon: true,
  size: 'md',
  hasError: false,
  errorMessage: '',
  errorIcon: undefined,
  disabled: false,
  required: false,
  selectId: 'Peter',
  trailingIcon: 'blrChevronDown',
  options: [
    { value: 'uschi', label: 'Uschi', disabled: true },
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2', selected: true },
    { value: 'dieter', label: 'Dieter' },
  ],
};
