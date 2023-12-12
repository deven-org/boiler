import { LitElement, css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { light, dark } from './index.css';
import { FormSizesType } from '../../../../globals/types';
import { ThemeType } from '../../../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../../../utils/typesafe-generic-component-renderer';
import { classMap } from 'lit/directives/class-map.js';

const TAG_NAME = 'blr-tooltip-bubble';

@customElement('blr-tooltip-bubble')
export class BlrTooltipBubble extends LitElement {
  static styles = [
    css`
      :host([visible]) {
        visibility: visible;
        opacity: 1;
      }
    `,
  ];
  @property() theme?: ThemeType = 'Light';
  @property() size?: FormSizesType = 'md';
  @property() text!: string;
  @property() hasArrow?: boolean = true;
  @property() elevation?: boolean = true;
  @property({ reflect: true, type: Boolean })
  visible? = false;
  @property() static?: boolean = false;

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [light] : [dark];

    const classes = classMap({
      [`${this.size}`]: this.size || 'sm',
      [`elevation`]: this.elevation || false,
      [`static`]: this.static || false,
    });

    return html`<style>
        ${dynamicStyles}
      </style>
      <div class="${classes}">
        <div class="content">${this.text}</div>
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

export type BlrTooltipBubbleType = Omit<BlrTooltipBubble, keyof LitElement>;

export const BlrTooltipBubbleRenderFunction = (params: BlrTooltipBubbleType) =>
  genericBlrComponentRenderer<BlrTooltipBubbleType>(TAG_NAME, { ...params });
