import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { DividerVariationTypes } from '../../../globals/types';
import { dividerDark } from '../../../foundation/component-tokens/ui.css';
import { stepperComboDark } from '../../../foundation/component-tokens/action.css';

@customElement('blr-divider')
export class BlrDivider extends LitElement {
  static styles = [dividerDark, stepperComboDark];

  @property() directionVariant?: DividerVariationTypes = 'vertical';

  protected render() {
    const dividerClasses = classMap({
      [`${this.directionVariant}`]: this.directionVariant || 'horizontal',
    });

    return html`<div class="blr-divider">
      <div class=${dividerClasses}></div>
    </div>`;
  }
}

export type BlrDividerType = Omit<BlrDivider, keyof LitElement>;

export const BlrDividerRenderFunction = ({ directionVariant }: BlrDividerType) => {
  return html`<blr-divider .directionVariant=${directionVariant}></blr-divider>`;
};
