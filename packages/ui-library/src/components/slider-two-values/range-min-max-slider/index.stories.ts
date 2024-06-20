/* eslint-disable no-console */
import { BlrRangeMinMaxSliderType } from './index.js';
import { BlrRangeMinMaxSliderRenderFunction } from './renderFunction.js';
// this loads the all components instances and registers their html tags
import '../../../index.js';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../../foundation/_tokens-generated/index.themes.js';
import { Sizes } from '../../../globals/constants.js';

export default {
  title: 'Components/Slider Two Values',
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
    badges: ['Draft'],
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: 'docs',
  },
};

export const BlrRangeMinMaxSlider = (params: BlrRangeMinMaxSliderType) => BlrRangeMinMaxSliderRenderFunction(params);

BlrRangeMinMaxSlider.storyName = 'Range Slider (No Legend)';

const logEventType = (minVal: number, maxVal: number, event: Event) => {
  console.log('storybook:story:min', minVal);
  console.log('storybook:story:max', maxVal);
  console.log('storybook:story:logEventValue', (event.target as HTMLInputElement).value);
  return null;
};

const btnEventType = (minValue: number, maxValue: number) => {
  console.log('storybook:story:logEventType:minValue', minValue);
  console.log('storybook:story:logEventType:maxValue', maxValue);
};

const args: BlrRangeMinMaxSliderType = {
  theme: 'Light',
  onBtnClick: btnEventType,
  onChange: logEventType,
  rangeInputId: 'range-cmpt',
  startValue: 80,
  endValue: 85,
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

BlrRangeMinMaxSlider.args = args;
