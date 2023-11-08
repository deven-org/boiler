import { SizelessIconType } from '@boiler/icons';
import { html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { FormSizesType } from '../../../globals/types';
import { BlrFormCaptionRenderFunction } from './form-caption';
import { formCaptionGroupDark, formCaptionGroupLight } from './index.css';

@customElement('blr-form-caption-group')
export class BlrFormCaption extends LitElement {
  static styles = [];

  @property() theme: ThemeType = 'Light';

  @property() size: FormSizesType = 'md';
  @property() showHint = true;
  @property() hintText?: string;
  @property() hintIcon?: SizelessIconType = 'blrInfo';
  @property() hasError = false;
  @property() errorMessage?: string;
  @property() errorIcon?: SizelessIconType = 'blrInfo';

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [formCaptionGroupLight] : [formCaptionGroupDark];

    return html`
      <style>
        ${dynamicStyles}
      </style>
      <div class="blr-form-caption-group-container ${this.size}">
        ${this.showHint
          ? html`
              ${BlrFormCaptionRenderFunction({
                message: this.hintText,
                variant: 'hint',
                icon: this.hintIcon,
                size: this.size,
                theme: this.theme,
              })}
            `
          : nothing}
        ${this.hasError
          ? html`
              ${BlrFormCaptionRenderFunction({
                message: this.errorMessage,
                variant: 'error',
                icon: this.errorIcon,
                size: this.size,
                theme: this.theme,
              })}
            `
          : nothing}
      </div>
    `;
  }
}

export type BlrFormCaptionGroupType = Omit<BlrFormCaption, keyof LitElement>;

export const BlrFormCaptionGroupRenderFunction = ({
  theme,
  size,
  showHint,
  hintText,
  hintIcon,
  hasError,
  errorMessage,
  errorIcon,
}: BlrFormCaptionGroupType) => html`<blr-form-caption-group
  .theme=${theme}
  .size=${size}
  .showHint=${showHint}
  .hintText=${hintText}
  .hintIcon=${hintIcon}
  .hasError=${hasError}
  .errorMessage=${errorMessage}
  .errorIcon=${errorIcon}
></blr-form-caption-group>`;
