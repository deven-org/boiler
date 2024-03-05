import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CounterVariantType, FormSizesType } from '../../globals/types';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { counterLight, counterDark } from './index.css';
import { TAG_NAME } from './renderFunction';

export class BlrCounter extends LitElement {
  static styles = [];

  @property() variant: CounterVariantType = 'neutral';
  @property({ type: Number }) value = 0;
  @property({ type: Number }) maxValue = 0;
  @property() sizeVariant?: FormSizesType = 'md';
  @property() theme: ThemeType = 'Light';

  protected render() {
    if (this.sizeVariant) {
      const dynamicStyles = this.theme === 'Light' ? [counterLight] : [counterDark];

      const classes = classMap({
        'blr-counter': true,
        [this.variant]: this.variant,
        [`${this.sizeVariant}`]: this.sizeVariant,
      });

      return html`
        <style>
          ${dynamicStyles}
        </style>
        <div class=${classes}>${this.value} / ${this.maxValue}</div>
      `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrCounter);
}

export type BlrCounterType = Omit<BlrCounter, keyof LitElement>;
