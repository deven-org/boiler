/* eslint-disable no-console */
import { BlrRangeLegendSliderType } from './index';
import { BlrRangeLegendSliderRenderFunction } from './renderFunction';
// this loads the all components instances and registers their html tags
import '../../../index';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { Sizes } from '../../../globals/constants';

export default {
  title: 'Components/Slider Single Value',
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
    badges: ['Draft'],
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: 'docs',
  },
};

export const BlrRangeLegendSlider = (params: BlrRangeLegendSliderType) => BlrRangeLegendSliderRenderFunction(params);

BlrRangeLegendSlider.storyName = 'Range Slider (Legend)';

const logEventType = (value: number, event: Event) => {
  console.log('storybook:story:logEventType', event.type);
  console.log('storybook:story:logEventValue', (event.target as HTMLInputElement).value);
  return null;
};

const btnEventType = (value: number) => {
  console.log('storybook:story:logEventType', value);
};
const args: BlrRangeLegendSliderType = {
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

BlrRangeLegendSlider.args = args;
