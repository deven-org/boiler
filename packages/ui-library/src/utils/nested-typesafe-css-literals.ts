import { CSSResult } from 'lit';
import { css as internalCss } from 'nested-css-to-flat/lit-css';

export type cssAttributeValue = string | number;

const typeSafeNestedcss = (strings: TemplateStringsArray, ...values: cssAttributeValue[]): CSSResult => {
  return internalCss(strings, ...values);
};

export default typeSafeNestedcss;
