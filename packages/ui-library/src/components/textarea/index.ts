import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { form } from '../../foundation/semantic-tokens/form.css';
import { textarea } from '../../foundation/component-tokens/form.css';
import { counter } from '../../foundation/component-tokens/feedback.css';
import { FormSizesType } from '../../globals/types';
import { BlrFormLabelRenderFunction } from '../internal-components/form-label';
import { BlrFormHintRenderFunction } from '../internal-components/form-hint';
import { IconType } from '@boiler/icons';
import { iconButton } from '../../foundation/component-tokens/action.css';

@customElement('blr-textarea')
export class BlrTextarea extends LitElement {
  static styles = [form, styleCustom, textarea, counter, iconButton];

  @property() textareaId!: string;
  @property() label!: string;
  @property() labelAppendix?: string;
  @property() value!: string;
  @property() placeholder?: string;
  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() size: FormSizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() maxLength?: number;
  @property() pattern?: string;
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() showHint = true;
  @property() hintText?: string;
  @property() hintIcon: IconType = 'blrInfoSm';
  @property() isResizeable?: boolean;
  @property() rows?: number;
  @property() cols?: number;
  @property() onSelect?: HTMLElement['onselect'];

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

  protected render() {
    const classes = classMap({
      [`${this.size}`]: this.size,
      [`error`]: this.hasError || false,
    });

    const textareaClasses = classMap({
      [`error`]: this.hasError || false,
      [`error-input`]: this.hasError || false,
      [`${this.size}`]: this.size,
      [`resizeable`]: this.isResizeable || false,
    });

    const counterClasses = classMap({
      [`${this.size}`]: this.size,
      ['limit-reached']: this.count >= (this.maxLength || 0),
      ['limit-close']: this.maxLength
        ? this.count >= (this.maxLength / 100) * 75 && this.count < this.maxLength
        : false,
    });

    return html`
      <div class="${classes}">
        ${BlrFormLabelRenderFunction({
          labelText: this.label,
          labelSize: this.size,
          labelAppendix: this.labelAppendix,
          forValue: this.textareaId,
        })}
        <textarea
          class="blr-form-element blr-textarea ${textareaClasses}"
          id="${this.textareaId || nothing}"
          maxlength="${this.maxLength || nothing}"
          cols="${this.cols || nothing}"
          rows="${this.rows || nothing}"
          placeholder="${this.placeholder || nothing}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          @input="${this.onChange}"
          @focus="${this.onFocus}"
          @select="${this.onSelect}"
          @keyup="${this.updateCounter}"
        >${this.value}</textarea>

          ${
            this.showHint
              ? html`
                  ${BlrFormHintRenderFunction({
                    message: this.hasError ? this.errorMessage : this.hintText,
                    variant: this.hasError ? 'error' : 'hint',
                    icon: this.hintIcon,
                    size: this.size,
                    childElement: html`<div class="blr-counter ${counterClasses}">
                      ${this.count}/${this.maxLength}
                    </div>`,
                  })}
                `
              : html`<div class="blr-form-hint">
                  <div class="brl-counter ${counterClasses}">${this.count}/${this.maxLength}</div>
                </div>`
          }

        </div>
      </div>
    `;
  }
}

export type BlrTextareaType = Omit<BlrTextarea, keyof LitElement>;

export const BlrTextareaRenderFunction = ({
  textareaId,
  label,
  labelAppendix,
  placeholder,
  required,
  disabled,
  size,
  maxLength,
  cols,
  rows,
  errorMessage,
  hintText,
  hintIcon,
  hasError,
  onChange,
  onFocus,
  onSelect,
  readonly,
  isResizeable,
  showHint,
  value,
}: BlrTextareaType) => {
  return html`<blr-textarea
    .textareaId=${textareaId}
    .label=${label}
    .size=${size}
    .maxLength=${maxLength}
    .cols=${cols}
    .rows=${rows}
    .value=${value}
    .errorMessage=${errorMessage}
    .placeholder=${placeholder}
    .required=${required}
    .disabled=${disabled}
    .readOnly=${readonly}
    .hintText=${hintText}
    .hintIcon=${hintIcon}
    .hasError=${hasError}
    .labelAppendix=${labelAppendix}
    .onChange=${onChange}
    .onFocus=${onFocus}
    .onSelect=${onSelect}
    .isResizeable=${isResizeable}
    .showHint=${showHint}
  ></blr-textarea>`;
};
