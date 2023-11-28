import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { styleCustom, textAreaDark, textAreaLight } from './index.css';
import { CounterVariantType, FormSizesType, WarningLimits, ResizeType } from '../../../globals/types';
import { BlrFormLabelRenderFunction } from '../../internal-components/form-label';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { BlrCounterRenderFunction } from '../../internal-components/counter';
import { BlrFormInfoRenderFunction } from '../../internal-components/form-info';
import { formDark, formLight } from '../../../foundation/semantic-tokens/form.css';

import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

const TAG_NAME = 'blr-textarea';

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
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() maxLength?: number;
  @property() minLength?: number;
  @property() warningLimitType: WarningLimits = 'warningLimitInt';
  @property() warningLimitInt = 105;
  @property() warningLimitPer = 75;
  @property() pattern?: string;
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() errorIcon?: SizelessIconType = 'blrInfo';
  @property() hint?: string;
  @property() showHint = true;
  @property() hintText?: string;
  @property() showCounter?: boolean;
  @property() hintIcon: SizelessIconType = 'blrInfo';
  @property() isResizeable: ResizeType = 'none';
  @property() rows?: number;
  @property() cols?: number;
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
            @input="${this.onChange}"
            @focus=${this.focus}
            @blur=${this.blur}
            @select="${this.onSelect}"
            @keyup="${this.updateCounter}"
          >
${this.value}</textarea
          >
          <div class="${textareaInfoContainer}">
            ${this.showHint || this.hasError
              ? BlrFormInfoRenderFunction({
                  theme: this.theme,
                  size: this.size,
                  showHint: this.showHint,
                  hintText: this.hintText,
                  hintIcon: this.hintIcon,
                  hasError: !!this.hasError,
                  errorMessage: this.errorMessage,
                  errorIcon: this.errorIcon,
                })
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

export const BlrTextareaRenderFunction = (params: BlrTextareaType) =>
  genericBlrComponentRenderer<BlrTextareaType>(TAG_NAME, { ...params });
