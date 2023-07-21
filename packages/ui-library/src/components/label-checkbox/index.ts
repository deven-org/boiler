import { LitElement, html, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { BlrFormLabelInline } from '../form-label-inline';
import { FormSizesType } from '../../globals/types';

import { styleCustom } from './index.css';
import { form } from '../../foundation/semantic-tokens/form.css';
import { checkbox } from '../../foundation/component-tokens/checkbox.css';
import { BlrFormHint } from '../internal-components/form-hint';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { IconType } from '@boiler/icons';

@customElement('blr-label-checkbox')
export class BlrLabelCheckbox extends LitElement {
  static styles = [styleCustom, form, checkbox];

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
  @property() errorIcon?: IconType;
  @property() showHint?: boolean;
  @property() hintIcon?: IconType;
  @property() hintMessage?: string;

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

  protected render() {
    const classes = classMap({
      'blr-semantic-action': true,
      'blr-label-checkbox': true,
      [`error`]: this.hasError || false,
      [`disabled`]: this.disabled || false,
      [`checked`]: this.checked || false,
      [`readonly`]: this.readonly || false,
      [`indeterminate`]: this.indeterminate || false,
      [`${this.size}`]: this.size || 'md',
    });

    return html`<div class=${classes}>
      <input
        type="checkbox"
        class="input-control"
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
      <div class="label-wrapper">
        ${this.label
          ? html`${BlrFormLabelInline({ labelText: this.label, forValue: this.checkInputId, labelSize: this.size })}`
          : nothing}
        ${this.showHint
          ? html`
              <div class="hint-wrapper">
                ${BlrFormHint({
                  message: this.hintMessage,
                  variant: 'hint',
                  size: this.size,
                  iconName: this.hintIcon ? calculateIconName(this.hintIcon, this.size) : '',
                })}
              </div>
            `
          : html``}
        ${this.hasError
          ? html`
              <div class="error-wrapper">
                ${BlrFormHint({
                  message: this.errorMessage,
                  variant: 'error',
                  size: this.size,
                  iconName: this.errorIcon ? calculateIconName(this.errorIcon, this.size) : '',
                })}
              </div>
            `
          : html``}
      </div>
    </div> `;
  }
}

export type BlrCheckboxType = Omit<BlrLabelCheckbox, keyof LitElement>;

export const BlrCheckboxRenderFunction = ({
  label,
  checkInputId,
  onBlur,
  onFocus,
  onChange,
  disabled,
  size,
  checked,
  indeterminate,
  readonly,
  hasError,
  errorMessage,
  errorIcon,
  showHint,
  hintIcon,
  hintMessage,
}: BlrCheckboxType) => {
  return html`
    <blr-label-checkbox
      .label=${label}
      .checkInputId=${checkInputId}
      .onFocus=${onFocus}
      .onBlur=${onBlur}
      .onChange=${onChange}
      .disabled=${disabled}
      .checked=${checked}
      .indeterminate=${indeterminate}
      .readonly=${readonly}
      .size=${size}
      .hasError=${hasError}
      .errorMessage=${errorMessage}
      .errorIcon=${errorIcon}
      .showHint=${showHint}
      .hintIcon=${hintIcon}
      .hintMessage=${hintMessage}
    ></blr-label-checkbox>
  `;
};
