import { html } from 'lit-html';

import './index';
import { BlrIcon as BlrIconClass } from './index';

export default {
  title: 'BlrIcon',
};

export const BlrIcon = ({ name }: BlrIconClass) =>
  html`<blr-icon name=${name} class="example-layouting-class"></blr-icon>`;

BlrIcon.storyName = 'BlrIcon';

BlrIcon.args = {
  name: 'boilerChevronDownXs',
};
