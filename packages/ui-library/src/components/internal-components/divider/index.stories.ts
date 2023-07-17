import { html } from 'lit-html';
import { BlrDividerRenderFunction, BlrDividerType } from './index';
import { DividerVariations } from '../../../globals/constants';
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

export const BlrDivider = ({ size, directionVariant, addMargin, theme }: BlrDividerType) => html`
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

  <div class="wrapper-${directionVariant}">
    <button class="test-button">
      ${BlrIconRenderFunction({
        icon: calculateIconName(directionVariant === 'horizontal' ? 'blrChevronUp' : 'blrMinus', size),
        name: 'up',
        size: 'sm',
        hideAria: true,
        disablePointerEvents: true,
      })}
    </button>

    ${BlrDividerRenderFunction({
      theme,
      size,
      directionVariant,
      addMargin,
    })}

    <button class="test-button">
      ${BlrIconRenderFunction({
        icon: calculateIconName(directionVariant === 'horizontal' ? 'blrChevronDown' : 'blrPlus', 'sm'),
        name: 'down',

        size: 'sm',
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
  directionVariant: 'vertical',
};
