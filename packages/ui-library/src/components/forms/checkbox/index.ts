import { LitElement, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { BlrFormLabelInline } from '../../internal-components/form-label/form-label-inline';
import { FormSizesType } from '../../../globals/types';

import { styleCustomLight, styleCustomDark } from './index.css';
import { formDark, formLight } from '../../../foundation/semantic-tokens/form.css';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';
import { BlrIconRenderFunction } from '../../ui/icon';
import { calculateIconName } from '../../../utils/calculate-icon-name';
import { getComponentConfigToken } from '../../../utils/get-component-config-token';
import { BlrFormCaptionGroupRenderFunction } from '../../internal-components/form-caption-group';
import { BlrFormCaptionRenderFunction } from '../../internal-components/form-caption-group/form-caption';

const TAG_NAME = 'blr-checkbox';

@customElement(TAG_NAME)
export class BlrCheckbox extends LitElement {
  static styles = [];

  @query('input')
  protected _checkboxNode!: HTMLInputElement;

  @property() label!: string;
  @property() checkInputId?: string;

  @property() disabled?: boolean;
  @property() checked?: boolean;
  @property() indeterminate?: boolean;
  @property() readonly?: boolean;
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() errorIcon?: SizelessIconType;
  @property() hasHint?: boolean;
  @property() hintIcon?: SizelessIconType;
  @property() hintMessage?: string;
  @property() hasLabel!: boolean;

  @property() size?: FormSizesType = 'md';

  @property() onFocus?: HTMLButtonElement['onfocus'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() onChange?: HTMLButtonElement['onchange'];

  @property() theme: ThemeType = 'Light';

  @state() protected focused = false;

  protected handleFocus = (event: FocusEvent) => {
    this.focused = true;
    this.onFocus?.(event);
  };

  protected handleBlur = (event: FocusEvent) => {
    this.focused = false;
    this.onBlur?.(event);
  };

  protected handleChange(event: Event) {
    if (!this.disabled) {
      this.onChange?.(event);
    }
  }

  protected render() {
    if (this.size) {
      const dynamicStyles = this.theme === 'Light' ? [formLight, styleCustomLight] : [formDark, styleCustomDark];

      const classes = classMap({
        'blr-semantic-action': true,
        'blr-checkbox': true,
        'error': this.hasError || false,
        'disabled': this.disabled || false,
        'focus': this.focused || false,
        'checked': this.checked || false,
        'readonly': this.readonly || false,
        'indeterminate': this.indeterminate || false,
        [`${this.size}`]: this.size,
      });

      const labelWrapperClasses = classMap({
        'label-wrapper': true,
        'readonly': this.readonly || false,
      });

      const visualCheckboxClasses = classMap({
        'visual-checkbox': true,
        'input-control': true,
        'disabled': this.disabled || false,
        'focus': this.focused || false,
        'checked': this.checked || false,
        'readonly': this.readonly || false,
      });

      const checkerIconClasses = classMap({
        'checker-icon': true,
      });

      const checkerIconSizeVariant = getComponentConfigToken([
        'Checkbox',
        this.size.toUpperCase(),
        'Control',
        'Icon',
      ]).toLowerCase() as FormSizesType;

      const captionContent = html`
        ${this.hasHint
          ? BlrFormCaptionRenderFunction({
              variant: 'hint',
              theme: this.theme,
              size: this.size,
              message: this.hintMessage,
              icon: this.hintIcon,
            })
          : nothing}
        ${this.hasError
          ? BlrFormCaptionRenderFunction({
              variant: 'error',
              theme: this.theme,
              size: this.size,
              message: this.errorMessage,
              icon: this.errorIcon,
            })
          : nothing}
      `;

      return html`
        <style>
          ${dynamicStyles.map((style) => style)}
        </style>
        <div class="${classes}">
          <label class="${visualCheckboxClasses}" for="${this.checkInputId}">
            ${this.indeterminate
              ? BlrIconRenderFunction({
                  icon: calculateIconName('blrMinus', checkerIconSizeVariant),
                  size: 'lg',
                  hideAria: true,
                  classMap: checkerIconClasses,
                })
              : BlrIconRenderFunction({
                  icon: calculateIconName('blrCheckmark', checkerIconSizeVariant),
                  size: 'lg',
                  hideAria: true,
                  classMap: checkerIconClasses,
                })}
          </label>

          <input
            type="checkbox"
            class="${visualCheckboxClasses}"
            id=${this.checkInputId || nothing}
            name=${this.checkInputId || nothing}
            ?disabled=${this.disabled}
            ?checked=${this.checked}
            ?indeterminate=${this.indeterminate}
            ?readonly=${this.readonly}
            ?hasError=${this.hasError}
            @change=${this.handleChange}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          />
          <div class="${labelWrapperClasses}">
            ${this.hasLabel
              ? html`${BlrFormLabelInline({
                  labelText: this.label,
                  forValue: this.checkInputId,
                  labelSize: this.size,
                })}`
              : nothing}
            ${this.hasHint || this.hasError
              ? BlrFormCaptionGroupRenderFunction({ size: this.size }, captionContent)
              : nothing}
          </div>
        </div>
      `;
    }
  }
}

export type BlrCheckboxType = Omit<BlrCheckbox, keyof LitElement>;

export const BlrCheckboxRenderFunction = (params: BlrCheckboxType) =>
  genericBlrComponentRenderer<BlrCheckboxType>(TAG_NAME, { ...params });
