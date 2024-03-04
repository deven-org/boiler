import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleCustom } from './index.css';
import { ButtonGroupAlignmentType, ButtonGroupSizesType } from '../../globals/types';

import { ButtonGroupTagName } from './renderFunction';

export class BlrButtonGroup extends LitElement {
  static styles = [styleCustom];

  @property() sizeVariant: ButtonGroupSizesType = 'md';
  @property() alignment: ButtonGroupAlignmentType = 'center';

  protected render() {
    const classes = classMap({
      'blr-button-group': true,
      [this.alignment]: this.alignment,
      [this.sizeVariant]: this.sizeVariant,
    });

    return html`
      <div class="${classes}">
        <slot></slot>
      </div>
    `;
  }
}

if (!customElements.get(ButtonGroupTagName)) {
  customElements.define(ButtonGroupTagName, BlrButtonGroup);
}

export type BlrButtonGroupType = Omit<BlrButtonGroup, keyof LitElement>;
