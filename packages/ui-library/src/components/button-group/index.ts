import { html } from 'lit';
import { property } from '../../utils/lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { staticStyles } from './index.css.js';
import { ButtonGroupAlignmentType, ButtonGroupSizesType } from '../../globals/types.js';

import { TAG_NAME } from './renderFunction.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes.js';

export class BlrButtonGroup extends LitElementCustom {
  static styles = [staticStyles];

  @property() accessor sizeVariant: ButtonGroupSizesType = 'md';
  @property() accessor alignment: ButtonGroupAlignmentType = 'center';
  @property() accessor theme: ThemeType = 'Light';

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

export type BlrButtonGroupType = ElementInterface<BlrButtonGroup>;
