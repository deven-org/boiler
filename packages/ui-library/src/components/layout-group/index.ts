import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { styleCustom } from './index.css';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

const TAG_NAME = 'blr-layout-group';

@customElement(TAG_NAME)
export class BlrLayoutGroup extends LitElement {
  static styles = [styleCustom];

  @property() label!: string;

  protected render() {
    const classes = classMap({
      'blr-layout-group': true,
    });

    return html`
      <div class="${classes}">
        ${this.label}
        <hr />
        <slot></slot>
      </div>
    `;
  }
}

export type BlrLayoutGroupType = Omit<BlrLayoutGroup, keyof LitElement>;

export const BlrLayoutGroupFunction = (params: BlrLayoutGroupType, children?: TemplateResult<1>) =>
  genericBlrComponentRenderer<BlrLayoutGroupType>(TAG_NAME, { ...params }, children);
