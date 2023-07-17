import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { DividerVariationTypes, FormSizesType } from '../../../globals/types';
import { dividerLight, dividerDark } from '../../../foundation/component-tokens/ui.css';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';

@customElement('blr-divider')
export class BlrDivider extends LitElement {
  static styles = [];

  @property() addMargin = false;

  @property() directionVariant?: DividerVariationTypes = 'vertical';

  @property() size: FormSizesType = 'md';
  @property() theme: ThemeType = 'Light';

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [dividerLight] : [dividerDark];

    const dividerClasses = classMap({
      [`${this.directionVariant}`]: this.directionVariant || 'horizontal',
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

export const BlrDividerRenderFunction = ({ directionVariant, size, theme }: BlrDividerType) => {
  return html`<blr-divider .directionVariant=${directionVariant} .size=${size} .theme=${theme}></blr-divider>`;
};
