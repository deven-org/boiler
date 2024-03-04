import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { dividerDark, dividerLight } from './index.css';
import { DividerTagName } from './renderFunction';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { DividerVariationTypes } from '../../globals/types';

export class BlrDivider extends LitElement {
  @property() direction: DividerVariationTypes = 'vertical';
  @property() theme: ThemeType = 'Light';

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [dividerLight] : [dividerDark];

    const dividerClasses = classMap({
      'blr-divider': true,
      [this.direction]: true,
    });

    return html`
      <style>
        ${dynamicStyles}
      </style>
      <div class="${dividerClasses}"></div>
    `;
  }
}

if (!customElements.get(DividerTagName)) {
  customElements.define(DividerTagName, BlrDivider);
}

export type BlrDividerType = Omit<BlrDivider, keyof LitElement>;
