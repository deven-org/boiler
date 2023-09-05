import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DividerVariationTypes } from '../../../globals/types';
import { dividerLight, dividerDark } from '../../../foundation/component-tokens/ui.css';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';

@customElement('blr-divider')
export class BlrDivider extends LitElement {
  @property() dividerDirectionVariant?: DividerVariationTypes = 'vertical';
  @property({ type: Boolean }) addMargin = false;

  @property() theme: ThemeType = 'Light';

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [dividerLight] : [dividerDark];

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      ${this.dividerDirectionVariant === 'vertical'
        ? html`<div class="blr-divider vertical"></div>`
        : html`<div class="blr-divider horizontal"></div>`} `;
  }
}

export type BlrDividerType = Omit<BlrDivider, keyof LitElement>;

export const BlrDividerRenderFunction = ({ dividerDirectionVariant, addMargin, theme }: BlrDividerType) => {
  return html`<blr-divider
    .addMargin=${addMargin}
    .dividerDirectionVariant=${dividerDirectionVariant}
    .theme=${theme}
  ></blr-divider>`;
};
