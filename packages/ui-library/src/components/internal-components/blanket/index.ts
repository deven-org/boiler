import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { loadingSpinnerDark, loadingSpinnerLight } from '../../../foundation/component-tokens/feedback.css';
import { FeedbackVariantType, FormSizesType } from '../../../globals/types';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { blanketDark, blanketLight } from '../../../foundation/component-tokens/ui.css';

@customElement('blr-blanket')
export class BlrBlanket extends LitElement {
  static styles = [styleCustom];

  @property() size?: FormSizesType = 'md';
  @property() variant?: FeedbackVariantType;
  @property() isOpen = false;
  @property() theme: ThemeType = 'Light';

  protected handleModalChange() {
    this.isOpen = !this.isOpen;
  }

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [blanketLight] : [blanketDark];

    const blanketClasses = classMap({
      [`modal-backdrop`]: true,
      [`blr-blanket`]: true,
      [`active`]: this.isOpen,
    });

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class="${blanketClasses} modal-transition"></div> `;
  }
}

export type BlrBlanketType = Omit<BlrBlanket, keyof LitElement>;

export const BlrBlanketRenderFunction = ({ variant, size, theme, isOpen }: BlrBlanketType) => {
  return html`<blr-blanket .variant=${variant} .size=${size} .theme=${theme} .isOpen=${isOpen}></blr-blanket>`;
};
