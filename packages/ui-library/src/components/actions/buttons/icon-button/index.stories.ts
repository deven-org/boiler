/* eslint-disable no-console */
import { BlrIconButtonType, BlrIconButtonRenderFunction } from './index';
import { PureIconKeys } from '@boiler/icons';
import { ActionVariants, Sizes } from '../../../../globals/constants';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Actions/Buttons/IconButton',
  argTypes: {
    icon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    size: {
      options: Sizes,
      control: { type: 'select' },
    },
    variant: {
      options: ActionVariants,
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

export const BlrIconButton = (params: BlrIconButtonType) => BlrIconButtonRenderFunction(params);

BlrIconButton.storyName = 'IconButton';

const args: BlrIconButtonType = {
  theme: 'Light',
  variant: 'cta',
  size: 'md',
  arialabel: 'Button',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  onFocus: () => console.log('onFocus'),
  icon: 'blr360',
  loading: false,
  disabled: false,
  buttonId: 'button-id',
  loadingStatus: 'Loading',
  innerTabIndex: 1,
};

BlrIconButton.args = args;
