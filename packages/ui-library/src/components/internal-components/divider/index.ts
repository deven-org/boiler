import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { DividerVariationTypes } from '../../../globals/types';
import { dividerLight, dividerDark } from '../../../foundation/component-tokens/ui.css';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';

@customElement('blr-divider')
export class BlrDivider extends LitElement {
  static styles = [];

  @property() dividerDirectionVariant?: DividerVariationTypes = 'vertical';
  @property() addMargin = false;

  @property() theme: ThemeType = 'Light';

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [dividerLight] : [dividerDark];

    const dividerClasses = classMap({
      [`${this.dividerDirectionVariant}`]: this.dividerDirectionVariant || 'horizontal',
    });

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class="blr-divider ${this.addMargin ? 'margin' : ''}">
        <div class=${dividerClasses}></div>
      </div>`;
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
