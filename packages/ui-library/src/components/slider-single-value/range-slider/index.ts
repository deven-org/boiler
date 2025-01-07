import { html, nothing } from 'lit';
import { state } from 'lit/decorators.js';
import { property } from '../../../utils/lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { staticStyles } from './index.css.js';
import { staticStyles as staticSharedStyles } from '../../../foundation/component-tokens/slider.css.js';
import { FormSizesType, ActionVariantType, RenderBtnProps } from '../../../globals/types.js';

import { TAG_NAME } from './renderFunction.js';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType, Themes } from '../../../foundation/_tokens-generated/index.themes.js';
import {
  findPercentage,
  generateRangeBar,
  setOnclickValue,
  findNearestValue,
} from '../../../utils/range-slider-utils.js';
import { BlrButtonIconRenderFunction } from '../../button-icon/renderFunction.js';
import { LitElementCustom, ElementInterface } from '../../../utils/lit/element.js';

export class BlrRangeSlider extends LitElementCustom {
  static styles = [staticSharedStyles, staticStyles];

  @property() accessor onClickMinMax: ((param: number) => void) | undefined = undefined;
  @property() accessor onChange!: (val: number, event: Event) => HTMLButtonElement['onchange'];

  @property() accessor rangeInputId!: string;

  @property({ type: Number }) accessor initialValue!: number;
  @property({ type: Number }) accessor minValue!: number;
  @property({ type: Number }) accessor maxValue!: number;
  @property() accessor units: string | undefined = '';
  @property({ type: Number }) accessor stepFactor!: number;

  @property() accessor size: FormSizesType = 'md';
  @property() accessor btnVariant: ActionVariantType = 'silent';

  @property() accessor incrementIcon!: SizelessIconType;
  @property() accessor decrementIcon!: SizelessIconType;

  @property({ type: Boolean }) accessor showLegend: boolean | undefined = true;
  @property({ type: Boolean }) accessor disabled: boolean | undefined = false;

  @property() accessor theme: ThemeType = Themes[0];

  @property({ type: Boolean }) accessor isUpdated: boolean | undefined = false;

  @state() protected accessor valueToSlider = 0;

  protected updated(changedProperties: Map<string, number>) {
    if (changedProperties.has('valueToSlider') && !this.isUpdated) {
      this.valueToSlider = findPercentage(this.minValue, this.maxValue, this.initialValue);
      this.isUpdated = true;
    }
  }

  protected renderBtn = ({ btnId, btnEventHandler, iconName }: RenderBtnProps) =>
    html` ${BlrButtonIconRenderFunction({
      arialabel: btnId,
      blrClick: btnEventHandler,
      icon: iconName,
      loading: false,
      disabled: this.disabled || false,
      buttonIconId: btnId,
      variant: this.btnVariant,
      sizeVariant: this.size,
      theme: this.theme,
    })}`;

  protected render() {
    const dynamicStyles = [generateRangeBar(this.theme, this.valueToSlider, 0, this.disabled)];

    const classes = classMap({
      'blr-semantic-action': true,
      'blr-slider': true,
      [this.size || 'md']: this.size || 'md',
      [this.theme]: this.theme,
    });

    const setValue = (btnType: string) => {
      const modifiedValue = setOnclickValue(this.valueToSlider, this.stepFactor, btnType);
      if (modifiedValue !== undefined) {
        this.valueToSlider = modifiedValue;
        this.initialValue = findNearestValue(this.minValue, this.maxValue, modifiedValue);
      }

      return this.onClickMinMax?.(this.initialValue);
    };

    const showVal = (event: Event) => {
      const value = Number((event.target as HTMLInputElement).value);
      this.valueToSlider = value;
      this.initialValue = findNearestValue(this.minValue, this.maxValue, this.valueToSlider);

      this.onChange?.(this.initialValue, event);
    };

    const inlineLegendStyles = classMap({
      'inline-legend': true,
      'inline-legend-disabled': this.disabled || false,
    });

    const barClasses = `range__bar blr-slider-bar ${this.disabled ? `bar-disabled` : ``}`;

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class=${classes}>
        <fieldset class="range__field">
          <div class="input-wrapper">
            ${this.renderBtn({
              btnId: 'dec_btn',
              btnEventHandler: () => setValue('DEC'),
              iconName: this.decrementIcon,
            })}
            ${this.showLegend
              ? html`<div class=${inlineLegendStyles}><p>${this.minValue} ${this.units}</p></div>`
              : nothing}
            <div class="range-wrapper">
              <input
                id=${this.rangeInputId || 'rangeInputId'}
                type="range"
                min="0"
                .value="${String(this.valueToSlider)}"
                max="100"
                step="${this.stepFactor}"
                class="range"
                ?disabled=${this.disabled}
                @change=${showVal}
                @input=${showVal}
              />
              <div id="tooltip" class="tooltip" style="left:${this.valueToSlider}%">
                ${this.initialValue} ${this.units}
              </div>
              <div class=${barClasses}></div>
            </div>
            ${this.showLegend
              ? html`<div class=${inlineLegendStyles}><p>${this.maxValue} ${this.units}</p></div>`
              : nothing}
            ${this.renderBtn({
              btnId: 'inc_btn',
              btnEventHandler: () => setValue('INC'),
              iconName: this.incrementIcon,
            })}
          </div>
        </fieldset>
      </div>`;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrRangeSlider);
}

export type BlrRangeSliderType = ElementInterface<BlrRangeSlider>;
