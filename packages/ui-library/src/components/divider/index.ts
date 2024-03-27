import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { dividerDark, dividerLight } from './index.css';
import { TAG_NAME } from './renderFunction';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { DividerVariationTypes } from '../../globals/types';
import { LitElementCustom } from '../../utils/lit-element-custom';

export class BlrDivider extends LitElementCustom {
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

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrDivider);
}

export type BlrDividerType = Omit<BlrDivider, keyof LitElementCustom>;
