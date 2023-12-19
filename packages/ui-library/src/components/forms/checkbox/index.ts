import { LitElement, html, nothing } from 'lit-element';
import { customElement, property, query, state } from 'lit-element/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';

import { BlrFormLabelInline } from '../../internal-components/form-label/form-label-inline';
import { FormSizesType } from '../../../globals/types';

import { checkboxDark, checkboxLight } from './index.css';
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
  @property() checkInputId?: string = '';
  @property() arialabel?: string;

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
  @property() name?: string;
  @property() checkedIcon?: SizelessIconType = 'blrCheckmark';
  @property() indeterminatedIcon?: SizelessIconType = 'blrMinus';

  @property() size?: FormSizesType = 'md';

  // these are not triggered directly but allows us to map it internally and bve typesafe
  @property() blrFocus?: () => void;
  @property() blrBlur?: () => void;
  @property() blrChange?: () => void;

  @property() theme: ThemeType = 'Light';

  @state() protected currentCheckedState: boolean | undefined = this.checked;
  @state() protected currentIndeterminateState: boolean | undefined = this.indeterminate;

  protected updated(changedProperties: Map<string, boolean>) {
    if (changedProperties.has('checked')) {
      this.currentCheckedState = this.checked || false;
    }

    if (changedProperties.has('indeterminate')) {
      this.currentIndeterminateState = this.indeterminate || false;
      if (this.indeterminate) {
        this.currentCheckedState = false;
      }
    }
  }

  protected handleChange(event: Event) {
    if (!this.disabled && !this.readonly) {
      this.currentIndeterminateState = false;

      this.dispatchEvent(
        new CustomEvent('blrChange', {
          bubbles: true,
          composed: true,
          detail: { originalEvent: event, checkedState: this.currentCheckedState },
        })
      );
    }
  }

  @state() protected focused = false;

  protected handleFocus = (event: FocusEvent) => {
    if (!this.disabled && !this.readonly) {
      this.focused = true;

      this.dispatchEvent(
        new CustomEvent('blrFocus', { bubbles: true, composed: true, detail: { originalEvent: event } })
      );
    }
  };

  protected handleBlur = (event: FocusEvent) => {
    if (!this.disabled && !this.readonly) {
      this.focused = false;

      this.dispatchEvent(
        new CustomEvent('blrBlur', {
          bubbles: true,
          composed: true,
          detail: { originalEvent: event },
        })
      );
    }
  };

  @state() protected hovered = false;

  protected handleEnter = () => {
    if (!this.disabled && !this.readonly) {
      this.hovered = true;
    }
  };

  protected handleLeave = () => {
    if (!this.disabled && !this.readonly) {
      this.hovered = false;
    }
  };

  @state() protected active = false;

  protected handlePress = () => {
    if (!this.disabled && !this.readonly) {
      this.active = true;
      this.currentCheckedState = !this.currentCheckedState;
    }
  };

  protected handleRelease = () => {
    if (!this.disabled && !this.readonly) {
      this.active = false;
    }
  };

  protected render() {
    if (this.size && this.checkInputId) {
      const dynamicStyles = this.theme === 'Light' ? [formLight, checkboxLight] : [formDark, checkboxDark];

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
        'indeterminate': this.currentIndeterminateState || false,
      });

      const visualCheckboxClasses = classMap({
        'visual-checkbox': true,
        'error': this.hasError || false,
        'disabled': this.disabled || false,
        'hover': this.hovered || false,
        'active': this.active || false,
        'checked': this.currentCheckedState || false,
        'readonly': this.readonly || false,
        'indeterminate': this.currentIndeterminateState || false,
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

      const captionContent = html`
        ${this.hasHint && (this.hintMessage || this.hintIcon)
          ? html`
              <div class="hint-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'hint',
                  theme: this.theme,
                  size: this.size,
                  message: this.hintMessage,
                  icon: this.hintIcon,
                })}
              </div>
            `
          : nothing}
        ${this.hasError && (this.errorMessage || this.errorIcon)
          ? html`
              <div class="error-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'error',
                  theme: this.theme,
                  size: this.size,
                  message: this.errorMessage,
                  icon: this.errorIcon,
                })}
              </div>
            `
          : nothing}
      `;

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
          tabindex=${this.disabled ? nothing : '0'}
          aria-checked=${this.currentIndeterminateState ? 'mixed' : this.currentCheckedState}
          role="checkbox"
          aria-label=${this.label}
        >
          <input
            type="checkbox"
            class="input-control"
            tabindex="-1"
            aria-label="${this.arialabel}"
            id=${this.checkInputId || nothing}
            name=${this.name || nothing}
            ?disabled=${this.disabled}
            ?checked=${this.currentCheckedState}
            ?indeterminate=${this.currentIndeterminateState}
            ?readonly=${this.readonly}
            ?hasError=${this.hasError}
            @change=${this.handleChange}
            aria-hidden="true"
          />

          <label class="${visualCheckboxClasses}" for="${this.checkInputId}" aria-hidden="true" tabindex="-1">
            ${this.currentIndeterminateState
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

          <div class="${labelWrapperClasses}" aria-hidden="true" tabindex="-1">
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
