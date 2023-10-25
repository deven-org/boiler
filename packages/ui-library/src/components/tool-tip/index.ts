import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { sliderDark, sliderLight } from '../../foundation/component-tokens/tool-tip.css';

import { FormSizesType, ToolTipPosition, ToolTipVisibility, ToolTipArrowPosition } from '../../globals/types';
import {
  ToolTipPosition as toolTipPosition,
  ToolTipVisibility as toolTipVisibility,
  ToolTipArrowPosition as toolTipArrowPosition,
} from '../../globals/constants';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { styleMap } from 'lit/directives/style-map.js';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

const TAG_NAME = 'blr-tool-tip';

@customElement(TAG_NAME)
export class BlrToolTip extends LitElement {
  @property() theme: ThemeType = 'Light';
  @property() size: FormSizesType = 'sm';
  @property() text!: string;
  @property() toolTipId?: string = 'tooltip-1';
  @property() placement!: ToolTipPosition;
  @property() visibility?: ToolTipVisibility = 'onHover';
  @property() toolTipArrow?: ToolTipArrowPosition = 'start';
  @property() customCss?: string = '';
  @property() elevation?: boolean = false;

  @state() protected toolTipTxtWidth = 0;
  @state() protected toolTipTxtHeight = 0;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    super.connectedCallback();

    // Wait for the shadow DOM to be fully attached
    this.updateComplete.then(() => {
      const tooltipDiv = this.shadowRoot?.querySelector('#toolTip_txt') as HTMLDivElement;
      if (tooltipDiv) {
        this.toolTipTxtWidth = tooltipDiv.offsetWidth;
        this.toolTipTxtHeight = tooltipDiv.offsetHeight;
      }
    });
  }

  protected noseAlignment = () => {
    if (this.placement === toolTipPosition[0]) {
      return {
        left: `${this.toolTipTxtWidth}px`,
      };
    } else if (this.placement === toolTipPosition[1]) {
      return {
        right: `${this.toolTipTxtWidth}px`,
      };
    } else if (this.placement === toolTipPosition[3]) {
      return {
        bottom: `${this.toolTipTxtHeight}px`,
      };
    }
    return {
      top: `${this.toolTipTxtHeight}px`,
    };
  };

  protected render() {
    const generatedStyles = this.theme === 'Light' ? [sliderLight] : [sliderDark];
    const dynamicStyles = [...generatedStyles];

    const classes = classMap({
      'blr-semantic-action': true,
      'blr-tooltip': true,
      [`${this.size}`]: this.size,
    });
    const generatedArrowPosition =
      this.placement === toolTipPosition[2] || this.placement === toolTipPosition[3]
        ? `tooltip-horizontal-${this.toolTipArrow}`
        : `tooltip-vertical-${this.toolTipArrow}`;

    const toolTipClasses = classMap({
      'tooltip': true,
      [`${this.size}`]: this.size,
      'blr-tooltip-visible-always': this.visibility === toolTipVisibility[0],
      [`tooltip-${this.placement}`]: true,
      [`${generatedArrowPosition}`]: true,
      [`hide-arrow`]: this.toolTipArrow === toolTipArrowPosition[3],
      [this.customCss || '']: this.customCss || false,
      'elevation': this.elevation || false,
    });

    const innerContainerClasses = classMap({
      'inner-container': true,
    });

    this.noseAlignment();

    return html`
      <style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class=${classes}>
        <!-- Children will be rendered here -->

        <slot></slot>
        <div class="${toolTipClasses}" id=${this.toolTipId}>
          <div class="${innerContainerClasses}" id="toolTip_txt">${this.text}</div>

          <object
            data="../../../assets/feedback/tooltip/NoseSolo.svg"
            class="nose-solo"
            style=${styleMap(this.noseAlignment())}
          >
            <!-- Fallback content or text goes here -->
            <!-- This will be displayed if the browser doesn't support <object> or if the SVG fails to load -->
            Fallback content or message if SVG is not supported.
          </object>
        </div>
      </div>
    `;
  }
}

export type BlrToolTipTypeWithOmitProperty = Omit<BlrToolTip, keyof LitElement>;
export type BlrToolTipType = Partial<BlrToolTipTypeWithOmitProperty> & {
  itemRenderer: TemplateResult;
};

export const BlrToolTipRenderFunction = (params: BlrToolTipType) =>
  genericBlrComponentRenderer<BlrToolTipType>(TAG_NAME, { ...params });
