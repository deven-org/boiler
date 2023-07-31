import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { IconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { actionDark, actionLight } from '../../foundation/semantic-tokens/action.css';
import { textButtonDark, textButtonLight } from '../../foundation/component-tokens/action.css';
import { ActionVariantType, FormSizesType } from '../../globals/types';
import { determineLoaderVariant } from '../../utils/determine-loader-variant';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { BlrLoaderRenderFunction } from '../loader';

@customElement('blr-text-button')
export class BlrTextButton extends LitElement {
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
  @property() size: FormSizesType = 'md';
  @property() loadingStatus!: string;

  @property() theme: ThemeType = 'Light';

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [actionLight, textButtonLight] : [actionDark, textButtonDark];

    const classes = classMap({
      [`${this.variant}`]: this.variant,
      [`${this.size}`]: this.size || 'md',
    });

    const loaderVariant = determineLoaderVariant(this.variant);

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <button
        class="blr-semantic-action blr-text-button ${classes}"
        @click="${this.onClick}"
        @blur="${this.onBlur}"
        ?disabled="${this.disabled}"
        id=${this.buttonId || nothing}
      >
        ${this.loading
          ? html`${BlrLoaderRenderFunction({
              size: this.size,
              variant: loaderVariant,
              loadingStatus: this.loadingStatus,
              theme: this.theme,
            })}`
          : html`
              ${this.leadingIcon &&
              html`${BlrIconRenderFunction({
                icon: calculateIconName(this.leadingIcon, this.size),
                size: this.size,
                hideAria: true,
              })}`}
              <span>${this.label}</span>
              ${this.trailingIcon &&
              html`${BlrIconRenderFunction({
                icon: calculateIconName(this.trailingIcon, this.size),
                size: this.size,
                hideAria: true,
              })}`}
            `}
      </button>`;
  }
}

export type BlrTextButtonType = Omit<BlrTextButton, keyof LitElement>;

export const BlrTextButtonRenderFunction = ({
  label,
  onClick,
  onBlur,
  leadingIcon,
  trailingIcon,
  loading,
  disabled,
  buttonId,
  variant,
  size,
  loadingStatus,
  theme,
}: BlrTextButtonType) => {
  return html`<blr-text-button
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
  ></blr-text-button>`;
};
