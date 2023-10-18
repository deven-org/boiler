import { TemplateResult, html } from 'lit';

export const genericBlrComponentRenderer = <ComponentType extends { [s: string]: unknown } | ArrayLike<unknown>>(
  tagName: string,
  props: ComponentType,
  useLitBindings = true
): TemplateResult<1> => {
  const templateFragments: string[] = [];
  const values: unknown[] = [];
  const entries = Object.entries(props);

  entries.forEach(([key, value], index) => {
    if (index === 0) {
      templateFragments.push(`<${tagName}${useLitBindings ? ' .' : ' '}${key}=`);
    } else {
      templateFragments.push(`${useLitBindings ? ' .' : ' '}${key}=`);
    }

    values.push(value);
  });
  templateFragments.push(`></${tagName}>`);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  templateFragments.raw = templateFragments;

  const result = html(templateFragments as unknown as TemplateStringsArray, ...values);

  return result;
};
