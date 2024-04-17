import { css, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { light, dark } from './index.css';
import { classMap } from 'lit/directives/class-map.js';
import { TAG_NAME } from './renderFunction';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { LitElementCustom } from '../../utils/lit-element-custom';

export class BlrTooltip extends LitElementCustom {
  static styles = [
    css`
      :host([visible]) {
        visibility: visible;
        opacity: 1;
      }
    `,
  ];
  @property() theme?: ThemeType = 'Light';
  @property() message!: string;
  @property() hasArrow?: boolean = true;
  @property() elevation?: boolean = true;
  @property({ reflect: true, type: Boolean })
  visible? = false;
  @property() static?: boolean = false;

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [light] : [dark];

    const classes = classMap({
      [`elevation`]: this.elevation || false,
      [`static`]: this.static || false,
    });

    return html`<style>
        ${dynamicStyles}
      </style>
      <div class="${classes}">
        <div class="content">${this.message}</div>
        ${this.hasArrow
          ? html`<div class="arrow">
              <svg width="12" height="4" fill="none" viewBox="0 0 12 4">
                <path d="M6 4C3.738 4 3 0 0 0h12C9 0 8.262 4 6 4Z" />
              </svg>
            </div>`
          : nothing}
      </div>`;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrTooltip);
}

export type BlrTooltipType = Omit<BlrTooltip, keyof LitElementCustom>;
