import { LitElement, html, nothing } from 'lit';
import { ClassMapDirective, classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { FormSizesType, SizesType } from '../../../globals/types';
import { BlrFormLabelRenderFunction } from '../../internal-components/form-label';
import { selectInputLight, selectInputDark } from '../../../foundation/component-tokens/select.css';
import { SizelessIconType } from '@boiler/icons';
import { formDark, formLight } from '../../../foundation/semantic-tokens/form.css';
import { calculateIconName } from '../../../utils/calculate-icon-name';
import { DirectiveResult } from 'lit-html/directive';
import { BlrIconRenderFunction } from '../../ui/icon';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { getComponentConfigToken } from '../../../utils/get-component-config-token';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

import { BlrFormCaptionGroupRenderFunction } from '../../internal-components/form-caption-group';
import { BlrFormCaptionRenderFunction } from '../../internal-components/form-caption-group/form-caption';

type Option = {
  value: string;
  label: string;
  selected?: boolean;
  disabled?: boolean;
};

const TAG_NAME = 'blr-select';

@customElement(TAG_NAME)
export class BlrSelect extends LitElement {
  static styles = [styleCustom];

  @property() arialabel?: string;
  @property() selectId!: string;
  @property() labelAppendix?: string;
  @property() name!: string;
  @property() label?: string;
  @property() disabled?: boolean;
  @property() size: FormSizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: (event: Event) => void;
  @property() onBlur?: (event: Event) => void;
  @property() onFocus?: (event: Event) => void;
  @property({ type: Array }) options: Option[] = [];
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() hintMessage?: string;
  @property() hintIcon: SizelessIconType = 'blrInfoSm';
  @property() errorIcon?: SizelessIconType = 'blr360Sm';
  @property() showHint?: boolean;
  @property() icon?: SizelessIconType = 'blrChevronDown';

  @property() theme: ThemeType = 'Light';

  protected renderIcon(classes: DirectiveResult<typeof ClassMapDirective>) {
    const iconSizeVariant = getComponentConfigToken([
      'SizeVariant',
      'Forms',
      this.size.toUpperCase(),
      'InputField',
      'Icon',
    ]).toLowerCase() as SizesType;

    if (this.hasError) {
      return BlrIconRenderFunction({
        icon: calculateIconName('blrErrorFilled', iconSizeVariant),
        size: iconSizeVariant,
        classMap: classes,
        hideAria: true,
        disablePointerEvents: true,
      });
    } else {
      const modifiedIcon = this.icon ? this.icon : 'blrChevronDown';
      return BlrIconRenderFunction({
        icon: calculateIconName(modifiedIcon, iconSizeVariant),
        size: iconSizeVariant,
        classMap: classes,
        hideAria: true,
        disablePointerEvents: true,
      });
    }
  }

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [formLight, selectInputLight] : [formDark, selectInputDark];

    const inputClasses = classMap({
      'error': this.hasError || false,
      'error-input': this.hasError || false,
      [this.size]: this.size,
      'disabled': this.disabled || false,
    });

    const iconClasses = classMap({
      'blr-input-icon': true,
      [this.size]: this.size,
    });

    const captionContent = html`
    ${this.showHint ? 
      BlrFormCaptionRenderFunction({
        variant: 'hint',
        theme: this.theme,
        size: this.size,
        message: this.hintMessage,
        icon: this.hintIcon
      })
    : nothing}

    ${this.hasError ?
      BlrFormCaptionRenderFunction({
        variant: 'error',
        theme: this.theme,
        size: this.size,
        message: this.errorMessage,
        icon: this.errorIcon
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
              @focus=${this.onFocus}
              @blur=${this.onBlur}
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
        ${this.showHint || this.hasError
          ?
          BlrFormCaptionGroupRenderFunction({size: this.size}, captionContent)
          : nothing}
      </div>
    `;
  }
}

export type BlrSelectType = Omit<BlrSelect, keyof LitElement>;

export const BlrSelectRenderFunction = (params: BlrSelectType) =>
  genericBlrComponentRenderer<BlrSelectType>(TAG_NAME, { ...params });
