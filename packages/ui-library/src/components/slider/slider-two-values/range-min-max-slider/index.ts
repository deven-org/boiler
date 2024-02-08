import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleCustom } from './index.css';
import { sliderDark, sliderLight } from '../../../../foundation/component-tokens/slider.css';
import { FormSizesType, ActionVariantType } from '../../../../globals/types';
import {
  findNearestValue,
  findPercentage,
  generateRangeBar,
  setOnclickValue,
} from '../../../../utils/range-slider-utils';

import { BlrIconButtonRenderFunction } from '../../../buttons/icon-button/renderFunction';
import { RenderBtnProps } from '../../../../globals/types';

import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../../../foundation/_tokens-generated/index.themes';

import { TAG_NAME } from './renderFunction';

@customElement(TAG_NAME)
export class BlrRangeMinMaxSlider extends LitElement {
  static styles = [styleCustom];

  @property() onBtnClick?: (min: number, max: number) => void;
  @property() onChange!: (minVal: number, maxVal: number, event: Event) => HTMLButtonElement['onchange'];

  @property() rangeInputId!: string;

  @property() startValue!: number;
  @property() endValue!: number;
  @property() minValue!: number;
  @property() maxValue!: number;
  @property() units?: string = '';
  @property() stepFactor!: number;

  @property() size: FormSizesType = 'md';
  @property() btnVariant: ActionVariantType = 'silent';

  @property() incrementIcon!: SizelessIconType;
  @property() decrementIcon!: SizelessIconType;

  @property() showLegend?: boolean = true;
  @property() disabled?: boolean = false;

  @property() theme: ThemeType = 'Light';

  @property({ type: Boolean }) isUpdated? = false;

  @state() protected startValueToSlider = 0;
  @state() protected endValueToSlider = 0;

  protected updated(changedProperties: Map<string, number>) {
    if ((changedProperties.has('startValueToSlider') || changedProperties.has('endValueToSlider')) && !this.isUpdated) {
      this.startValueToSlider = findPercentage(this.minValue, this.maxValue, this.startValue);
      this.endValueToSlider = findPercentage(this.minValue, this.maxValue, this.endValue);
      this.isUpdated = true;
    }
  }

  protected renderBtn = ({ btnId, btnEventHandler, iconName }: RenderBtnProps) =>
    html` ${BlrIconButtonRenderFunction({
      arialabel: btnId,
      blrClick: btnEventHandler,
      icon: iconName,
      loading: false,
      disabled: this.disabled || false,
      buttonId: btnId,
      variant: this.btnVariant,
      size: this.size,
      loadingStatus: 'Loading',
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

    const generatedStyles = this.theme === 'Light' ? [sliderLight] : [sliderDark];
    const dynamicStyles = [...generatedStyles, ...rangeStyle];

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
      [`${this.size || 'md'}`]: this.size || 'md',
    });

    const inlineLegendStyles = classMap({
      'inline-legend': true,
      'inline-legend-disabled': this.disabled || false,
    });

    const barClasses = classMap({
      'range__bar': true,
      'blr-slider-bar': true,
      'bar-disabled': this.disabled || false,
    });

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class=${classes}>
        <fieldset class="range__field">
          <div class="input-wrapper">
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
                class="range"
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
                class="range"
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

export type BlrRangeMinMaxSliderType = Omit<BlrRangeMinMaxSlider, keyof LitElement>;
