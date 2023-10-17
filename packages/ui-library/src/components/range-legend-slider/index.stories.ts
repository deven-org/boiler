/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrRangeLegendSliderType, BlrRangeLegendSliderRenderFunction } from './index';
import { Sizes } from '../../globals/constants';
import './index';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/RangeLegendSlider',
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
      description: 'Please enter valid factor of the total steps based on your list length & intial value',
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

export const BlrRangeLegendSlider = ({
  onClickMinMax,
  onChange,
  rangeInputId,
  initialValue,
  list,
  stepFactor,
  size,
  btnVariant,
  showLegend,
  disabled,
  incrementIcon,
  decrementIcon,
  theme,
}: BlrRangeLegendSliderType) =>
  html`${BlrRangeLegendSliderRenderFunction({
    onClickMinMax,
    onChange,
    rangeInputId,
    initialValue,
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

BlrRangeLegendSlider.storyName = 'BlrRangeLegendSlider';

const logEventType = (value: number, event: Event) => {
  console.log('storybook:story:logEventType', event.type);
  console.log('storybook:story:logEventValue', (event.target as HTMLInputElement).value);
};

const btnEventType = (value: number) => {
  console.log('storybook:story:logEventType', value);
};

BlrRangeLegendSlider.args = {
  theme: 'Light',
  onClickMinMax: btnEventType,
  onChange: logEventType,
  rangeInputId: 'range-cmpt',
  initialValue: '300 $',
  list: ['100 $', '200 $', '300 $', '400 $', '500 $', '600 $'],
  stepFactor: 1,
  size: 'md',
  btnVariant: 'silent',
  showLegend: true,
  disabled: false,
  incrementIcon: 'blrPlus',
  decrementIcon: 'blrMinus',
};
