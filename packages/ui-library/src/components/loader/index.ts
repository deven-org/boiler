import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from '../../utils/lit/decorators.js';
import { staticStyles } from './index.css.js';

import { TAG_NAME } from './renderFunction.js';
import { ThemeType, Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { ActionSizesType, FeedbackVariantType } from '../../globals/types.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';

export class BlrLoader extends LitElementCustom {
  static styles = [staticStyles];

  @property() accessor sizeVariant: ActionSizesType | undefined = 'md';
  @property() accessor variant: FeedbackVariantType | undefined;
  @property() accessor theme: ThemeType = Themes[0];

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

export type BlrLoaderType = ElementInterface<BlrLoader>;
