import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { FormSizesType } from '../../globals/types';
import { BlrFormLabel } from '../internal-components/form-label';
import { BlrFormHint } from '../internal-components/form-hint';

import { BlrIconRenderFunction } from '../icon';

import { IconType } from '@boiler/icons';
import { form } from '../../foundation/semantic-tokens/form.css';
import { calculateIconName } from '../../utils/calculate-icon-name';

type Option = {
  value: string;
  label: string;
  selected?: boolean;
  disabled?: boolean;
};
@customElement('blr-select')
export class BlrSelect extends LitElement {
  static styles = [styleCustom, form];

  @property() selectId!: string;
  @property() labelAppendix?: string;
  @property() name!: string;
  @property() hasLabel?: boolean;
  @property() label!: string;
  @property() disabled?: boolean;
  @property() size: FormSizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property({ type: Array }) options: Option[] = [];
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() hint?: string;
  @property() hintIcon: IconType = 'blrInfoSm';
  @property() showTrailingIcon?: boolean;
  @property() trailingIcon: IconType = 'blr360Sm';

  render() {
    const classes = classMap({
      [`${this.size}`]: this.size || 'md',
      disabled: this.disabled || false,
    });

    const inputClasses = classMap({
      'error': this.hasError || false,
      'error-input': this.hasError || false,
      [`${this.size}`]: this.size || 'md',
    });

    let icon = html``;

    if (this.showTrailingIcon) {
      if (this.hasError) {
        icon = html`${BlrIconRenderFunction({ icon: 'blrErrorFilledSm', size: this.size, classMap: inputClasses })}`;
      } else {
        const trailingIcon = calculateIconName(this.trailingIcon, this.size);

        if (trailingIcon !== undefined) {
          icon = html`${BlrIconRenderFunction({
            icon: trailingIcon as IconType,
            size: this.size,
            classMap: inputClasses,
          })}`;
        }
      }
    }

    return html`
      <div class="blr-select ${classes}">
        ${this.hasLabel
          ? BlrFormLabel({
              labelText: this.label,
              labelAppendix: this.labelAppendix,
              labelSize: 'md',
              forValue: this.selectId,
            })
          : nothing}
        <div class="blr-input-inner-container">
          <select
            class="blr-form-element ${inputClasses}"
            id=${this.selectId || nothing}
            name=${this.name || nothing}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @change=${this.onChange}
          >
            ${this.options?.map((opt: Option) => {
              return html`<option
                class="blr-select-option"
                id=${opt.value}
                value=${opt.value}
                ?selected=${opt.selected}
                ?disabled=${opt.disabled}
              >
                ${opt.label}
              </option>`;
            })}
          </select>

          ${icon}
        </div>
        ${BlrFormHint({
          message: (this.hasError ? this.errorMessage : this.hint) || 'This is dummy message',
          variant: this.hasError ? 'error' : 'hint',
          size: 'sm',
          iconName: calculateIconName(this.hintIcon, this.size),
        })}
      </div>
    `;
  }
}
