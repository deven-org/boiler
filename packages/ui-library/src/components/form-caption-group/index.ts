import { html } from 'lit';
import { property } from '../../utils/lit/decorators.js';

import { FormSizesType } from '../../globals/types.js';
import { classMap } from 'lit/directives/class-map.js';
import { staticStyles } from './index.css.js';

import { TAG_NAME } from './renderFunction.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';
import { ThemeType, Themes } from '../../foundation/_tokens-generated/index.themes.js';

export class BlrFormCaptionGroup extends LitElementCustom {
  static styles = [staticStyles];

  @property() accessor sizeVariant: FormSizesType = 'md';
  @property() accessor theme: ThemeType = Themes[0];

  protected render() {
    const classes = classMap({
      'blr-form-caption-group': true,
      [this.sizeVariant]: this.sizeVariant,
      [this.theme]: this.theme,
    });

    return html`
      <div class="${classes}">
        <slot></slot>
      </div>
    `;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrFormCaptionGroup);
}

export type BlrFormCaptionGroupType = ElementInterface<BlrFormCaptionGroup>;
