import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DividerVariationTypes } from '../../globals/types';
import { dividerLight, dividerDark } from '../../foundation/component-tokens/ui.css';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

@customElement('blr-divider')
export class BlrDivider extends LitElement {
  @property() dividerDirectionVariant?: DividerVariationTypes;
  @property() directionVariant?: DividerVariationTypes = 'vertical';
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

export const BlrDividerRenderFunction = (params: BlrDividerType) =>
  genericBlrComponentRenderer<BlrDividerType>({ ...params });
