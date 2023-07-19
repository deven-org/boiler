import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { BlrFormLabel } from '../internal-components/form-label';
import { InputSizesType } from '../../globals/types';

import { styleCustom } from './index.css';
import { checkbox } from '../../foundation/component-tokens/checkbox.css';
import { form } from '../../foundation/semantic-tokens/form.css';

@customElement('blr-label-checkbox')
export class BlrLabelCheckbox extends LitElement {
  static styles = [styleCustom, form, checkbox];

  @property() label?: string;
  @property() checkInputId!: string;

  @property() disabled?: boolean;
  @property() checked?: boolean;

  @property() size: InputSizesType = 'md';

  @property() onFocus?: HTMLButtonElement['onfocus'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() onChange?: HTMLButtonElement['onchange'];

  @state() protected checkedState = false;
  @state() protected focusState = false;

  connectedCallback() {
    super.connectedCallback();
    this.checkedState = Boolean(this.checked);
  }

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

  render() {
    const classes = classMap({
      'blr-semantic-action': true,
      'blr-label-checkbox': true,
      'checked': this.checkedState,
      'focus': this.focusState,
      'disabled': Boolean(this.disabled),
      [`${this.size}`]: this.size,
    });

    return html`<span class=${classes}>
      <input
        type="checkbox"
        id=${this.checkInputId || nothing}
        name=${this.checkInputId || nothing}
        disabled=${this.disabled || nothing}
        checked=${this.checkedState || nothing}
        @change=${this.handleChange}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
      />
      <div class="label-container">
        ${this.label
          ? html`${BlrFormLabel({ labelText: this.label, forValue: this.checkInputId, labelSize: this.size })}`
          : nothing}
      </div>
    </span>`;
  }
}
