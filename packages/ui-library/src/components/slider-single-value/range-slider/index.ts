import { LitElement, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleCustom } from './index.css';
import { sliderDark, sliderLight } from '../../../foundation/component-tokens/slider.css';
import { FormSizesType, ActionVariantType, RenderBtnProps } from '../../../globals/types';

import { RangeSliderTagName } from './renderFunction';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { findPercentage, generateRangeBar, setOnclickValue, findNearestValue } from '../../../utils/range-slider-utils';
import { BlrIconButtonRenderFunction } from '../../icon-button/renderFunction';

export class BlrRangeSlider extends LitElement {
  static styles = [styleCustom];

  @property() onClickMinMax?: (param: number) => void;
  @property() onChange!: (val: number, event: Event) => HTMLButtonElement['onchange'];

  @property() rangeInputId!: string;

  @property() initialValue!: number;
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

  @state() protected valueToSlider = 0;

  protected updated(changedProperties: Map<string, number>) {
    if (changedProperties.has('valueToSlider') && !this.isUpdated) {
      this.valueToSlider = findPercentage(this.minValue, this.maxValue, this.initialValue);
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
      iconButtonId: btnId,
      variant: this.btnVariant,
      sizeVariant: this.size,
      theme: this.theme,
    })}`;

  protected render() {
    const rangeStyle = generateRangeBar(this.theme, this.valueToSlider, 0, this.disabled);
    const generatedStyles = this.theme === 'Light' ? [sliderLight] : [sliderDark];
    const dynamicStyles = [...generatedStyles, ...rangeStyle];

    const classes = classMap({
      'blr-semantic-action': true,
      'blr-slider': true,
      [`${this.size || 'md'}`]: this.size || 'md',
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
                .value=${this.valueToSlider}
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

if (!customElements.get(RangeSliderTagName)) {
  customElements.define(RangeSliderTagName, BlrRangeSlider);
}

export type BlrRangeSliderType = Omit<BlrRangeSlider, keyof LitElement>;
