/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrSelect as BlrSelectClass } from './index';
import { FormSizes } from '../../globals/constants';
import { IconKeys } from '@boiler/icons';
import { getIconName } from '../../utils/get-icon-name';
import './index';

export default {
  title: 'BlrSelect',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    trailingIcon: {
      options: [...getIconName(IconKeys)],
      control: { type: 'select' },
    },
    hintIcon: {
      options: [...getIconName(IconKeys)],
      control: { type: 'select' },
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
  hint,
  hintIcon,
  hasError,
  labelAppendix,
  showTrailingIcon,
  trailingIcon,
  hasLabel,
  label,
}: BlrSelectClass) =>
  html`
    <blr-select
      .selectId=${selectId}
      .name=${name}
      .disabled=${disabled}
      .size=${size}
      .required=${required}
      .onChange=${onChange}
      .errorMessage=${errorMessage}
      .hint=${hint}
      .hintIcon=${hintIcon}
      .hasError=${hasError}
      .options=${options}
      .labelAppendix=${labelAppendix}
      .showTrailingIcon=${showTrailingIcon}
      .trailingIcon=${trailingIcon}
      .hasLabel=${hasLabel}
      .label=${label}
      class="example-layout-class"
    ></blr-select>
  `;

BlrSelect.storyName = 'BlrSelect';

BlrSelect.args = {
  name: 'Text Input',
  hasLabel: true,
  label: 'Label',
  labelAppendix: '(Optional)',
  showTrailingIcon: true,
  size: 'md',
  hasError: false,
  errorMessage: 'This is error message',
  disabled: false,
  required: false,
  hint: 'Field is used for hint',
  hintIcon: 'blrInfo',
  selectId: 'Peter',
  trailingIcon: 'blr360',
  options: [
    { value: 'uschi', label: 'Uschi', disabled: true },
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2', selected: true },
    { value: 'dieter', label: 'Dieter' },
  ],
};
