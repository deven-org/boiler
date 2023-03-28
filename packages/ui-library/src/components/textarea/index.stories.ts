import { html } from 'lit-html';
import { BlrTextarea as BlrTextareaClass } from './index';
import { FormSizes } from '../../globals/constants';
import './index';

export default {
  title: 'BlrTextarea',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
  },
};

export const BlrTextarea = ({
  textareaId,
  label,
  size,
  minLength,
  maxLength,
  cols,
  rows,
  errorMessage,
  placeholder,
  required,
  disabled,
  hintMessage,
  hasError,
  onChange,
  onFocus,
  onSelect,
}: BlrTextareaClass) =>
  html`
    <blr-textarea
      .textareaId=${textareaId}
      .label=${label}
      .size=${size}
      .minLength=${minLength}
      .maxLength=${maxLength}
      .cols=${cols}
      .rows=${rows}
      .errorMessage=${errorMessage}
      .placeholder=${placeholder}
      .required=${required}
      .disabled=${disabled}
      .hintMessage=${hintMessage}
      .hasError=${hasError}
      .onChange=${onChange}
      .onFocus=${onFocus}
      .onSelect=${onSelect}
      class="example-layout-class"
    ></blr-textarea>
  `;

BlrTextarea.storyName = 'BlrTextarea';

BlrTextarea.args = {
  textareaId: '#1',
  label: 'Textarea',
  size: 'md',
  minLength: '0',
  maxLength: '500',
  cols: '20',
  rows: '10',
  errorMessage: 'Please type something',
  placeholder: 'Type your message here ..',
  required: false,
  disabled: false,
  hintMessage: 'Context',
  hasError: false,
  onChange: () => console.log('onChange'),
  onFocus: () => console.log('onFocus'),
  onSelect: () => console.log('onSelect'),
};
