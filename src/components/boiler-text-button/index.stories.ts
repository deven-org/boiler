import { html } from 'lit-html';

import './index.ts';

export default {
  title: 'BoilerTextButton',
  args: {
    label: 'Name',
  } as HTMLElementTagNameMap['boiler-text-button'],
};

const Template = ({ label }: HTMLElementTagNameMap['boiler-text-button']) =>
  html`<boiler-text-button label=${label}></boiler-text-button>`;

export const BoilerTextButton = Template.bind({});
BoilerTextButton.storyName = 'BoilerTextButton';
