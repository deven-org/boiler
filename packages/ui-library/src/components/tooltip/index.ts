import { html, nothing } from 'lit';
import { state } from 'lit/decorators.js';
import { property } from '../../utils/lit/decorators.js';
import { Placement as PlacementType } from '@floating-ui/dom';
import { classMap } from 'lit/directives/class-map.js';
import { tooltipPosition } from './tooltip-position.js';
import { staticStyles } from './index.css.js';
import { TAG_NAME } from './renderFunction.js';

import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';
import { ThemeType, Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { makeSanitizer } from '../../utils/lit/sanitize.js';
import { SanitizationController } from '../../utils/lit/sanitization-controller.js';

const propertySanitizer = makeSanitizer((unsanitized: BlrTooltipType) => ({
  theme: unsanitized.theme ?? Themes[0],
  message: unsanitized.message ?? '',
  hasArrow: unsanitized.hasArrow ?? true,
  elevation: unsanitized.elevation ?? true,
  placement: unsanitized.placement ?? 'top',
  offset: unsanitized.offset ?? 4,
}));

const enterEvents = ['pointerenter', 'focus'];
const leaveEvents = ['pointerleave', 'blur', 'keydown', 'click'];

export class BlrTooltip extends LitElementCustom {
  static styles = [staticStyles];

  @property() accessor theme: ThemeType | undefined;
  @property() accessor message!: string;
  @property({ type: Boolean }) accessor hasArrow: boolean | undefined;
  @property({ type: Boolean }) accessor elevation: boolean | undefined;
  @property() accessor placement: PlacementType | undefined;
  @property() accessor offset: number | string | undefined;

  @state() protected accessor visible = false;

  private sanitizedController: SanitizationController<
    BlrTooltipType, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >;

  protected _referenceElement: Element | undefined | null = null;
  protected _tooltipElement: HTMLElement | null = null;

  constructor() {
    super();
    this.sanitizedController = new SanitizationController<
      BlrTooltipType, // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
    >({
      host: this,
      sanitize: propertySanitizer, // Apply sanitizer to handle defaults
    });
  }

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
      tooltipPosition(
        this._referenceElement,
        this._tooltipElement,
        this.sanitizedController.values.placement,
        this.sanitizedController.values.offset,
      );
    }
  }

  protected show = () => (this.visible = true);

  protected hide = () => (this.visible = false);

  protected render() {
    const sanitized = this.sanitizedController.values;

    const classes = classMap({
      [`elevation`]: sanitized.elevation || false,
      [`visible`]: sanitized.visible || false,
    });
    return html`<slot></slot>
      <div id="tooltipElement" class=${sanitized.theme}>
        <div class="${classes}">
          <div class="content">${sanitized.message}</div>
          ${sanitized.hasArrow
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
