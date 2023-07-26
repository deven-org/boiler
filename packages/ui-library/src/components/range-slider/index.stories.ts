/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrRangeSliderType, BlrRangeSliderRenderFunction } from './index';
import './index';

export default {
  title: 'Design System/Web Components',
  argTypes: {
    stepFactor: {
      description: 'Please enter valid factor of the total steps eg: 5 of 50',
    },
    tickFrequency: {
      description: 'Please specify how often a tick appears in the slider eg. 2',
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrRangeSlider = ({
  decrement,
  increment,
  value,
  steps,
  stepFactor,
  zeroInclusive,
  tickFrequency,
}: BlrRangeSliderType) =>
  html`
    ${BlrRangeSliderRenderFunction({
      decrement,
      increment,
      value,
      steps,
      stepFactor,
      zeroInclusive,
      tickFrequency,
    })}
  `;

BlrRangeSlider.storyName = 'BlrRangeSlider';

BlrRangeSlider.args = {
  decrement: () => console.log('decrement'),
  increment: () => console.log('increment'),
  value: 3,
  steps: 10,
  stepFactor: 1,
  zeroInclusive: true,
  tickFrequency: 1,
};
