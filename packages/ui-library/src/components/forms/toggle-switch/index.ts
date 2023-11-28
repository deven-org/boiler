/* eslint-disable no-console */
import { LitElement, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { SizelessIconType } from '@boiler/icons';

import { BlrFormLabelInline } from '../../internal-components/form-label/form-label-inline';
import { FormSizesType, IconPositionVariant } from '../../../globals/types';

import { styleCustom, toggleSwitchDark, toggleSwitchLight } from './index.css';
import { BlrFormHintRenderFunction } from '../../internal-components/form-hint';
import { formDark, formLight } from '../../../foundation/semantic-tokens/form.css';

import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

const TAG_NAME = 'blr-label-toggleswitch';
import { BlrIconRenderFunction } from '../../ui/icon';
import { calculateIconName } from '../../../utils/calculate-icon-name';
import { getComponentConfigToken } from '../../../utils/get-component-config-token';

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
  @property() hintText?: string;
  @property() hintIcon: SizelessIconType = 'blrInfo';

  @property() size?: FormSizesType = 'md';
  @property() variant: IconPositionVariant = 'leading';

  @property() toggleOnIcon?: SizelessIconType = 'blrOn';
  @property() toggleOffIcon?: SizelessIconType = 'blrOff';

  @property() onFocus?: HTMLButtonElement['onfocus'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() onChange?: HTMLButtonElement['onchange'];

  @property() theme: ThemeType = 'Light';

  @state() protected currentCheckedState: boolean | undefined = this.checked;

  protected updated(changedProperties: Map<string, boolean>) {
    if (changedProperties.has('checked')) {
      this.currentCheckedState = this.checked || false;
    }
  }

  protected handleChange(event: Event) {
    if (!this.disabled) {
      this.onChange?.(event);
      this.currentCheckedState = !this.currentCheckedState;
      console.log('change', this.currentCheckedState);
    }
  }

  @state() protected focused = false;

  protected handleFocus = (event: FocusEvent) => {
    this.focused = true;
    this.onFocus?.(event);
  };

  protected handleBlur = (event: FocusEvent) => {
    this.focused = false;
    this.onBlur?.(event);
  };

  @state() protected hovered = false;

  protected handleEnter = () => {
    this.hovered = true;
    console.log('hovered', this.hovered);
  };

  protected handleLeave = () => {
    this.hovered = false;
    console.log('hovered', this.hovered);
  };

  @state() protected active = false;

  protected handlePress = () => {
    this.active = true;
    this.currentCheckedState = !this.currentCheckedState;
    console.log('active', this.active);
  };

  protected handleRelease = () => {
    this.active = false;
    console.log('active', this.active);
  };

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

      const wrapperClass = classMap({
        'blr-label-switch-wrapper': true,
        'checked': this.currentCheckedState || false,
      });

      const toggleIconsClass = classMap({
        'toggle-icon-class': true,
      });

      const toggleIconSizeVariant = getComponentConfigToken([
        'Forms',
        'Checkbox',
        'Control',
        'Icon',
        'SizeVariant',
        this.size.toUpperCase(),
      ]).toLowerCase() as FormSizesType;

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
            ${this.showHint && this.hintText
              ? html`
                  ${BlrFormHintRenderFunction({
                    message: this.hintText,
                    variant: 'hint',
                    icon: this.hintIcon,
                    size: this.size || 'sm',
                    theme: this.theme,
                  })}
                `
              : nothing}
          </span>
          <div class="label-container">
            <label for=${this.checkInputId || nothing} class=${wrapperClass}>
              <input
                type="checkbox"
                class="input-control"
                id=${this.checkInputId || nothing}
                name=${this.checkInputId || nothing}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                .checked=${this.currentCheckedState || nothing}
                @change=${this.handleChange}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
              />
              <span class="toggle-switch-slider"> </span>

              <span class="toggle-switch-unselect toggle-icon">
                ${BlrIconRenderFunction({
                  icon: calculateIconName(this.toggleOnIcon, toggleIconSizeVariant),
                  size: this.size,
                  hideAria: true,
                  classMap: toggleIconsClass,
                })}
              </span>
              <span class="toggle-switch-select toggle-icon">
                ${BlrIconRenderFunction({
                  icon: calculateIconName(this.toggleOffIcon, toggleIconSizeVariant),
                  size: this.size,
                  hideAria: true,
                  classMap: toggleIconsClass,
                })}
              </span>
            </label>
            ${this.variant === 'leading' && this.showStateLabel
              ? html` ${BlrFormLabelInline({
                  labelText: this.currentCheckedState ? this.onLabel : this.offLabel,
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
