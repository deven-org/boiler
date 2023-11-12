/* eslint-disable no-console */
import { BlrButtonGroupType, BlrButtonGroupFunction } from './index';
import { BlrTextButtonRenderFunction } from '../../actions/buttons/text-button';
import { BlrIconButtonRenderFunction } from '../../actions/buttons/icon-button';
import { html } from 'lit';
import { ButtonGroupAlignmentVariants, ButtonGroupSizes } from '../../../globals/constants';

export default {
  title: 'Design System/Web Components/UI/Button Group',
  argTypes: {
    size: {
      options: ButtonGroupSizes,
      control: { type: 'select' },
    },
    alignment: {
      options: ButtonGroupAlignmentVariants,
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

const contentIconButtons = html`
  ${BlrIconButtonRenderFunction({
    size: 'md',
    theme: 'Light',
    loading: false,
    variant: 'primary',
    loadingStatus: 'Loading',
    disabled: false,
  })}
  ${BlrIconButtonRenderFunction({
    size: 'md',
    theme: 'Light',
    loading: false,
    variant: 'secondary',
    loadingStatus: 'Loading',
    disabled: false,
  })}
`;

const contentTextButtons = html`
  ${BlrTextButtonRenderFunction({
    label: 'Jaok',
    size: 'md',
    theme: 'Light',
    loading: false,
    variant: 'primary',
    loadingStatus: 'Loading',
    disabled: false,
  })}
  ${BlrTextButtonRenderFunction({
    label: 'Nein',
    size: 'md',
    theme: 'Light',
    loading: false,
    variant: 'secondary',
    loadingStatus: 'Loading',
    disabled: false,
  })}
`;

export const BlrButtonGroup = (params: BlrButtonGroupType) => html`
  Text-Buttons ${BlrButtonGroupFunction(params, contentTextButtons)} Icon-Buttons
  ${BlrButtonGroupFunction(params, contentIconButtons)}
`;

BlrButtonGroup.storyName = 'BlrButtonGroup';

const args: BlrButtonGroupType = {
  size: 'md',
  alignment: 'left',
};

BlrButtonGroup.args = args;
