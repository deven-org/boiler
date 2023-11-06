import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { formDark, formLight } from '../../../../foundation/semantic-tokens/form.css';
import { radioDark, radioLight } from '../../../../foundation/component-tokens/radio.css';
import { InputSizesType, RadioOption } from '../../../../globals/types';
import { BlrFormLabelInline } from '../../../internal-components/form-label/form-label-inline';
import { BlrFormHintRenderFunction } from '../../../internal-components/form-hint';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../../../utils/typesafe-generic-component-renderer';

const TAG_NAME = 'blr-radio-group';

@customElement(TAG_NAME)
export class BlrRadioGroup extends LitElement {
  static styles = [styleCustom];

  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() checked?: boolean;
  @property() name?: string;
  @property() size: InputSizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() hasError?: boolean;
  @property() errorIcon?: SizelessIconType;
  @property() hideLabel!: boolean;
  @property() options!: RadioOption[];
  @property() layout!: boolean;
  @property() showHint = true;
  @property() hintIcon: SizelessIconType = 'blrInfoSm';
  @property() errorMessage?: string;
  @property() showGroupErrorMessage = true;
  @property() groupErrorMessage?: string;
  @property() groupHintMessage?: string;
  @property() groupErrorIcon?: SizelessIconType;
  @property() showLegend?: boolean = true;

  @property() theme: ThemeType = 'Light';

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [formLight, radioLight] : [formDark, radioDark];

    const legendClasses = classMap({
      'blr-legend': true,
      [`${this.size}`]: this.size || 'md',
      'error': this.hasError || false,
    });

    const legendWrapperClasses = classMap({
      'blr-legend-wrapper': true,
      [`${this.size}`]: this.size || 'md',
    });

    const classes = classMap({
      [`${this.size}`]: this.size || 'md',
      disabled: this.disabled || false,
      readonly: this.readonly || false,
      checked: this.checked || false,
      error: this.hasError || false,
      [`${this.layout}`]: this.layout,
    });

    const calculateOptionId = (label: string) => {
      return label.replace(/ /g, '_').toLowerCase();
    };

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      ${this.showLegend
        ? html`<div class="${legendWrapperClasses}"><legend class="${legendClasses}">Choose any option</legend></div>`
        : nothing}

      <div class="blr-radio-group ${classes}">
        ${this.options &&
        this.options.map((option: RadioOption) => {
          const id = calculateOptionId(option.label);
          return html`
            <div class="blr-radio ${classes}">
              <input
                id=${id || nothing}
                class="${classes} input-control"
                type="radio"
                name=${this.name}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                ?aria-disabled=${this.disabled}
                ?invalid=${this.hasError}
                ?aria-invalid=${this.hasError}
                ?checked=${this.checked}
                ?required=${this.required}
                @input=${this.onChange}
                @blur=${this.onBlur}
                @focus=${this.onFocus}
              />
              <div class="label-wrapper">
                ${option.label
                  ? html`${BlrFormLabelInline({ labelText: option.label, forValue: id, labelSize: this.size })}`
                  : nothing}
              </div>
            </div>
          `;
        })}
      </div>

      ${this.showHint || this.hasError
        ? html` <div class="caption-group ${classes}">
            ${this.showHint
              ? html`
                  ${BlrFormHintRenderFunction({
                    message: this.groupHintMessage || '',
                    variant: 'hint',
                    size: this.size,
                    icon: this.hintIcon ? this.hintIcon : undefined,
                    theme: this.theme,
                  })}
                `
              : nothing}
            ${this.hasError
              ? html`
                  ${BlrFormHintRenderFunction({
                    message: this.groupErrorMessage || '',
                    variant: 'error',
                    size: this.size,
                    icon: this.groupErrorIcon ? this.groupErrorIcon : undefined,
                    theme: this.theme,
                  })}
                `
              : nothing}
          </div>`
        : nothing} `;
  }
}

export type BlrRadioGroupType = Omit<BlrRadioGroup, keyof LitElement>;

export const BlrRadioGroupRenderFunction = (params: BlrRadioGroupType) =>
  genericBlrComponentRenderer<BlrRadioGroupType>(TAG_NAME, { ...params });
