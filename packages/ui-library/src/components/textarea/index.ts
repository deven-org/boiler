import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { styleCustom, textAreaDark, textAreaLight } from './index.css';
import { CounterVariantType, FormSizesType, WarningLimits, ResizeType } from '../../globals/types';
import { BlrFormLabelRenderFunction } from '../internal-components/form-label/renderFunction';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { BlrCounterRenderFunction } from '../internal-components/counter/renderFunction';
import { BlrFormCaptionGroupRenderFunction } from '../internal-components/form-caption-group/renderFunction';
import { formDark, formLight } from '../../foundation/semantic-tokens/form.css';

import { BlrFormCaptionRenderFunction } from '../internal-components/form-caption/renderFunction';

import { TAG_NAME } from './renderFunction';

@customElement(TAG_NAME)
export class BlrTextarea extends LitElement {
  static styles = [styleCustom];

  @property() textareaId!: string;
  @property() label!: string;
  @property() labelAppendix?: string;
  @property() arialabel?: string;
  @property() value!: string;
  @property() placeholder?: string;
  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() hasLabel?: boolean;
  @property() size?: FormSizesType = 'md';
  @property() required?: boolean;
  @property() maxLength?: number;
  @property() minLength?: number;
  @property() warningLimitType: WarningLimits = 'warningLimitInt';
  @property() warningLimitInt = 105;
  @property() warningLimitPer = 75;
  @property() pattern?: string;
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() errorIcon?: SizelessIconType;
  @property() hint?: string;
  @property() hasHint = true;
  @property() hintMessage?: string;
  @property() showCounter?: boolean;
  @property() hintIcon?: SizelessIconType;
  @property() isResizeable: ResizeType = 'none';
  @property() rows?: number;
  @property() cols?: number;
  @property() name?: string;
  @property() theme: ThemeType = 'Light';

  // these are not triggered directly but allows us to map it internally and bve typesafe
  @property() blrFocus?: () => void;
  @property() blrBlur?: () => void;
  @property() blrChange?: () => void;
  @property() blrSelect?: () => void;

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
      this.dispatchEvent(
        new CustomEvent('blrChange', { bubbles: true, composed: true, detail: { originalEvent: event } })
      );
    }
  };

  protected handleFocus = (event: Event) => {
    if (!this.disabled) {
      this.dispatchEvent(
        new CustomEvent('blrFocus', { bubbles: true, composed: true, detail: { originalEvent: event } })
      );
    }
  };

  protected handleBlur = (event: Event) => {
    if (!this.disabled) {
      this.dispatchEvent(
        new CustomEvent('blrBlur', { bubbles: true, composed: true, detail: { originalEvent: event } })
      );
    }
  };

  protected handleSelect = (event: Event) => {
    if (!this.disabled) {
      this.dispatchEvent(
        new CustomEvent('blrSelect', {
          bubbles: true,
          composed: true,
          detail: { originalEvent: event, value: this.textareaElement?.value },
        })
      );
    }
  };

  protected render() {
    if (this.size) {
      const dynamicStyles = this.theme === 'Light' ? [formLight, textAreaLight] : [formDark, textAreaDark];

      const classes = classMap({
        [`${this.size}`]: this.size,
        error: this.hasError || false,
      });

      const textareaClasses = classMap({
        'error': this.hasError || false,
        'error-input': this.hasError || false,
        [`${this.size}`]: this.size,
        [this.isResizeable]: this.isResizeable,
      });

      const textareaInfoContainer = classMap({
        'blr-textarea-info-container': true,
        [`${this.size}`]: this.size,
      });

      const counterVariant = this.determinateCounterVariant();

      const captionContent = html`
        ${this.hasHint && (this.hintMessage || this.hintIcon)
          ? BlrFormCaptionRenderFunction({
              variant: 'hint',
              theme: this.theme,
              size: this.size,
              message: this.hintMessage,
              icon: this.hintIcon,
            })
          : nothing}
        ${this.hasError && (this.errorMessage || this.errorIcon)
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
          ${dynamicStyles}
        </style>
        <div class="${classes} blr-textarea">
        ${
          this.hasLabel
            ? html`
                <div class="label-wrapper">
                  ${BlrFormLabelRenderFunction({
                    labelText: this.label,
                    labelSize: this.size,
                    labelAppendix: this.labelAppendix,
                    forValue: this.textareaId,
                    theme: this.theme,
                    variant: this.hasError ? 'error' : 'label',
                  })}
                </div>
              `
            : nothing
        }
        </div>
          <textarea
            class="blr-form-element textarea-input-control ${textareaClasses}"
            id="${this.textareaId || nothing}"
            name="${this.name || nothing}"
            minlength="${this.minLength || nothing}"
            maxlength="${this.maxLength || nothing}"
            aria-label="${this.arialabel}"
            cols="${this.cols || nothing}"
            rows="${this.rows || nothing}"
            placeholder="${this.placeholder || nothing}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            @input=${this.handleChange}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
            @select=${this.handleSelect}
            @keyup=${this.updateCounter}
          >
${this.value}
          </textarea
          >
          <div class="${textareaInfoContainer}">
            ${
              this.hasHint || this.hasError
                ? BlrFormCaptionGroupRenderFunction({ size: this.size }, captionContent)
                : nothing
            }
            ${
              this.showCounter
                ? BlrCounterRenderFunction({
                    variant: counterVariant,
                    current: this.count,
                    max: this.maxLength || 0,
                    size: this.size,
                    theme: this.theme,
                  })
                : nothing
            }
          </div>
        </div>
      `;
    }
  }
}

export type BlrTextareaType = Omit<BlrTextarea, keyof LitElement>;
