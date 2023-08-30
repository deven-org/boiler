import { LitElement, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { IconType } from '@boiler/icons';

import { BlrFormLabelInline } from '../form-label-inline';
import { FormSizesType, IconPositionVariant } from '../../globals/types';

import { styleCustom } from './index.css';
import { BlrFormHintRenderFunction } from '../internal-components/form-hint';
import { formDark, formLight } from '../../foundation/semantic-tokens/form.css';
import { toggleSwitchDark, toggleSwitchLight } from '../../foundation/component-tokens/toggleSwitch.css';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';

@customElement('blr-label-toggleswitch')
export class BlrToggleSwitch extends LitElement {
  static styles = [styleCustom];

  @query('input')
  protected _checkboxNode!: HTMLInputElement;

  @property() label?: string;
  @property() showLabel?: boolean;
  @property() onLabel!: string;
  @property() offLabel!: string;
  @property() showStateLabel?: boolean;
  @property() checkInputId!: string;

  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() checked?: boolean;

  @property() showHint = true;
  @property() hintText?: string;
  @property() hintIcon: IconType = 'blrInfoSm';

  @property() size: FormSizesType = 'md';
  @property() variant: IconPositionVariant = 'leading';

  @property() onFocus?: HTMLButtonElement['onfocus'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() onChange?: HTMLButtonElement['onchange'];

  @property() theme: ThemeType = 'Light';

  @state() isSelected = false;

  // When the property is updated, set the isSelected state to the new value
  protected updated(changedProperties: Map<string, boolean>) {
    if (changedProperties.has('checked')) {
      this.isSelected = this.checked || false;
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  protected handleChange(event: Event) {
    if (!this.disabled) {
      this.isSelected = !this.isSelected;
      this.onChange?.(event);
    }
  }

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [formLight, toggleSwitchLight] : [formDark, toggleSwitchDark];

    const classes = classMap({
      'blr-semantic-action': true,
      'blr-label-toggleswitch': true,
      [`disabled`]: this.disabled || false,
      [`readonly`]: this.readonly || false,
      [`${this.size || 'md'}`]: this.size || 'md',
      [`${this.variant || 'leading'}`]: this.variant || 'leading',
    });
    const wrapperClass = `blr-label-switch-wrapper ${this.isSelected ? 'wrapper-selected' : 'wrapper-unselected'}`;

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class=${classes}>
        <span class="toggle-content-col">
          ${this.showLabel && this.label
            ? html` ${BlrFormLabelInline({
                labelText: this.label,
                forValue: this.checkInputId,
                labelSize: this.size || 'md',
              })}`
            : html``}
          ${this.showHint
            ? html`
                ${BlrFormHintRenderFunction({
                  message: this.hintText,
                  variant: 'hint',
                  icon: this.hintIcon,
                  size: this.size || 'sm',
                  theme: this.theme,
                })}
              `
            : html``}
        </span>
        <div class="label-container">
          <label
            for=${this.checkInputId || nothing}
            class=${wrapperClass}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
          >
            <input
              type="checkbox"
              class="input-control"
              id=${this.checkInputId || nothing}
              name=${this.checkInputId || nothing}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              .checked=${this.isSelected || nothing}
              @change=${this.handleChange}
              @focus=${this.onFocus}
              @blur=${this.onBlur}
            />
            <span class="toggle-switch-slider"> </span>

            <span class="toggle-switch-unselect"></span>
            <span class="toggle-switch-select"></span>
          </label>
          ${this.variant === 'leading' && this.showStateLabel
            ? html` ${BlrFormLabelInline({
                labelText: this.isSelected ? this.onLabel : this.offLabel,
                forValue: this.checkInputId,
                labelSize: this.size || 'md',
              })}`
            : nothing}
        </div>
      </div>`;
  }
}

export type BlrToggleSwitchType = Omit<BlrToggleSwitch, keyof LitElement>;

export const BlrToggleSwitchRenderFunction = ({
  label,
  showLabel,
  onLabel,
  offLabel,
  showStateLabel,
  checkInputId,
  onBlur,
  onFocus,
  onChange,
  disabled,
  readonly,
  size,
  variant,
  checked,
  showHint,
  hintText,
  hintIcon,
  theme,
}: BlrToggleSwitchType) => {
  return html`<blr-label-toggleswitch
    .label=${label}
    .showLabel=${showLabel}
    .onLabel=${onLabel}
    .offLabel=${offLabel}
    .showStateLabel=${showStateLabel}
    .checkInputId=${checkInputId}
    .onFocus=${onFocus}
    .onBlur=${onBlur}
    .onChange=${onChange}
    .disabled=${disabled}
    .readonly=${readonly}
    .checked=${checked}
    .size=${size}
    .variant=${variant}
    .showHint=${showHint}
    .hintText=${hintText}
    .hintIcon=${hintIcon}
    .theme=${theme}
  ></blr-label-toggleswitch>`;
};
