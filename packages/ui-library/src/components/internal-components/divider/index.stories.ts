import { html } from 'lit-html';
import { BlrDividerRenderFunction, BlrDividerType } from './index';
import { DividerVariations, FormSizes } from '../../../globals/constants';
import './index';
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
  ${dividerDirectionVariant === 'vertical'
    ? html`<div style="height: 100px; display: inline-block;">
        ${BlrDividerRenderFunction({
          dividerDirectionVariant,
          addMargin,
          theme,
        })}
      </div> `
    : html` <div style="width: 100%; display: inline-block;">
        ${BlrDividerRenderFunction({
          dividerDirectionVariant,
          addMargin,
          theme,
        })}
      </div>`}
`;

BlrDivider.storyName = 'BlrDivider';

BlrDivider.args = {
  size: 'md',
  addMargin: false,
  theme: 'Light',
  dividerDirectionVariant: 'vertical',
};
