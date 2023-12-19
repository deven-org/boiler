import { LitElement, TemplateResult, html } from 'lit-element';
import { customElement, property } from 'lit-element/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';

import { styleCustom } from './index.css';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';
import { ButtonGroupAlignmentType, ButtonGroupSizesType } from '../../../globals/types';

const TAG_NAME = 'blr-button-group';

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

export const BlrButtonGroupFunction = (params: BlrButtonGroupType, children?: TemplateResult<1>) =>
  genericBlrComponentRenderer<BlrButtonGroupType>(TAG_NAME, { ...params }, children);
