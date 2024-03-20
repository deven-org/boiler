import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import { FormSizesType } from '../../globals/types';
import { classMap } from 'lit/directives/class-map.js';
import { formCaptionGroupStyle } from './index.css';

import { TAG_NAME } from './renderFunction';

export class BlrFormCaptionGroup extends LitElement {
  static styles = [formCaptionGroupStyle];

  @property() sizeVariant: FormSizesType = 'md';

  protected render() {
    const classes = classMap({
      'blr-form-caption-group': true,
      [this.sizeVariant]: this.sizeVariant,
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

export type BlrFormCaptionGroupType = Omit<BlrFormCaptionGroup, keyof LitElement>;
