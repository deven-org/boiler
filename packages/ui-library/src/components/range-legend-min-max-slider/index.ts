/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import { styleCustom } from './index.css';
import { sliderDark, sliderLight } from '../../foundation/component-tokens/slider-legend.css';
import { FormSizesType, ActionVariantType } from '../../globals/types';
import { findToolTipPosition, setOnclickValue } from '../../utils/range-slider-utils';

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

  @property({ type: Boolean }) isUpdated? = false;

  @state() protected selectedStartIndex = 0;
  @state() protected selectedEndIndex = 0;

  protected updated(changedProperties: Map<string, string>) {
    if ((changedProperties.has('selectedStartIndex') || changedProperties.has('selectedEndIndex')) && !this.isUpdated) {
      this.selectedStartIndex = this.list.indexOf(this.startValue) || 0;
      this.selectedEndIndex = this.list.indexOf(this.endValue) || 0;
      this.isUpdated = true;
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
      const modifiedValue = setOnclickValue(this.selectedStartIndex, this.stepFactor, btnType, stepsArray.length);
      if (modifiedValue !== undefined) {
        this.selectedStartIndex = modifiedValue;
      }
      return this.onClickMin?.(this.selectedStartIndex, this.selectedEndIndex);
    };

    const showMaxVal = (event: Event) => {
      this.selectedEndIndex = Number((event.target as HTMLInputElement).value);
      this.onChange?.(this.selectedStartIndex, this.selectedEndIndex, event);
    };

    const setMaxValue = (btnType: string) => {
      const modifiedValue = setOnclickValue(this.selectedEndIndex, this.stepFactor, btnType, stepsArray.length);
      if (modifiedValue !== undefined) {
        this.selectedEndIndex = modifiedValue;
      }
      return this.onClickMax?.(this.selectedStartIndex, this.selectedEndIndex);
    };

    const classes = classMap({
      'blr-semantic-action': true,
      'blr-slider': true,
      [`${this.size || 'md'}`]: this.size || 'md',
    });

    const minSliderId = this.rangeInputId ? `${this.rangeInputId}-1` : `rangeInputId-1`;
    const maxSliderId = this.rangeInputId ? `${this.rangeInputId}-2` : `rangeInputId-2`;

    const minSlider = this.shadowRoot?.querySelector(`#${minSliderId}`) as HTMLInputElement;
    const maxSlider = this.shadowRoot?.querySelector(`#${maxSliderId}`) as HTMLInputElement;

    const toolTipMinPos =
      minSlider && findToolTipPosition(minSlider.min, minSlider.max, minSlider.offsetWidth, this.selectedStartIndex);
    const toolTipMaxPos =
      minSlider && findToolTipPosition(maxSlider.min, maxSlider.max, maxSlider.offsetWidth, this.selectedEndIndex);

    const hasError = this.selectedEndIndex < this.selectedStartIndex;

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class=${classes}>
        <fieldset class="range__field">
          <div class="input-wrapper">
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
                  id=${minSliderId}
                  type="range"
                  min="0"
                  .value="${this.selectedStartIndex}"
                  max="${stepsArray.length - 1}"
                  step="${this.stepFactor}"
                  class="range"
                  style=""
                  @change=${showMinVal}
                  @input=${showMinVal}
                  ?disabled=${this.disabled}
                />
                <input
                  id=${maxSliderId}
                  type="range"
                  min="0"
                  .value="${this.selectedEndIndex}"
                  max="${stepsArray.length - 1}"
                  step="${this.stepFactor}"
                  class="range"
                  style=""
                  @change=${showMaxVal}
                  @input=${showMaxVal}
                  ?disabled=${this.disabled}
                />
                <div id="tooltip1" class="tooltip" style="left:${toolTipMinPos}; bottom:0px">
                  ${stepsArray[this.selectedStartIndex]}
                </div>
                <div id="tooltip1" class="tooltip" style="left:${toolTipMaxPos}; bottom:0px">
                  ${stepsArray[this.selectedEndIndex]}
                </div>
              </div>
              <div class="tick-wrapper">
                <div class="range__bar-row">
                  ${map(filteredStepsArray, (step, i) => {
                    const barClasses = `range__bar ${hasError ? `range__bar-error` : ``} ${
                      i >= this.selectedStartIndex && i < this.selectedEndIndex
                        ? 'range__bar-selected'
                        : 'range__bar-unselected'
                    }  ${this.disabled ? `bar-disabled` : ``}`;

                    const pipClasses = `range__pip ${hasError ? `range__bar-error` : ``} ${
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
                          const legendClasses = `range__point ${this.disabled ? `point-disabled` : ``} ${
                            hasError ? `inline-legend-error` : ``
                          }`;

                          return html`<div class="range__container"><p class="${legendClasses}">${step}</p></div></div> `;
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
