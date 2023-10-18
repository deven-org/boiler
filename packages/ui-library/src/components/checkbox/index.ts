import { LitElement, html, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { BlrFormLabelInline } from '../form-label-inline';
import { FormSizesType } from '../../globals/types';

import { styleCustom } from './index.css';
import { formDark, formLight } from '../../foundation/semantic-tokens/form.css';
import { checkboxDark, checkboxLight } from '../../foundation/component-tokens/checkbox.css';
import { BlrFormHintRenderFunction } from '../internal-components/form-hint';
import { IconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

@customElement('blr-checkbox')
export class BlrCheckbox extends LitElement {
  static styles = [styleCustom];

  @query('input')
  protected _checkboxNode!: HTMLInputElement;

  @property() label!: string;
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
  @property() hasLabel!: boolean;

  @property() size: FormSizesType = 'md';

  @property() onFocus?: HTMLButtonElement['onfocus'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() onChange?: HTMLButtonElement['onchange'];

  @property() theme: ThemeType = 'Light';

  connectedCallback() {
    super.connectedCallback();
  }

  handleChange(event: Event) {
    if (!this.disabled) {
      this.onChange?.(event);
    }
  }

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [formLight, checkboxLight] : [formDark, checkboxDark];

    const classes = classMap({
      'blr-semantic-action': true,
      'blr-checkbox': true,
      [`error`]: this.hasError || false,
      [`disabled`]: this.disabled || false,
      [`checked`]: this.checked || false,
      [`readonly`]: this.readonly || false,
      [`indeterminate`]: this.indeterminate || false,
      [`${this.size}`]: this.size || 'md',
    });

    return html`
      <style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class="${classes}">
        <input
          type="checkbox"
          class="input-control"
          id=${this.checkInputId || nothing}
          name=${this.checkInputId || nothing}
          ?disabled=${this.disabled}
          ?checked=${this.checked}
          ?indeterminate=${this.indeterminate}
          ?readonly=${this.readonly}
          ?hasError=${this.hasError}
          @change=${this.handleChange}
          @focus=${this.onFocus}
          @blur=${this.onBlur}
        />
        <div class="label-wrapper">
          ${this.hasLabel
            ? html`${BlrFormLabelInline({ labelText: this.label, forValue: this.checkInputId, labelSize: this.size })}`
            : nothing}
          ${this.showHint
            ? html`
                <div class="hint-wrapper">
                  ${BlrFormHintRenderFunction({
                    message: this.hintMessage,
                    variant: 'hint',
                    size: this.size,
                    icon: this.hintIcon ? this.hintIcon : undefined,
                    theme: this.theme,
                  })}
                </div>
              `
            : nothing}
          ${this.hasError
            ? html`
                <div class="error-wrapper">
                  ${BlrFormHintRenderFunction({
                    message: this.errorMessage,
                    variant: 'error',
                    size: this.size,
                    icon: this.errorIcon ? this.errorIcon : undefined,
                    theme: this.theme,
                  })}
                </div>
              `
            : nothing}
        </div>
      </div>
    `;
  }
}

export type BlrCheckboxType = Omit<BlrCheckbox, keyof LitElement>;

export const BlrCheckboxRenderFunction = (params: BlrCheckboxType) =>
  genericBlrComponentRenderer<BlrCheckboxType>({ ...params });
