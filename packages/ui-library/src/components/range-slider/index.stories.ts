/* eslint-disable no-console */
import { BlrRangeSliderType, BlrRangeSliderRenderFunction } from './index';
import { Sizes } from '../../globals/constants';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/BlrRangeSlider',
  argTypes: {
    incrementIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    decrementIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    stepFactor: {
      description: 'Please enter valid factor of the total steps eg: 5 of 50',
    },
    size: {
      options: Sizes,
      control: { type: 'select' },
    },
    btnVariant: {
      options: ['cta', 'primary', 'secondary', 'silent', 'destructive', 'encourage'],
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

export const BlrRangeSlider = (params: BlrRangeSliderType) => BlrRangeSliderRenderFunction(params);

BlrRangeSlider.storyName = 'BlrRangeSlider';

const logEventType = (val: number, event: Event) => {
  console.log('storybook:story:val', val);
  console.log('storybook:story:logEventType', event.type);
  console.log('storybook:story:logEventValue', (event.target as HTMLInputElement).value);
  return null;
};

const btnEventType = (value: number) => {
  console.log('storybook:story:logEventType', value);
};

const args: BlrRangeSliderType = {
  theme: 'Light',
  onClickMinMax: btnEventType,
  onChange: logEventType,
  rangeInputId: 'range-id',
  initialValue: 80,
  minValue: 30,
  maxValue: 130,
  units: '$',
  stepFactor: 1,
  size: 'md',
  btnVariant: 'silent',
  showLegend: true,
  disabled: false,
  incrementIcon: 'blrPlus',
  decrementIcon: 'blrMinus',
};

BlrRangeSlider.args = args;
