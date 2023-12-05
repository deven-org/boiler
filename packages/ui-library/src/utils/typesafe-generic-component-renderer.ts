import { TemplateResult, html } from 'lit';

export const genericBlrComponentRenderer = <ComponentType extends { [s: string]: unknown } | ArrayLike<unknown>>(
  tagName: string,
  props: ComponentType,
  children?: TemplateResult<1>
): TemplateResult<1> => {
  const templateFragments: string[] = [];
  const values: unknown[] = [];
  const entries = Object.entries(props);

  entries.forEach(([key, value], index) => {
    if (typeof value !== 'function') {
      if (index === 0) {
        templateFragments.push(`<${tagName} .${key}=`);
      } else {
        templateFragments.push(` .${key}=`);
      }
    } else {
      if (index === 0) {
        templateFragments.push(`<${tagName} @${key}=`);
      } else {
        templateFragments.push(` @${key}=`);
      }
    }

    values.push(value);
  });

  if (children) {
    templateFragments.push(`>`);
    values.push(children);
    templateFragments.push(`</${tagName}>`);
  } else {
    templateFragments.push(`></${tagName}>`);
  }

  // eslint-disable-next-line
  // @ts-ignore
  templateFragments.raw = templateFragments;

  return html(templateFragments as unknown as TemplateStringsArray, ...values);
};
