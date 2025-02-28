import { html, nothing } from 'lit';
import { query, state } from 'lit/decorators.js';
import { property } from '../../utils/lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { TAG_NAME } from './renderFunction.js';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType, Themes } from '../../foundation/_tokens-generated/index.themes.js';
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
import { ifDefined } from 'lit/directives/if-defined.js';
import { makeSanitizer } from '../../utils/lit/sanitize.js';
import { SanitizationController } from '../../utils/lit/sanitization-controller.js';

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

const propertySanitizer = makeSanitizer((unsanitized: BlrCheckboxType) => ({
  checkedIcon: unsanitized.checkedIcon ?? 'blrCheckmark',
  indeterminateIcon: unsanitized.indeterminateIcon ?? 'blrMinus',
  checkboxId: unsanitized.checkboxId ?? '',
  sizeVariant: unsanitized.sizeVariant ?? 'md',
  theme: unsanitized.theme ?? Themes[0],
}));
export class BlrCheckbox extends LitElementCustom {
  private sanitizedController: SanitizationController<
    BlrCheckboxType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >;

  constructor() {
    super();

    this.sanitizedController = new SanitizationController<
      BlrCheckboxType,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
    >({
      host: this,
      sanitize: propertySanitizer,
    });
  }
  static styles = [staticStyles];

  @query('input')
  protected accessor _checkboxNode!: HTMLInputElement;

  @property() accessor label!: string;
  @property() accessor checkboxId: string | undefined;
  @property() accessor arialabel: string | undefined;

  @property({ type: Boolean }) accessor disabled: boolean | undefined;
  @property({ type: Boolean }) accessor checked: boolean | undefined = false;
  @property({ type: Boolean }) accessor indeterminate: boolean | undefined = false;
  @property({ type: Boolean }) accessor hasError: boolean | undefined;
  @property() accessor errorMessage: string | undefined;
  @property() accessor errorMessageIcon: SizelessIconType | undefined;
  @property({ type: Boolean }) accessor hasHint: boolean | undefined;
  @property() accessor hintMessageIcon: SizelessIconType | undefined;
  @property() accessor hintMessage: string | undefined;
  @property({ type: Boolean }) accessor hasLabel!: boolean;
  @property() accessor name: string | undefined;
  @property() accessor checkedIcon: SizelessIconType | undefined;
  @property() accessor indeterminateIcon: SizelessIconType | undefined;

  @property() accessor sizeVariant: FormSizesType | undefined;

  @property() accessor theme: ThemeType | undefined;
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
    if (!this.disabled && !this.currentIndeterminateState) {
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
    if (!this.disabled) {
      this.hovered = true;
    }
  };

  protected handleLeave = () => {
    if (!this.disabled) {
      this.hovered = false;
    }
  };

  @state() protected accessor active = false;

  protected handlePress = () => {
    if (!this.disabled) {
      this.active = true;
    }
  };

  protected handleRelease = () => {
    if (!this.disabled) {
      this.active = false;
    }

    if (this.hovered && !this.currentIndeterminateState) {
      this.currentCheckedState = !this.currentCheckedState;
    }
  };

  protected render() {
    const sanitize = this.sanitizedController.values;
    if (sanitize.sizeVariant && sanitize.checkboxId) {
      const classes = classMap({
        'blr-semantic-action': true,
        'blr-checkbox': true,
        'error': this.hasError || false,
        [sanitize.sizeVariant]: sanitize.sizeVariant,
        [sanitize.theme]: sanitize.theme,
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
        'indeterminate': this.currentIndeterminateState || false,
        'focus': this.focused || false,
      });

      const checkerIconClasses = classMap({
        'checker-icon': true,
      });

      const focusRingClasses = classMap({
        'focus-ring': true,
        'focus': this.focused || false,
        [sanitize.theme]: sanitize.theme,
      });

      const checkerIconSizeVariant = getComponentConfigToken([
        'cmp',
        'checkbox',
        'control',
        'icon',
        'sizevariant',
        sanitize.sizeVariant,
      ]) as FormSizesType;

      const captionContent = html`
        ${this.hintMessage || this.hintMessageIcon
          ? html`
              <div class="hint-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'hint',
                  theme: sanitize.theme,
                  sizeVariant: sanitize.sizeVariant,
                  message: this.hintMessage,
                  icon: this.hintMessageIcon,
                })}
              </div>
            `
          : nothing}
        ${this.errorMessage || this.errorMessageIcon
          ? html`
              <div class="error-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'error',
                  theme: sanitize.theme,
                  sizeVariant: sanitize.sizeVariant,
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
          tabindex=${ifDefined(this.disabled ? undefined : 0)}
          aria-checked=${ifDefined(this.currentIndeterminateState ? 'mixed' : this.currentCheckedState)}
          role="checkbox"
          aria-label=${this.label}
        >
          <input
            type="checkbox"
            class="input-control"
            tabindex="-1"
            aria-label=${ifDefined(this.ariaLabel ?? undefined)}
            id=${ifDefined(sanitize.checkboxId)}
            name=${ifDefined(this.name)}
            ?disabled=${this.disabled}
            ?checked=${this.currentCheckedState}
            .indeterminate=${this.currentIndeterminateState ?? false}
            ?required="${this.required}"
            ?data-has-error=${this.hasError}
            @change=${this.handleChange}
            aria-hidden="true"
          />
          <div class="control-wrapper">
            <label class="${visualCheckboxClasses}" for="${sanitize.checkboxId}" aria-hidden="true" tabindex="-1">
              ${
                this.currentIndeterminateState
                  ? BlrIconRenderFunction(
                      {
                        icon: calculateIconName(sanitize.indeterminateIcon, checkerIconSizeVariant),
                        classMap: checkerIconClasses,
                      },
                      {
                        'aria-hidden': true,
                      },
                    )
                  : BlrIconRenderFunction(
                      {
                        icon: calculateIconName(sanitize.checkedIcon, checkerIconSizeVariant),
                        classMap: checkerIconClasses,
                      },
                      {
                        'aria-hidden': true,
                      },
                    )
              }

              <div class="${focusRingClasses}"></div>
            </label>

            <div class="${labelWrapperClasses}" aria-hidden="true" tabindex="-1">
              ${
                this.hasLabel
                  ? html`${BlrFormLabelInlineRenderFunction({
                      labelText: this.label,
                      forValue: sanitize.checkboxId,
                      labelSize: sanitize.sizeVariant,
                      theme: sanitize.theme,
                      asSpan: false,
                    })}`
                  : nothing
              }
              ${
                ((this.hintMessage || this.hintMessageIcon) && this.hasHint) ||
                ((this.errorMessage || this.errorMessageIcon) && this.hasError)
                  ? BlrFormCaptionGroupRenderFunction(
                      { sizeVariant: sanitize.sizeVariant, theme: sanitize.theme },
                      captionContent,
                    )
                  : nothing
              }
            </div>
            </div>
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
