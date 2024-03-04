/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { LitElement, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import { styleCustom } from './index.css';

import { RangeLegendSliderTagName } from './renderFunction';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { sliderLight, sliderDark } from '../../../foundation/component-tokens/slider-legend.css';
import { FormSizesType, ActionVariantType, RenderBtnProps } from '../../../globals/types';
import { setOnclickValue, findToolTipPosition } from '../../../utils/range-slider-utils';
import { BlrIconButtonRenderFunction } from '../../icon-button/renderFunction';

export class BlrRangeLegendSlider extends LitElement {
  static styles = [styleCustom];

  @property() onClickMinMax?: (param: number) => void;
  @property() onChange!: (val: number, event: Event) => HTMLButtonElement['onchange'];

  @property() rangeInputId!: string;

  @property() initialValue!: string;
  @property() list!: Array<string>;
  @property() stepFactor!: number;

  @property() size: FormSizesType = 'md';
  @property() btnVariant: ActionVariantType = 'silent';

  @property() incrementIcon!: SizelessIconType;
  @property() decrementIcon!: SizelessIconType;

  @property() showLegend?: boolean = true;
  @property() disabled?: boolean = false;

  @property() theme: ThemeType = 'Light';

  @property({ type: Boolean }) isUpdated? = false;

  @state() protected selectedIndex = 0;

  protected updated(changedProperties: Map<string, number>) {
    if (changedProperties.has('selectedIndex') && !this.isUpdated) {
      this.selectedIndex = this.list.indexOf(this.initialValue) || 0;
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
    const dynamicStyles = this.theme === 'Light' ? [sliderLight] : [sliderDark];

    const stepsArray = this.list;

    const tickFrequency = 1;
    const filteredStepsArray = stepsArray.filter((_, i) => i % tickFrequency == 0);

    const setValue = (btnType: string) => {
      const modifiedValue = setOnclickValue(this.selectedIndex, this.stepFactor, btnType, stepsArray.length);
      if (modifiedValue !== undefined) {
        this.selectedIndex = modifiedValue;
      }
      return this.onClickMinMax?.(this.selectedIndex);
    };

    const showVal = (event: Event) => {
      this.selectedIndex = Number((event.target as HTMLInputElement).value);
      this.onChange?.(this.selectedIndex, event);
    };

    const classes = classMap({
      'blr-semantic-action': true,
      'blr-slider': true,
      [`${this.size || 'md'}`]: this.size || 'md',
    });

    const inputCmp1 = this.rangeInputId ? `${this.rangeInputId}-1` : `rangeInputId-1`;
    const slider = this.shadowRoot?.querySelector(`#${inputCmp1}`) as HTMLInputElement;
    const toolTipPos = slider && findToolTipPosition(slider.min, slider.max, slider.offsetWidth, this.selectedIndex);

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class=${classes}>
        <fieldset class="range__field">
          <div class="input-wrapper">
            <div class="min-max-btnwrapper">
              ${this.renderBtn({
                btnId: 'dec_btn',
                btnEventHandler: () => setValue('DEC'),
                iconName: this.decrementIcon,
              })}
            </div>
            <div class="input-row">
              <div class="range-wrapper" id="range-wrapper">
                <input
                  id=${inputCmp1}
                  type="range"
                  min="0"
                  .value="${this.selectedIndex}"
                  max="${stepsArray.length - 1}"
                  step="${this.stepFactor}"
                  class="range"
                  style=""
                  @change=${showVal}
                  @input=${showVal}
                  ?disabled=${this.disabled}
                />
                <div id="tooltip1" class="tooltip" style="bottom:0px; left: ${toolTipPos}">
                  ${stepsArray[this.selectedIndex]}
                </div>
              </div>
              <div class="tick-wrapper">
                <div class="range__bar-row">
                  ${map(filteredStepsArray, (step, i) => {
                    const currentIndex = this.selectedIndex;

                    const barClasses = `range__bar ${
                      i >= currentIndex ? 'range__bar-unselected' : 'range__bar-selected'
                    }   ${this.disabled ? `bar-disabled` : ``}`;

                    const pipClasses = `range__pip ${
                      i >= currentIndex ? 'range__pip-unselected' : 'range__pip-selected'
                    }  ${this.disabled ? `pip-disabled` : ``}`;

                    return html`
                      <div class="range__container">
                        <div class=${pipClasses} id="pip-${i}"><span></span></div>
                      </div>
                      <div class=${barClasses}></div>
                    `;
                  })}
                </div>
              </div>
              ${this.showLegend
                ? html`
                    <div class="legend-wrapper">
                      <div class="range__numbers">
                        ${map(filteredStepsArray, (step) => {
                          return html`<div class="range__container legend_values"><p class="range__point ${
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
                btnId: 'inc_btn',
                btnEventHandler: () => setValue('INC'),
                iconName: this.incrementIcon,
              })}
            </div>
          </div>
        </fieldset>
      </div>`;
  }
}

if (!customElements.get(RangeLegendSliderTagName)) {
  customElements.define(RangeLegendSliderTagName, BlrRangeLegendSlider);
}

export type BlrRangeLegendSliderType = Omit<BlrRangeLegendSlider, keyof LitElement>;
