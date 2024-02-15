import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CounterVariantType, FormSizesType } from '../../globals/types';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { counterLight, counterDark } from './index.css';

import { TAG_NAME } from './renderFunction';

//
export class BlrCounter extends LitElement {
  static styles = [];

  @property() variant: CounterVariantType = 'neutral';
  @property() current = 0;
  @property() max = 0;
  @property() size?: FormSizesType = 'md';
  @property() theme: ThemeType = 'Light';

  protected render() {
    if (this.size) {
      const dynamicStyles = this.theme === 'Light' ? [counterLight] : [counterDark];

      const classes = classMap({
        'blr-counter': true,
        [this.variant]: this.variant,
        [`${this.size}`]: this.size,
      });

      return html`
        <style>
          ${dynamicStyles}
        </style>
        <div class=${classes}>${this.current} / ${this.max}</div>
      `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrCounter);
}

export type BlrCounterType = Omit<BlrCounter, keyof LitElement>;
