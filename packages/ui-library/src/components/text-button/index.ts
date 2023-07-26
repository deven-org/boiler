import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { IconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { action } from '../../foundation/semantic-tokens/action.css';
import { textButton } from '../../foundation/component-tokens/action.css';
import { ActionVariantType, FormSizesType } from '../../globals/types';
import { determineLoaderVariant } from '../../utils/determine-loader-variant';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { calculateIconName } from '../../utils/calculate-icon-name';

@customElement('blr-text-button')
export class BlrTextButton extends LitElement {
  static styles = [styleCustom, action, textButton];

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

  protected render() {
    const classes = classMap({
      [`${this.variant}`]: this.variant,
      [`${this.size}`]: this.size || 'md',
    });

    const loaderVariant = determineLoaderVariant(this.variant);

    return html`<button
      class="blr-semantic-action blr-text-button ${classes}"
      @click="${this.onClick}"
      @blur="${this.onBlur}"
      ?disabled="${this.disabled}"
      id=${this.buttonId || nothing}
    >
      ${this.loading
        ? html`<blr-loader
            .size="${this.size}"
            .variant="${loaderVariant}"
            .loadingStatus="${this.loadingStatus}"
          ></blr-loader>`
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
  ></blr-text-button>`;
};
