import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { Placement as PlacementType } from '@floating-ui/dom';
import { tooltipPosition } from './tooltip-position';
import { styleCustom } from './index.css';
import { TAG_NAME } from './renderFunction';

import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
// import { BlrTooltipBubbleRenderFunction } from '../tooltip-bubble/renderFunction';

const enterEvents = ['pointerenter', 'focus'];
const leaveEvents = ['pointerleave', 'blur', 'keydown', 'click'];

export class BlrTooltip extends LitElement {
  static styles = [styleCustom];

  @property() theme?: ThemeType = 'Light';
  @property() message!: string;
  @property() hasArrow?: boolean = true;
  @property() elevation?: boolean = false;
  @property() placement?: PlacementType = 'top';
  @property() offset?: number | string = 4;

  @state() protected visible = false;

  protected _referenceElement: Element | undefined | null = null;
  protected _tooltipElement: HTMLElement | null = null;

  protected updated() {
    if (typeof this.offset === 'string') {
      this.offset = parseInt(this.offset);
    }

    const targetSlot = this.renderRoot?.querySelector('slot[name="target"]');
    this._referenceElement = targetSlot?.assignedElements({ flatten: true })[0];

    const triggerSlot = this.renderRoot?.querySelector('slot[name="floater"]');
    this._tooltipElement = triggerSlot?.assignedElements({ flatten: true })[0];

    //console.log({ ref: this._referenceElement, target: this._tooltipElement });

    if (!this._referenceElement || !this._tooltipElement) {
      return;
    }

    enterEvents.forEach((event) => this._referenceElement?.addEventListener(event, this.show));
    leaveEvents.forEach((event) => this._referenceElement?.addEventListener(event, this.hide));

    if (this._referenceElement || this._tooltipElement) {
      tooltipPosition(this._referenceElement, this._tooltipElement, this.placement, this.offset);
    }
  }

  protected show = () => {
    this.visible = true;
    //console.log('enter');
  };

  protected hide = () => {
    this.visible = false;
    //console.log('leave');
  };

  protected render() {
    return html`
      <slot name="floater"> </slot>

      <slot name="target"> </slot>
    `;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrTooltip);
}

export type BlrTooltipType = Omit<BlrTooltip, keyof LitElement>;
