import { CSSResult } from 'lit';
import { css as litCss, unsafeCSS } from 'lit';
import { transform } from 'nested-css-to-flat';

type cssAttributeValue = string | number;

const typeSafeNestedCss = (strings: TemplateStringsArray, ...values: cssAttributeValue[]): CSSResult => {
  const flattenedCss = unsafeCSS(transform(String.raw(strings, ...values)));
  return litCss`${flattenedCss}`;
};

export { typeSafeNestedCss };
