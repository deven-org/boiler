import { LitElement, html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { styleCustom, textAreaDark, textAreaLight } from './index.css';
import { CounterVariantType, FormSizesType, WarningLimits, ResizeType } from '../../../globals/types';
import { BlrFormLabelRenderFunction } from '../../internal-components/form-label/renderFunction';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { BlrCounterRenderFunction } from '../../internal-components/counter/renderFunction';
import { BlrFormCaptionGroupRenderFunction } from '../../internal-components/form-caption-group/renderFunction';
import { formDark, formLight } from '../../../foundation/semantic-tokens/form.css';

import { BlrFormCaptionRenderFunction } from '../../internal-components/form-caption-group/form-caption/renderFunction';
import { types } from 'sass';
import Boolean = types.Boolean;

export const TAG_NAME = 'blr-textarea';

@customElement(TAG_NAME)
export class BlrTextarea extends LitElement {
  static styles = [styleCustom];

  @property() textareaId!: string;
  @property() label!: string;
  @property() labelAppendix?: string;
  @property() arialabel?: string;
  @property() value!: string;
  @property() placeholder?: string;
  @property({ type: Boolean }) disabled?: boolean;
  @property({ type: Boolean }) readonly?: boolean;
  @property({ type: Boolean }) hasLabel?: boolean;
  @property() size?: FormSizesType = 'md';
  @property({ type: Boolean }) required?: boolean;
  @property({ attribute: false }) onChange?: HTMLElement['oninput'];
  @property({ attribute: false }) onBlur?: HTMLElement['blur'];
  @property({ attribute: false }) onFocus?: HTMLElement['focus'];
  @property({ type: Number }) maxLength?: number;
  @property({ type: Number }) minLength?: number;
  @property({ type: Number }) warningLimitType: WarningLimits = 'warningLimitInt';
  @property({ type: Number }) warningLimitInt = 105;
  @property({ type: Number }) warningLimitPer = 75;
  @property() pattern?: string;
  @property({ type: Boolean }) hasError?: boolean;
  @property() errorMessage?: string;
  @property() errorIcon?: SizelessIconType;
  @property() hint?: string;
  @property({ type: Boolean }) hasHint = true;
  @property() hintMessage?: string;
  @property({ type: Boolean }) showCounter?: boolean;
  @property() hintIcon?: SizelessIconType;
  @property() isResizeable: ResizeType = 'none';
  @property({ type: Number }) rows?: number;
  @property({ type: Number }) cols?: number;
  @property() onSelect?: HTMLElement['onselect'];
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
    const length = this.textareaElement?.value?.length;
    if (length !== undefined) {
      this.count = length;
    }
  }

  protected determinateCounterVariant(): CounterVariantType {
    let counterVariant: CounterVariantType = 'default';

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
          ${BlrFormLabelRenderFunction({
            labelText: this.label,
            labelSize: this.size,
            labelAppendix: this.labelAppendix,
            forValue: this.textareaId,
            theme: this.theme,
            variant: this.hasError ? 'error' : 'label',
          })}
          <textarea
            class="blr-form-element textarea-input-control ${textareaClasses}"
            id="${ifDefined(this.textareaId)}"
            name="${ifDefined(this.name ? this.name : undefined)}"
            minlength="${ifDefined(this.minLength)}"
            maxlength="${ifDefined(this.maxLength)}"
            aria-label="${ifDefined(this.arialabel)}"
            cols="${ifDefined(this.cols)}"
            rows="${ifDefined(this.rows)}"
            placeholder="${ifDefined(this.placeholder)}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            @input="${this.onChange}"
            @focus=${this.focus}
            @blur=${this.blur}
            @select="${this.onSelect}"
            @keyup=${this.updateCounter}
          >
${this.value}</textarea
          >
          <div class="${textareaInfoContainer}">
            ${this.hasHint || this.hasError
              ? BlrFormCaptionGroupRenderFunction({ size: this.size }, captionContent)
              : nothing}
            ${this.showCounter
              ? BlrCounterRenderFunction({
                  variant: counterVariant,
                  current: this.count,
                  max: this.maxLength || 0,
                  size: this.size,
                  theme: this.theme,
                })
              : nothing}
          </div>
        </div>
      `;
    }
  }
}

export type BlrTextareaType = Omit<BlrTextarea, keyof LitElement>;
