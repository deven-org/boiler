/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrNumberInputRenderFunction, BlrNumberInputType } from './index';
import './index';

export default {
  title: 'Design System/Web Components',
  argTypes: {
    variant: {
      options: [undefined, 'mode1', 'mode2', 'mode3'],
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrNumberInput = ({ variant, disabled }: BlrNumberInputType) =>
  html` ${BlrNumberInputRenderFunction({ variant, disabled })} `;

BlrNumberInput.storyName = 'BlrNumberInput';

BlrNumberInput.args = {
  variant: undefined,
  disabled: false,
};
