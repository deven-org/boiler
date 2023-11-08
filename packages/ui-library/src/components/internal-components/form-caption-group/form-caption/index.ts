import { LitElement, TemplateResult, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { FormSizesType, CaptionVariantType, SizesType } from '../../../../globals/types';
import { BlrIconRenderFunction } from '../../../ui/icon';
import { SizelessIconType } from '@boiler/icons';
import { formDark, formLight } from '../../../../foundation/semantic-tokens/form.css';
import { calculateIconName } from '../../../../utils/calculate-icon-name';
import { styleCustom } from './index.css';
import { ThemeType } from '../../../../foundation/_tokens-generated/index.themes';
import { getComponentConfigToken } from '../../../../utils/get-component-config-token';
import { genericBlrComponentRenderer } from '../../../../utils/typesafe-generic-component-renderer';

const TAG_NAME = 'blr-form-caption';

@customElement(TAG_NAME)
export class BlrFormCaption extends LitElement {
  static styles = [styleCustom];

  @property() message?: string;
  @property() arialabel?: string;
  @property() icon?: SizelessIconType;
  @property() variant: CaptionVariantType = 'hint';
  @property() size: FormSizesType = 'md';
  @property() childElement?: TemplateResult<1>;
  @property() theme: ThemeType = 'Light';

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [formLight] : [formDark];

    const classes = classMap({
      'blr-form-caption': true,
      [`${this.variant}`]: this.variant,
      [`${this.size}`]: this.size,
    });

    const iconClasses = classMap({
      'blr-icon': true,
      [`${this.size}`]: this.size || 'md',
    });

    const iconSizeVariant = getComponentConfigToken([
      'SizeVariant',
      'Forms',
      this.size.toUpperCase(),
      'CaptionComponent',
      'Icon',
    ]).toLowerCase() as SizesType;

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class=${classes} aria-label=${this.arialabel || nothing}>
        ${this.icon
          ? BlrIconRenderFunction({
              icon: calculateIconName(
                this.variant === 'hint' || this.variant === 'error' ? this.icon : '',
                iconSizeVariant
              ),
              size: iconSizeVariant,
              classMap: iconClasses,
              hideAria: true,
            })
          : nothing}
        <span class="blr-caption-text">${this.message}</span>
        ${this.childElement}
      </div>`;
  }
}

export type BlrFormCaptionType = Omit<BlrFormCaption, keyof LitElement>;

export const BlrFormCaptionRenderFunction = (params: BlrFormCaptionType) =>
  genericBlrComponentRenderer<BlrFormCaptionType>(TAG_NAME, { ...params });
