import { html } from 'lit-html';
import { BlrDividerRenderFunction, BlrDividerType } from './index';
import { DividerVariations, FormSizes } from '../../../globals/constants';
import './index';

import { calculateIconName } from '../../../utils/calculate-icon-name';
import { BlrIconRenderFunction } from '../../internal-components/icon';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Internal Components',
  argTypes: {
    dividerDirectionVariant: {
      options: DividerVariations,
      control: { type: 'select' },
    },
    size: {
      options: FormSizes,
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

export const BlrDivider = ({ dividerDirectionVariant, addMargin, theme }: BlrDividerType) => html`
  <style>
    .wrapper-vertical {
      position: relative;
      display: inline-flex;
      flex-direction: row;
      height: 100%;
    }
    .wrapper-horizontal {
      position: relative;
      display: inline-flex;
      flex-direction: column;
    }
    .test-button {
      opacity: 0.1;
      margin: 5px;
    }
  </style>
  <div class="wrapper-${dividerDirectionVariant}">
    <button class="test-button">
      ${BlrIconRenderFunction({
        icon: calculateIconName(dividerDirectionVariant === 'horizontal' ? 'blrChevronUp' : 'blrMinus', 'sm'),
        name: 'up',
        size: 'lg',
        hideAria: true,
        disablePointerEvents: true,
      })}
    </button>
    ${BlrDividerRenderFunction({
      dividerDirectionVariant,
      addMargin,
      theme,
    })}
    <button class="test-button">
      ${BlrIconRenderFunction({
        icon: calculateIconName(dividerDirectionVariant === 'horizontal' ? 'blrChevronDown' : 'blrPlus', 'sm'),
        name: 'down',
        size: 'lg',
        hideAria: true,
        disablePointerEvents: true,
      })}
    </button>
  </div>
`;

BlrDivider.storyName = 'BlrDivider';

BlrDivider.args = {
  size: 'md',
  addMargin: false,
  theme: 'Light',
  dividerDirectionVariant: 'vertical',
};
