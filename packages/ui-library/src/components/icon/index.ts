import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { IconMapping, IconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { SizesType } from '../../globals/types';
import { DirectiveResult } from 'lit-html/directive';
import { ClassMapDirective } from 'lit-html/directives/class-map';
import { until } from 'lit-html/directives/until.js';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';
import { TAG_NAME } from './renderFunction';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';

export class BlrIcon extends LitElement {
  static styles = [styleCustom];

  @property() icon: IconType = 'blr360Xs';
  @property() sizeVariant: SizesType = 'md';
  @property() ignoreSize?: boolean = false;

  @property() theme: ThemeType = 'Light';
  @property() classMap?: DirectiveResult<typeof ClassMapDirective>;

  // these are not triggered directly but allows us to map it internally and bve typesafe
  @property() blrClick?: () => void;

  protected handleClick = (event: Event) => {
    this.dispatchEvent(
      new CustomEvent('blrClick', { bubbles: true, composed: true, detail: { originalEvent: event } })
    );
  };

  protected render() {
    const sizeKey = this.ignoreSize ? 'full' : this.sizeVariant.toLowerCase();

    const unfullfilledRenderResult = html`<span
      @click=${this.handleClick}
      @keydown=${(event: KeyboardEvent) => {
        if (event.code === 'Space') {
          this.handleClick(event);
        }
      }}
      class="blr-icon ${sizeKey}"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
    </span>`;

    if (IconMapping.hasOwnProperty(this.icon) && typeof IconMapping[this.icon] === 'function') {
      const importedIcon = IconMapping[this.icon]();

      const fullfilledRenderResult = importedIcon
        .then((iconModule) => {
          return html`<span
            @click=${this.handleClick}
            @keydown=${(event: KeyboardEvent) => {
              if (event.code === 'Space') {
                this.handleClick(event);
              }
            }}
            class="blr-icon ${sizeKey}"
            >${unsafeSVG(iconModule.default)}</span
          >`;
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.error(err.message));

      return until(fullfilledRenderResult, unfullfilledRenderResult);
    } else {
      return unfullfilledRenderResult;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrIcon);
}

export type BlrIconType = Partial<Omit<BlrIcon, keyof LitElement>>;
