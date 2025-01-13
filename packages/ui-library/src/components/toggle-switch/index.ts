import { html, nothing } from 'lit';
import { query, state } from 'lit/decorators.js';
import { property } from '../../utils/lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { SizelessIconType } from '@boiler/icons';
import { staticStyles as staticFormStyles } from '../../foundation/semantic-tokens/form.css.js';
import { ThemeType, Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { TAG_NAME } from './renderFunction.js';
import { BlrIconRenderFunction } from '../icon/renderFunction.js';
import { calculateIconName } from '../../utils/calculate-icon-name.js';
import { getComponentConfigToken } from '../../utils/get-component-config-token.js';
import { FormSizesType } from '../../globals/types.js';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction.js';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction.js';
import { BlrFormLabelInlineRenderFunction } from '../form-label/form-label-inline/renderFunction.js';
import { staticStyles } from './index.css.js';
import {
  BlrBlurEvent,
  BlrCheckedChangeEvent,
  BlrFocusEvent,
  createBlrBlurEvent,
  createBlrCheckedChangeEvent,
  createBlrFocusEvent,
} from '../../globals/events.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';
import { ifDefined } from 'lit/directives/if-defined.js';

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
  static styles = [staticFormStyles, staticStyles];

  @query('input')
  protected accessor _checkboxNode!: HTMLInputElement;
  @property() accessor arialabel: string | undefined;
  @property() accessor label: string | undefined;
  @property() accessor onLabel!: string;
  @property() accessor offLabel!: string;

  @property() accessor toogleSwitchId!: string;
  @property() accessor name!: string;
  @property({ type: Boolean }) accessor hasLabel: boolean | undefined;
  @property({ type: Boolean }) accessor disabled: boolean | undefined;
  @property({ type: Boolean }) accessor active: boolean | undefined = undefined;

  @property({ type: Boolean }) accessor hasHint: boolean | undefined;
  @property() accessor hintMessage: string | undefined;
  @property() accessor hintMessageIcon: SizelessIconType | undefined;

  @property() accessor sizeVariant: FormSizesType | undefined = 'md';
  @property({ type: Boolean }) accessor hasStateLabel: boolean = false;

  @property() accessor toggleOnIcon: SizelessIconType | undefined = 'blrOn';
  @property() accessor toggleOffIcon: SizelessIconType | undefined = 'blrOff';

  @property() accessor theme: ThemeType = Themes[0];

  @state() protected accessor currentCheckedState: boolean | undefined = this.active;

  protected updated(changedProperties: Map<string, boolean>) {
    if (changedProperties.has('active')) {
      this.currentCheckedState = this.active || false;
    }
  }

  protected handleChange(event: Event) {
    if (!this.disabled) {
      this.currentCheckedState = !this.currentCheckedState;
      this.dispatchEvent(
        createBlrCheckedChangeEvent({
          originalEvent: event,
          checkedState: this.currentCheckedState,
        }),
      );
    }
  }

  @state() protected accessor focused = false;

  protected handleFocus = (event: FocusEvent) => {
    if (!this.disabled) {
      this.focused = true;
      this.dispatchEvent(createBlrFocusEvent({ originalEvent: event }));
    }
  };

  protected handleBlur = (event: FocusEvent) => {
    if (!this.disabled) {
      this.focused = false;
      this.dispatchEvent(createBlrBlurEvent({ originalEvent: event }));
    }
  };

  @state() protected accessor hovered = false;

  protected handleEnter = () => {
    if (!this.disabled) {
      this.hovered = true;
    }
  };

  protected handleLeave = () => {
    if (!this.disabled) {
      this.hovered = false;
    }
  };

  @state() protected accessor pressed = false;

  protected handlePress = () => {
    if (!this.disabled) {
      this.pressed = true;
      this.currentCheckedState = !this.currentCheckedState;
    }
  };

  protected handleRelease = () => {
    if (!this.disabled) {
      this.pressed = false;
    }
  };

  protected render() {
    if (this.sizeVariant) {
      const classes = classMap({
        'blr-semantic-action': true,
        'blr-label-toggleswitch': true,
        'disabled': this.disabled || false,
        [this.theme]: this.theme,
        [this.sizeVariant]: this.sizeVariant,
        [this.hasStateLabel ? 'has-state-label' : '']: this.hasStateLabel,
      });

      const wrapperClass = classMap({
        'blr-label-switch-wrapper': true,
        'checked': this.currentCheckedState || false,
        'disabled': this.disabled || false,
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
        'toggleswitch',
        'control',
        'ay11icon',
        'sizevariant',
        this.sizeVariant,
      ]) as FormSizesType;

      const captionContent = html`
        ${this.hasHint && (this.hintMessage || this.hintMessageIcon)
          ? BlrFormCaptionRenderFunction({
              variant: 'hint',
              theme: this.theme,
              sizeVariant: this.sizeVariant,
              message: this.hintMessage,
              icon: this.hintMessageIcon,
            })
          : nothing}
      `;

      return html` <div class=${classes}>
        <span class="toggle-content-col">
          ${this.hasLabel
            ? html` ${BlrFormLabelInlineRenderFunction({
                labelText: this.label || '',
                forValue: this.toogleSwitchId,
                labelSize: this.sizeVariant || 'md',
                theme: this.theme,
              })}`
            : nothing}
          ${this.hasHint && this.hintMessage
            ? BlrFormCaptionGroupRenderFunction({ theme: this.theme, sizeVariant: this.sizeVariant }, captionContent)
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
              this.handlePress();
            }
          }}
          @keyup=${(event: KeyboardEvent) => {
            if (event.code === 'Space') {
              //this.handleRelease();
            }
          }}
          tabindex="0"
        >
          <label for=${ifDefined(this.toogleSwitchId)} class=${wrapperClass}>
            <div class="${focusRingClasses}"></div>
            <input
              aria-label=${this.ariaLabel || nothing}
              type="checkbox"
              class="input-control"
              id=${ifDefined(this.toogleSwitchId)}
              name=${ifDefined(this.toogleSwitchId)}
              ?disabled=${this.disabled}
              .checked=${this.currentCheckedState === true}
              @change=${this.handleChange}
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
                },
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
                },
              )}
            </span>
          </label>
          ${this.hasStateLabel
            ? html` ${BlrFormLabelInlineRenderFunction({
                labelText: this.currentCheckedState ? this.onLabel : this.offLabel,
                forValue: this.toogleSwitchId,
                labelSize: this.sizeVariant || 'md',
                theme: this.theme,
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

export type BlrToggleSwitchType = ElementInterface<BlrToggleSwitch>;
