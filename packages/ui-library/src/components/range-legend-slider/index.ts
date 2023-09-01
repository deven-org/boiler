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

@customElement('blr-range-legend-slider')
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

  @property() incrementIcon!: IconType;
  @property() decrementIcon!: IconType;

  @property() showLegend?: boolean = true;
  @property() disabled?: boolean = false;

  @property() theme: ThemeType = 'Light';

  @state() protected selectedIndex = 0;

  protected updated(changedProperties: Map<string, string>) {
    if (changedProperties.has('initialValue')) {
      this.selectedIndex = this.list.indexOf(this.initialValue) || 0;
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

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [sliderLight] : [sliderDark];

    const stepsArray = this.list;

    const tickFrequency = 1;
    const filteredStepsArray = stepsArray.filter((_, i) => i % tickFrequency == 0);

    const setValue = (btnType: string) => {
      if (btnType === 'INC' && this.selectedIndex < stepsArray.length - 1) {
        this.selectedIndex = this.selectedIndex + this.stepFactor;
      } else if (btnType === 'DEC' && this.selectedIndex > 0) {
        this.selectedIndex = this.selectedIndex - this.stepFactor;
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

    const toolTipQuerySelector = this.shadowRoot?.querySelector(`#pip-${this.selectedIndex}`);
    const toolTipPos = toolTipQuerySelector?.getBoundingClientRect().left;

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class=${classes}>
        <fieldset class="range__field">
          <div class="input-wrapper">
            <div id="tooltip1" class="tooltip" style="bottom:90px; left:${toolTipPos! - 20}px; position:absolute;">
              ${stepsArray[this.selectedIndex]}
            </div>
            <div class="min-max-btnwrapper">
              ${this.renderBtn({
                btnId: 'dec_btn',
                btnEventHandler: () => setValue('DEC'),
                iconName: this.decrementIcon,
              })}
            </div>
            <div class="input-row">
              <div class="range-wrapper">
                <input
                  id=${this.rangeInputId ? `${this.rangeInputId}-1` : `rangeInputId-1`}
                  type="range"
                  min="0"
                  value="${this.selectedIndex}"
                  max="${stepsArray.length - 1}"
                  step="${this.stepFactor}"
                  class="range"
                  style=""
                  @change=${showVal}
                  @input=${showVal}
                  ?disabled=${this.disabled}
                />
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

export type BlrRangeLegendSliderType = Omit<BlrRangeLegendSlider, keyof LitElement>;

export const BlrRangeLegendSliderRenderFunction = ({
  onClickMinMax,
  onChange,
  rangeInputId,
  initialValue,
  list,
  stepFactor,
  size,
  btnVariant,
  showLegend,
  disabled,
  incrementIcon,
  decrementIcon,
  theme,
}: BlrRangeLegendSliderType) => {
  return html`
    <blr-range-legend-slider
      .onClickMinMax=${onClickMinMax}
      .onChange=${onChange}
      .rangeInputId=${rangeInputId}
      .initialValue=${initialValue}
      .list=${list}
      .stepFactor=${stepFactor}
      .size=${size}
      .btnVariant=${btnVariant}
      .showLegend=${showLegend}
      .disabled=${disabled}
      .incrementIcon=${incrementIcon}
      .decrementIcon=${decrementIcon}
      .theme=${theme}
    ></blr-range-legend-slider>
  `;
};
