/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import { styleCustom } from './index.css';
import { sliderDark, sliderLight } from '../../foundation/component-tokens/slider-legend.css';
import { FormSizesType, ActionVariantType } from '../../globals/types';

import { BlrIconButtonRenderFunction } from '../icon-button';
import { RenderBtnProps } from '../../globals/types';
import { IconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';

@customElement('blr-range-legend-min-max-slider')
export class BlrRangeLegendMinMaxSlider extends LitElement {
  static styles = [styleCustom];

  @property() onClickMin?: (min: number, max: number) => void;
  @property() onClickMax?: (min: number, max: number) => void;
  @property() onChange!: (minVal: number, maxVal: number, event: Event) => HTMLButtonElement['onchange'];

  @property() rangeInputId!: string;

  @property() startValue!: string;
  @property() endValue!: string;
  @property() list!: Array<string>;
  @property() stepFactor!: number;

  @property() size: FormSizesType = 'md';
  @property() btnVariant: ActionVariantType = 'silent';

  @property() incrementIcon!: IconType;
  @property() decrementIcon!: IconType;

  @property() showLegend?: boolean = true;
  @property() disabled?: boolean = false;

  @property() theme: ThemeType = 'Light';

  @state() protected selectedStartIndex = 0;
  @state() protected selectedEndIndex = 0;

  protected updated(changedProperties: Map<string, string>) {
    if (changedProperties.has('startValue') || changedProperties.has('endValue')) {
      this.selectedStartIndex = this.list.indexOf(this.startValue) || 0;
      this.selectedEndIndex = this.list.indexOf(this.endValue) || 0;
    }
  }

  protected renderBtn = ({ btnId, btnEventHandler, iconName }: RenderBtnProps) =>
    html`${BlrIconButtonRenderFunction({
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

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [sliderLight] : [sliderDark];

    const stepsArray = this.list;
    const tickFrequency = 1;
    const filteredStepsArray = stepsArray.filter((_, i) => i % tickFrequency == 0);

    const showMinVal = (event: Event) => {
      this.selectedStartIndex = Number((event.target as HTMLInputElement).value);
      this.onChange?.(this.selectedStartIndex, this.selectedEndIndex, event);
    };

    const setMinValue = (btnType: string) => {
      if (btnType === 'INC' && this.selectedStartIndex < stepsArray.length - 1) {
        this.selectedStartIndex = this.selectedStartIndex + this.stepFactor;
      } else if (btnType === 'DEC' && this.selectedStartIndex > 0) {
        this.selectedStartIndex = this.selectedStartIndex - this.stepFactor;
      }
      return this.onClickMin?.(this.selectedStartIndex, this.selectedEndIndex);
    };

    const showMaxVal = (event: Event) => {
      this.selectedEndIndex = Number((event.target as HTMLInputElement).value);
      this.onChange?.(this.selectedStartIndex, this.selectedEndIndex, event);
    };

    const setMaxValue = (btnType: string) => {
      if (btnType === 'INC' && this.selectedEndIndex < stepsArray.length - 1) {
        this.selectedEndIndex = this.selectedEndIndex + this.stepFactor;
      } else if (btnType === 'DEC' && this.selectedEndIndex > 0) {
        this.selectedEndIndex = this.selectedEndIndex - this.stepFactor;
      }
      return this.onClickMax?.(this.selectedStartIndex, this.selectedEndIndex);
    };

    const classes = classMap({
      'blr-semantic-action': true,
      'blr-slider': true,
      [`${this.size || 'md'}`]: this.size || 'md',
    });

    const toolTipMinQuerySelector = this.shadowRoot?.querySelector(`#pip-${this.selectedStartIndex}`);
    const toolTipMinPos = toolTipMinQuerySelector?.getBoundingClientRect().left;
    const toolTipMaxQuerySelector = this.shadowRoot?.querySelector(`#pip-${this.selectedEndIndex}`);
    const toolTipMaxPos = toolTipMaxQuerySelector?.getBoundingClientRect().left;

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class=${classes}>
        <fieldset class="range__field">
          <div class="input-wrapper">
            <div id="tooltip1" class="tooltip" style="bottom:110px; left:${toolTipMinPos! - 15}px; position:absolute;">
              ${stepsArray[this.selectedStartIndex]}
            </div>
            <div id="tooltip1" class="tooltip" style="bottom:110px; left:${toolTipMaxPos! - 15}px; position:absolute;">
              ${stepsArray[this.selectedEndIndex]}
            </div>
            <div class="min-max-btnwrapper">
              ${this.renderBtn({
                btnId: 'inc_btn_min',
                btnEventHandler: () => setMinValue('INC'),
                iconName: this.incrementIcon,
              })}
              ${this.renderBtn({
                btnId: 'dec_btn_min',
                btnEventHandler: () => setMinValue('DEC'),
                iconName: this.decrementIcon,
              })}
            </div>
            <div class="input-row">
              <div class="range-wrapper">
                <input
                  id=${this.rangeInputId ? `${this.rangeInputId}-1` : `rangeInputId-1`}
                  type="range"
                  min="0"
                  value="${this.selectedStartIndex}"
                  max="${stepsArray.length - 1}"
                  step="${this.stepFactor}"
                  class="range"
                  style=""
                  @change=${showMinVal}
                  @input=${showMinVal}
                  ?disabled=${this.disabled}
                />
                <input
                  id=${this.rangeInputId ? `${this.rangeInputId}-2` : `rangeInputId-2`}
                  type="range"
                  min="0"
                  value="${this.selectedEndIndex}"
                  max="${stepsArray.length - 1}"
                  step="${this.stepFactor}"
                  class="range"
                  style=""
                  @change=${showMaxVal}
                  @input=${showMaxVal}
                  ?disabled=${this.disabled}
                />
              </div>
              <div class="tick-wrapper">
                <div class="range__bar-row">
                  ${map(filteredStepsArray, (step, i) => {
                    const barClasses = `range__bar ${
                      i >= this.selectedStartIndex && i < this.selectedEndIndex
                        ? 'range__bar-selected'
                        : 'range__bar-unselected'
                    }  ${this.disabled ? `bar-disabled` : ``}`;

                    const pipClasses = `range__pip ${
                      i >= this.selectedStartIndex && i < this.selectedEndIndex
                        ? 'range__pip-selected'
                        : 'range__pip-unselected'
                    } ${this.disabled ? `pip-disabled` : ``}`;

                    return html`
                      <div class="range__container">
                        <div class="${pipClasses}" id="pip-${i}"></div>
                      </div>
                      <div class="${barClasses}"></div>
                    `;
                  })}
                </div>
              </div>
              ${this.showLegend
                ? html`
                    <div class="legend-wrapper">
                      <div class="range__numbers">
                        ${map(filteredStepsArray, (step) => {
                          return html`<div class="range__container"><p class="range__point ${
                            this.disabled ? `point-disabled` : ``
                          }">${step}</p></div></div> `;
                        })}
                      </div>
                    </div>
                  `
                : nothing}
            </div>
            <div class="min-max-btnwrapper">
              ${this.renderBtn({
                btnId: 'inc_btn_max',
                btnEventHandler: () => setMaxValue('INC'),
                iconName: this.incrementIcon,
              })}
              ${this.renderBtn({
                btnId: 'dec_btn_max',
                btnEventHandler: () => setMaxValue('DEC'),
                iconName: this.decrementIcon,
              })}
            </div>
          </div>
        </fieldset>
      </div>`;
  }
}

export type BlrRangeLegendMinMaxSliderType = Omit<BlrRangeLegendMinMaxSlider, keyof LitElement>;

export const BlrRangeLegendMinMaxSliderRenderFunction = ({
  onClickMin,
  onClickMax,
  onChange,
  rangeInputId,
  startValue,
  endValue,
  list,
  stepFactor,
  size,
  btnVariant,
  showLegend,
  disabled,
  incrementIcon,
  decrementIcon,
  theme,
}: BlrRangeLegendMinMaxSliderType) => {
  return html`
    <blr-range-legend-min-max-slider
      .onClickMin=${onClickMin}
      .onClickMax=${onClickMax}
      .onChange=${onChange}
      .rangeInputId=${rangeInputId}
      .startValue=${startValue}
      .endValue=${endValue}
      .list=${list}
      .stepFactor=${stepFactor}
      .size=${size}
      .btnVariant=${btnVariant}
      .showLegend=${showLegend}
      .disabled=${disabled}
      .incrementIcon=${incrementIcon}
      .decrementIcon=${decrementIcon}
      .theme=${theme}
    >
    </blr-range-legend-min-max-slider>
  `;
};
