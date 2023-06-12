import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { BlrFormLabelInline } from '../form-label-inline';
import { FormSizesType } from '../../globals/types';

import { styleCustom } from './index.css';
import { form } from '../../foundation/semantic-tokens/form.css';
import { checkboxStyles } from '../../foundation/component-tokens/checkbox.css';

@customElement('blr-label-checkbox')
export class BlrLabelCheckbox extends LitElement {
  static styles = [styleCustom, form, checkboxStyles];

  @property() label?: string;
  @property() checkInputId!: string;

  @property() disabled?: boolean;
  @property() checked?: boolean;
  @property() hasError?: boolean;

  @property() size: FormSizesType = 'md';

  @property() onFocus?: HTMLButtonElement['onfocus'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() onChange?: HTMLButtonElement['onchange'];

  connectedCallback() {
    super.connectedCallback();
  }

  handleChange(event: Event) {
    if (!this.disabled) {
      this.onChange?.(event);
    }
  }

  render() {
    const classes = classMap({
      'blr-semantic-action': true,
      'blr-label-checkbox': true,
      [`error`]: this.hasError || false,
    });

    return html`<div class=${classes}>
      <input
        type="checkbox"
        id=${this.checkInputId || nothing}
        name=${this.checkInputId || nothing}
        disabled=${this.disabled || nothing}
        checked=${this.checked || nothing}
        @change=${this.handleChange}
        @focus=${this.onFocus}
        @blur=${this.onBlur}
        hasError="${this.hasError}"
      />
      ${this.label
        ? html`${BlrFormLabelInline({ labelText: this.label, forValue: this.checkInputId, labelSize: this.size })}`
        : nothing}
    </div>`;
  }
}
