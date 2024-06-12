import { html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { query } from 'lit/decorators.js';
import { property } from '../../utils/lit/decorators.js';
import { InputSizesType } from '../../globals/types.js';
import { staticStyles as staticFormStyles } from '../../foundation/semantic-tokens/form.css.js';
import { staticStyles as staticRadioStyles } from '../../foundation/component-tokens/radio.css.js';
import { TAG_NAME } from './renderFunction.js';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes.js';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction.js';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction.js';
import { BlrFormLabelInlineRenderFunction } from '../form-label/form-label-inline/renderFunction.js';
import { createBlrBlurEvent, createBlrFocusEvent, createBlrSelectedValueChangeEvent } from '../../globals/events.js';
import { LitElementCustom } from '../../utils/lit/element.js';
import { ElementInterface } from '../../utils/lit/element.js';

export class BlrRadio extends LitElementCustom {
  static styles = [staticFormStyles, staticRadioStyles];

  @query('input')
  protected accessor _radioNode!: HTMLInputElement;

  @property() accessor optionId!: string;
  @property() accessor label!: string;
  @property() accessor disabled: boolean | undefined;
  @property() accessor readonly: boolean | undefined;
  @property() accessor checked: boolean | undefined;
  @property() accessor name: string | undefined;
  @property() accessor sizeVariant: InputSizesType | undefined = 'md';
  @property() accessor required: boolean | undefined;
  @property() accessor blrChange: HTMLElement['oninput'] | undefined;
  @property() accessor blrBlur: HTMLElement['blur'] | undefined;
  @property() accessor blrFocus: HTMLElement['focus'] | undefined;
  @property() accessor hasError: boolean | undefined;
  @property() accessor errorMessage: string | undefined;
  @property() accessor errorMessageIcon: SizelessIconType | undefined;
  @property() accessor hasHint: boolean | undefined;
  @property() accessor hintMessage: string | undefined;
  @property() accessor hintMessageIcon: SizelessIconType | undefined;

  @property() accessor theme: ThemeType = 'Light';

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

  protected handleChange(event: Event) {
    this.dispatchEvent(
      createBlrSelectedValueChangeEvent({ originalEvent: event, selectedValue: this._radioNode.value })
    );
  }

  protected render() {
    if (this.sizeVariant) {
      const classes = classMap({
        [this.sizeVariant]: this.sizeVariant,
        [this.theme]: this.theme,
        disabled: this.disabled || false,
        readonly: this.readonly || false,
        checked: this.checked || false,
        error: this.hasError || false,
      });

      const captionContent = html`
        ${this.hasHint && (this.hintMessage || this.hintMessageIcon)
          ? html`
              <div class="hint-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'hint',
                  theme: this.theme,
                  sizeVariant: this.sizeVariant,
                  message: this.hintMessage,
                  icon: this.hintMessageIcon,
                })}
              </div>
            `
          : nothing}
        ${this.hasError && (this.errorMessage || this.errorMessageIcon)
          ? html`
              <div class="error-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'error',
                  theme: this.theme,
                  sizeVariant: this.sizeVariant,
                  message: this.errorMessage,
                  icon: this.errorMessageIcon,
                })}
              </div>
            `
          : nothing}
      `;

      return html`
        <div class="blr-radio ${classes}">
          <input
            id=${this.optionId || nothing}
            class="${classes} input-control"
            type="radio"
            name=${this.name}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?invalid=${this.hasError}
            ?checked=${this.checked}
            ?required=${this.required}
            @input=${this.handleChange}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          />
          <div class="label-wrapper">
            ${BlrFormLabelInlineRenderFunction({
              labelText: this.label,
              forValue: this.optionId,
              labelSize: this.sizeVariant,
              theme: this.theme,
            })}
            ${this.hasHint || this.hasError
              ? BlrFormCaptionGroupRenderFunction({ sizeVariant: this.sizeVariant, theme: this.theme }, captionContent)
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

export type BlrRadioType = ElementInterface<BlrRadio>;
