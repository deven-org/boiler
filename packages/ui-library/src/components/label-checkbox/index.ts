import { LitElement, html, nothing } from 'lit';

import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';

import { BlrFormLabel } from '../form-label';

import { styleCustom } from './index.css';

import { SizesType } from '../../globals/types';

@customElement('blr-label-checkbox')
export class BlrLabelCheckbox extends LitElement {
  static styles = [styleCustom];

  @property() label = 'CheckyMcCheckboxFace';
  @property() checkInputId!: string;
  @property() onFocus?: HTMLButtonElement['onfocus'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() onChange?: HTMLButtonElement['onchange'];
  @property() disabled?: boolean;
  @property() checked?: boolean;
  @property() size!: SizesType;

  @state() protected checkedState = Boolean(this.checked);
  @state() protected focusState = false;

  handleChange(event: Event) {
    if (!this.disabled) {
      this.checkedState = !this.checkedState;
      this.onChange?.(event);
    }
  }

  handleFocus(event: FocusEvent) {
    this.focusState = true;
    this.onFocus?.(event);
  }

  handleBlur(event: FocusEvent) {
    this.focusState = false;
    this.onBlur?.(event);
  }

  handleKeyUp(event: KeyboardEvent) {
    if (!this.disabled && event.code === 'Space') {
      this.checkedState = !this.checkedState;
      this.onChange?.(event);
    }
  }

  render() {
    const classes = classMap({
      checked: this.checkedState,
      focus: this.focusState,
    });

    return html`<span
      class="blr-semantic-action blr-label-checkbox ${classes}"
      tabindex="-1"
      @focus="${this.handleFocus}"
      @blur="${this.handleBlur}"
      @keyup="${this.handleKeyUp}"
    >
      ${BlrFormLabel({ labelText: this.label, forInputId: this.checkInputId })}

      <input
        type="checkbox"
        id="${this.checkInputId || nothing}"
        name="${this.checkInputId || nothing}"
        ${this.checkedState ? 'checked' : ''}
        @change="${this.handleChange}"
        ?disabled="${this.disabled}"
        ?checked="${this.checkedState}"
      />
    </span>`;
  }
}
