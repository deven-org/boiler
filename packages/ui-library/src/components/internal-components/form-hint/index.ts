import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { FormSizesType, HintVariantType, SizesType } from '../../../globals/types';
import { BlrIconRenderFunction } from '../icon';
import { SizelessIconType } from '@boiler/icons';
import { formDark, formLight } from '../../../foundation/semantic-tokens/form.css';
import { calculateIconName } from '../../../utils/calculate-icon-name';
import { styleCustom } from './index.css';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { getComponentConfigToken } from '../../../utils/get-component-config-token';

@customElement('blr-form-hint')
export class BlrFormHint extends LitElement {
  static styles = [styleCustom];

  @property() message?: string;
  @property() icon?: SizelessIconType;
  @property() variant: HintVariantType = 'hint';
  @property() size: FormSizesType = 'md';
  @property() childElement?: TemplateResult<1>;
  @property() theme: ThemeType = 'Light';

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [formLight] : [formDark];

    const classes = classMap({
      'blr-form-hint': true,
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
      <div class=${classes}>
        ${BlrIconRenderFunction({
          icon: calculateIconName(
            this.variant === 'hint' || this.variant === 'error' ? this.icon : '',
            iconSizeVariant
          ),
          size: iconSizeVariant,
          classMap: iconClasses,
          hideAria: true,
        })}
        <span class="blr-caption-text">${this.message}</span>
        ${this.childElement}
      </div>`;
  }
}

export type BlrFormHintType = Omit<BlrFormHint, keyof LitElement>;

export const BlrFormHintRenderFunction = ({ message, icon, variant, size, childElement, theme }: BlrFormHintType) => {
  return html`<blr-form-hint
    .message=${message}
    .icon=${icon}
    .variant=${variant}
    .size=${size}
    .childElement=${childElement}
    .theme=${theme}
  ></blr-form-hint>`;
};
