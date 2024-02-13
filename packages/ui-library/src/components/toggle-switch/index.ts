import { LitElement, html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { SizelessIconType } from '@boiler/icons';
import { formDark, formLight } from '../../foundation/semantic-tokens/form.css';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { TAG_NAME } from './renderFunction';
import { BlrIconRenderFunction } from '../icon/renderFunction';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { getComponentConfigToken } from '../../utils/get-component-config-token';
import { FormSizesType, IconPositionVariant } from '../../globals/types';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction';
import { BlrFormLabelInlineRenderFunction } from '../form-label/form-label-inline/renderFunction';
import { styleCustom, toggleSwitchLight, toggleSwitchDark } from './index.css';

export class BlrToggleSwitch extends LitElement {
  static styles = [styleCustom];

  @query('input')
  protected _checkboxNode!: HTMLInputElement;

  @property() label?: string;
  @property() onLabel!: string;
  @property() offLabel!: string;
  @property() showStateLabel?: boolean;
  @property() checkInputId!: string;
  @property() name!: string;

  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() checked?: boolean;

  @property() hasHint?: boolean;
  @property() hintMessage?: string;
  @property() hintIcon?: SizelessIconType;

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
    if (!this.disabled && !this.readonly) {
      this.onChange?.(event);
      this.currentCheckedState = !this.currentCheckedState;
    }
  }

  @state() protected focused = false;

  protected handleFocus = (event: FocusEvent) => {
    if (!this.disabled && !this.readonly) {
      this.focused = true;
      this.onFocus?.(event);
    }
  };

  protected handleBlur = (event: FocusEvent) => {
    if (!this.disabled && !this.readonly) {
      this.focused = false;
      this.onBlur?.(event);
    }
  };

  @state() protected hovered = false;

  protected handleEnter = () => {
    if (!this.disabled && !this.readonly) {
      this.hovered = true;
    }
  };

  protected handleLeave = () => {
    if (!this.disabled && !this.readonly) {
      this.hovered = false;
    }
  };

  @state() protected active = false;

  protected handlePress = () => {
    if (!this.disabled && !this.readonly) {
      this.active = true;
      this.currentCheckedState = !this.currentCheckedState;
    }
  };

  protected handleRelease = () => {
    if (!this.disabled && !this.readonly) {
      this.active = false;
    }
  };

  protected render() {
    if (this.size) {
      const dynamicStyles = this.theme === 'Light' ? [formLight, toggleSwitchLight] : [formDark, toggleSwitchDark];

      const classes = classMap({
        'blr-semantic-action': true,
        'blr-label-toggleswitch': true,
        'disabled': this.disabled || false,
        'readonly': this.readonly || false,
        [`${this.size}`]: this.size,
        [`${this.variant || 'leading'}`]: this.variant || 'leading',
      });

      const wrapperClass = classMap({
        'blr-label-switch-wrapper': true,
        'checked': this.currentCheckedState || false,
        'disabled': this.disabled || false,
        'readonly': this.readonly || false,
        'hover': this.hovered || false,
        'active': this.active || false,
        'focus': this.focused || false,
      });

      const toggleIconsClass = classMap({
        'toggle-icon-class': true,
      });

      const focusRingClasses = classMap({
        'focus-ring': true,
        'focus': this.focused || false,
      });

      const toggleIconSizeVariant = getComponentConfigToken([
        'Forms',
        'ToggleSwitch',
        'Control',
        'AY11Icon',
        'SizeVariant',
        this.size.toUpperCase(),
      ]).toLowerCase() as FormSizesType;

      return html`<style>
          ${dynamicStyles.map((style) => style)}
        </style>
        <div class=${classes}>
          <span class="toggle-content-col">
            ${this.label
              ? html` ${BlrFormLabelInlineRenderFunction({
                  labelText: this.label,
                  forValue: this.checkInputId,
                  labelSize: this.size || 'md',
                })}`
              : nothing}
            ${this.hasHint && this.hintMessage
              ? BlrFormCaptionRenderFunction({
                  message: this.hintMessage,
                  variant: 'hint',
                  icon: this.hintIcon,
                  size: this.size || 'sm',
                  theme: this.theme,
                })
              : nothing}
          </span>
          <div
            class="label-container"
            @mouseenter=${this.handleEnter}
            @mouseleave=${this.handleLeave}
            @mousedown=${(event: MouseEvent) => {
              if (event.which === 1) {
                //this.handlePress();
              }
            }}
            @mouseup=${this.handleRelease}
            @touchstart=${this.handlePress}
            @touchend=${this.handleRelease}
            @focusin=${this.handleFocus}
            @focusout=${this.handleBlur}
            @keydown=${(event: KeyboardEvent) => {
              if (event.code === 'Space') {
                //this.handlePress();
              }
            }}
            @keyup=${(event: KeyboardEvent) => {
              if (event.code === 'Space') {
                //this.handleRelease();
              }
            }}
            tabindex="0"
          >
            <label for=${this.checkInputId || nothing} class=${wrapperClass}>
              <div class="${focusRingClasses}"></div>
              <input
                type="checkbox"
                class="input-control"
                id=${this.checkInputId || nothing}
                name=${this.checkInputId || nothing}
                ?disabled=${this.disabled || this.readonly}
                ?readonly=${this.readonly}
                .checked=${this.currentCheckedState || nothing}
                @change=${this.handleChange}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                tabindex="-1"
              />
              <span class="toggle-switch-slider">
                <span class="knob"></span>
              </span>

              <span class="toggle-switch-unselect toggle-icon">
                ${BlrIconRenderFunction(
                  {
                    icon: calculateIconName(this.toggleOnIcon, toggleIconSizeVariant),
                    size: this.size,
                    classMap: toggleIconsClass,
                    ignoreSize: true,
                  },
                  {
                    'aria-hidden': true,
                  }
                )}
              </span>
              <span class="toggle-switch-select toggle-icon">
                ${BlrIconRenderFunction(
                  {
                    icon: calculateIconName(this.toggleOffIcon, toggleIconSizeVariant),
                    size: this.size,
                    classMap: toggleIconsClass,
                    ignoreSize: true,
                  },
                  {
                    'aria-hidden': true,
                  }
                )}
              </span>
            </label>
            ${this.variant === 'leading' && this.showStateLabel
              ? html` ${BlrFormLabelInlineRenderFunction({
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

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrToggleSwitch);
}

export type BlrToggleSwitchType = Omit<BlrToggleSwitch, keyof LitElement>;
