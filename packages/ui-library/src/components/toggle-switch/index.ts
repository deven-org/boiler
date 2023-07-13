import { LitElement, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { IconType } from '@boiler/icons';

import { BlrFormLabelInline } from '../form-label-inline';
import { FormSizesType, WrapperVariant } from '../../globals/types';

import { styleCustom } from './index.css';
import { BlrFormHint } from '../internal-components/form-hint';
import { form } from '../../foundation/semantic-tokens/form.css';
import { calculateIconName } from '../../utils/calculate-icon-name';
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

  @property() errorMessage?: string;
  @property() showHint = true;
  @property() hintText?: string;
  @property() hintIcon: IconType = 'blrInfoSm';

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
      this.isSelected = !this.isSelected;
      this.onChange?.(event);
    }
  }

  render() {
    const classes = classMap({
      'blr-semantic-action': true,
      'blr-label-toggleswitch': true,
      [`error`]: this.hasError || false,
      [`disabled`]: this.disabled || false,
      [`readonly`]: this.readonly || false,
      [`${this.size}`]: this.size || 'md',
      [`${this.variant}`]: this.variant || 'leading',
    });
    const wrapperClass = `blr-label-switch-wrapper ${this.isSelected ? 'wrapper-selected' : 'wrapper-unselected'}`;
    return html`<div class=${classes}>
      <span class="toggle-content-col">
        ${this.label
          ? html`${BlrFormLabelInline({ labelText: this.label, forValue: this.checkInputId, labelSize: this.size })}`
          : nothing}
        ${this.showHint
          ? html`
              ${BlrFormHint({
                message: this.hasError ? this.errorMessage : this.hintText,
                variant: this.hasError ? 'error' : 'hint',
                iconName: calculateIconName(this.hintIcon, this.size),
                size: 'sm',
              })}
            `
          : html``}
      </span>
      <label
        for=${this.checkInputId || nothing}
        class=${wrapperClass}
        ?disabled=${this.disabled || nothing}
        ?readonly=${this.readonly || nothing}
      >
        <input
          type="checkbox"
          id=${this.checkInputId || nothing}
          name=${this.checkInputId || nothing}
          ?disabled=${this.disabled || nothing}
          .checked=${this.isSelected || nothing}
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
