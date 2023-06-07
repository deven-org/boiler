import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { action } from '../../foundation/semantic-tokens/action.css';
import { textButton } from '../../foundation/component-tokens/action.css';
import { ActionVariants, RelTypes, SizesType, TargetTypes } from '../../globals/types';
import { determineLoaderVariant } from '../../utils/determine-loader-variant';
import { IconType } from '@boiler/icons';

@customElement('blr-link')
export class BlrLink extends LitElement {
  static styles = [styleCustom, action, textButton];

  @property() label!: string;
  @property() onClick!: HTMLButtonElement['onclick'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() leadingIcon?: IconType;
  @property() trailingIcon?: IconType;
  @property() disabled?: boolean;
  @property() linkId?: string;
  @property() href!: string;
  @property() target?: TargetTypes;
  @property() rel?: RelTypes;
  @property() ariaLabel!: string;
  @property() variant: ActionVariants = 'primary';
  @property() loadingStatus!: string;
  @property() loading!: boolean;
  @property() size!: SizesType;

  render() {
    const classes = classMap({
      'blr-semantic-action': true,
      'blr-text-button': true,
      [`${this.variant}`]: this.variant,
      [`${this.size}`]: this.size || 'md',
      'blr-link': true,
    });

    const loaderVariant = determineLoaderVariant(this.variant);
    return html`<a
      class=${classes}
      aria-label=${this.ariaLabel || nothing}
      href=${this.href || nothing}
      @click=${this.onClick}
      @blur=${this.onBlur}
      ?disabled=${this.disabled}
      id=${this.linkId || nothing}
      rel=${this.rel || nothing}
      target=${this.target || nothing}
    >
      ${this.loading
        ? html`<blr-loader
            .size=${this.size}
            .variant=${loaderVariant}
            .loadingStatus=${this.loadingStatus}
          ></blr-loader>`
        : html`
            ${this.leadingIcon && html`<blr-icon icon=${this.leadingIcon} size=${this.size} aria-hidden></blr-icon>`}
            <span>${this.label}</span>
            ${this.trailingIcon && html`<blr-icon icon=${this.trailingIcon} size=${this.size} aria-hidden></blr-icon>`}
          `}
    </a>`;
  }
}
