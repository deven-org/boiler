import { html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { SizelessIconType } from '@boiler/icons';
import { formDark, formLight } from '../../foundation/semantic-tokens/form.css';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { TAG_NAME } from './renderFunction';
import { BlrIconRenderFunction } from '../icon/renderFunction';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { getComponentConfigToken } from '../../utils/get-component-config-token';
import { FormSizesType } from '../../globals/types';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction';
import { BlrFormLabelInlineRenderFunction } from '../form-label/form-label-inline/renderFunction';
import { styleCustom, toggleSwitchLight, toggleSwitchDark } from './index.css';
import {
  BlrBlurEvent,
  BlrCheckedChangeEvent,
  BlrFocusEvent,
  createBlrBlurEvent,
  createBlrCheckedChangeEvent,
  createBlrFocusEvent,
} from '../../globals/events';
import { LitElementCustom } from '../../utils/lit-element-custom';

export type BlrToggleSwitchEventHandlers = {
  blrFocus?: (event: BlrFocusEvent) => void;
  blrBlur?: (event: BlrBlurEvent) => void;
  blrCheckedChange?: (event: BlrCheckedChangeEvent) => void;
};

/**
 * @fires blrFocus ToggleSwitch received focus
 * @fires blrBlur ToggleSwitch lost focus
 * @fires blrCheckedChange ToggleSwitch state changed (currentCheckedState)
 */

export class BlrToggleSwitch extends LitElementCustom {
  static styles = [styleCustom];

  @query('input')
  protected _checkboxNode!: HTMLInputElement;
  @property() arialabel?: string;
  @property() label?: string;
  @property() onLabel!: string;
  @property() offLabel!: string;

  @property() toogleSwitchId!: string;
  @property() name!: string;
  @property() hasLabel?: boolean;
  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() active?: boolean;

  @property() hasHint?: boolean;
  @property() hintMessage?: string;
  @property() hintMessageIcon?: SizelessIconType;

  @property() sizeVariant?: FormSizesType = 'md';
  @property() hasStateLabel: boolean = false;

  @property() toggleOnIcon?: SizelessIconType = 'blrOn';
  @property() toggleOffIcon?: SizelessIconType = 'blrOff';

  @property() theme: ThemeType = 'Light';

  @state() protected currentCheckedState: boolean | undefined = this.active;

  protected updated(changedProperties: Map<string, boolean>) {
    if (changedProperties.has('active')) {
      this.currentCheckedState = this.active || false;
    }
  }

  protected handleChange(event: Event) {
    if (!this.disabled && !this.readonly) {
      this.currentCheckedState = !this.currentCheckedState;
      this.dispatchEvent(
        createBlrCheckedChangeEvent({
          originalEvent: event,
          checkedState: this.currentCheckedState,
        })
      );
    }
  }

  @state() protected focused = false;

  protected handleFocus = (event: FocusEvent) => {
    if (!this.disabled && !this.readonly) {
      this.focused = true;
      this.dispatchEvent(createBlrFocusEvent({ originalEvent: event }));
    }
  };

  protected handleBlur = (event: FocusEvent) => {
    if (!this.disabled && !this.readonly) {
      this.focused = false;
      this.dispatchEvent(createBlrBlurEvent({ originalEvent: event }));
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

  @state() protected pressed = false;

  protected handlePress = () => {
    if (!this.disabled && !this.readonly) {
      this.pressed = true;
      this.currentCheckedState = !this.currentCheckedState;
    }
  };

  protected handleRelease = () => {
    if (!this.disabled && !this.readonly) {
      this.pressed = true;
    }
  };

  protected render() {
    if (this.sizeVariant) {
      const dynamicStyles = this.theme === 'Light' ? [formLight, toggleSwitchLight] : [formDark, toggleSwitchDark];

      const classes = classMap({
        'blr-semantic-action': true,
        'blr-label-toggleswitch': true,
        'disabled': this.disabled || false,
        'readonly': this.readonly || false,
        [`${this.sizeVariant}`]: this.sizeVariant,
        [`${this.hasStateLabel ? 'has-state-label' : ''}`]: this.hasStateLabel,
      });

      const wrapperClass = classMap({
        'blr-label-switch-wrapper': true,
        'checked': this.currentCheckedState || false,
        'disabled': this.disabled || false,
        'readonly': this.readonly || false,
        'hover': this.hovered || false,
        'active': this.pressed || false,
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
        'cmp',
        'ToggleSwitch',
        'Control',
        'AY11Icon',
        'SizeVariant',
        this.sizeVariant.toUpperCase(),
      ]).toLowerCase() as FormSizesType;

      return html`<style>
          ${dynamicStyles.map((style) => style)}
        </style>
        <div class=${classes}>
          <span class="toggle-content-col">
            ${this.hasLabel
              ? html` ${BlrFormLabelInlineRenderFunction({
                  labelText: this.label || '',
                  forValue: this.toogleSwitchId,
                  labelSize: this.sizeVariant || 'md',
                })}`
              : nothing}
            ${this.hasHint && this.hintMessage
              ? BlrFormCaptionRenderFunction({
                  message: this.hintMessage,
                  variant: 'hint',
                  icon: this.hintMessageIcon,
                  sizeVariant: this.sizeVariant || 'sm',
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
            <label for=${this.toogleSwitchId || nothing} class=${wrapperClass}>
              <div class="${focusRingClasses}"></div>
              <input
                aria-label=${this.ariaLabel || nothing}
                type="checkbox"
                class="input-control"
                id=${this.toogleSwitchId || nothing}
                name=${this.toogleSwitchId || nothing}
                ?disabled=${this.disabled || this.readonly}
                ?readonly=${this.readonly}
                .checked=${this.currentCheckedState || nothing}
                @change=${this.handleChange}
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
                tabindex="-1"
              />
              <span class="toggle-switch-slider">
                <span class="knob"></span>
              </span>

              <span class="toggle-switch-unselect toggle-icon">
                ${BlrIconRenderFunction(
                  {
                    icon: calculateIconName(this.toggleOnIcon, toggleIconSizeVariant),
                    sizeVariant: this.sizeVariant,
                    classMap: toggleIconsClass,
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
                    sizeVariant: this.sizeVariant,
                    classMap: toggleIconsClass,
                  },
                  {
                    'aria-hidden': true,
                  }
                )}
              </span>
            </label>
            ${this.hasStateLabel
              ? html` ${BlrFormLabelInlineRenderFunction({
                  labelText: this.currentCheckedState ? this.onLabel : this.offLabel,
                  forValue: this.toogleSwitchId,
                  labelSize: this.sizeVariant || 'md',
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

export type BlrToggleSwitchType = Omit<BlrToggleSwitch, keyof LitElementCustom> & BlrToggleSwitchEventHandlers;
