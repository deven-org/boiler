import { html } from 'lit';
import { property } from 'lit/decorators.js';

import { FormSizesType } from '../../globals/types';
import { classMap } from 'lit/directives/class-map.js';
import { staticStyles } from './index.css';

import { TAG_NAME } from './renderFunction';
import { LitElementCustom } from '../../utils/lit-element-custom';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';

export class BlrFormCaptionGroup extends LitElementCustom {
  static styles = [staticStyles];

  @property() sizeVariant: FormSizesType = 'md';
  @property() theme: ThemeType = 'Light';

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

export type BlrFormCaptionGroupType = Omit<BlrFormCaptionGroup, keyof LitElementCustom>;
