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

export class BlrRangeLegendSlider extends LitElementCustom {
  static styles = [staticSharedStyles, staticStyles];

  @property() accessor onClickMinMax: ((param: number) => void) | undefined = undefined;
  @property() accessor onChange!: (val: number, event: Event) => HTMLButtonElement['onchange'];

  @property() accessor rangeInputId!: string;

  @property() accessor initialValue!: string;
  @property({ type: Array }) accessor list!: Array<string>;
  @property({ type: Number }) accessor stepFactor!: number;

  @property() accessor size: FormSizesType = 'md';
  @property() accessor btnVariant: ActionVariantType = 'silent';

  @property() accessor incrementIcon!: SizelessIconType;
  @property() accessor decrementIcon!: SizelessIconType;

  @property({ type: Boolean }) accessor showLegend: boolean | undefined = true;
  @property({ type: Boolean }) accessor disabled: boolean | undefined = false;

  @property() accessor theme: ThemeType = 'Light_value';

  @property({ type: Boolean }) accessor isUpdated: boolean | undefined = false;

  @state() protected accessor selectedIndex = 0;

  protected updated(changedProperties: Map<string, number>) {
    if (changedProperties.has('selectedIndex') && !this.isUpdated) {
      this.selectedIndex = this.list.indexOf(this.initialValue) || 0;
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
      [this.size || 'md']: this.size || 'md',
      [this.theme]: this.theme,
    });

    const inputCmp1 = this.rangeInputId ? `${this.rangeInputId}-1` : `rangeInputId-1`;
    const slider = this.shadowRoot?.querySelector(`#${inputCmp1}`) as HTMLInputElement;
    const toolTipPos = slider && findToolTipPosition(slider.min, slider.max, slider.offsetWidth, this.selectedIndex);

    return html` <div class=${classes}>
      <fieldset class="range__field">
        <div class="input-wrapper ${this.theme}">
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
                .value="${String(this.selectedIndex)}"
                max="${stepsArray.length - 1}"
                step="${this.stepFactor}"
                class="range ${this.theme}"
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

                  const barClasses = `range__bar ${this.theme} ${
                    i >= currentIndex ? 'range__bar-unselected' : 'range__bar-selected'
                  }   ${this.disabled ? `bar-disabled` : ``}`;

                  const pipClasses = `range__pip ${
                    i >= currentIndex ? 'range__pip-unselected' : 'range__pip-selected'
                  }  ${this.disabled ? `pip-disabled` : ``}`;

                  return html`
                    <div class="range__container ${this.theme}">
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
                        return html`<div class="range__container ${this.theme} legend_values"><p class="range__point ${
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

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrRangeLegendSlider);
}

export type BlrRangeLegendSliderType = ElementInterface<BlrRangeLegendSlider>;
