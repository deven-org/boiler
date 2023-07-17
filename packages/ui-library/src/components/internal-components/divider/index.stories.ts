import { html } from 'lit-html';
import { BlrDividerRenderFunction, BlrDividerType } from './index';
import { DividerVariations, FormSizes } from '../../../globals/constants';
import './index';

import { calculateIconName } from '../../../utils/calculate-icon-name';
import { BlrIconRenderFunction } from '../../internal-components/icon';

export default {
  title: 'Design System/Internal Components',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    directionVariant: {
      options: DividerVariations,
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

export const BlrDivider = ({ size, directionVariant }: BlrDividerType) => html`
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
  </style>

  <div class="wrapper-${directionVariant}">
    <button class="blr-stepper-button">
      ${BlrIconRenderFunction({
        icon: calculateIconName(directionVariant === 'horizontal' ? 'blrChevronUp' : 'blrMinus', size),
        name: 'up',
        size,
        hideAria: true,
        disablePointerEvents: true,
      })}
    </button>

    ${BlrDividerRenderFunction({
      size,
      directionVariant,
    })}

    <button class="blr-stepper-button">
      ${BlrIconRenderFunction({
        icon: calculateIconName(directionVariant === 'horizontal' ? 'blrChevronDown' : 'blrPlus', size),
        name: 'down',
        size,
        hideAria: true,
        disablePointerEvents: true,
      })}
    </button>
  </div>
`;

BlrDivider.storyName = 'BlrDivider';

BlrDivider.args = {
  size: 'md',
  directionVariant: 'vertical',
};
