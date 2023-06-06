import { LitElement, html, nothing } from 'lit';
import { ClassMapDirective, classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { FormSizesType } from '../../globals/types';
import { BlrFormLabel } from '../internal-components/form-label';
import { BlrFormHint } from '../internal-components/form-hint';

import { BlrIconRenderFunction } from '../icon';

import { IconType } from '@boiler/icons';
import { form } from '../../foundation/semantic-tokens/form.css';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { DirectiveResult } from 'lit-html/directive';

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

  renderTrailingIcon(classes: DirectiveResult<typeof ClassMapDirective>) {
    if (this.showTrailingIcon) {
      if (this.hasError) {
        return html`${BlrIconRenderFunction({ icon: 'blrErrorFilledSm', size: this.size, classMap: classes })}`;
      } else {
        return html`${BlrIconRenderFunction({
          icon: calculateIconName(this.trailingIcon, this.size),
          size: this.size,
          classMap: classes,
        })}`;
      }
    }

    return nothing;
  }

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

          ${this.renderTrailingIcon(inputClasses)}
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
