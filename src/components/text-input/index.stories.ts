import { html } from 'lit-html';
import { BlrTextInput as BlrTextInputClass } from './index';

import './index';

export default {
  title: 'BlrTextInput',
};

export const BlrTextInput = ({ disabled }: BlrTextInputClass) =>
  html`
    <blr-text-input
     .disabled=${disabled}
      class="example-layout-class"
    ></blr-text-button>
  `;

BlrTextInput.storyName = 'BlrTextInput';

BlrTextInput.args = {
  disabled: false,
};
