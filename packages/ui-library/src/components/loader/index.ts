import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './css';
import { loadingSpinner } from '../../foundation/component-tokens/feedback';
import { ActionVariants, FeedbackSizesType, FeedbackVariants } from '../../globals/types';

@customElement('blr-loader')
export class BlrLoader extends LitElement {
  static styles = [styleCustom, loadingSpinner];

  @property() size?: FeedbackSizesType = 'md';
  @property() variant?: ActionVariants;
  @property() loaderVariant?: FeedbackVariants;
  @property() loadingStatus!: string;

  render() {
    const classes = classMap({
      [`${this.variant}`]: this.variant || '',
      [`${this.loaderVariant}`]: this.loaderVariant || '',
      [`${this.size}`]: this.size || 'md',
    });

    return html`<div
      class="blr-loader ${this.loaderVariant}"
      role="status"
      aria-live="polite"
      aria-label="${this.loadingStatus}"
    >
      <div class="blr-loading-spinner ${classes}"></div>
    </div>`;
  }
}
