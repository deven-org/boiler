import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { DividerVariationTypes } from '../../../globals/types';
import { dividerDark } from '../../../foundation/component-tokens/ui.css';
import { stepperComboDark } from '../../../foundation/component-tokens/action.css';

@customElement('blr-divider')
export class BlrDivider extends LitElement {
  static styles = [dividerDark, stepperComboDark];

  @property() dividerDirectionVariant?: DividerVariationTypes = 'vertical';
  @property() addPadding = false;

  protected render() {
    const dividerClasses = classMap({
      [`${this.dividerDirectionVariant}`]: this.dividerDirectionVariant || 'horizontal',
    });

    return html`<div class="blr-divider ${this.addPadding ? 'padding' : ''}">
      <div class=${dividerClasses}></div>
    </div>`;
  }
}

export type BlrDividerType = Omit<BlrDivider, keyof LitElement>;

export const BlrDividerRenderFunction = ({ dividerDirectionVariant, addPadding }: BlrDividerType) => {
  return html`<blr-divider
    .addPadding=${addPadding}
    .dividerDirectionVariant=${dividerDirectionVariant}
  ></blr-divider>`;
};
