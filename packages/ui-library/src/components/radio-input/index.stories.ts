import { html } from 'lit-html';
import { BlrRadioRenderFunction, BlrRadioType } from './index';
import { InputSizes } from '../../globals/constants';
import './index';
import { IconKeys as PureIconKeys } from '@boiler/icons';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Radio',
  argTypes: {
    size: {
      options: InputSizes,
      control: { type: 'select' },
    },
    option: { control: 'array' },
    hintIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    errorIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    theme: {
      options: Themes,
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
  theme,
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
      theme,
    })}
  `;

BlrRadio.storyName = 'BlrRadio';

BlrRadio.args = {
  theme: 'Light',
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
