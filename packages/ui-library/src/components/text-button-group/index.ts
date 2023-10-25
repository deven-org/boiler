import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { SizelessIconType } from '@boiler/icons';
import { styleCustom as StyleTextButtonGroupCustom } from './index.css';
import { styleCustom as StyleTextButtonCustom } from '../text-button/index.css';
import { actionDark, actionLight } from '../../foundation/semantic-tokens/action.css';
import { buttonGroupLight, buttonGroupDark } from '../../foundation/component-tokens/ui.css';
import { ActionVariantType, AlignmentType, ButtonGroupSizesType, FormSizesType, SizesType } from '../../globals/types';
import { determineLoaderVariant } from '../../utils/determine-loader-variant';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { BlrLoaderRenderFunction } from '../loader';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { getComponentConfigToken } from '../../utils/get-component-config-token';

export interface ButtonOption {
  label: string;
  buttonVariant?: ActionVariantType;
}

const TAG_NAME = 'blr-text-button-group';

@customElement(TAG_NAME)
export class BlrTextButtonGroup extends LitElement {
  static styles = [StyleTextButtonGroupCustom, StyleTextButtonCustom];

  @property() label = 'Button Label';
  @property() onClick?: HTMLButtonElement['onclick'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() leadingIcon?: SizelessIconType;
  @property() trailingIcon?: SizelessIconType;
  @property() loading!: boolean;
  @property() disabled?: boolean;
  @property() buttonId?: string;
  @property() variant: ActionVariantType = 'primary';
  @property() size: ButtonGroupSizesType = 'md';
  @property() loadingStatus!: string;
  @property() alignment: AlignmentType = 'center';
  @property() buttons!: ButtonOption[];
  @property() buttonVariant?: ActionVariantType = 'primary';

  @property() theme: ThemeType = 'Light';

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [actionLight, buttonGroupLight] : [actionDark, buttonGroupDark];

    const alignmentClasses = classMap({
      [`${this.alignment}`]: this.alignment || 'center',
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

    return html`
      <style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class="wrapper ${alignmentClasses} blr-button-group">
        ${this.buttons.map((button) => {
          const buttonVariant = button.buttonVariant || this.variant;

          const buttonClasses = classMap({
            [`${buttonVariant}`]: buttonVariant,
            [`${this.size}`]: this.size || 'md',
            [`${this.alignment}`]: this.alignment || 'center',
            'blr-semantic-action': true,
            'blr-text-button-group': true,
          });

          const labelAndIconGroup = html`
            ${this.leadingIcon &&
            BlrIconRenderFunction({
              icon: calculateIconName(this.leadingIcon, iconSizeVariant),
              size: iconSizeVariant,
              hideAria: true,
              classMap: loaderIconClasses,
            })}
            <span class=${labelClasses}>${button.label}</span>
            ${this.trailingIcon &&
            BlrIconRenderFunction({
              icon: calculateIconName(this.trailingIcon, iconSizeVariant),
              size: iconSizeVariant,
              hideAria: true,
              classMap: loaderIconClasses,
            })}
          `;

          return html`
            <button
              class="${buttonClasses}"
              @click="${this.onClick}"
              @blur="${this.onBlur}"
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
            </button>
          `;
        })}
      </div>
    `;
  }
}

export type BlrTextButtonGroupType = Omit<BlrTextButtonGroup, keyof LitElement>;

export const BlrTextButtonGroupRenderFunction = (params: BlrTextButtonGroupType) =>
  genericBlrComponentRenderer<BlrTextButtonGroupType>(TAG_NAME, { ...params });
