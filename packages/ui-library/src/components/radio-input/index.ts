import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { InputSizesType, RadioOption } from '../../globals/types';
import { form } from '../../foundation/semantic-tokens/form.css';
import { radio } from '../../foundation/component-tokens/radio.css';
import { BlrFormLabelInline } from '../form-label-inline';
import { BlrFormHint } from '../internal-components/form-hint';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { IconType } from '@boiler/icons';

@customElement('blr-radio')
export class BlrRadio extends LitElement {
  static styles = [styleCustom, form, radio];

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
  @property() errorIcon?: IconType;
  @property() option!: RadioOption;
  @property() showHint?: boolean;
  @property() hintIcon?: IconType;

  protected render() {
    const classes = classMap({
      [`${this.size}`]: this.size || 'md',
      [`disabled`]: this.disabled || false,
      [`readonly`]: this.readonly || false,
      [`checked`]: this.checked || this.option.checked || false,
      [`error`]: this.hasError || false,
    });

    const calculateOptionId = (label: string) => {
      return label ? label.replace(/ /g, '_').toLowerCase() : '';
    };

    const id = this.option.label ? calculateOptionId(this.option.label) : '';

    return html`
      <div class="blr-radio ${classes}">
        <input
          id=${id || nothing}
          class="${classes} input-control"
          type="radio"
          name=${this.name}
          value=${this.option.value || nothing}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?aria-disabled=${this.disabled}
          invalid=${this.hasError}
          ?aria-invalid=${this.hasError}
          ?checked=${this.checked}
          ?required=${this.required}
          @input=${this.onChange}
          @blur=${this.onBlur}
          @focus=${this.onFocus}
        />
        <div class="label-wrapper">
          ${this.option.label
            ? html`${BlrFormLabelInline({ labelText: this.option.label, forValue: this.id, labelSize: this.size })}`
            : nothing}
          ${this.showHint
            ? html`
                <div class="hint-wrapper">
                  ${BlrFormHint({
                    message: this.option.hintMessage,
                    variant: 'hint',
                    size: this.size,
                    iconName: this.hintIcon ? calculateIconName(this.hintIcon, this.size) : '',
                  })}
                </div>
              `
            : html``}
          ${this.hasError
            ? html`
                <div class="error-wrapper">
                  ${BlrFormHint({
                    message: this.option.errorMessage,
                    variant: 'error',
                    size: this.size,
                    iconName: this.errorIcon ? calculateIconName(this.errorIcon, this.size) : '',
                  })}
                </div>
              `
            : html``}
        </div>
      </div>
    `;
  }
}

export type BlrRadioType = Omit<BlrRadio, keyof LitElement>;

export const BlrRadioRenderFunction = ({
  disabled,
  checked,
  size,
  name,
  required,
  readonly,
  onChange,
  onBlur,
  onFocus,
  hasError,
  option,
  showHint,
  hintIcon,
  errorIcon,
}: BlrRadioType) => {
  return html`<blr-radio
    class="example-layout-class"
    .value=${option.value}
    .name=${name}
    .disabled=${disabled}
    .checked=${checked}
    .required=${required}
    .readonly=${readonly}
    .size=${size}
    .hasError=${hasError}
    .errorMessage=${option.errorMessage}
    .errorIcon=${errorIcon}
    .onChange=${onChange}
    .onBlur=${onBlur}
    .onFocus=${onFocus}
    .option=${option}
    .showHint=${showHint}
    .hintIcon=${hintIcon}
  ></blr-radio>`;
};
