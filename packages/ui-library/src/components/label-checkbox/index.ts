import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { BlrFormLabel } from '../form-label';
import { FormSizesType } from '../../globals/types';

import { styleCustom } from './index.css';
import { form } from '../../foundation/semantic-tokens/form.css';

@customElement('blr-label-checkbox')
export class BlrLabelCheckbox extends LitElement {
  static styles = [styleCustom, form];

  @property() label?: string;
  @property() checkInputId!: string;

  @property() disabled?: boolean;
  @property() checked?: boolean;

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
    });

    return html`<span class=${classes}>
      ${this.label
        ? html`${BlrFormLabel({ labelText: this.label, forValue: this.checkInputId, labelSize: this.size })}`
        : nothing}

      <input
        type="checkbox"
        id=${this.checkInputId || nothing}
        name=${this.checkInputId || nothing}
        disabled=${this.disabled || nothing}
        checked=${this.checked || nothing}
        @change=${this.handleChange}
        @focus=${this.onFocus}
        @blur=${this.onBlur}
      />
    </span>`;
  }
}
