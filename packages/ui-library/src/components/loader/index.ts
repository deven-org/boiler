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
  @property() variant: ActionVariants = 'primary';
  @property() loaderVariant?: FeedbackVariants;

  render() {
    const loaderVariant = this.variant === 'secondary' || this.variant === 'silent' ? 'default' : 'inverted';

    const classes = {
      [`${loaderVariant}`]: loaderVariant,
      [`${this.size}`]: this.size,
    };

    return html`<div class="blr-loader ${loaderVariant}">
      <div class="blr-loading-spinner ${classMap(classes)}"></div>
    </div>`;
  }
}
