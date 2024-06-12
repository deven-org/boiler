import { html, nothing } from 'lit';
import { state } from 'lit/decorators.js';
import { property } from '../../../utils/lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { staticStyles } from './index.css.js';
import { TAG_NAME } from './renderFunction.js';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes.js';
import { staticStyles as staticSharedStyles } from '../../../foundation/component-tokens/slider-legend.css.js';
import { FormSizesType, ActionVariantType, RenderBtnProps } from '../../../globals/types.js';
import {
  findPercentage,
  generateRangeBar,
  findNearestValue,
  setOnclickValue,
} from '../../../utils/range-slider-utils.js';
import { BlrButtonIconRenderFunction } from '../../button-icon/renderFunction.js';
import { LitElementCustom, ElementInterface } from '../../../utils/lit/element.js';

export class BlrRangeMinMaxSlider extends LitElementCustom {
  static styles = [staticSharedStyles, staticStyles];

  @property() accessor onBtnClick: ((min: number, max: number) => void) | undefined = undefined;
  @property() accessor onChange!: (minVal: number, maxVal: number, event: Event) => HTMLButtonElement['onchange'];

  @property() accessor rangeInputId!: string;

  @property({ type: Number }) accessor startValue!: number;
  @property({ type: Number }) accessor endValue!: number;
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

  @property() accessor theme: ThemeType = 'Light';

  @property({ type: Boolean }) accessor isUpdated: boolean | undefined = false;

  @state() protected accessor startValueToSlider = 0;
  @state() protected accessor endValueToSlider = 0;

  protected updated(changedProperties: Map<string, number>) {
    if ((changedProperties.has('startValueToSlider') || changedProperties.has('endValueToSlider')) && !this.isUpdated) {
      this.startValueToSlider = findPercentage(this.minValue, this.maxValue, this.startValue);
      this.endValueToSlider = findPercentage(this.minValue, this.maxValue, this.endValue);
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
    const isMinLesserThanMax = this.startValueToSlider <= this.endValueToSlider;

    const rangeStyle = generateRangeBar(
      this.theme,
      this.startValueToSlider,
      this.endValueToSlider,
      this.disabled,
      'twoKnob',
      isMinLesserThanMax
    );

    const dynamicStyles = [rangeStyle];

    const showValue = (isMaxValue: boolean) => (event: Event) => {
      const value = Number((event.target as HTMLInputElement).value);

      if (isMaxValue) {
        this.endValueToSlider = value;
        this.endValue = findNearestValue(this.minValue, this.maxValue, value);
      } else {
        this.startValueToSlider = value;
        this.startValue = findNearestValue(this.minValue, this.maxValue, value);
      }

      const startVal = isMinLesserThanMax ? this.startValue : this.endValue;
      const endVal = isMinLesserThanMax ? this.endValue : this.startValue;
      this.onChange?.(startVal, endVal, event);
    };

    const setValue = (btnType: string, isMaxValue: boolean) => {
      const valueToSlider = isMaxValue ? this.endValueToSlider : this.startValueToSlider;
      const modifiedValue = setOnclickValue(valueToSlider, this.stepFactor, btnType);

      if (modifiedValue !== undefined) {
        if (isMaxValue) {
          this.endValueToSlider = modifiedValue;
          this.endValue = findNearestValue(this.minValue, this.maxValue, modifiedValue);
        } else {
          this.startValueToSlider = modifiedValue;
          this.startValue = findNearestValue(this.minValue, this.maxValue, modifiedValue);
        }
      }

      const startVal = isMinLesserThanMax ? this.startValue : this.endValue;
      const endVal = isMinLesserThanMax ? this.endValue : this.startValue;
      return this.onBtnClick?.(startVal, endVal);
    };

    const classes = classMap({
      'blr-semantic-action': true,
      'blr-slider': true,
      [this.size || 'md']: this.size || 'md',
      [this.theme]: this.theme,
    });

    const inlineLegendStyles = classMap({
      'inline-legend': true,
      'inline-legend-disabled': this.disabled || false,
    });

    const barClasses = classMap({
      'range__bar': true,
      'blr-slider-bar': true,
      'bar-disabled': this.disabled || false,
      [this.theme]: this.theme,
    });

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class=${classes}>
        <fieldset class="range__field">
          <div class="input-wrapper ${this.theme}">
            <div class="min-max-btnwrapper">
              ${this.renderBtn({
                btnId: 'inc_btn_min',
                btnEventHandler: () => setValue('INC', !isMinLesserThanMax),
                iconName: this.incrementIcon,
              })}
              ${this.renderBtn({
                btnId: 'dec_btn_min',
                btnEventHandler: () => setValue('DEC', !isMinLesserThanMax),
                iconName: this.decrementIcon,
              })}
            </div>
            ${this.showLegend
              ? html`<div class=${inlineLegendStyles}>
                  <p>${this.minValue} ${this.units}</p>
                </div>`
              : nothing}
            <div class="range-wrapper">
              <input
                id=${this.rangeInputId ? `${this.rangeInputId}-1` : `rangeInputId-1`}
                type="range"
                min="0"
                .value=${this.startValueToSlider}
                max="100"
                step="${this.stepFactor}"
                class="range ${this.theme}"
                @input=${showValue(false)}
                ?disabled=${this.disabled}
              />
              <input
                id=${this.rangeInputId ? `${this.rangeInputId}-2` : `rangeInputId-2`}
                type="range"
                min="0"
                .value=${this.endValueToSlider}
                max="100"
                step="${this.stepFactor}"
                class="range ${this.theme}"
                @input=${showValue(true)}
                ?disabled=${this.disabled}
              />

              <div id="tooltip1" class="tooltip" style="left:${this.startValueToSlider}%">
                ${this.startValue} ${this.units}
              </div>
              <div id="tooltip2" class="tooltip" style="left:${this.endValueToSlider}%">
                ${this.endValue} ${this.units}
              </div>
              <div class=${barClasses}></div>
            </div>
            ${this.showLegend
              ? html`<div class=${inlineLegendStyles}>
                  <p>${this.maxValue} ${this.units}</p>
                </div>`
              : nothing}
            <div class="min-max-btnwrapper">
              ${this.renderBtn({
                btnId: 'inc_btn_max',
                btnEventHandler: () => setValue('INC', isMinLesserThanMax),
                iconName: this.incrementIcon,
              })}
              ${this.renderBtn({
                btnId: 'dec_btn_max',
                btnEventHandler: () => setValue('DEC', isMinLesserThanMax),
                iconName: this.decrementIcon,
              })}
            </div>
          </div>
        </fieldset>
      </div>`;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrRangeMinMaxSlider);
}

export type BlrRangeMinMaxSliderType = ElementInterface<BlrRangeMinMaxSlider>;
