import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DividerVariationTypes, FormSizesType } from '../../../globals/types';
import { dividerLight, dividerDark } from '../../../foundation/component-tokens/ui.css';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';

@customElement('blr-divider')
export class BlrDivider extends LitElement {
  @property() dividerDirectionVariant?: DividerVariationTypes = 'vertical';
  @property({ type: Boolean }) addMargin = false;

  @property() directionVariant?: DividerVariationTypes = 'vertical';

  @property() size: FormSizesType = 'md';
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

export const BlrDividerRenderFunction = ({ directionVariant, size, theme }: BlrDividerType) => {
  return html`<blr-divider .directionVariant=${directionVariant} .size=${size} .theme=${theme}></blr-divider>`;
};
