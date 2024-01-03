import { LitElement, html, nothing } from 'lit';
import { ClassMapDirective, classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { FormSizesType, SizesType } from '../../../globals/types';

import { selectInputLight, selectInputDark } from './index.css';
import { SizelessIconType } from '@boiler/icons';
import { formDark, formLight } from '../../../foundation/semantic-tokens/form.css';
import { calculateIconName } from '../../../utils/calculate-icon-name';
import { DirectiveResult } from 'lit-html/directive';

import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { getComponentConfigToken } from '../../../utils/get-component-config-token';

import { BlrFormCaptionGroupRenderFunction } from '../../internal-components/form-caption-group/renderFunction';
import { BlrFormCaptionRenderFunction } from '../../internal-components/form-caption-group/form-caption/renderFunction';
import { BlrFormLabelRenderFunction } from '../../internal-components/form-label/renderFunction';
import { BlrIconRenderFunction } from '../../ui/icon/renderFunction';

type Option = {
  value: string;
  label: string;
  selected?: boolean;
  disabled?: boolean;
};

export const TAG_NAME = 'blr-select';

@customElement(TAG_NAME)
export class BlrSelect extends LitElement {
  static styles = [styleCustom];

  @property() arialabel?: string;
  @property() selectId!: string;
  @property() labelAppendix?: string;
  @property() name!: string;
  @property() label?: string;
  @property() disabled?: boolean;
  @property() size?: FormSizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: (event: Event) => void;
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property({ type: Array }) options: Option[] = [];
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() hintMessage?: string;
  @property() hintIcon?: SizelessIconType;
  @property() errorIcon?: SizelessIconType;
  @property() hasHint?: boolean;
  @property() icon?: SizelessIconType = 'blrChevronDown';

  @property() theme: ThemeType = 'Light';

  @state() protected isFocused = false;

  protected handleFocus = () => {
    this.isFocused = true;
  };

  protected handleBlur = () => {
    this.isFocused = false;
  };

  protected renderIcon(classes: DirectiveResult<typeof ClassMapDirective>) {
    if (this.size) {
      const iconSizeVariant = getComponentConfigToken([
        'SizeVariant',
        'Forms',
        this.size.toUpperCase(),
        'InputField',
        'Icon',
      ]).toLowerCase() as SizesType;

      if (this.hasError) {
        return BlrIconRenderFunction(
          {
            icon: calculateIconName('blrErrorFilled', iconSizeVariant),
            size: iconSizeVariant,
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
            size: iconSizeVariant,
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
        <div class="blr-select">
          ${this.label
            ? BlrFormLabelRenderFunction({
                labelText: this.label,
                labelAppendix: this.labelAppendix,
                labelSize: this.size,
                forValue: this.selectId,
                theme: this.theme,
                variant: this.hasError ? 'error' : 'label',
              })
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
                @change=${this.onChange}
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              >
                ${this.options?.map((opt: Option) => {
                  return html`
                    <option
                      class="blr-select-option"
                      id=${opt.value}
                      value=${opt.value}
                      ?selected=${opt.selected}
                      ?disabled=${opt.disabled}
                    >
                      ${opt.label}
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

export type BlrSelectType = Omit<BlrSelect, keyof LitElement>;
