import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { staticStyles } from './index.css';
import { ButtonGroupAlignmentType, ButtonGroupSizesType } from '../../globals/types';

import { TAG_NAME } from './renderFunction';
import { LitElementCustom } from '../../utils/lit-element-custom';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';

export class BlrButtonGroup extends LitElementCustom {
  static styles = [staticStyles];

  @property() sizeVariant: ButtonGroupSizesType = 'md';
  @property() alignment: ButtonGroupAlignmentType = 'center';
  @property() theme: ThemeType = 'Light';

  protected render() {
    const classes = classMap({
      'blr-button-group': true,
      [this.alignment]: this.alignment,
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
  customElements.define(TAG_NAME, BlrButtonGroup);
}

export type BlrButtonGroupType = Omit<BlrButtonGroup, keyof LitElementCustom>;
