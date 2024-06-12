import { html } from 'lit';
import { property } from '../../utils/lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { CounterVariantType, FormSizesType } from '../../globals/types.js';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes.js';
import { staticStyles } from './index.css.js';
import { TAG_NAME } from './renderFunction.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';

export class BlrCounter extends LitElementCustom {
  static styles = [staticStyles];

  @property() accessor variant: CounterVariantType = 'neutral';
  @property() accessor value = 0;
  @property() accessor maxValue = 0;
  @property() accessor sizeVariant: FormSizesType | undefined = 'md';
  @property() accessor theme: ThemeType = 'Light';

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

export type BlrCounterType = ElementInterface<BlrCounter>;
