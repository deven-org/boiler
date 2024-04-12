import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { staticStyles } from './index.css';

import { TAG_NAME } from './renderFunction';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { ActionSizesType, FeedbackVariantType } from '../../globals/types';
import { LitElementCustom } from '../../utils/lit-element-custom';

export class BlrLoader extends LitElementCustom {
  static styles = [staticStyles];

  @property() sizeVariant?: ActionSizesType = 'md';
  @property() variant?: FeedbackVariantType;
  @property() theme: ThemeType = 'Light';

  protected render() {
    if (this.sizeVariant) {
      const containerClasses = classMap({
        'loader-container': true,
        [this.sizeVariant]: this.sizeVariant,
        [this.theme]: true,
      });

      const loaderClasses = classMap({
        'blr-loader': true,
        [this.variant || '']: this.variant || '',
        [this.sizeVariant]: this.sizeVariant || 'md',
        [this.theme]: true,
      });

      return html`<div class="${containerClasses}">
        <div class="${loaderClasses}" role="status" aria-live="polite"></div>
      </div>`;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrLoader);
}

export type BlrLoaderType = Omit<BlrLoader, keyof LitElementCustom>;
