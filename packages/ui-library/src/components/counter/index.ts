import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CounterVariantType, FormSizesType } from '../../globals/types';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { staticStyles } from './index.css';
import { TAG_NAME } from './renderFunction';
import { LitElementCustom } from '../../utils/lit-element-custom';

export class BlrCounter extends LitElementCustom {
  static styles = [staticStyles];

  @property() variant: CounterVariantType = 'neutral';
  @property() value = 0;
  @property() maxValue = 0;
  @property() sizeVariant?: FormSizesType = 'md';
  @property() theme: ThemeType = 'Light';

  protected render() {
    if (this.sizeVariant) {
      const classes = classMap({
        'blr-counter': true,
        [this.variant]: this.variant,
        [this.sizeVariant]: this.sizeVariant,
        [this.theme]: true,
      });

      return html` <div class=${classes}>${this.value} / ${this.maxValue}</div> `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrCounter);
}

export type BlrCounterType = Omit<BlrCounter, keyof LitElementCustom>;
