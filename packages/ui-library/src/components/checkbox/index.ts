import { html, nothing } from 'lit';
import { query, state } from 'lit/decorators.js';
import { property } from '../../utils/lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { TAG_NAME } from './renderFunction.js';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes.js';
import { FormSizesType } from '../../globals/types.js';
import { calculateIconName } from '../../utils/calculate-icon-name.js';
import { getComponentConfigToken } from '../../utils/get-component-config-token.js';
import { BlrIconRenderFunction } from '../icon/renderFunction.js';
import { staticStyles } from './index.css.js';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction.js';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction.js';
import { BlrFormLabelInlineRenderFunction } from '../form-label/form-label-inline/renderFunction.js';
import {
  BlrBlurEvent,
  BlrFocusEvent,
  BlrCheckedChangeEvent,
  createBlrCheckedChangeEvent,
  createBlrBlurEvent,
  createBlrFocusEvent,
} from '../../globals/events.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';

export type BlrCheckboxEventHandlers = {
  blrFocus?: (event: BlrFocusEvent) => void;
  blrBlur?: (event: BlrBlurEvent) => void;
  blrCheckedChange?: (event: BlrCheckedChangeEvent) => void;
};

/**
 * @fires blrFocus Checkbox received focus
 * @fires blrBlur Checkbox lost focus
 * @fires blrCheckedChange Checkbox state changed (currentCheckedState)
 */
export class BlrCheckbox extends LitElementCustom {
  static styles = [staticStyles];

  @query('input')
  protected accessor _checkboxNode!: HTMLInputElement;

  @property() accessor label!: string;
  @property() accessor checkboxId: string | undefined = '';
  @property() accessor arialabel: string | undefined;

  @property() accessor disabled: boolean | undefined;
  @property() accessor checked: boolean | undefined = false;
  @property() accessor indeterminate: boolean | undefined = false;
  @property() accessor readonly: boolean | undefined;
  @property() accessor hasError: boolean | undefined;
  @property() accessor errorMessage: string | undefined;
  @property() accessor errorMessageIcon: SizelessIconType | undefined;
  @property() accessor hasHint: boolean | undefined;
  @property() accessor hintMessageIcon: SizelessIconType | undefined;
  @property() accessor hintMessage: string | undefined;
  @property() accessor hasLabel!: boolean;
  @property() accessor name: string | undefined;
  @property() accessor checkedIcon: SizelessIconType | undefined = 'blrCheckmark';
  @property() accessor indeterminateIcon: SizelessIconType | undefined = 'blrMinus';

  @property() accessor sizeVariant: FormSizesType | undefined = 'md';

  @property() accessor theme: ThemeType = 'Light_value';
  @property({ type: Boolean }) accessor required: boolean | undefined;

  @state() protected accessor currentCheckedState: boolean | undefined = this.checked;
  @state() protected accessor currentIndeterminateState: boolean | undefined = this.indeterminate;

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
        createBlrCheckedChangeEvent({
          originalEvent: event,
          checkedState: this.currentCheckedState,
        }),
      );
    }
  }

  @state() protected accessor focused = false;

  protected handleFocus = (event: FocusEvent) => {
    if (!this.disabled) {
      this.focused = true;

      this.dispatchEvent(createBlrFocusEvent({ originalEvent: event }));
    }
  };

  protected handleBlur = (event: FocusEvent) => {
    if (!this.disabled) {
      this.focused = false;

      this.dispatchEvent(createBlrBlurEvent({ originalEvent: event }));
    }
  };

  @state() protected accessor hovered = false;

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

  @state() protected accessor active = false;

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
    if (this.sizeVariant && this.checkboxId) {
      const classes = classMap({
        'blr-semantic-action': true,
        'blr-checkbox': true,
        'error': this.hasError || false,
        [this.sizeVariant]: this.sizeVariant,
        [this.theme]: this.theme,
      });

      const labelWrapperClasses = classMap({
        'label-wrapper': true,
        'error': this.hasError || false,
        'disabled': this.disabled || false,
        'focus': this.focused || false,
        'hover': this.hovered || false,
        'active': this.active || false,
        'checked': this.currentCheckedState || false,
        'required': this.required || false,
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
        'required': this.required || false,
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
        [this.theme]: this.theme,
      });

      const checkerIconSizeVariant = getComponentConfigToken([
        'cmp',
        'checkbox',
        'control',
        'icon',
        'sizevariant',
        this.sizeVariant,
      ]) as FormSizesType;

      const captionContent = html`
        ${this.hasHint && (this.hintMessage || this.hintMessageIcon)
          ? html`
              <div class="hint-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'hint',
                  theme: this.theme,
                  sizeVariant: this.sizeVariant,
                  message: this.hintMessage,
                  icon: this.hintMessageIcon,
                })}
              </div>
            `
          : nothing}
        ${this.hasError && (this.errorMessage || this.errorMessageIcon)
          ? html`
              <div class="error-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'error',
                  theme: this.theme,
                  sizeVariant: this.sizeVariant,
                  message: this.errorMessage,
                  icon: this.errorMessageIcon,
                })}
              </div>
            `
          : nothing}
      `;

      return html`
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
            aria-label="${this.ariaLabel}"
            id=${this.checkboxId || nothing}
            name=${this.name || nothing}
            ?disabled=${this.disabled}
            ?checked=${this.currentCheckedState}
            ?indeterminate=${this.currentIndeterminateState}
            ?readonly=${this.readonly}
            ?required="${this.required}"
            ?hasError=${this.hasError}
            @change=${this.handleChange}
            aria-hidden="true"
          />

          <label class="${visualCheckboxClasses}" for="${this.checkboxId}" aria-hidden="true" tabindex="-1">
            ${this.currentIndeterminateState
              ? BlrIconRenderFunction(
                  {
                    icon: calculateIconName(this.indeterminateIcon, checkerIconSizeVariant),
                    classMap: checkerIconClasses,
                  },
                  {
                    'aria-hidden': true,
                  },
                )
              : BlrIconRenderFunction(
                  {
                    icon: calculateIconName(this.checkedIcon, checkerIconSizeVariant),
                    classMap: checkerIconClasses,
                  },
                  {
                    'aria-hidden': true,
                  },
                )}

            <div class="${focusRingClasses}"></div>
          </label>

          <div class="${labelWrapperClasses}" aria-hidden="true" tabindex="-1">
            ${this.hasLabel
              ? html`${BlrFormLabelInlineRenderFunction({
                  labelText: this.label,
                  forValue: this.checkboxId,
                  labelSize: this.sizeVariant,
                  theme: this.theme,
                })}`
              : nothing}
            ${this.hasHint || this.hasError
              ? BlrFormCaptionGroupRenderFunction({ sizeVariant: this.sizeVariant, theme: this.theme }, captionContent)
              : nothing}
          </div>
        </div>
      `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrCheckbox);
}

export type BlrCheckboxType = ElementInterface<BlrCheckbox>;
