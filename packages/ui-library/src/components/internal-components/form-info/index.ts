import { SizelessIconType } from '@boiler/icons';
import { html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { FormSizesType } from '../../../globals/types';
import { BlrFormHintRenderFunction } from '../form-hint';
import { formInfoDark, formInfoLight } from './index.css';

@customElement('blr-form-info')
export class BlrFormInfo extends LitElement {
  static styles = [];

  @property() theme: ThemeType = 'Light';

  @property() size?: FormSizesType = 'md';
  @property() showHint = true;
  @property() hintText?: string;
  @property() hintIcon?: SizelessIconType = 'blrInfo';
  @property() hasError = false;
  @property() errorMessage?: string;
  @property() errorIcon?: SizelessIconType = 'blrInfo';

  protected render() {
    if (this.size) {
      const dynamicStyles = this.theme === 'Light' ? [formInfoLight] : [formInfoDark];

      return html`
        <style>
          ${dynamicStyles}
        </style>
        <div class="blr-form-info-container ${this.size}">
          ${this.showHint
            ? html`
                ${BlrFormHintRenderFunction({
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
                ${BlrFormHintRenderFunction({
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
}

export type BlrFormInfoType = Omit<BlrFormInfo, keyof LitElement>;

export const BlrFormInfoRenderFunction = ({
  theme,
  size,
  showHint,
  hintText,
  hintIcon,
  hasError,
  errorMessage,
  errorIcon,
}: BlrFormInfoType) => html`<blr-form-info
  .theme=${theme}
  .size=${size}
  .showHint=${showHint}
  .hintText=${hintText}
  .hintIcon=${hintIcon}
  .hasError=${hasError}
  .errorMessage=${errorMessage}
  .errorIcon=${errorIcon}
></blr-form-info>`;
