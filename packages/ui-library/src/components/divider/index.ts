/* eslint-disable no-console */
import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DividerVariationTypes } from '../../globals/types';
import { dividerLight, dividerDark } from '../../foundation/component-tokens/ui.css';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';

@customElement('blr-divider')
export class BlrDivider extends LitElement {
  @property() dividerDirectionVariant!: DividerVariationTypes;

  @property() directionVariant?: DividerVariationTypes = 'vertical';

  @property() theme: ThemeType = 'Light';

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [dividerLight] : [dividerDark];

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      ${this.dividerDirectionVariant === 'vertical'
        ? html`<div class="blr-divider vertical"></div>`
        : html`<div class="blr-divider horizontal"></div>`} `;
  }
}

export type BlrDividerType = Omit<BlrDivider, keyof LitElement>;

/*
export const BlrDividerRenderFunction = ({ dividerDirectionVariant, size, theme }: BlrDividerType) => {
  return html`<blr-divider
    .dividerDirectionVariant=${dividerDirectionVariant}
    .theme=${theme}
  ></blr-divider>`;
};
*/

// html`<blr-divider .dividerDirectionVariant=${'peter'} .theme=${'peter'}></blr-divider>`;
// strings: ["<blr-divider .dividerDirectionVariant=", " .theme=", "></blr-divider>"], values: ["peter", "peter"]

const genericBlrComponentRenderer = (props: BlrDividerType, binding: boolean): TemplateResult<1> => {
  const templateFragments: string[] = [];

  const entries = Object.entries(props);
  entries.forEach(([key, value], index) => {
    console.log(`${index}: ${key} = ${value}`);

    if (index === 0) {
      templateFragments.push(`<blr-divider${binding ? ' .' : ' '}${key}="${value}"`);
    } else {
      templateFragments.push(`${binding ? ' .' : ' '}${key}="${value}"`);
    }
  });
  templateFragments.push(`></blr-divider>`);

  console.log(templateFragments);
  s;
};

export const BlrDividerRenderFunction = ({ dividerDirectionVariant, theme }: BlrDividerType) => {
  const returnValue = genericBlrComponentRenderer({ dividerDirectionVariant, theme }, true);
  console.log(returnValue);

  return returnValue;
};
