/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrNumberInputRenderFunction, BlrNumberInputType } from './index';
import './index';

export default {
  title: 'Design System/Web Components',
  argTypes: {
    variant: {
      options: ['mode1', 'mode2', 'mode3'],
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrNumberInput = ({ variant }: BlrNumberInputType) => html` ${BlrNumberInputRenderFunction({ variant })} `;

BlrNumberInput.storyName = 'BlrNumberInput';

BlrNumberInput.args = {
  variant: 'mode1',
};
