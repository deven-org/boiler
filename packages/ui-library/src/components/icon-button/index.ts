import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { IconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { action } from '../../foundation/semantic-tokens/action.css';
import { iconButton } from '../../foundation/component-tokens/action.css';
import { ActionVariants, SizesType } from '../../globals/types';
import { determineLoaderVariant } from '../../utils/determine-loader-variant';

@customElement('blr-icon-button')
export class BlrIconButton extends LitElement {
  static styles = [styleCustom, action, iconButton];

  @property() arialabel!: string;
  @property() icon!: IconType;
  @property() onClick!: HTMLButtonElement['onclick'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() loading!: boolean;
  @property() disabled?: boolean;
  @property() buttonId?: string;
  @property() variant: ActionVariants = 'primary';
  @property() size!: SizesType;
  @property() loadingStatus!: string;

  render() {
    const classes = classMap({
      [`${this.variant}`]: this.variant,
      [`${this.size}`]: this.size || 'md',
    });

    const loaderVariant = determineLoaderVariant(this.variant);

    return html`<button
      aria-label="${this.ariaLabel}"
      class="blr-semantic-action blr-icon-button ${classes}"
      @click="${this.onClick}"
      @blur="${this.onBlur}"
      ?disabled="${this.disabled}"
      id=${this.buttonId}
    >
      ${this.loading
        ? html`<blr-loader
            .size="${this.size}"
            .variant="${loaderVariant}"
            .loadingStatus="${this.loadingStatus}"
          ></blr-loader>`
        : html`<blr-icon icon="${this.icon}" size="${this.size}" aria-hidden></blr-icon>`}
    </button>`;
  }
}
