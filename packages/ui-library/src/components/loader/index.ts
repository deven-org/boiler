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
  @property() variant?: ActionVariants = 'primary';
  @property() loaderVariant?: FeedbackVariants;
  @property() loadingStatus: string;

  setDefaultLoaderVariant() {
    if (!this.loaderVariant) {
      return this.variant === 'secondary' || this.variant === 'silent' ? 'default' : 'inverted';
    } else {
      return this.loaderVariant;
    }
  }
  render() {
    const classes = {
      [this.setDefaultLoaderVariant()]: this.setDefaultLoaderVariant(),
      [`${this.size}`]: this.size,
    };

    return html`<div
      class="blr-loader ${this.loaderVariant}"
      role="status"
      aria-live="polite"
      aria-label="${this.loadingStatus}"
    >
      <div class="blr-loading-spinner ${classMap(classes)}"></div>
    </div>`;
  }
}
