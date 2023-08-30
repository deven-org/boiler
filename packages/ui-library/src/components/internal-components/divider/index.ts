import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { DividerVariationTypes } from '../../../globals/types';
import { dividerLight, dividerDark } from '../../../foundation/component-tokens/ui.css';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { styleCustom } from './index.css';

@customElement('blr-divider')
export class BlrDivider extends LitElement {
  static styles = [styleCustom];

  @property() dividerDirectionVariant?: DividerVariationTypes = 'vertical';
  @property() addMargin = false;

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
