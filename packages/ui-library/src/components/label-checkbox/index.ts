import { LitElement, html } from 'lit';

import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';

import { BlrFormLabel } from '../form-label';

import { styleCustom } from './index.css';

import { SizesType } from '../../globals/types';
import { ifNotEmptyString } from '../../utils/if-not-empty-string';

// import { action } from '../../foundation/semantic-tokens/action.css';
// import { labelCheckbox } from '../../foundation/component-tokens/action.css';

@customElement('blr-label-checkbox')
export class BlrLabelCheckbox extends LitElement {
  static styles = [styleCustom /* action, textButton */];

  @property() label = 'CheckyMcCheckboxFace';
  @property() checkInputId!: string;
  @property() onClick?: HTMLButtonElement['onclick'];
  @property() onFocus?: HTMLButtonElement['onfocus'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() onChange?: HTMLButtonElement['onchange'];
  @property() disabled?: boolean;
  @property() checked?: boolean;
  @property() size!: SizesType;

  @state() protected checkedState = Boolean(this.checked);

  toogle(event: MouseEvent) {
    if (!this.disabled) {
      this.checkedState = !this.checkedState;
      if (this.onClick) {
        this.onClick(event);
      }
    }
  }

  render() {
    const classes = classMap({
      // [`${this.size}`]: this.size ?? 'md',
      checked: this.checkedState,
    });

    return html`<span class="blr-semantic-action blr-label-checkbox ${classes}">
      ${BlrFormLabel({ labelText: this.label, forInputId: this.checkInputId })}

      <input
        type="checkbox"
        id="${ifNotEmptyString(this.checkInputId)}"
        @click="${this.toogle}"
        @keydown=""
        ${this.checkedState ? 'checked' : ''}
        @change="${this.onChange}"
        @focus="${this.onFocus}"
        @blur="${this.onBlur}"
        ?disabled="${this.disabled}"
        ?checked="${this.checked}"
      />
    </span>`;
  }
}
