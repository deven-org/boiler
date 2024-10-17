import { html, nothing } from 'lit';
import { state } from 'lit/decorators.js';
import { property } from '../../utils/lit/decorators.js';
import { Placement as PlacementType } from '@floating-ui/dom';
import { classMap } from 'lit/directives/class-map.js';
import { tooltipPosition } from './tooltip-position.js';
import { staticStyles } from './index.css.js';
import { TAG_NAME } from './renderFunction.js';

import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes.js';

const enterEvents = ['pointerenter', 'focus'];
const leaveEvents = ['pointerleave', 'blur', 'keydown', 'click'];

export class BlrTooltip extends LitElementCustom {
  static styles = [staticStyles];

  @property() accessor theme: ThemeType = 'Light_value';
  @property() accessor message!: string;
  @property({ type: Boolean }) accessor hasArrow: boolean | undefined = true;
  @property({ type: Boolean }) accessor elevation: boolean | undefined = true;
  @property() accessor placement: PlacementType | undefined = 'top';
  @property() accessor offset: number | string | undefined = 4;

  @state() protected accessor visible = false;

  protected _referenceElement: Element | undefined | null = null;
  protected _tooltipElement: HTMLElement | null = null;

  protected updated() {
    if (typeof this.offset === 'string') {
      this.offset = parseInt(this.offset);
    }

    const slot = this.renderRoot?.querySelector('slot');
    this._referenceElement = slot?.assignedElements({ flatten: true })[0];

    this._tooltipElement = this.renderRoot?.querySelector('#tooltipElement');

    if (!this._referenceElement || !this._tooltipElement) {
      return;
    }

    enterEvents.forEach((event) => this._referenceElement?.addEventListener(event, this.show));
    leaveEvents.forEach((event) => this._referenceElement?.addEventListener(event, this.hide));

    if (this._referenceElement || this._tooltipElement) {
      tooltipPosition(this._referenceElement, this._tooltipElement, this.placement, this.offset);
    }
  }

  protected show = () => (this.visible = true);

  protected hide = () => (this.visible = false);

  protected render() {
    const classes = classMap({
      [`elevation`]: this.elevation || false,
      [`visible`]: this.visible || false,
    });
    return html`<slot></slot>
      <div id="tooltipElement" class=${this.theme}>
        <div class="${classes}">
          <div class="content">${this.message}</div>
          ${this.hasArrow
            ? html`<div class="arrow">
                <svg width="12" height="4" fill="none" viewBox="0 0 12 4">
                  <path d="M6 4C3.738 4 3 0 0 0h12C9 0 8.262 4 6 4Z" />
                </svg>
              </div>`
            : nothing}
        </div>
      </div> `;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrTooltip);
}

export type BlrTooltipType = ElementInterface<BlrTooltip>;
