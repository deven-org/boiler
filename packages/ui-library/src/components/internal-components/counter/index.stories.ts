/* eslint-disable no-console */
import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { CounterVariants, FormSizes } from '../../../globals/constants';
import { BlrCounterType } from './index';
import { BlrCounterRenderFunction } from './renderFunction';

export default {
  title: 'Design System/Web Components/Internal Components/Counter',
  argTypes: {
    variant: {
      options: CounterVariants,
      control: { type: 'select' },
    },
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A126743&mode=dev',
    },
    viewMode: 'docs',
  },
};

export const BlrCounter = (params: BlrCounterType) => BlrCounterRenderFunction(params);

BlrCounter.storyName = 'Counter';

const args: BlrCounterType = {
  theme: 'Light',
  variant: 'default',
  current: 3,
  max: 100,
  size: 'md',
};

BlrCounter.args = args;
