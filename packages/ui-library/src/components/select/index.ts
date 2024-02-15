import { LitElement, html, nothing } from 'lit';
import { ClassMapDirective, classMap } from 'lit/directives/class-map.js';
import { property, state } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { FormSizesType, SizesType } from '../../globals/types';
import { selectInputLight, selectInputDark } from './index.css';
import { SizelessIconType } from '@boiler/icons';
import { formDark, formLight } from '../../foundation/semantic-tokens/form.css';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { DirectiveResult } from 'lit-html/directive';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { getComponentConfigToken } from '../../utils/get-component-config-token';
import { BlrIconRenderFunction } from '../icon/renderFunction';
import { TAG_NAME } from './renderFunction';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction';
import { BlrFormLabelRenderFunction } from '../form-label/renderFunction';

export class BlrSelect extends LitElement {
  static styles = [styleCustom];

  @property() arialabel?: string;
  @property() selectId!: string;
  @property() labelAppendix?: string;
  @property() name!: string;
  @property() hasLabel?: boolean;
  @property() label!: string;
  @property() disabled?: boolean;
  @property() size?: FormSizesType = 'md';
  @property() required?: boolean;
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];

  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() hintMessage?: string;
  @property() hintIcon?: SizelessIconType;
  @property() errorMessageIcon?: SizelessIconType;
  @property() hasHint?: boolean;
  @property() icon?: SizelessIconType = 'blrChevronDown';

  @property() theme: ThemeType = 'Light';

  @property() blrChange?: () => void;

  @state() protected isFocused = false;

  protected _optionElements: Element[] | undefined;

  protected handleFocus = () => {
    this.isFocused = true;
  };

  protected handleBlur = () => {
    this.isFocused = false;
  };

  protected handleSlotChange() {
    const slot = this.renderRoot?.querySelector('slot');

    this._optionElements = slot?.assignedElements({ flatten: false });
    this.requestUpdate();
  }

  protected handleChange(event: Event) {
    this.dispatchEvent(
      new CustomEvent('blrChange', {
        bubbles: true,
        composed: true,
        detail: { originalEvent: event },
      })
    );
  }

  protected renderIcon(classes: DirectiveResult<typeof ClassMapDirective>) {
    if (this.size) {
      const iconSizeVariant = getComponentConfigToken([
        'sem',
        'forms',
        'inputfield',
        'icon',
        'sizevariant',
        this.size,
      ]).toLowerCase() as SizesType;

      if (this.hasError) {
        return BlrIconRenderFunction(
          {
            icon: calculateIconName('blrErrorFilled', iconSizeVariant),
            sizeVariant: iconSizeVariant,
            classMap: classes,
          },
          {
            'aria-hidden': true,
          }
        );
      } else {
        const modifiedIcon = this.icon ? this.icon : 'blrChevronDown';
        return BlrIconRenderFunction(
          {
            icon: calculateIconName(modifiedIcon, iconSizeVariant),
            sizeVariant: iconSizeVariant,
            classMap: classes,
          },
          {
            'aria-hidden': true,
          }
        );
      }
    }
  }

  protected render() {
    if (this.size) {
      const dynamicStyles = this.theme === 'Light' ? [formLight, selectInputLight] : [formDark, selectInputDark];

      const inputClasses = classMap({
        'error': this.hasError || false,
        'error-input': this.hasError || false,
        [`${this.size}`]: this.size,
        'disabled': this.disabled || false,
        'focus': this.isFocused || false,
      });

      const iconClasses = classMap({
        'blr-input-icon': true,
        [this.size]: this.size,
      });
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
        ${this.hasError && (this.errorMessage || this.errorMessageIcon)
          ? BlrFormCaptionRenderFunction({
              variant: 'error',
              theme: this.theme,
              size: this.size,
              message: this.errorMessage,
              icon: this.errorMessageIcon,
            })
          : nothing}
      `;

      return html`
        <style>
          ${dynamicStyles}
        </style>

        <slot @slotchange=${this.handleSlotChange}></slot>

        <div class="blr-select ${this.size}">
          ${this.hasLabel
            ? html`
                <div class="label-wrapper">
                  ${BlrFormLabelRenderFunction({
                    labelText: this.label,
                    labelAppendix: this.labelAppendix,
                    labelSize: this.size,
                    forValue: this.selectId,
                    theme: this.theme,
                    variant: this.hasError ? 'error' : 'label',
                  })}
                </div>
              `
            : nothing}
          <div class="blr-select-wrapper ${inputClasses}">
            <div class="blr-select-inner-container">
              <select
                aria-label=${this.arialabel || nothing}
                class="blr-form-select ${inputClasses}"
                id=${this.selectId || nothing}
                name=${this.name || nothing}
                ?disabled=${this.disabled}
                ?required=${this.required}
                @change=${this.handleChange}
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              >
                ${this._optionElements?.map((opt: Element) => {
                  return html`
                    <option
                      class="blr-select-option"
                      value=${opt.getAttribute('value') || ''}
                      ?selected=${opt.getAttribute('selected') === 'true'}
                      ?disabled=${opt.getAttribute('disabled') === 'true'}
                    >
                      ${opt.getAttribute('label')}
                    </option>
                  `;
                })}
              </select>
            </div>
            ${this.renderIcon(iconClasses)}
          </div>
          ${this.hasHint || this.hasError
            ? BlrFormCaptionGroupRenderFunction({ size: this.size }, captionContent)
            : nothing}
        </div>
      `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrSelect);
}

export type BlrSelectType = Omit<BlrSelect, keyof LitElement>;
