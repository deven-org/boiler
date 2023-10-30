import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { textareaDark, textareaLight } from './index.css';
import { formDark, formLight } from '../../foundation/semantic-tokens/form.css';
import { counterDark, counterLight } from '../../foundation/component-tokens/feedback.css';
import { CounterVariantType, FormSizesType, WarningLimits } from '../../globals/types';
import { BlrFormLabelRenderFunction } from '../internal-components/form-label';
import { BlrFormHintRenderFunction } from '../internal-components/form-hint';
import { SizelessIconType } from '@boiler/icons';
import { iconButtonDark, iconButtonLight } from '../../foundation/component-tokens/action.css';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { BlrCounterRenderFunction } from '../internal-components/counter';

@customElement('blr-textarea')
export class BlrTextarea extends LitElement {
  @property() textareaId!: string;
  @property() name!: string;
  @property() arialabel!: string;
  @property() hasLabel?: boolean;
  @property() label!: string;
  @property() labelAppendix?: string;
  @property() value!: string;
  @property() placeholder?: string;
  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() sizeVariant: FormSizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() minLength?: number;
  @property() maxLength?: number;
  @property() warningLimitType: WarningLimits = 'warningLimitInt';
  @property() warningLimitInt = 105;
  @property() warningLimitPer = 75;
  @property() pattern?: string;
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() errorMessageIcon: SizelessIconType = 'blrInfo';
  @property() hint?: string;
  @property() hasHint = true;
  @property() hintText?: string;
  @property() showCounter?: boolean;
  @property() hintIcon: SizelessIconType = 'blrInfo';
  @property() resize?: boolean;
  @property() rows?: number;
  @property() cols?: number;
  @property() onSelect?: HTMLElement['onselect'];
  @property() shouldFocus? = false;

  @property() theme: ThemeType = 'Light';

  @state() protected count = 0;
  @query('textarea') protected textareaElement: HTMLTextAreaElement | undefined;

  firstUpdated() {
    if (this.shouldFocus) {
      const textarea = this.shadowRoot?.querySelector('textarea');
      if (textarea) {
        textarea.focus();
      }
    }
  }

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
    const dynamicStyles =
      this.theme === 'Light'
        ? [formLight, textareaLight, counterLight, iconButtonLight]
        : [formDark, textareaDark, counterDark, iconButtonDark];

    const classes = classMap({
      [`${this.sizeVariant}`]: this.sizeVariant,
      [`error`]: this.hasError || false,
    });

    const textareaClasses = classMap({
      [`error`]: this.hasError || false,
      [`error-input`]: this.hasError || false,
      [`${this.sizeVariant}`]: this.sizeVariant,
      [`resizeable`]: this.resize || false,
      ['shouldFocus']: this.shouldFocus || false,
    });
    const flexContainer = classMap({
      [`flex-container`]: true,
      [`${this.sizeVariant}`]: this.sizeVariant,
    });

    const counterVariant = this.determinateCounterVariant();

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class="${classes} blr-textarea">
        <div class="label-wrapper">
          ${BlrFormLabelRenderFunction({
            labelText: this.label,
            labelSize: this.sizeVariant,
            labelAppendix: this.labelAppendix,
            forValue: this.textareaId,
            theme: this.theme,
            variant: this.hasError ? 'error' : 'label',
          })}
        </div>
        <div class="input-wrapper">
          <textarea
            class="blr-form-element textarea-input-control ${textareaClasses}"
            maxlength="${this.maxLength || nothing}"
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
            shouldFocus="${this.shouldFocus}"
            id="${this.textareaId || nothing}"
          >
${this.value}</textarea
          >
          
            <div class="${flexContainer}">
            <div>
              ${
                this.hasHint
                  ? html`
                      <div class="text-area-hint-wrapper">
                        ${BlrFormHintRenderFunction({
                          message: this.hintText || '',
                          variant: 'hint',
                          icon: this.hintIcon,
                          size: this.sizeVariant,
                          theme: this.theme,
                        })}
                      </div>
                    `
                  : nothing
              }
              ${
                this.hasError
                  ? html`
                      <div class="text-area-error-wrapper">
                        ${BlrFormHintRenderFunction({
                          message: this.errorMessage || ' ',
                          variant: this.hasError ? 'error' : 'hint',
                          size: this.sizeVariant,
                          icon: this.errorMessageIcon ? this.errorMessageIcon : undefined,
                          theme: this.theme,
                        })}
                      </div>
                    `
                  : nothing
              }
            </div>
              ${
                this.showCounter
                  ? html`
                      <div class="counter-wrapper ${classes}">
                        ${BlrCounterRenderFunction({
                          variant: counterVariant,
                          current: this.count,
                          max: this.maxLength || 0,
                          size: this.sizeVariant,
                          theme: this.theme,
                        })}
                      </div>
                    `
                  : nothing
              }
            </div>
            </div>
          </div>
        </div>
      </div> `;
  }
}
type OmittedKeys = 'firstUpdated';
export type BlrTextareaType = Omit<BlrTextarea, keyof LitElement | OmittedKeys>;

export const BlrTextareaRenderFunction = ({
  textareaId,
  name,
  arialabel,
  hasLabel,
  label,
  labelAppendix,
  placeholder,
  required,
  disabled,
  sizeVariant,
  maxLength,
  minLength,
  warningLimitType,
  warningLimitInt,
  warningLimitPer,
  cols,
  rows,
  errorMessage,
  hintText,
  hintIcon,
  hasError,
  errorMessageIcon,
  onChange,
  onSelect,
  readonly,
  resize,
  hasHint,
  showCounter,
  value,
  theme,
  shouldFocus,
}: BlrTextareaType) => {
  return html`<blr-textarea
    class=${resize ? nothing : `parent-width`}
    .textareaId=${textareaId}
    .name=${name}
    .ariaLabel=${arialabel}
    .hasLabel=${hasLabel}
    .label=${label}
    .sizeVariant=${sizeVariant}
    .maxLength=${maxLength}
    .minLength=${minLength}
    .warningLimitType=${warningLimitType}
    .warningLimitInt=${warningLimitInt}
    .warningLimitPer=${warningLimitPer}
    .cols=${cols}
    .rows=${rows}
    .value=${value}
    .errorMessage=${errorMessage}
    .placeholder="${placeholder}"
    .required=${required}
    .disabled=${disabled}
    .readonly=${readonly}
    .hintText=${hintText}
    .showCounter=${showCounter}
    .hintIcon=${hintIcon}
    .hasError=${hasError}
    .errorMessageIcon=${errorMessageIcon}
    .labelAppendix=${labelAppendix}
    .onChange=${onChange}
    .onSelect=${onSelect}
    .resize=${resize}
    .hasHint=${hasHint}
    .theme=${theme}
    .shouldFocus=${shouldFocus}
  ></blr-textarea>`;
};
