import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustomLight, styleCustomDark } from './index.css';

import { TAG_NAME } from './renderFunction';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { ActionSizesType, FeedbackVariantType } from '../../globals/types';

@customElement(TAG_NAME)
export class BlrLoader extends LitElement {
  static styles = [];

  @property() size?: ActionSizesType = 'md';
  @property() variant?: FeedbackVariantType;
  @property() theme: ThemeType = 'Light';

  protected render() {
    if (this.size) {
      const dynamicStyles = this.theme === 'Light' ? [styleCustomLight] : [styleCustomDark];

      const classes = classMap({
        'blr-loader': true,
        [`${this.variant}`]: this.variant || '',
        [`${this.size}`]: this.size || 'md',
      });

      return html`<style>
          ${dynamicStyles.map((style) => style)}
        </style>
        <div class="loader-container ${this.size}">
          <div class="${classes}" role="status" aria-live="polite"></div>
        </div>`;
    }
  }
}

export type BlrLoaderType = Omit<BlrLoader, keyof LitElement>;
