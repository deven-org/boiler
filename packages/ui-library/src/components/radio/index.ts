import { html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { query } from 'lit/decorators.js';
import { property } from '../../utils/lit/decorators.js';
import { InputSizesType } from '../../globals/types.js';
import { staticStyles as staticFormStyles } from '../../foundation/semantic-tokens/form.css.js';
import { staticStyles as staticRadioStyles } from './index.css.js';
import { TAG_NAME } from './renderFunction.js';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType, Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction.js';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction.js';
import { BlrFormLabelInlineRenderFunction } from '../form-label/form-label-inline/renderFunction.js';
import {
  createBlrBlurEvent,
  createBlrFocusEvent,
  createBlrChangeEvent,
  BlrBlurEvent,
  BlrFocusEvent,
  BlrChangeEvent,
} from '../../globals/events.js';
import { LitElementCustom } from '../../utils/lit/element.js';
import { SignalHub } from '../../utils/lit/signals.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { makeSanitizer } from '../../utils/lit/sanitize.js';
import { SanitizationController } from '../../utils/lit/sanitization-controller.js';

/**
 * @fires blrFocus Radio received focus
 * @fires blrBlur Radio lost focus
 * @fires blrChange Radio selected value changed
 */

const propertySanitizer = makeSanitizer((unsanitized: BlrRadioType) => ({
  label: unsanitized.label ?? 'Default Label',
  sizeVariant: unsanitized.sizeVariant ?? 'md',
  theme: unsanitized.theme ?? Themes[0],
}));

export class BlrRadio extends LitElementCustom implements PublicReactiveProperties {
  public declare signals: SignalHub<PublicReactiveProperties>;

  private sanitizedController: SanitizationController<
    BlrRadioType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >;

  constructor() {
    super();
    this.sanitizedController = new SanitizationController<
      BlrRadioType,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
    >({
      host: this,
      sanitize: propertySanitizer,
    });
  }

  static styles = [staticFormStyles, staticRadioStyles];

  @query('input')
  protected accessor _radioNode!: HTMLInputElement;

  @property() accessor optionId!: string;
  @property() accessor radioId!: string;
  @property() accessor label!: string;
  @property({ type: Boolean }) accessor disabled: boolean | undefined;
  @property({ type: Boolean }) accessor checked: boolean | undefined;
  @property() accessor name: string | undefined;
  @property() accessor sizeVariant: InputSizesType | undefined;
  @property({ type: Boolean }) accessor required: boolean | undefined;
  @property({ type: Boolean }) accessor hasError: boolean | undefined;
  @property({ type: Boolean }) accessor hasHint: boolean | undefined;
  @property() accessor hintMessage: string | undefined;
  @property() accessor hintMessageIcon: SizelessIconType | undefined;
  @property() accessor value: string | undefined;
  @property() accessor theme: ThemeType | undefined;

  protected handleFocus = (event: FocusEvent) => {
    if (!this.disabled) {
      this.dispatchEvent(createBlrFocusEvent({ originalEvent: event }));
    }
  };

  protected handleBlur = (event: FocusEvent) => {
    if (!this.disabled) {
      this.dispatchEvent(createBlrBlurEvent({ originalEvent: event }));
    }
  };

  protected handleChange = (event: Event) => {
    if (!this.disabled) {
      const changeEvent = createBlrChangeEvent({ originalEvent: event, changedValue: this._radioNode.value });
      this.dispatchEvent(changeEvent);
    }
  };

  protected render() {
    const sanitized = this.sanitizedController.values;
    if (sanitized.sizeVariant) {
      const classes = classMap({
        [sanitized.sizeVariant]: sanitized.sizeVariant,
        [sanitized.theme]: sanitized.theme,
        disabled: this.disabled || false,
        checked: this.checked || false,
        error: this.hasError || false,
      });

      const calculateOptionId = (label: string) => {
        return label.replace(/ /g, '_').toLowerCase();
      };

      const captionContent = html`
        ${this.hasHint && (this.hintMessage || this.hintMessageIcon)
          ? html`
              <div class="hint-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'hint',
                  theme: sanitized.theme,
                  sizeVariant: sanitized.sizeVariant,
                  message: this.hintMessage,
                  icon: this.hintMessageIcon,
                })}
              </div>
            `
          : nothing}
      `;
      const id = calculateOptionId(sanitized.label);
      return html`
        <div class="blr-radio ${classes}">
          <input
            id=${id ? id : ''}
            class="${classes} input-control"
            type="radio"
            value="${ifDefined(this.value)}"
            name="${ifDefined(this.name)}"
            ?disabled=${this.disabled}
            ?data-has-error=${this.hasError || false}
            ?checked=${this.checked}
            .checked=${this.checked === true}
            ?required=${this.required}
            @change=${this.handleChange}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          />
          <div class="label-wrapper">
            ${BlrFormLabelInlineRenderFunction({
              labelText: this.label,
              forValue: id,
              labelSize: sanitized.sizeVariant,
              theme: sanitized.theme,
            })}
            ${(this.hasHint && (this.hintMessageIcon || this.hintMessage)) || this.hasError
              ? BlrFormCaptionGroupRenderFunction(
                  { sizeVariant: sanitized.sizeVariant, theme: sanitized.theme },
                  captionContent,
                )
              : nothing}
          </div>
        </div>
      `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrRadio);
}

export type BlrRadioType = PublicReactiveProperties & PublicMethods & BlrRadioEventHandlers;

export type PublicReactiveProperties = {
  optionId: string | undefined;
  label: string | undefined;
  disabled: boolean | undefined;
  name: string | undefined;
  sizeVariant: InputSizesType | undefined;
  required: boolean | undefined;
  hasError: boolean | undefined;
  hasHint: boolean | undefined;
  radioId: string | undefined;
  hintMessage: string | undefined;
  hintMessageIcon: SizelessIconType | undefined;
  value: string | undefined;
  theme: ThemeType | undefined;
  checked: boolean | undefined;
};

export type PublicMethods = unknown;

export type BlrRadioEventHandlers = {
  blrFocus?: (event: BlrFocusEvent) => void;
  blrBlur?: (event: BlrBlurEvent) => void;
  blrChange?: (event: BlrChangeEvent) => void;
};
