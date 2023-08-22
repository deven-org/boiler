import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { loadingSpinnerDark, loadingSpinnerLight } from '../../../foundation/component-tokens/feedback.css';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { BlrBackdropRenderFunction } from '../backdrop';
import { FormSizesType } from '../../../globals/types';
import { calculateIconName } from '../../../utils/calculate-icon-name';
import { BlrIconRenderFunction } from '../icon';

@customElement('blr-overlay')
export class BlrOverlay extends LitElement {
  static styles = [styleCustom];

  @property() isOpen = false;
  @property() theme: ThemeType = 'Light';
  @property() modalTitle?: string;
  @property() closeIconSize: FormSizesType = 'md';

  protected handleModalChange() {
      this.isOpen = !this.isOpen;
  }

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [loadingSpinnerLight] : [loadingSpinnerDark];

    const overlayClasses = classMap({
      'blr-overlay': true,
      'modal': true,
      'fade': true,
      [`in`]: this.isOpen || false
    })

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <button type="button" class="btn btn-primary btn-lg" @click=${this.handleModalChange}>
        Open Modal
      </button>
      
      <div class="${overlayClasses}">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
            ${BlrIconRenderFunction({
              icon: calculateIconName('blrClose', this.closeIconSize),
              size: this.closeIconSize,
              hideAria: true,
            })}
            <h4 class="modal-title">${this.modalTitle}</h4>
            </div>
            <div class="modal-body">
             <p>This is a descriptive text</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default btn-close" @click=${this.handleModalChange}>Close</button>
            </div>
          </div>
        </div>
      </div>
      ${BlrBackdropRenderFunction({
        theme: 'Light',
        isOpen: this.isOpen
      })}}
      `;
  }
}

export type BlrOverlayType = Omit<BlrOverlay, keyof LitElement>;

export const BlrOverlayRenderFunction = ({ theme, modalTitle, closeIconSize }: BlrOverlayType) => {
  return html`<blr-overlay
    .theme=${theme}
    .modalTitle=${modalTitle}
    .closeIconSize=${closeIconSize}
  ></blr-overlay>`;
};
