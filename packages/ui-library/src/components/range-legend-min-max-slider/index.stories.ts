/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrRangeLegendMinMaxSliderType, BlrRangeLegendMinMaxSliderRenderFunction } from './index';
import { Sizes } from '../../globals/constants';
import './index';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/InputSlider',
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

export const BlrRangeLegendMinMaxSlider = ({
  onBtnClick,
  onChange,
  rangeInputId,
  startValue,
  endValue,
  list,
  stepFactor,
  size,
  btnVariant,
  showLegend,
  disabled,
  incrementIcon,
  decrementIcon,
  theme,
}: BlrRangeLegendMinMaxSliderType) =>
  html`${BlrRangeLegendMinMaxSliderRenderFunction({
    onBtnClick,
    onChange,
    rangeInputId,
    startValue,
    endValue,
    list,
    stepFactor,
    size,
    btnVariant,
    showLegend,
    disabled,
    incrementIcon,
    decrementIcon,
    theme,
  })}`;

BlrRangeLegendMinMaxSlider.storyName = 'BlrRangeLegendMinMaxSlider';

const logEventType = (minVal, maxVal, event) => {
  console.log('storybook:story:min', minVal);
  console.log('storybook:story:max', maxVal);
  console.log('storybook:story:logEventType', event.type);
};

const btnEventType = (minValue: number, maxValue: number) => {
  console.log('storybook:story:logEventType:minValue', minValue);
  console.log('storybook:story:logEventType:maxValue', maxValue);
};

BlrRangeLegendMinMaxSlider.args = {
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
