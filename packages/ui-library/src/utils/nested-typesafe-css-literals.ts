import { CSSResult } from 'lit-element';
import { css as internalCss } from 'nested-css-to-flat/lit-css';

type cssAttributeValue = string | number;

const typeSafeNestedCss = (strings: TemplateStringsArray, ...values: cssAttributeValue[]): CSSResult => {
  return internalCss(strings, ...values);
};

export { typeSafeNestedCss };
