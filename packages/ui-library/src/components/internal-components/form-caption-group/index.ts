import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';
import { FormSizesType } from '../../../globals/types';
import { classMap } from 'lit/directives/class-map.js';
import { formCaptionGroupStyle } from './index.css';

const TAG_NAME = 'blr-form-caption-group';

@customElement(TAG_NAME)
export class BlrFormCaption extends LitElement {
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

export type BlrFormCaptionGroupType = Omit<BlrFormCaption, keyof LitElement>;

export const BlrFormCaptionGroupRenderFunction = (params: BlrFormCaptionGroupType, children?: TemplateResult<1>) =>
  genericBlrComponentRenderer<BlrFormCaptionGroupType>(TAG_NAME, { ...params }, children);
