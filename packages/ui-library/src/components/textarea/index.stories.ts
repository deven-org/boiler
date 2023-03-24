/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrTextareaRenderFunction, BlrTextareaType } from './index';

import { FormSizes } from '../../globals/constants';
import { IconKeys } from '@boiler/icons';
import './index';
import { getIconName } from '../../utils/get-icon-name';
import { action } from '@storybook/addon-actions';

export default {
  title: 'BlrTextarea',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    hintIcon: {
      options: [...getIconName(IconKeys)],
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

export const BlrTextarea = ({
  textareaId,
  label,
  labelAppendix,
  placeholder,
  required,
  disabled,
  size,
  maxLength,
  cols,
  rows,
  errorMessage,
  hintText,
  hintIcon,
  hasError,
  onChange,
  onFocus,
  onSelect,
  readonly,
  isResizeable,
  showHint,
  minHeight,
  value,
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
      cols,
      rows,
      errorMessage,
      hintText,
      hintIcon,
      hasError,
      onChange,
      onFocus,
      onSelect,
      readonly,
      isResizeable,
      showHint,
      minHeight,
      value,
    })}
  `;

BlrTextarea.storyName = 'BlrTextarea';

BlrTextarea.args = {
  textareaId: '#1',
  label: 'Label',
  labelAppendix: '(Optional)',
  size: 'md',
  value: 'Rindfleischetikettierungsüberwachungsaufgabenübertragunsgesetz',
  minLength: '0',
  maxLength: '140',
  cols: '20',
  rows: '5',
  errorMessage: 'OMG it`s an error',
  placeholder: 'Type your message here ..',
  required: false,
  disabled: false,
  readonly: false,
  hintText: 'Rindfleischetikettierungsüberwachungsaufgabenübertragunsgesetz',
  hasError: false,
  isResizeable: true,
  hintIcon: 'blrInfo',
  showHint: true,
  onChange: () => action('onChange'),
  onFocus: () => action('onFocus'),
  onSelect: () => action('onSelect'),
};
