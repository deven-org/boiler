import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { formDark, formLight } from '../../foundation/semantic-tokens/form.css';
import {
  stepperComboLight,
  stepperButtonLight,
  stepperComboDark,
  stepperButtonDark,
} from '../../foundation/component-tokens/action.css';
import { actionDark, actionLight } from '../../foundation/semantic-tokens/action.css';
import { DividerVariationTypes, FormSizesType, ActionVariantType, SizesType } from '../../globals/types';
import { BlrFormLabelRenderFunction } from '../internal-components/form-label';
import { BlrFormHintRenderFunction } from '../internal-components/form-hint';
import { IconType } from '@boiler/icons';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { BlrDividerRenderFunction } from '../internal-components/divider';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { getComponentConfigToken } from '../../utils/get-component-config-token';

@customElement('blr-number-input')
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export class BlrNumberInput extends LitElement {
  static styles = [styleCustom];

  protected render() {
    return html`<div class="grid mode1">
      <button class="increment">+</button>
      <button class="decrement">-</button>
      <input class="input" placeholder="0.0000" />
    </div>`;
  }
}

export type BlrNumberInputType = Omit<BlrNumberInput, keyof LitElement>;

export const BlrNumberInputRenderFunction = ({}: BlrNumberInputType) => {
  return html`<blr-number-input></blr-number-input>`;
};
