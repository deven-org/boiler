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

  // protected _targetElement: Element | undefined | null = null;
  // protected _triggerElement: HTMLElement | null = null;
  protected _bubble: HTMLElement | null = null;

  protected _floaterElement: Element | undefined | null = null;
  protected _triggerElement: HTMLElement | null = null;

  protected updated() {
    if (typeof this.offset === 'string') {
      this.offset = parseInt(this.offset);
    }

    const floaterSlot = this.renderRoot?.querySelector('slot[name="floater"]') as HTMLSlotElement;
    this._floaterElement = floaterSlot?.assignedElements({ flatten: true })[0];

    const triggerSlot = this.renderRoot?.querySelector('slot[name="trigger"]') as HTMLSlotElement;
    this._triggerElement = triggerSlot?.assignedElements({ flatten: true })[0].querySelector('blr-tooltip-bubble'); // needs to be independent, but doesn't work unless directly selecting element

    if (!this._floaterElement || !this._triggerElement) {
      return;
    }

    enterEvents.forEach((event) => this._floaterElement?.addEventListener(event, this.show));
    leaveEvents.forEach((event) => this._floaterElement?.addEventListener(event, this.hide));

    if (this._floaterElement || this._triggerElement) {
      tooltipPosition(this._floaterElement, this._triggerElement, this.placement, this.offset);
    }
  }

  protected show = () => {
    this.visible = true;
    // only for bubble
    this._triggerElement.visible = true;
  };

  protected hide = () => {
    this.visible = false;
    // only for bubble
    this._triggerElement.visible = false;
  };

  protected render() {
    return html`
      <slot name="trigger"> </slot>

      <slot name="floater"> </slot>

    `;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrTooltip);
}

export type BlrTooltipType = Omit<BlrTooltip, keyof LitElement>;
