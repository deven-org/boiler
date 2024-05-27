import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { property, query, state } from 'lit/decorators.js';
import { staticStyles } from './index.css';
import { CounterVariantType, FormSizesType, WarningLimits, ResizeType } from '../../globals/types';
import { TAG_NAME } from './renderFunction';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { staticStyles as staticFormStyles } from '../../foundation/semantic-tokens/form.css';
import { BlrCounterRenderFunction } from '../counter/renderFunction';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction';
import { BlrFormLabelRenderFunction } from '../form-label/renderFunction';
import {
  BlrBlurEvent,
  BlrFocusEvent,
  BlrSelectEvent,
  BlrTextValueChangeEvent,
  createBlrBlurEvent,
  createBlrFocusEvent,
  createBlrSelectEvent,
  createBlrTextValueChangeEvent,
} from '../../globals/events';
import { LitElementCustom } from '../../utils/lit-element-custom';

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
  protected _textareaNode!: HTMLInputElement;

  @property() textAreaId!: string;
  @property() label!: string;
  @property() labelAppendix?: string;
  @property() arialabel?: string;
  @property() value!: string;
  @property() placeholder?: string;
  @property({ type: Boolean }) disabled?: boolean;
  @property({ type: Boolean }) readonly?: boolean;
  @property({ type: Boolean }) hasLabel?: boolean;
  @property() sizeVariant?: FormSizesType = 'md';
  @property({ type: Boolean }) required?: boolean;
  @property({ type: Number }) maxLength?: number;
  @property({ type: Number }) minLength?: number;
  @property() warningLimitType: WarningLimits = 'warningLimitInt';
  @property({ type: Number }) warningLimitInt = 105;
  @property({ type: Number }) warningLimitPer = 75;
  @property() pattern?: string;
  @property({ type: Boolean }) hasError?: boolean;
  @property() errorMessage?: string;
  @property() errorMessageIcon?: SizelessIconType = undefined;
  @property() hint?: string;
  @property({ type: Boolean }) hasHint = true;
  @property() hintMessage?: string;
  @property({ type: Boolean }) hasCounter?: boolean;
  @property() hintMessageIcon?: SizelessIconType;
  @property() resize: ResizeType = 'none';
  @property({ type: Number }) rows?: number;
  @property({ type: Number }) cols?: number;
  @property() name?: string;
  @property() theme: ThemeType = 'Light';

  @state() protected count = 0;
  @query('textarea') protected textareaElement: HTMLTextAreaElement | undefined;

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
      this.dispatchEvent(createBlrFocusEvent({ originalEvent: event }));
    }
  };

  protected handleBlur = (event: FocusEvent) => {
    if (!this.disabled) {
      this.dispatchEvent(createBlrBlurEvent({ originalEvent: event }));
    }
  };

  protected handleSelect = (event: Event) => {
    if (!this.disabled) {
      this.dispatchEvent(createBlrSelectEvent({ originalEvent: event }));
    }
  };

  protected render() {
    if (this.sizeVariant) {
      const classes = classMap({
        'blr-textarea': true,
        [this.theme]: this.theme,
        'error': this.hasError || false,
        [this.sizeVariant]: this.sizeVariant,
      });

      const textareaClasses = classMap({
        'error': this.hasError || false,
        'error-input': this.hasError || false,
        [this.theme]: this.theme,
        [this.sizeVariant]: this.sizeVariant,
        [this.resize]: this.resize,
      });

      const textareaInfoContainer = classMap({
        'blr-textarea-info-container': true,
        [this.theme]: this.theme,
        'hint': this.hasHint || false,
        'error': this.hasError || false,
        'error-message': this.errorMessage || false,
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
            class="blr-form-element textarea-input-control ${textareaClasses}"
            id="${ifDefined(this.textAreaId ? this.textAreaId : undefined)}"
            name="${this.name || ''}"
            minlength="${this.minLength || ''}"
            maxlength="${ifDefined(this.maxLength ?? 0 > 0 ? this.maxLength : undefined)}"
            aria-label="${this.arialabel || ''}"
            cols="${this.cols || ' '}"
            rows="${this.rows || ' '}"
            placeholder="${ifDefined(this.placeholder ? this.placeholder : undefined)}"
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
                  getCaptionContent()
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

export type BlrTextareaType = Omit<BlrTextarea, keyof LitElementCustom> & BlrTextareaEventHandlers;
