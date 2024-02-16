/* eslint-disable no-console */
import { BlrRangeLegendMinMaxSliderType } from './index';
import { BlrRangeLegendMinMaxSliderRenderFunction } from './renderFunction';
import { Sizes } from '../../../../../globals/constants';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../../../../foundation/_tokens-generated/index.themes';

// this loads the all components instances and registers their html tags
import '../../../../../index';

export default {
  title: 'Design System/Web Components/Forms/Slider/SliderTwoValues',
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

export const BlrRangeLegendMinMaxSlider = (params: BlrRangeLegendMinMaxSliderType) =>
  BlrRangeLegendMinMaxSliderRenderFunction(params);

BlrRangeLegendMinMaxSlider.storyName = 'Range Slider (Legend)';

const logEventType = (minVal: number, maxVal: number, event: Event) => {
  console.log('storybook:story:min', minVal);
  console.log('storybook:story:max', maxVal);
  console.log('storybook:story:logEventType', event.type);
  return null;
};

const btnEventType = (minValue: number, maxValue: number) => {
  console.log('storybook:story:logEventType:minValue', minValue);
  console.log('storybook:story:logEventType:maxValue', maxValue);
};

const args: BlrRangeLegendMinMaxSliderType = {
  theme: 'Light',
  onBtnClick: btnEventType,
  onChange: logEventType,
  rangeInputId: 'range-cmpt',
  startValue: '200 $',
  endValue: '400 $',
  list: ['100 $', '200 $', '300 $', '400 $', '500 $', '600 $', '700 $'],
  stepFactor: 1,
  size: 'md',
  btnVariant: 'silent',
  showLegend: true,
  disabled: false,
  incrementIcon: 'blrPlus',
  decrementIcon: 'blrMinus',
};

BlrRangeLegendMinMaxSlider.args = args;
