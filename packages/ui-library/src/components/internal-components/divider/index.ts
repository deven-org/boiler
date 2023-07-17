import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { DividerVariationTypes, FormSizesType } from '../../../globals/types';
import { divider } from '../../../foundation/component-tokens/ui.css';
import { stepperCombo } from '../../../foundation/component-tokens/action.css';

@customElement('blr-divider')
export class BlrDivider extends LitElement {
  static styles = [divider, stepperCombo];

  @property() size: FormSizesType = 'md';
  @property() directionVariant?: DividerVariationTypes = 'vertical';

  protected render() {
    const dividerClasses = classMap({
      [`${this.directionVariant}`]: this.directionVariant || '',
      [`${this.size}`]: this.size || 'md',
    });

    return html`
      ${this.directionVariant === 'horizontal'
        ? html`<div class="blr-stepper-combo horizontal">
            <div class="blr-divider">
              <div class=${dividerClasses}></div>
            </div>
          </div>`
        : html`<div class="blr-stepper-combo vertical">
            <div class="blr-divider">
              <div class=${dividerClasses}></div>
            </div>
          </div>`}
    `;
  }
}

export type BlrDividerType = Omit<BlrDivider, keyof LitElement>;

export const BlrDividerRenderFunction = ({ directionVariant, size }: BlrDividerType) => {
  return html`<blr-divider .directionVariant=${directionVariant} .size=${size}></blr-divider>`;
};
