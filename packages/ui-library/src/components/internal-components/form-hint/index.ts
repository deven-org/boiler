import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { FormSizesType, HintVariantType } from '../../../globals/types';
import { BlrIconRenderFunction } from '../icon';
import { SizelessIconType } from '@boiler/icons';
import { formDark, formLight } from '../../../foundation/semantic-tokens/form.css';
import { calculateIconName } from '../../../utils/calculate-icon-name';
import { styleCustom } from './index.css';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';

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

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class=${classes}>
        <div class="hint-container">
          <div class="icon-wrapper">
            ${BlrIconRenderFunction({
              icon: calculateIconName(this.icon, 'sm'),
              size: 'sm',
              classMap: iconClasses,
              hideAria: true,
            })}
          </div>
          <div class="label-wrapper">
            <span class="blr-caption-text">${this.message}</span>
          </div>
        </div>
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
