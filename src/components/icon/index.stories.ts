import { html } from 'lit-html';
import { IconKeys } from '../../foundation/icons';

import './index';
import { BlrIcon as BlrIconClass } from './index';

export default {
  title: 'BlrIcon',
  argTypes: {
    name: {
      options: IconKeys,
      control: { type: 'select' },
    },
  },
};

export const BlrIcon = ({ name }: BlrIconClass) =>
  html`<blr-icon name=${name} class="example-layouting-class"></blr-icon>`;

BlrIcon.storyName = 'BlrIcon';

BlrIcon.args = {
  name: 'blr360Lg',
};
