import { html } from 'lit-html';
import { BlrTextInput as BlrTextInputClass } from './index';
import { Sizes } from '../../globals/constants';
import './index';

export default {
  title: 'BlrTextInput',
  argTypes: {
    size: {
      options: Sizes,
      control: { type: 'select' },
    },
  },
};

export const BlrTextInput = ({
  textInputId,
  inputName,
  type,
  inputValue,
  placeholder,
  defaultValue,
  disabled,
  size,
  required,
  onChange,
  onBlur,
  onFocus,
  maxLength,
  minLength,
  pattern,
}: BlrTextInputClass) =>
  html`
    <blr-text-input
      .textInputId=${textInputId}
      .inputName=${inputName}
      .type=${type}
      .inputValue=${inputValue}
      .placeholder=${placeholder}
      .defaultValue=${defaultValue}
      .disabled=${disabled}
      .size=${size}
      .required=${required}
      .onChange=${onChange}
      .onBlur=${onBlur}
      .onFocus=${onFocus}
      .maxLength=${maxLength}
      .minLength=${minLength}
      .pattern=${pattern}
      class="example-layout-class"
    ></blr-text-input>
  `;

BlrTextInput.storyName = 'BlrTextInput';

BlrTextInput.args = {
  inputName: 'Text Input',
  type: 'text',
  inputValue: 'Story book Text Input',
  placeholder: 'Test placeholder',
  defaultValue: '',
  onChange: () => console.log('onChange'),
  onBlur: () => console.log('onBlur'),
  onFocus: () => console.log('onFocus'),
  disabled: false,
  required: false,
  textInputId: 'text-input-id',
  maxLength: '200px',
  minLength: '50px',
  size: 'md',
  pattern: ''
};
