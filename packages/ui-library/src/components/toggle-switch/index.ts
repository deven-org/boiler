import { LitElement, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { BlrFormLabelInline } from '../form-label-inline';
import { FormSizesType, WrapperVariant } from '../../globals/types';

import { styleCustom } from './index.css';
import { form } from '../../foundation/semantic-tokens/form.css';
import { checkboxStyles } from '../../foundation/component-tokens/toogleswitch.css';

@customElement('blr-label-toggleswitch')
export class BlrLabelToggleSwitch extends LitElement {
  static styles = [styleCustom, form, checkboxStyles];

  @query('input')
  protected _checkboxNode!: HTMLInputElement;

  @property() label?: string;
  @property() checkInputId!: string;

  @property() disabled?: boolean;
  @property() checked?: boolean;
  @property() indeterminate?: boolean;
  @property() readonly?: boolean;
  @property() hasError?: boolean;

  @property() size: FormSizesType = 'md';
  @property() variant: WrapperVariant = 'leading';

  @property() onFocus?: HTMLButtonElement['onfocus'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() onChange?: HTMLButtonElement['onchange'];

  @state() protected isSelected = this.checked;

  connectedCallback() {
    super.connectedCallback();
  }

  handleChange(event: Event) {
    if (!this.disabled) {
      this.onChange?.(event);
      this.isSelected = !this.isSelected;
    }
  }

  render() {
    const classes = classMap({
      'blr-semantic-action': true,
      'blr-label-toggleswitch': true,
      [`error`]: this.hasError || false,
      [`disabled`]: this.disabled || false,
      [`${this.size}`]: this.size || 'md',
      [`${this.variant}`]: this.variant || 'leading',
    });
    const wrapperClass = `blr-label-switch-wrapper ${this.isSelected ? 'wrapper-selected' : 'wrapper-unselected'}`;
    return html`<div class=${classes}>
      ${this.label
        ? html`${BlrFormLabelInline({ labelText: this.label, forValue: this.checkInputId, labelSize: this.size })}`
        : nothing}
      <label for=${this.checkInputId || nothing} class=${wrapperClass} ?disabled=${this.disabled || nothing}>
        <input
          type="checkbox"
          id=${this.checkInputId || nothing}
          name=${this.checkInputId || nothing}
          ?disabled=${this.disabled || nothing}
          .checked=${this.checked || nothing}
          .indeterminate=${this.indeterminate || nothing}
          ?readonly=${this.readonly || nothing}
          @change=${this.handleChange}
          @focus=${this.onFocus}
          @blur=${this.onBlur}
          hasError="${this.hasError}"
        />
        <span class="toggle-switch-slider"> </span>

        <span class="toggle-switch-unselect"></span>
        <span class="toggle-switch-select"></span>
      </label>
    </div>`;
  }
}
