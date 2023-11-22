import { LitElement, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { SizelessIconType } from '@boiler/icons';

import { BlrFormLabelInline } from '../../internal-components/form-label/form-label-inline';
import { FormSizesType, IconPositionVariant } from '../../../globals/types';

import { styleCustom } from './index.css';
import { BlrFormCaptionRenderFunction } from '../../internal-components/form-caption-group/form-caption';
import { formDark, formLight } from '../../../foundation/semantic-tokens/form.css';
import { toggleSwitchDark, toggleSwitchLight } from '../../../foundation/component-tokens/toggle-switch.css';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

const TAG_NAME = 'blr-label-toggleswitch';
import { BlrIconRenderFunction } from '../../ui/icon';
import { calculateIconName } from '../../../utils/calculate-icon-name';

@customElement(TAG_NAME)
export class BlrToggleSwitch extends LitElement {
  static styles = [styleCustom];

  @query('input')
  protected _checkboxNode!: HTMLInputElement;

  @property() label?: string;
  @property() onLabel!: string;
  @property() offLabel!: string;
  @property() showStateLabel?: boolean;
  @property() checkInputId!: string;

  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() checked?: boolean;

  @property() showHint?: boolean;
  @property() hintMessage?: string;
  @property() hintIcon: SizelessIconType = 'blrInfo';

  @property() size?: FormSizesType = 'md';
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
    if (this.size) {
      const dynamicStyles = this.theme === 'Light' ? [formLight, toggleSwitchLight] : [formDark, toggleSwitchDark];

      const classes = classMap({
        'blr-semantic-action': true,
        'blr-label-toggleswitch': true,
        [`disabled`]: this.disabled || false,
        [`readonly`]: this.readonly || false,
        [`${this.size}`]: this.size,
        [`${this.variant || 'leading'}`]: this.variant || 'leading',
      });

      const wrapperClass = `blr-label-switch-wrapper ${this.isSelected ? 'wrapper-selected' : 'wrapper-unselected'}`;

      const toggleIconsClass = classMap({
        'toggle-icon-class': true,
      });

      return html`<style>
          ${dynamicStyles.map((style) => style)}
        </style>
        <div class=${classes}>
          <span class="toggle-content-col">
            ${this.label
              ? html` ${BlrFormLabelInline({
                  labelText: this.label,
                  forValue: this.checkInputId,
                  labelSize: this.size || 'md',
                })}`
              : nothing}
            ${this.showHint && this.hintMessage
              ? BlrFormCaptionRenderFunction({
                  message: this.hintMessage,
                  variant: 'hint',
                  icon: this.hintIcon,
                  size: this.size || 'sm',
                  theme: this.theme,
                })
              : nothing}
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

              <span class="toggle-switch-unselect toggle-icon">
                ${BlrIconRenderFunction({
                  icon: calculateIconName('blrOn', this.size),
                  size: this.size,
                  hideAria: true,
                  classMap: toggleIconsClass,
                })}
              </span>
              <span class="toggle-switch-select toggle-icon">
                ${BlrIconRenderFunction({
                  icon: calculateIconName('blrOff', this.size),
                  size: this.size,
                  hideAria: true,
                  classMap: toggleIconsClass,
                })}
              </span>
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
}

export type BlrToggleSwitchType = Omit<BlrToggleSwitch, keyof LitElement>;

export const BlrToggleSwitchRenderFunction = (params: BlrToggleSwitchType) =>
  genericBlrComponentRenderer<BlrToggleSwitchType>(TAG_NAME, { ...params });
