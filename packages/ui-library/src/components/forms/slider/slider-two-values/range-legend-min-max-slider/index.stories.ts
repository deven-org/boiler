/* eslint-disable no-console */
import { BlrRangeLegendMinMaxSliderType, BlrRangeLegendMinMaxSliderRenderFunction } from './index';
import { Sizes } from '../../../../../globals/constants';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../../../../foundation/_tokens-generated/index.themes';

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
