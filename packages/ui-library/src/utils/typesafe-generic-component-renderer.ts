import { TemplateResult, html } from 'lit';

export const genericBlrComponentRenderer = <ComponentType extends { [s: string]: unknown } | ArrayLike<unknown>>(
  tagName: string,
  props: ComponentType
): TemplateResult<1> => {
  const templateFragments: string[] = [];
  const values: unknown[] = [];
  const entries = Object.entries(props);

  entries.forEach(([key, value], index) => {
    if (index === 0) {
      templateFragments.push(`<${tagName} .${key}=`);
    } else {
      templateFragments.push(` .${key}=`);
    }

    values.push(value);
  });

  templateFragments.push(`></${tagName}>`);

  // eslint-disable-next-line
  // @ts-ignore
  templateFragments.raw = templateFragments;

  return html(templateFragments as unknown as TemplateStringsArray, ...values);
};
