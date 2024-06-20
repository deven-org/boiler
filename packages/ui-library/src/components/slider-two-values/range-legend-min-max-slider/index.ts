/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { html, nothing } from 'lit';
import { state } from 'lit/decorators.js';
import { property } from '../../../utils/lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import { staticStyles } from './index.css.js';
import { TAG_NAME } from './renderFunction.js';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes.js';
import { staticStyles as staticSharedStyles } from '../../../foundation/component-tokens/slider-legend.css.js';
import { FormSizesType, ActionVariantType, RenderBtnProps } from '../../../globals/types.js';
import { setOnclickValue, findToolTipPosition } from '../../../utils/range-slider-utils.js';
import { BlrButtonIconRenderFunction } from '../../button-icon/renderFunction.js';
import { LitElementCustom, ElementInterface } from '../../../utils/lit/element.js';

export class BlrRangeLegendMinMaxSlider extends LitElementCustom {
  static styles = [staticSharedStyles, staticStyles];

  @property() accessor onBtnClick: ((min: number, max: number) => void) | undefined = undefined;
  @property() accessor onChange!: (minVal: number, maxVal: number, event: Event) => HTMLButtonElement['onchange'];

  @property() accessor rangeInputId!: string;

  @property() accessor startValue!: string;
  @property() accessor endValue!: string;
  @property({ type: Array }) accessor list!: Array<string>;
  @property({ type: Number }) accessor stepFactor!: number;

  @property() accessor size: FormSizesType = 'md';
  @property() accessor btnVariant: ActionVariantType = 'silent';

  @property() accessor incrementIcon!: SizelessIconType;
  @property() accessor decrementIcon!: SizelessIconType;

  @property({ type: Boolean }) accessor showLegend: boolean | undefined = true;
  @property({ type: Boolean }) accessor disabled: boolean | undefined = false;

  @property() accessor theme: ThemeType = 'Light';

  @property({ type: Boolean }) accessor isUpdated: boolean | undefined = false;

  @state() protected accessor selectedStartIndex = 0;
  @state() protected accessor selectedEndIndex = 0;

  protected updated(changedProperties: Map<string, string>) {
    if ((changedProperties.has('selectedStartIndex') || changedProperties.has('selectedEndIndex')) && !this.isUpdated) {
      this.selectedStartIndex = this.list.indexOf(this.startValue) || 0;
      this.selectedEndIndex = this.list.indexOf(this.endValue) || 0;
      this.isUpdated = true;
    }
  }

  protected renderBtn = ({ btnId, btnEventHandler, iconName }: RenderBtnProps) =>
    BlrButtonIconRenderFunction({
      arialabel: btnId,
      blrClick: btnEventHandler,
      icon: iconName,
      loading: false,
      disabled: this.disabled || false,
      buttonIconId: btnId,
      variant: this.btnVariant,
      sizeVariant: this.size,
      theme: this.theme,
    });

  protected render() {
    const stepsArray = this.list;
    const tickFrequency = 1;
    const filteredStepsArray = stepsArray.filter((_, i) => i % tickFrequency == 0);

    const isMinLesserThanMax = this.selectedStartIndex <= this.selectedEndIndex;

    const onInputVal = (isMinValue: boolean) => (event: Event) => {
      const value = Number((event.target as HTMLInputElement).value);
      if (isMinValue) {
        this.selectedStartIndex = value;
      } else {
        this.selectedEndIndex = value;
      }

      const startVal = isMinLesserThanMax ? this.selectedStartIndex : this.selectedEndIndex;
      const endVal = isMinLesserThanMax ? this.selectedEndIndex : this.selectedStartIndex;
      this.onChange?.(startVal, endVal, event);
    };

    const setMinMaxValue = (btnType: string, isMinValue: boolean) => {
      const selectedValue = isMinValue ? this.selectedStartIndex : this.selectedEndIndex;
      const modifiedValue = setOnclickValue(selectedValue, this.stepFactor, btnType, stepsArray.length);

      if (modifiedValue !== undefined) {
        if (isMinValue) {
          this.selectedStartIndex = modifiedValue;
        } else {
          this.selectedEndIndex = modifiedValue;
        }
      }

      const startVal = isMinLesserThanMax ? this.selectedStartIndex : this.selectedEndIndex;
      const endVal = isMinLesserThanMax ? this.selectedEndIndex : this.selectedStartIndex;

      return this.onBtnClick?.(startVal, endVal);
    };

    const classes = classMap({
      'blr-semantic-action': true,
      'blr-slider': true,
      [this.size || 'md']: this.size || 'md',
      [this.theme]: this.theme,
    });

    const minSliderId = this.rangeInputId ? `${this.rangeInputId}-1` : `rangeInputId-1`;
    const maxSliderId = this.rangeInputId ? `${this.rangeInputId}-2` : `rangeInputId-2`;

    const minSlider = this.shadowRoot?.querySelector(`#${minSliderId}`) as HTMLInputElement;
    const maxSlider = this.shadowRoot?.querySelector(`#${maxSliderId}`) as HTMLInputElement;

    const toolTipMinPos =
      minSlider && findToolTipPosition(minSlider.min, minSlider.max, minSlider.offsetWidth, this.selectedStartIndex);
    const toolTipMaxPos =
      minSlider && findToolTipPosition(maxSlider.min, maxSlider.max, maxSlider.offsetWidth, this.selectedEndIndex);

    return html` <div class=${classes}>
      <fieldset class="range__field">
        <div class="input-wrapper ${this.theme}">
          <div class="min-max-btnwrapper">
            ${this.renderBtn({
              btnId: 'inc_btn_min',
              btnEventHandler: () => setMinMaxValue('INC', isMinLesserThanMax),
              iconName: this.incrementIcon,
            })}
            ${this.renderBtn({
              btnId: 'dec_btn_min',
              btnEventHandler: () => setMinMaxValue('DEC', isMinLesserThanMax),
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
                class="range ${this.theme}"
                style=""
                @change=${onInputVal(true)}
                @input=${onInputVal(true)}
                ?disabled=${this.disabled}
              />
              <input
                id=${maxSliderId}
                type="range"
                min="0"
                .value="${this.selectedEndIndex}"
                max="${stepsArray.length - 1}"
                step="${this.stepFactor}"
                class="range ${this.theme}"
                style=""
                @change=${onInputVal(false)}
                @input=${onInputVal(false)}
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
                  const isSelected =
                    (i >= this.selectedStartIndex && i < this.selectedEndIndex) ||
                    (i >= this.selectedEndIndex && i < this.selectedStartIndex);
                  const barClasses = `range__bar ${this.theme} ${
                    isSelected ? 'range__bar-selected' : 'range__bar-unselected'
                  }  ${this.disabled ? `bar-disabled` : ``}`;

                  const pipClasses = `range__pip ${isSelected ? 'range__pip-selected' : 'range__pip-unselected'} ${
                    this.disabled ? `pip-disabled` : ``
                  }`;

                  return html`
                    <div class="range__container ${this.theme}">
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
                        const legendClasses = `range__point ${this.disabled ? `point-disabled` : ``}`;

                        return html`<div class="range__container ${this.theme}"><p class="${legendClasses}">${step}</p></div></div> `;
                      })}
                    </div>
                  </div>
                `
              : nothing}
          </div>
          <div class="min-max-btnwrapper">
            ${this.renderBtn({
              btnId: 'inc_btn_max',
              btnEventHandler: () => setMinMaxValue('INC', !isMinLesserThanMax),
              iconName: this.incrementIcon,
            })}
            ${this.renderBtn({
              btnId: 'dec_btn_max',
              btnEventHandler: () => setMinMaxValue('DEC', !isMinLesserThanMax),
              iconName: this.decrementIcon,
            })}
          </div>
        </div>
      </fieldset>
    </div>`;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrRangeLegendMinMaxSlider);
}

export type BlrRangeLegendMinMaxSliderType = ElementInterface<BlrRangeLegendMinMaxSlider>;
