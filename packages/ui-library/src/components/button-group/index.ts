import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleCustom } from './index.css';
import { ButtonGroupAlignmentType, ButtonGroupSizesType } from '../../globals/types';

import { TAG_NAME } from './renderFunction';

@customElement(TAG_NAME)
export class BlrButtonGroup extends LitElement {
  static styles = [styleCustom];

  @property() size: ButtonGroupSizesType = 'md';
  @property() alignment: ButtonGroupAlignmentType = 'center';

  protected render() {
    const classes = classMap({
      'blr-button-group': true,
      [this.alignment]: this.alignment,
      [this.size]: this.size,
    });

    return html`
      <div class="${classes}">
        <slot></slot>
      </div>
    `;
  }
}

export type BlrButtonGroupType = Omit<BlrButtonGroup, keyof LitElement>;
