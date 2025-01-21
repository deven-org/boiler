import { html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { query, state } from 'lit/decorators.js';
import { property } from '../../utils/lit/decorators.js';
import { staticStyles } from './index.css.js';
import { FormSizesType, SizesType } from '../../globals/types.js';
import { SizelessIconType } from '@boiler/icons';
import { staticStyles as staticFormStyles } from '../../foundation/semantic-tokens/form.css.js';
import { calculateIconName } from '../../utils/calculate-icon-name.js';
import { ThemeType, Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { getComponentConfigToken } from '../../utils/get-component-config-token.js';
import { BlrIconRenderFunction } from '../icon/renderFunction.js';
import { TAG_NAME } from './renderFunction.js';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction.js';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction.js';
import { BlrFormLabelRenderFunction } from '../form-label/renderFunction.js';
import {
  BlrBlurEvent,
  BlrFocusEvent,
  BlrSelectedValueChangeEvent,
  createBlrBlurEvent,
  createBlrFocusEvent,
  createBlrSelectedValueChangeEvent,
} from '../../globals/events.js';

import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';
import { makeSanitizer } from '../../utils/lit/sanitize.js';
import { SanitizationController } from '../../utils/lit/sanitization-controller.js';

type Options = {
  label: string;
  value: string;
  disabled?: boolean;
  selected?: boolean;
};

export type BlrSelectEventHandlers = {
  blrSelectedValueChange?: (event: BlrSelectedValueChangeEvent) => void;
  blrFocus?: (event: BlrFocusEvent) => void;
  blrBlur?: (event: BlrBlurEvent) => void;
};

const propertySanitizer = makeSanitizer((unsanitized: BlrSelect) => ({
  arialabel: unsanitized.arialabel ?? 'aria-label',
  labelAppendix: unsanitized.labelAppendix ?? '(Appendix)',
  name: unsanitized.name ?? 'Submission name',
  label: unsanitized.label ?? 'Label Text',
  sizeVariant: unsanitized.sizeVariant ?? 'md',

  theme: unsanitized.theme ?? Themes[0],
}));

/**
 * @fires blrSelectedValueChange Selected value changed
 * @fires blrFocus Select received focus
 * @fires blrBlur Select lost focus
 */
export class BlrSelect extends LitElementCustom {
  static styles = [staticFormStyles, staticStyles];

  private sanitizedController: SanitizationController<
    BlrSelect,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >;

  constructor() {
    super();
    // Initialize sanitization controller
    this.sanitizedController = new SanitizationController<
      BlrSelect,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
    >({
      host: this,
      sanitize: propertySanitizer,
    });
  }

  @query('select')
  protected accessor _selectNode!: HTMLInputElement;

  @property() accessor arialabel: string | undefined;
  @property() accessor selectId!: string;
  @property() accessor labelAppendix: string | undefined;
  @property() accessor name!: string;
  @property({ type: Boolean }) accessor hasLabel: boolean | undefined;
  @property() accessor label!: string | undefined;
  @property({ type: Boolean }) accessor disabled: boolean | undefined;
  @property() accessor sizeVariant: FormSizesType | undefined;
  @property({ type: Boolean }) accessor required: boolean | undefined;
  @property({ type: Boolean }) accessor hasError: boolean | undefined;
  @property() accessor errorMessage: string | undefined;
  @property() accessor hintMessage: string | undefined;
  @property() accessor hintMessageIcon: SizelessIconType | undefined;
  @property() accessor errorMessageIcon: SizelessIconType | undefined;
  @property({ type: Boolean }) accessor hasHint: boolean | undefined;
  @property() accessor icon: SizelessIconType | undefined;
  @property() accessor theme: ThemeType | undefined;
  @property({ type: Array }) accessor options!: Options[] | JSON;
  @state() protected accessor isFocused = false;

  protected handleFocus = (event: FocusEvent) => {
    if (!this.disabled) {
      this.isFocused = true;
      this.dispatchEvent(createBlrFocusEvent({ originalEvent: event }));
    }
  };

  protected handleBlur = (event: FocusEvent) => {
    if (!this.disabled) {
      this.isFocused = false;
      this.dispatchEvent(createBlrBlurEvent({ originalEvent: event }));
    }
  };

  protected handleChange(event: Event) {
    this.dispatchEvent(
      createBlrSelectedValueChangeEvent({ originalEvent: event, selectedValue: this._selectNode.value }),
    );
  }
  protected get sanitized() {
    return this.sanitizedController.values;
  }

  protected renderIcon() {
    const sanitized = this.sanitized;
    const classes = classMap({
      'icon-direction-indicator': true,
      [sanitized.sizeVariant]: sanitized.sizeVariant,
      [sanitized.theme]: sanitized.theme,
    });

    if (sanitized.sizeVariant && this.icon) {
      const iconSizeVariant = getComponentConfigToken([
        'sem',
        'forms',
        'inputfield',
        'icon',
        'sizevariant',
        sanitized.sizeVariant,
      ]).toLowerCase() as SizesType;

      return BlrIconRenderFunction(
        {
          icon: calculateIconName(this.icon, iconSizeVariant),
          sizeVariant: iconSizeVariant,
          classMap: classes,
          fillParent: false,
          theme: sanitized.theme,
        },
        {
          'aria-hidden': true,
        },
      );
    }
  }

  protected renderCaptionContent() {
    const sanitized = this.sanitized;
    return html`
      ${this.hasHint && (this.hintMessage || this.hintMessageIcon)
        ? BlrFormCaptionRenderFunction({
            variant: 'hint',
            theme: sanitized.theme,
            sizeVariant: sanitized.sizeVariant,
            message: this.hintMessage,
            icon: this.hintMessageIcon,
          })
        : nothing}
      ${this.hasError && (this.errorMessage || this.errorMessageIcon)
        ? BlrFormCaptionRenderFunction({
            variant: 'error',
            theme: sanitized.theme,
            sizeVariant: sanitized.sizeVariant,
            message: this.errorMessage,
            icon: this.errorMessageIcon,
          })
        : nothing}
    `;
  }

  protected render() {
    const sanitized = this.sanitized;
    if (sanitized.sizeVariant) {
      const selectClasses = classMap({
        'blr-form-select': true,
        'error': this.hasError || false,
        'error-select': this.hasError || false,
        [sanitized.sizeVariant]: sanitized.sizeVariant,
        'disabled': this.disabled || false,
        'focus': this.isFocused || false,
        [sanitized.theme]: sanitized.theme,
      });

      return html`
        <div class="blr-select ${sanitized.sizeVariant} ${sanitized.theme}">
          ${this.hasLabel
            ? html`
                <div class="label-wrapper">
                  ${BlrFormLabelRenderFunction({
                    label: sanitized.label,
                    labelAppendix: sanitized.labelAppendix,
                    sizeVariant: sanitized.sizeVariant,
                    forValue: this.selectId,
                    theme: sanitized.theme,
                    hasError: Boolean(this.hasError),
                  })}
                </div>
              `
            : nothing}
          <div class="select-wrapper">
            <select
              aria-label=${sanitized.ariaLabel || nothing}
              class=${selectClasses}
              id=${this.selectId ? this.selectId : ''}
              name=${sanitized.name ? sanitized.name : ''}
              ?disabled=${this.disabled}
              ?required=${this.required}
              @input=${this.handleChange}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            >
              ${(typeof this.options === 'string' ? JSON.parse(this.options) : this.options).map((opt: Options) => {
                return html`
                  <option
                    class="blr-select-option"
                    value=${opt.value || ''}
                    ?selected=${opt.selected ?? false}
                    ?disabled=${opt.disabled ?? false}
                  >
                    ${opt.label}
                  </option>
                `;
              })}
            </select>
            ${this.renderIcon()}
          </div>
          ${(this.hasHint && this.hintMessage) || (this.hasError && this.errorMessage)
            ? BlrFormCaptionGroupRenderFunction(
                { theme: sanitized.theme, sizeVariant: sanitized.sizeVariant },
                this.renderCaptionContent(),
              )
            : nothing}
        </div>
      `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrSelect);
}

export type BlrSelectType = ElementInterface<BlrSelect>;
