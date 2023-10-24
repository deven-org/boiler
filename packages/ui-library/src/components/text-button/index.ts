/* eslint-disable no-console */
import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { IconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { actionDark, actionLight } from '../../foundation/semantic-tokens/action.css';
import { ActionSizesType, ActionVariantType, SizesType, FormSizesType } from '../../globals/types';
import { determineLoaderVariant } from '../../utils/determine-loader-variant';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { BlrLoaderRenderFunction } from '../loader';
import { getComponentConfigToken } from '../../utils/get-component-config-token';

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
  @property() size: ActionSizesType = 'md';
  @property() loadingStatus!: string;

  @property() theme: ThemeType = 'Light';

  protected handleFocus = () => {
    console.log('focused');
  };

  protected handleBlur = () => {
    console.log('blurred');
  };

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [actionLight] : [actionDark];

    const classes = classMap({
      [`${this.variant}`]: this.variant,
      [`${this.size}`]: this.size || 'md',
    });

    const loaderIconClasses = classMap({
      'loading-class-icons': this.loading,
    });

    const labelClasses = classMap({
      'loading-class-label': this.loading,
    });

    const loaderVariant = determineLoaderVariant(this.variant);

    const loaderSizeVariant = getComponentConfigToken([
      'SizeVariant',
      'Action',
      this.size.toUpperCase(),
      'Loader',
    ]).toLowerCase() as FormSizesType;

    const iconSizeVariant = getComponentConfigToken([
      'SizeVariant',
      'Action',
      'TextButton',
      this.size.toUpperCase(),
      'Icon',
    ]).toLowerCase() as SizesType;

    const labelAndIconGroup = html` ${this.leadingIcon &&
      html`${BlrIconRenderFunction({
        icon: calculateIconName(this.leadingIcon, iconSizeVariant),
        size: iconSizeVariant,
        hideAria: true,
        classMap: loaderIconClasses,
      })}`}
      <span class=${labelClasses}>${this.label}</span>
      ${this.trailingIcon &&
      html`${BlrIconRenderFunction({
        icon: calculateIconName(this.trailingIcon, iconSizeVariant),
        size: iconSizeVariant,
        hideAria: true,
        classMap: loaderIconClasses,
      })}`}`;

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <span
        class="blr-semantic-action blr-text-button ${classes}"
        @click="${this.onClick}"
        tabindex="0"
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        role="button"
        @keydown=${this.onClick}
        ?disabled="${this.disabled}"
        id=${this.buttonId || nothing}
      >
        ${this.loading
          ? html`
              <div class="loader-class ${loaderIconClasses}">
                ${BlrLoaderRenderFunction({
                  size: loaderSizeVariant,
                  variant: loaderVariant,
                  loadingStatus: this.loadingStatus,
                  theme: this.theme,
                })}
              </div>
              ${labelAndIconGroup}
            `
          : html` ${labelAndIconGroup} `}
      </span>`;
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
