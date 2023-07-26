import { html } from 'lit-html';
import { BlrRadioRenderFunction, BlrRadioType } from './index';
import { InputSizes } from '../../globals/constants';
import './index';
import { getIconName } from '../../utils/get-icon-name';
import { IconKeys } from '@boiler/icons';

export default {
  title: 'BlrRadio',
  argTypes: {
    size: {
      options: InputSizes,
      control: { type: 'select' },
    },
    option: { control: 'array' },
    hintIcon: {
      options: [...getIconName(IconKeys)],
      control: { type: 'select' },
    },
    errorIcon: {
      options: [...getIconName(IconKeys)],
      control: { type: 'select' },
    },
  },
};

export const BlrRadio = ({
  disabled,
  checked,
  size,
  name,
  required,
  readonly,
  onChange,
  onBlur,
  onFocus,
  hasError,
  errorIcon,
  option,
  showHint,
  hintIcon,
}: BlrRadioType) =>
  html`
    ${BlrRadioRenderFunction({
      disabled,
      checked,
      size,
      name,
      required,
      readonly,
      onChange,
      onBlur,
      onFocus,
      hasError,
      errorIcon,
      option,
      showHint,
      hintIcon,
    })}
  `;

BlrRadio.storyName = 'BlrRadio';

BlrRadio.args = {
  checked: false,
  disabled: false,
  name: 'Default Name',
  required: false,
  readonly: false,
  size: 'md',
  option: {
    label: 'Option 1',
    value: 'option1',
    hintMessage: 'This is a sample hint message',
    checked: true,
    errorMessage: 'This is a sample error message',
  },
  showHint: true,
  hasError: false,
  hintIcon: '',
  errorIcon: '',
};
