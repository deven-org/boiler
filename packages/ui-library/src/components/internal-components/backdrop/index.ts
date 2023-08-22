import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { loadingSpinnerDark, loadingSpinnerLight } from '../../../foundation/component-tokens/feedback.css';
import { FeedbackVariantType, FormSizesType } from '../../../globals/types';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';

@customElement('blr-backdrop')
export class BlrBackdrop extends LitElement {
  static styles = [styleCustom];

  @property() size?: FormSizesType = 'md';
  @property() variant?: FeedbackVariantType;
  @property() isOpen = false;
  @property() theme: ThemeType = 'Light';

  protected handleModalChange() {
      this.isOpen = !this.isOpen;
  }

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [loadingSpinnerLight] : [loadingSpinnerDark];

    const backdropClasses = classMap({
      [`active`]: this.isOpen
    })

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class="modal-backdrop ${backdropClasses} modal-transition"></div>
      `;
  }
}

export type BlrBackdropType = Omit<BlrBackdrop, keyof LitElement>;

export const BlrBackdropRenderFunction = ({ variant, size, theme, isOpen }: BlrBackdropType) => {
  return html`<blr-backdrop
    .variant=${variant}
    .size=${size}
    .theme=${theme}
    .isOpen=${isOpen}
  ></blr-backdrop>`;
};
