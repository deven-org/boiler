import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { FormSizesType } from '../../../globals/types';
import { classMap } from 'lit/directives/class-map.js';
import { formCaptionGroupStyle } from './index.css';

export const TAG_NAME = 'blr-form-caption-group';

@customElement(TAG_NAME)
export class BlrFormCaptionGroup extends LitElement {
  static styles = [formCaptionGroupStyle];

  @property() size: FormSizesType = 'md';

  protected render() {
    const classes = classMap({
      'blr-form-caption-group': true,
      [this.size]: this.size,
    });

    return html`
      <div class="${classes}">
        <slot></slot>
      </div>
    `;
  }
}

export type BlrFormCaptionGroupType = Omit<BlrFormCaptionGroup, keyof LitElement>;
