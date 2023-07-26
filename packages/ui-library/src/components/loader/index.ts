import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { loadingSpinner } from '../../foundation/component-tokens/feedback.css';
import { FeedbackSizesType, FeedbackVariantType } from '../../globals/types';

@customElement('blr-loader')
export class BlrLoader extends LitElement {
  static styles = [styleCustom, loadingSpinner];

  @property() size?: FeedbackSizesType = 'md';
  @property() variant?: FeedbackVariantType;
  @property() loadingStatus!: string;

  protected render() {
    const classes = classMap({
      'blr-loading-spinner': true,
      [`${this.variant}`]: this.variant || '',
      [`${this.size}`]: this.size || 'md',
    });

    return html`<div class="blr-loader" role="status" aria-live="polite" ?aria-label=${this.loadingStatus}>
      <div class=${classes}></div>
    </div>`;
  }
}

export type BlrLoaderType = Omit<BlrLoader, keyof LitElement>;

export const BlrLoaderRenderFunction = ({ variant, size, loadingStatus }: BlrLoaderType) => {
  return html`<blr-loader .variant=${variant} .size=${size} .loadingStatus=${loadingStatus}></blr-loader>`;
};
