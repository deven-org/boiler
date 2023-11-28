/* eslint-disable no-console */
import { LitElement, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { BlrFormLabelInline } from '../../internal-components/form-label/form-label-inline';
import { FormSizesType } from '../../../globals/types';

import { styleCustomLight, styleCustomDark } from './index.css';
import { formDark, formLight } from '../../../foundation/semantic-tokens/form.css';

import { BlrFormHintRenderFunction } from '../../internal-components/form-hint';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';
import { BlrIconRenderFunction } from '../../ui/icon';
import { calculateIconName } from '../../../utils/calculate-icon-name';
import { getComponentConfigToken } from '../../../utils/get-component-config-token';

const TAG_NAME = 'blr-checkbox';

@customElement(TAG_NAME)
export class BlrCheckbox extends LitElement {
  static styles = [];

  @query('input')
  protected _checkboxNode!: HTMLInputElement;

  @property() label!: string;
  @property() checkInputId?: string = '';

  @property() disabled?: boolean;
  @property() checked?: boolean;
  @property() indeterminate?: boolean;
  @property() readonly?: boolean;
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() errorIcon?: SizelessIconType;
  @property() showHint?: boolean;
  @property() hintIcon?: SizelessIconType;
  @property() hintMessage?: string;
  @property() hasLabel!: boolean;

  @property() checkedIcon?: SizelessIconType = 'blrCheckmark';
  @property() indeterminatedIcon?: SizelessIconType = 'blrMinus';

  @property() size?: FormSizesType = 'md';

  @property() onFocus?: HTMLButtonElement['onfocus'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() onChange?: HTMLButtonElement['onchange'];

  @property() theme: ThemeType = 'Light';

  @state() protected currentCheckedState: boolean | undefined = this.checked;

  protected updated(changedProperties: Map<string, boolean>) {
    if (changedProperties.has('checked')) {
      this.currentCheckedState = this.checked || false;
    }
  }

  protected handleChange(event: Event) {
    if (!this.disabled) {
      this.onChange?.(event);
      console.log('change', this.currentCheckedState);
    }
  }

  @state() protected focused = false;

  protected handleFocus = (event: FocusEvent) => {
    this.focused = true;
    this.onFocus?.(event);
  };

  protected handleBlur = (event: FocusEvent) => {
    this.focused = false;
    this.onBlur?.(event);
  };

  @state() protected hovered = false;

  protected handleEnter = () => {
    this.hovered = true;
    console.log('hovered', this.hovered);
  };

  protected handleLeave = () => {
    this.hovered = false;
    console.log('hovered', this.hovered);
  };

  @state() protected active = false;

  protected handlePress = () => {
    this.active = true;
    this.currentCheckedState = !this.currentCheckedState;
    console.log('active', this.active);
  };

  protected handleRelease = () => {
    this.active = false;
    console.log('active', this.active);
  };

  protected render() {
    if (this.size && this.checkInputId) {
      const dynamicStyles = this.theme === 'Light' ? [formLight, styleCustomLight] : [formDark, styleCustomDark];

      const classes = classMap({
        'blr-semantic-action': true,
        'blr-checkbox': true,
        'error': this.hasError || false,
        [`${this.size}`]: this.size,
      });

      const labelWrapperClasses = classMap({
        'label-wrapper': true,
        'error': this.hasError || false,
        'disabled': this.disabled || false,
        'focus': this.focused || false,
        'hover': this.hovered || false,
        'active': this.active || false,
        'checked': this.currentCheckedState || false,
        'readonly': this.readonly || false,
        'indeterminate': this.indeterminate || false,
      });

      const visualCheckboxClasses = classMap({
        'visual-checkbox': true,
        'error': this.hasError || false,
        'disabled': this.disabled || false,
        'hover': this.hovered || false,
        'active': this.active || false,
        'checked': this.currentCheckedState || false,
        'readonly': this.readonly || false,
        'indeterminate': this.indeterminate || false,
        'focus': this.focused || false,
      });

      const checkerIconClasses = classMap({
        'checker-icon': true,
      });

      const focusRingClasses = classMap({
        'focus-ring': true,
        'focus': this.focused || false,
      });

      const checkerIconSizeVariant = getComponentConfigToken([
        'Forms',
        'Checkbox',
        'Control',
        'Icon',
        'SizeVariant',
        this.size.toUpperCase(),
      ]).toLowerCase() as FormSizesType;

      return html`
        <style>
          ${dynamicStyles.map((style) => style)}
        </style>
        <div
          class="${classes}"
          @mouseenter=${this.handleEnter}
          @mouseleave=${this.handleLeave}
          @mousedown=${(event: MouseEvent) => {
            if (event.which === 1) {
              this.handlePress();
            }
          }}
          @mouseup=${this.handleRelease}
          @touchstart=${this.handlePress}
          @touchend=${this.handleRelease}
          @focusin=${this.handleFocus}
          @focusout=${this.handleBlur}
          @keydown=${(event: KeyboardEvent) => {
            if (event.code === 'Space') {
              this.handlePress();
            }
          }}
          @keyup=${(event: KeyboardEvent) => {
            if (event.code === 'Space') {
              this.handleRelease();
            }
          }}
          tabindex="0"
        >
          <input
            type="checkbox"
            class="input-control"
            tabindex="-1"
            id=${this.checkInputId || nothing}
            name=${this.checkInputId || nothing}
            ?disabled=${this.disabled}
            ?checked=${this.currentCheckedState}
            ?indeterminate=${this.indeterminate}
            ?readonly=${this.readonly}
            ?hasError=${this.hasError}
            @change=${this.handleChange}
          />

          <label class="${visualCheckboxClasses}" for="${this.checkInputId}" aria-hidden="true">
            ${this.indeterminate
              ? BlrIconRenderFunction({
                  icon: calculateIconName(this.indeterminatedIcon, checkerIconSizeVariant),
                  hideAria: true,
                  classMap: checkerIconClasses,
                  ignoreSize: true,
                })
              : BlrIconRenderFunction({
                  icon: calculateIconName(this.checkedIcon, checkerIconSizeVariant),
                  hideAria: true,
                  classMap: checkerIconClasses,
                  ignoreSize: true,
                })}

            <div class="${focusRingClasses}"></div>
          </label>

          <div class="${labelWrapperClasses}">
            ${this.hasLabel
              ? BlrFormLabelInline({ labelText: this.label, forValue: this.checkInputId, labelSize: this.size })
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
            ${this.hasError && this.hasLabel
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
}

export type BlrCheckboxType = Omit<BlrCheckbox, keyof LitElement>;

export const BlrCheckboxRenderFunction = (params: BlrCheckboxType) =>
  genericBlrComponentRenderer<BlrCheckboxType>(TAG_NAME, { ...params });
