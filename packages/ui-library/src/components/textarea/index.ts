import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { query, state } from 'lit/decorators.js';
import { property } from '../../utils/lit/decorators.js';
import { staticStyles } from './index.css.js';
import { CounterVariantType, FormSizesType, WarningLimits, ResizeType, DisplayType } from '../../globals/types.js';
import { TAG_NAME } from './renderFunction.js';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes.js';
import { staticStyles as staticFormStyles } from '../../foundation/semantic-tokens/form.css.js';
import { BlrCounterRenderFunction } from '../counter/renderFunction.js';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction.js';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction.js';
import { BlrFormLabelRenderFunction } from '../form-label/renderFunction.js';
import {
  BlrBlurEvent,
  BlrFocusEvent,
  BlrSelectEvent,
  BlrTextValueChangeEvent,
  createBlrBlurEvent,
  createBlrFocusEvent,
  createBlrSelectEvent,
  createBlrTextValueChangeEvent,
} from '../../globals/events.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';

export type BlrTextareaEventHandlers = {
  blrFocus?: (event: BlrFocusEvent) => void;
  blrBlur?: (event: BlrBlurEvent) => void;
  blrTextValueChange?: (event: BlrTextValueChangeEvent) => void;
  blrSelect?: (event: BlrSelectEvent) => void;
};

/**
 * @fires blrFocus Textarea received focus
 * @fires blrBlur Textarea lost focus
 * @fires blrTextValueChange Textarea value changed
 * @fires blrSelect Text in Textarea got selected
 */
export class BlrTextarea extends LitElementCustom {
  static styles = [staticFormStyles, staticStyles];

  @query('textarea')
  protected accessor _textareaNode!: HTMLInputElement;

  @property() accessor textAreaId!: string;
  @property() accessor label!: string;
  @property() accessor labelAppendix: string | undefined;
  @property() accessor arialabel: string | undefined;
  @property() accessor value!: string;
  @property() accessor placeholder: string | undefined;
  @property({ type: Boolean }) accessor disabled: boolean | undefined;
  @property({ type: Boolean }) accessor readonly: boolean | undefined;
  @property({ type: Boolean }) accessor hasLabel: boolean | undefined;
  @property() accessor sizeVariant: FormSizesType | undefined = 'md';
  @property({ type: Boolean }) accessor required: boolean | undefined;
  @property({ type: Number }) accessor maxLength: number | undefined;
  @property({ type: Number }) accessor minLength: number | undefined;
  @property() accessor warningLimitType: WarningLimits = 'warningLimitInt';
  @property({ type: Number }) accessor warningLimitInt = 105;
  @property({ type: Number }) accessor warningLimitPer = 75;
  @property() accessor pattern: string | undefined;
  @property({ type: Boolean }) accessor hasError: boolean | undefined;
  @property() accessor errorMessage: string | undefined;
  @property() accessor errorMessageIcon: SizelessIconType | undefined = undefined;
  @property() accessor hint: string | undefined;
  @property({ type: Boolean }) accessor hasHint = true;
  @property() accessor hintMessage: string | undefined;
  @property({ type: Boolean }) accessor hasCounter: boolean | undefined;
  @property() accessor hintMessageIcon: SizelessIconType | undefined;
  @property() accessor resize: ResizeType = 'none';
  @property({ type: Number }) accessor rows: number | undefined;
  @property({ type: Number }) accessor cols: number | undefined;
  @property() accessor name: string | undefined;
  @property() accessor textAreaDisplay: DisplayType | undefined = 'block';
  @property() accessor theme: ThemeType = 'Light_value';

  @state() protected accessor count = 0;
  @state() protected accessor isFocused = false;
  @query('textarea') protected accessor textareaElement: HTMLTextAreaElement | null = null;

  connectedCallback() {
    super.connectedCallback();
    this.count = this.value?.length || 0;
    this.updateCounter();
  }

  protected updateCounter() {
    const scrollTop = this.textareaElement?.scrollTop;
    const isFocused = this.textareaElement === document.activeElement;

    const length = this.textareaElement?.value?.length;
    if (length !== undefined) {
      this.count = length;
    }

    const shouldUpdateTextarea = this.textareaElement && scrollTop !== undefined;

    if (shouldUpdateTextarea) {
      requestAnimationFrame(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        this.textareaElement.scrollTop = scrollTop;
        if (isFocused) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          this.textareaElement.focus();
        }
      });
    }
  }

  protected determinateCounterVariant(): CounterVariantType {
    let counterVariant: CounterVariantType = 'neutral';

    if (this.maxLength) {
      if (this.warningLimitType === 'warningLimitPer' && this.count >= (this.maxLength / 100) * this.warningLimitPer) {
        counterVariant = 'warn';
      } else if (this.warningLimitType === 'warningLimitInt' && this.count >= this.warningLimitInt) {
        counterVariant = 'warn';
      }

      if (this.count >= this.maxLength) {
        counterVariant = 'error';
      }
    }

    return counterVariant;
  }

  protected handleChange = (event: Event) => {
    if (!this.disabled) {
      this.dispatchEvent(createBlrTextValueChangeEvent({ originalEvent: event, inputValue: this._textareaNode.value }));
    }
  };

  protected handleFocus = (event: FocusEvent) => {
    if (!this.disabled) {
      this.isFocused = true;
      this.dispatchEvent(createBlrFocusEvent({ originalEvent: event }));
    }
  };

  protected handleBlur = (event: FocusEvent) => {
    if (!this.disabled) {
      this.isFocused = false;
      this.dispatchEvent(createBlrBlurEvent({ originalEvent: event }));
    }
  };

  protected handleSelect = (event: Event) => {
    if (!this.disabled) {
      this.dispatchEvent(createBlrSelectEvent({ originalEvent: event }));
    }
  };

  protected render() {
    if (this.sizeVariant && this.textAreaDisplay) {
      const classes = classMap({
        'blr-textarea': true,
        [this.theme]: true,
        'error': this.hasError || false,
        [this.sizeVariant]: this.sizeVariant,
        [this.textAreaDisplay]: this.textAreaDisplay,
      });

      const textareaClasses = classMap({
        'textarea-input-control': true,
        [this.theme]: true,
        'error': this.hasError || false,
        [this.resize]: this.resize,
        [this.sizeVariant]: this.sizeVariant,
        [this.textAreaDisplay]: this.textAreaDisplay,
        'disabled': this.disabled || false,
      });

      const textareaInfoContainer = classMap({
        'blr-textarea-info-container': true,
        [this.theme]: this.theme,
        'hint': this.hasHint || false,
        'error': this.hasError || false,
        'error-message': this.errorMessage || false,
        'hint-message': this.hintMessage || false,
        [this.sizeVariant]: this.sizeVariant,
      });

      const counterVariant = this.determinateCounterVariant();

      const getCaptionContent = () => html`
        ${this.hasHint && (this.hintMessage || this.hintMessageIcon)
          ? BlrFormCaptionRenderFunction({
              variant: 'hint',
              theme: this.theme,
              sizeVariant: this.sizeVariant,
              message: this.hintMessage,
              icon: this.hintMessageIcon,
            })
          : nothing}
        ${this.hasError && (this.errorMessage || this.errorMessageIcon)
          ? BlrFormCaptionRenderFunction({
              variant: 'error',
              theme: this.theme,
              sizeVariant: this.sizeVariant,
              message: this.errorMessage,
              icon: this.errorMessageIcon,
            })
          : nothing}
      `;

      return html`
        <div class="${classes}">
          ${this.hasLabel
            ? html`<div class="label-wrapper">
                ${BlrFormLabelRenderFunction({
                  label: this.label,
                  sizeVariant: this.sizeVariant,
                  labelAppendix: this.labelAppendix,
                  forValue: this.textAreaId,
                  theme: this.theme,
                  hasError: Boolean(this.hasError),
                })}
              </div>`
            : nothing}

          <textarea
            .value=${this.value}
            class="${textareaClasses}"
            id="${ifDefined(this.textAreaId)}"
            name="${ifDefined(this.name)}"
            minlength="${ifDefined(this.minLength)}"
            maxlength="${ifDefined(this.maxLength && this.maxLength > 0 ? this.maxLength : undefined)}"
            aria-label="${ifDefined(this.arialabel)}"
            cols="${this.textAreaDisplay === 'inline-block' ? this.cols || '' : ''}"
            rows="${ifDefined(this.rows)}"
            placeholder=${ifDefined(this.placeholder ? this.placeholder : undefined)}
            ?required="${this.required}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            @input=${this.handleChange}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
            @select=${this.handleSelect}
            @keyup=${this.updateCounter}
          ></textarea>
          <div class="${textareaInfoContainer}">
            ${(this.hasHint && this.hintMessage) || (this.hasError && this.errorMessage)
              ? BlrFormCaptionGroupRenderFunction(
                  { sizeVariant: this.sizeVariant, theme: this.theme },
                  getCaptionContent(),
                )
              : nothing}
            ${this.hasCounter
              ? BlrCounterRenderFunction({
                  variant: counterVariant,
                  value: this.count,
                  maxValue: this.maxLength || 0,
                  sizeVariant: this.sizeVariant,
                  theme: this.theme,
                })
              : nothing}
          </div>
        </div>
      `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrTextarea);
}

export type BlrTextareaType = ElementInterface<BlrTextarea>;
