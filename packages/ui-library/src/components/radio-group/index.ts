import { PropertyValues, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { staticStyles as componentSpecificStaticStyles } from './index.css';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { staticStyles as staticRadioStyles } from '../../foundation/component-tokens/radio.css';
import { staticStyles as staticFormStyles } from '../../foundation/semantic-tokens/form.css';
import { InputSizesType, RadioGroupDirection, RadioOption } from '../../globals/types';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction';
import { BlrFormLabelInlineRenderFunction } from '../form-label/form-label-inline/renderFunction';
import { TAG_NAME } from './renderFunction';
import { LitElementCustom } from '../../utils/lit-element-custom';

export class BlrRadioGroup extends LitElementCustom {
  static styles = [staticFormStyles, staticRadioStyles, componentSpecificStaticStyles];

  private _disabled = false;
  private _readonly = false;
  private _checked = false;
  private _name = '';
  private _sizeVariant: InputSizesType = 'md';
  private _hasLegend = false;
  private _required = false;
  private _blrChange?: HTMLElement['oninput'];
  private _blrBlur?: HTMLElement['blur'];
  private _blrFocus?: HTMLElement['focus'];
  private _hasError = false;
  private _errorIcon?: SizelessIconType;
  private _options: RadioOption[] = [];
  private _hasHint = true;
  private _groupHintMessageIcon?: SizelessIconType;
  private _groupErrorMessage = '';
  private _groupHintMessage = '';
  private _groupErrorMessageIcon?: SizelessIconType;
  private _legend = '';
  private _direction: RadioGroupDirection = 'horizontal';
  private _theme: ThemeType = 'Light';

  @property({ type: Boolean })
  get disabled() {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
  }

  @property({ type: Boolean })
  get readonly() {
    return this._readonly;
  }
  set readonly(value: boolean) {
    this._readonly = value;
  }

  @property({ type: Boolean })
  get checked() {
    return this._checked;
  }
  set checked(value: boolean) {
    this._checked = value;
  }

  @property({ type: String })
  get name() {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  @property({ type: String })
  get sizeVariant() {
    return this._sizeVariant;
  }
  set sizeVariant(value: InputSizesType) {
    this._sizeVariant = value || 'md';
  }

  @property({ type: Boolean })
  get hasLegend() {
    return this._hasLegend;
  }
  set hasLegend(value: boolean) {
    this._hasLegend = value;
  }

  @property({ type: Boolean })
  get required() {
    return this._required;
  }
  set required(value: boolean) {
    this._required = value;
  }

  @property()
  get blrChange(): HTMLElement['oninput'] | undefined {
    return this._blrChange;
  }
  set blrChange(value: HTMLElement['oninput'] | undefined) {
    this._blrChange = value;
  }

  @property()
  get blrBlur(): HTMLElement['blur'] | undefined {
    return this._blrBlur;
  }
  set blrBlur(value: HTMLElement['blur'] | undefined) {
    this._blrBlur = value;
  }

  @property()
  get blrFocus(): HTMLElement['focus'] | undefined {
    return this._blrFocus;
  }
  set blrFocus(value: HTMLElement['focus'] | undefined) {
    this._blrFocus = value;
  }

  @property({ type: Boolean })
  get hasError() {
    return this._hasError;
  }
  set hasError(value: boolean) {
    this._hasError = value;
  }

  @property({ type: String })
  get errorIcon(): SizelessIconType | undefined {
    return this._errorIcon;
  }
  set errorIcon(value: SizelessIconType | undefined) {
    this._errorIcon = value;
  }

  @property({ type: Array })
  get options() {
    return this._options;
  }
  set options(value: RadioOption[]) {
    this._options = value || [];
  }

  @property({ type: Boolean })
  get hasHint() {
    return this._hasHint;
  }
  set hasHint(value: boolean) {
    this._hasHint = value;
  }

  @property({ type: String })
  get groupHintMessageIcon(): SizelessIconType | undefined {
    return this._groupHintMessageIcon;
  }
  set groupHintMessageIcon(value: SizelessIconType | undefined) {
    this._groupHintMessageIcon = value;
  }

  @property({ type: String })
  get groupErrorMessage() {
    return this._groupErrorMessage;
  }
  set groupErrorMessage(value: string) {
    this._groupErrorMessage = value;
  }

  @property({ type: String })
  get groupHintMessage() {
    return this._groupHintMessage;
  }
  set groupHintMessage(value: string) {
    this._groupHintMessage = value;
  }

  @property({ type: String })
  get groupErrorMessageIcon(): SizelessIconType | undefined {
    return this._groupErrorMessageIcon;
  }
  set groupErrorMessageIcon(value: SizelessIconType | undefined) {
    this._groupErrorMessageIcon = value;
  }

  @property({ type: String })
  get legend() {
    return this._legend;
  }
  set legend(value: string) {
    this._legend = value;
  }

  @property({ type: String })
  get direction() {
    return this._direction;
  }
  set direction(value: RadioGroupDirection) {
    this._direction = value || 'horizontal';
  }

  @property({ type: String })
  get theme() {
    return this._theme;
  }
  set theme(value: ThemeType) {
    this._theme = value || 'Light';
  }

  protected render() {
    const legendClasses = classMap({
      'blr-legend': true,
      [this.sizeVariant]: this.sizeVariant,
      'error': this.hasError,
    });

    const legendWrapperClasses = classMap({
      'blr-legend-wrapper': true,
      [this.theme]: this.theme,
      [this.sizeVariant]: this.sizeVariant,
    });

    const radioClasses = classMap({
      [this.theme]: this.theme,
      [this.sizeVariant]: this.sizeVariant,
      error: this.hasError,
    });

    const classes = classMap({
      [this.theme]: this.theme,
      [this.sizeVariant]: this.sizeVariant,
      disabled: this.disabled,
      readonly: this.readonly,
      checked: this.checked,
      error: this.hasError,
      [this.direction]: this.direction,
    });

    const calculateOptionId = (label: string) => {
      return label.replace(/ /g, '_').toLowerCase();
    };

    const captionContent = html`
      ${this.hasHint && (this.groupHintMessage || this.groupHintMessageIcon)
        ? BlrFormCaptionRenderFunction({
            variant: 'hint',
            theme: this.theme,
            sizeVariant: this.sizeVariant,
            message: this.groupHintMessage,
            icon: this.groupHintMessageIcon,
          })
        : nothing}
      ${this.hasError && (this.groupErrorMessage || this.groupErrorMessageIcon)
        ? BlrFormCaptionRenderFunction({
            variant: 'error',
            theme: this.theme,
            sizeVariant: this.sizeVariant,
            message: this.groupErrorMessage,
            icon: this.groupErrorMessageIcon,
          })
        : nothing}
    `;

    return html`
      ${this.hasLegend
        ? html`<div class="${legendWrapperClasses}"><legend class="${legendClasses}">${this.legend}</legend></div>`
        : nothing}

      <div class="blr-radio-group ${classes}">
        ${this.options &&
        this.options.map((option: RadioOption) => {
          const id = calculateOptionId(option.label);
          return html`
            <div class="blr-radio ${radioClasses}">
              <input
                id=${id || nothing}
                class="input-control ${radioClasses}"
                type="radio"
                name=${this.name}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                ?aria-disabled=${this.disabled}
                ?invalid=${this.hasError}
                ?aria-invalid=${this.hasError}
                ?checked=${this.checked}
                ?required=${this.required}
                @input=${this.blrChange}
                @blur=${this.blrBlur}
                @focus=${this.blrFocus}
              />
              <div class="label-wrapper">
                ${option.label
                  ? html`${BlrFormLabelInlineRenderFunction({
                      labelText: option.label,
                      forValue: id,
                      labelSize: this.sizeVariant || 'md',
                      theme: this.theme,
                    })}`
                  : nothing}
              </div>
            </div>
          `;
        })}
      </div>

      ${this.hasHint || this.hasError
        ? html` <div class="caption-group ${classes}">
            ${BlrFormCaptionGroupRenderFunction({ sizeVariant: this.sizeVariant, theme: this.theme }, captionContent)}
          </div>`
        : nothing}
    `;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrRadioGroup);
}

export type BlrRadioGroupType = Omit<BlrRadioGroup, keyof LitElementCustom>;
