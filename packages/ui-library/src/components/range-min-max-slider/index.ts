import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleCustom } from './index.css';
import { sliderDark, sliderLight } from '../../foundation/component-tokens/slider.css';
import { FormSizesType, ActionVariantType } from '../../globals/types';
import { findNearestValue, findPercentage, generateRangeBar, setOnclickValue } from '../../utils/range-slider-utils';

import { BlrIconButtonRenderFunction } from '../icon-button';
import { RenderBtnProps } from '../../globals/types';

import { IconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';

@customElement('blr-range-min-max-slider')
export class BlrRangeMinMaxSlider extends LitElement {
  static styles = [styleCustom];

  @property() onClickMin?: (min: number, max: number) => void;
  @property() onClickMax?: (min: number, max: number) => void;
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

  @property() incrementIcon!: IconType;
  @property() decrementIcon!: IconType;

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
      onClick: btnEventHandler,
      icon: iconName,
      loading: false,
      disabled: this.disabled,
      buttonId: btnId,
      variant: this.btnVariant,
      size: this.size,
      loadingStatus: 'Loading',
      theme: this.theme,
    })}`;

  protected setMinValue = (btnType: string) => {
    const modifiedValue = setOnclickValue(this.startValueToSlider, this.stepFactor, btnType);
    if (modifiedValue !== undefined) {
      this.startValueToSlider = modifiedValue;
      this.startValue = findNearestValue(this.minValue, this.maxValue, modifiedValue);
    }
    return this.onClickMax?.(this.startValue, this.endValue);
  };

  protected showMinVal = (event: Event) => {
    const value = Number((event.target as HTMLInputElement).value);

    this.startValueToSlider = value;
    this.startValue = findNearestValue(this.minValue, this.maxValue, value);
    this.onChange?.(this.startValue, this.endValue, event);
  };

  protected setMaxValue = (btnType: string) => {
    const modifiedValue = setOnclickValue(this.endValueToSlider, this.stepFactor, btnType);
    if (modifiedValue !== undefined) {
      this.endValueToSlider = modifiedValue;
      this.endValue = findNearestValue(this.minValue, this.maxValue, modifiedValue);
    }
    return this.onClickMax?.(this.startValue, this.endValue);
  };

  protected showMaxVal = (event: Event) => {
    const value = Number((event.target as HTMLInputElement).value);

    this.endValueToSlider = value;
    this.endValue = findNearestValue(this.minValue, this.maxValue, value);
    this.onChange?.(this.startValue, this.endValue, event);
  };

  protected render() {
    const hasError = this.endValueToSlider < this.startValueToSlider;
    const rangeStyle = generateRangeBar(
      this.theme,
      this.startValueToSlider,
      this.endValueToSlider,
      this.disabled,
      'twoKnob',
      hasError
    );

    const generatedStyles = this.theme === 'Light' ? [sliderLight] : [sliderDark];
    const dynamicStyles = [...generatedStyles, ...rangeStyle];

    const classes = classMap({
      'blr-semantic-action': true,
      'blr-slider': true,
      [`${this.size || 'md'}`]: this.size || 'md',
    });

    const inlineLegendStyles = classMap({
      'inline-legend': true,
      'inline-legend-disabled': this.disabled || false,
      'inline-legend-error': hasError,
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
                btnEventHandler: () => this.setMinValue('INC'),
                iconName: this.incrementIcon,
              })}
              ${this.renderBtn({
                btnId: 'dec_btn_min',
                btnEventHandler: () => this.setMinValue('DEC'),
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
                @change=${this.showMinVal}
                @input=${this.showMinVal}
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
                @change=${this.showMaxVal}
                @input=${this.showMaxVal}
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
                btnEventHandler: () => this.setMaxValue('INC'),
                iconName: this.incrementIcon,
              })}
              ${this.renderBtn({
                btnId: 'dec_btn_max',
                btnEventHandler: () => this.setMaxValue('DEC'),
                iconName: this.decrementIcon,
              })}
            </div>
          </div>
        </fieldset>
      </div>`;
  }
}

export type BlrRangeMinMaxSliderType = Omit<BlrRangeMinMaxSlider, keyof LitElement>;

export const BlrRangeMinMaxSliderRenderFunction = ({
  onClickMin,
  onClickMax,
  onChange,
  rangeInputId,
  startValue,
  endValue,
  minValue,
  maxValue,
  units,
  stepFactor,
  size,
  btnVariant,
  showLegend,
  disabled,
  incrementIcon,
  decrementIcon,
  theme,
}: BlrRangeMinMaxSliderType) => {
  return html`
    <blr-range-min-max-slider
      .onClickMin=${onClickMin}
      .onClickMax=${onClickMax}
      .onChange=${onChange}
      .rangeInputId=${rangeInputId}
      .startValue=${startValue}
      .endValue=${endValue}
      .minValue=${minValue}
      .maxValue=${maxValue}
      .units=${units}
      .stepFactor=${stepFactor}
      .size=${size}
      .btnVariant=${btnVariant}
      .showLegend=${showLegend}
      .disabled=${disabled}
      .incrementIcon=${incrementIcon}
      .decrementIcon=${decrementIcon}
      .theme=${theme}
    >
    </blr-range-min-max-slider>
  `;
};
