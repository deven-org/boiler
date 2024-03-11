import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { styleCustomLight, styleCustomDark } from './index.css';

import { TAG_NAME } from './renderFunction';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { ActionSizesType, FeedbackVariantType } from '../../globals/types';

export class BlrLoader extends LitElement {
  static styles = [];

  @property() sizeVariant?: ActionSizesType = 'md';
  @property() variant?: FeedbackVariantType;
  @property() theme: ThemeType = 'Light';

  protected render() {
    if (this.sizeVariant) {
      const dynamicStyles = this.theme === 'Light' ? [styleCustomLight] : [styleCustomDark];

      const classes = classMap({
        'blr-loader': true,
        [`${this.variant}`]: this.variant || '',
        [`${this.sizeVariant}`]: this.sizeVariant || 'md',
      });

      return html`<style>
          ${dynamicStyles.map((style) => style)}
        </style>
        <div class="loader-container ${this.sizeVariant}">
          <div class="${classes}" role="status" aria-live="polite"></div>
        </div>`;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrLoader);
}

export type BlrLoaderType = Omit<BlrLoader, keyof LitElement>;
