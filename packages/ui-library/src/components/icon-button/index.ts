import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { IconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { action } from '../../foundation/semantic-tokens/action.css';
import { iconButton } from '../../foundation/component-tokens/action.css';
import { ActionVariantType, FormSizesType } from '../../globals/types';
import { determineLoaderVariant } from '../../utils/determine-loader-variant';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { BlrLoaderRenderFunction } from '../loader';

@customElement('blr-icon-button')
export class BlrIconButton extends LitElement {
  static styles = [styleCustom, action, iconButton];

  @property() arialabel?: string;
  @property() icon?: IconType;
  @property() onClick?: HTMLButtonElement['onclick'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() loading?: boolean;
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
      aria-label=${this.ariaLabel || nothing}
      class="blr-semantic-action blr-icon-button ${classes}"
      @click=${this.onClick}
      @blur=${this.onBlur}
      ?disabled=${this.disabled}
      id=${this.buttonId || nothing}
    >
      ${this.loading
        ? html`${BlrLoaderRenderFunction({
            size: this.size,
            variant: loaderVariant,
            loadingStatus: this.loadingStatus,
          })}`
        : html`${BlrIconRenderFunction({
            icon: calculateIconName(this.icon, this.size),
            size: this.size,
            hideAria: true,
          })}`}
    </button>`;
  }
}

export type BlrIconButtonType = Omit<BlrIconButton, keyof LitElement>;

export const BlrIconButtonRenderFunction = ({
  arialabel,
  onClick,
  onBlur,
  loading,
  disabled,
  buttonId,
  variant,
  size,
  icon,
  loadingStatus,
}: BlrIconButtonType) => {
  return html`<blr-icon-button
    .arialabel=${arialabel}
    .onClick=${onClick}
    .onBlur=${onBlur}
    .loading=${loading}
    .disabled=${disabled}
    .buttonId=${buttonId}
    .variant=${variant}
    .size=${size}
    .icon=${icon}
    .loadingStatus=${loadingStatus}
  ></blr-icon-button>`;
};
