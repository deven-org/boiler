import { LitElement, html, nothing } from 'lit';

import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';

import { BlrFormLabel } from '../form-label';
import { SizesType } from '../../globals/types';

import { styleCustom } from './index.css';

@customElement('blr-label-checkbox')
export class BlrLabelCheckbox extends LitElement {
  static styles = [styleCustom];

  @property() label?: string;
  @property() checkInputId!: string;
  @property() disabled?: boolean;
  @property() checked?: boolean;
  @property() size!: SizesType;
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
    });

    return html`<span class=${classes}>
      ${this.label ? html`${BlrFormLabel({ labelText: this.label, forInputId: this.checkInputId })}` : nothing}

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
    </span>`;
  }
}
