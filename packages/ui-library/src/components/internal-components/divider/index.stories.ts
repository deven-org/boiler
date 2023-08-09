import { html } from 'lit-html';
import { BlrDividerRenderFunction, BlrDividerType } from './index';
import { DividerVariations } from '../../../globals/constants';
import './index';

import { calculateIconName } from '../../../utils/calculate-icon-name';
import { BlrIconRenderFunction } from '../../internal-components/icon';

export default {
  title: 'Design System/Internal Components',
  argTypes: {
    dividerDirectionVariant: {
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

export const BlrDivider = ({ dividerDirectionVariant, addPadding }: BlrDividerType) => html`
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

  <div class="wrapper-${dividerDirectionVariant}">
    <button class="blr-stepper-button">
      ${BlrIconRenderFunction({
        icon: calculateIconName(dividerDirectionVariant === 'horizontal' ? 'blrChevronUp' : 'blrMinus', 'sm'),
        name: 'up',
        size: 'sm',
        hideAria: true,
        disablePointerEvents: true,
      })}
    </button>

    ${BlrDividerRenderFunction({
      dividerDirectionVariant,
      addPadding,
    })}

    <button class="blr-stepper-button">
      ${BlrIconRenderFunction({
        icon: calculateIconName(dividerDirectionVariant === 'horizontal' ? 'blrChevronDown' : 'blrPlus', 'sm'),
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
  addPadding: false,
  dividerDirectionVariant: 'vertical',
};
