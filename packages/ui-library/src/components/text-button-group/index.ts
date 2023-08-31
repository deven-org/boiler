import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { IconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { actionDark, actionLight } from '../../foundation/semantic-tokens/action.css';
import { textButtonDark, textButtonLight } from '../../foundation/component-tokens/action.css';
import { buttonGroupLight, buttonGroupDark } from '../../foundation/component-tokens/ui.css';
import {
  ActionVariantType,
  AlignmentType,
  ButtonNumberType,
  ButtonOption,
  ButtonGroupSizesType,
} from '../../globals/types';
import { determineLoaderVariant } from '../../utils/determine-loader-variant';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { BlrLoaderRenderFunction } from '../loader';

@customElement('blr-text-button-group')
export class BlrTextButtonGroup extends LitElement {
  static styles = [styleCustom];

  @property() label = 'Button Label';
  @property() onClick?: HTMLButtonElement['onclick'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() leadingIcon?: IconType;
  @property() trailingIcon?: IconType;
  @property() loading!: boolean;
  @property() disabled?: boolean;
  @property() buttonId?: string;
  @property() variant: ActionVariantType = 'primary';
  @property() size: ButtonGroupSizesType = 'md';
  @property() loadingStatus!: string;
  @property() alignment: AlignmentType = 'center';
  @property() numberOfButtons: ButtonNumberType = 1;
  @property() buttons!: ButtonOption[];

  @property() theme: ThemeType = 'Light';

  protected render() {
    const dynamicStyles =
      this.theme === 'Light'
        ? [actionLight, textButtonLight, buttonGroupLight]
        : [actionDark, textButtonDark, buttonGroupDark];

    const classes = classMap({
      [`${this.variant}`]: this.variant,
      [`${this.size}`]: this.size || 'md',
      [`${this.alignment}`]: this.alignment || 'center',
    });

    const alignmentClasses = classMap({
      [`${this.alignment}`]: this.alignment || 'center',
      [`${this.size}`]: this.size || 'md',
    });

    const loaderVariant = determineLoaderVariant(this.variant);

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class="wrapper ${alignmentClasses} blr-button-group">
        ${this.buttons.map(
          (button) =>
            html`
              <button
                class="blr-semantic-action blr-text-button-group ${classes}"
                @click="${this.onClick}"
                @blur="${this.onBlur}"
                ?disabled="${this.disabled}"
                id=${this.buttonId || nothing}
              >
                ${this.loading
                  ? html`${BlrLoaderRenderFunction({
                      size: button.size,
                      variant: loaderVariant,
                      loadingStatus: button.loadingStatus,
                      theme: this.theme,
                    })}`
                  : html`
                      ${this.leadingIcon &&
                      html`${BlrIconRenderFunction({
                        icon: calculateIconName(this.leadingIcon, button.size),
                        size: button.size,
                        hideAria: true,
                      })}`}
                      <span>${button.label}</span>
                      ${this.trailingIcon &&
                      html`${BlrIconRenderFunction({
                        icon: calculateIconName(this.trailingIcon, button.size),
                        size: button.size,
                        hideAria: true,
                      })}`}
                    `}
              </button>
            `
        )}
      </div> `;
  }
}

export type BlrTextButtonGroupType = Omit<BlrTextButtonGroup, keyof LitElement>;

export const BlrTextButtonGroupRenderFunction = ({
  label,
  onClick,
  onBlur,
  buttons,
  leadingIcon,
  trailingIcon,
  loading,
  disabled,
  buttonId,
  variant,
  size,
  loadingStatus,
  theme,
  alignment,
  numberOfButtons,
}: BlrTextButtonGroupType) => {
  return html`<blr-text-button-group
    .label=${label}
    .onClick=${onClick}
    .onBlur=${onBlur}
    .leadingIcon=${leadingIcon}
    .trailingIcon=${trailingIcon}
    .loading=${loading}
    .disabled=${disabled}
    .buttonId=${buttonId}
    .variant=${variant}
    .size=${size}
    .loadingStatus=${loadingStatus}
    .theme=${theme}
    .alignment=${alignment}
    .buttons=${buttons}
    .numberOfButtons=${numberOfButtons}
  ></blr-text-button-group>`;
};
