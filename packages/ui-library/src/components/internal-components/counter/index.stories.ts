/* eslint-disable no-console */
import { CounterVariants, FormSizes } from '../../../globals/constants';
import { BlrCounterRenderFunction, BlrCounterType } from './index';

import './index';

export default {
  title: 'Design System/Internal Components',
  argTypes: {
    variant: {
      options: CounterVariants,
      control: { type: 'select' },
    },
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrCounter = ({ variant, current, max, size }: BlrCounterType) =>
  BlrCounterRenderFunction({ variant, current, max, size });

BlrCounter.storyName = 'BlrCounter';

BlrCounter.args = {
  variant: 'default',
  current: 3,
  max: 100,
  size: 'md',
};
