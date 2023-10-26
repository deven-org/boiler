/* eslint-disable no-console */
import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { CounterVariants, FormSizes } from '../../../globals/constants';
import { BlrCounterRenderFunction, BlrCounterType } from './index';

export default {
  title: 'Design System/Internal Components/Counter',
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
    viewMode: 'docs',
  },
};

export const BlrCounter = (params: BlrCounterType) => BlrCounterRenderFunction(params);

BlrCounter.storyName = 'BlrCounter';

const args: BlrCounterType = {
  theme: 'Light',
  variant: 'default',
  current: 3,
  max: 100,
  size: 'md',
};

BlrCounter.args = args;
