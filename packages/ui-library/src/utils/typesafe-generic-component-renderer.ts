import { TemplateResult, html } from 'lit';

export const genericBlrComponentRenderer = <ComponentType extends { [s: string]: unknown } | ArrayLike<unknown>>(
  tagName: string,
  props: ComponentType,
  children?: TemplateResult<1>,
  htmlAttributes?: { [s: string]: string | boolean | number }
): TemplateResult<1> => {
  const templateFragments: string[] = [];
  const values: unknown[] = [];
  const propEntries = Object.entries(props);
  const attrEntries = Object.entries(htmlAttributes || {});

  // we will get rid of the dots later on by defining bindings within the component property decorator
  propEntries.forEach(([key, value]) => {
    const needsOpenTag = templateFragments.length === 0;

    if (typeof value === 'function') {
      if (needsOpenTag) {
        templateFragments.push(`<${tagName} @${key}=`);
      } else {
        templateFragments.push(` @${key}=`);
      }

      values.push(value);
    } else if (key === 'classMap') {
      if (needsOpenTag) {
        templateFragments.push(`<${tagName} class=`);
      } else {
        templateFragments.push(` class=`);
      }

      values.push(value);
    } else if (typeof value === 'boolean') {
      if (value === true) {
        if (needsOpenTag) {
          templateFragments.push(`<${tagName} ${key}=`);
        } else {
          templateFragments.push(` ${key}=`);
        }

        values.push(value);
      }
    } else if (typeof value === 'object') {
      if (needsOpenTag) {
        templateFragments.push(`<${tagName} .${key}=`);
      } else {
        templateFragments.push(` .${key}=`);
      }

      values.push(value);
    } else {
      if (needsOpenTag) {
        templateFragments.push(`<${tagName} ${key}=`);
      } else {
        templateFragments.push(` ${key}=`);
      }

      values.push(value);
    }
  });

  attrEntries.forEach(([key, value], index) => {
    if (typeof value !== 'boolean' || value === true) {
      if (index === 0 && propEntries.length === 0) {
        templateFragments.push(`<${tagName} ${key}=`);
      } else {
        templateFragments.push(` ${key}=`);
      }

      values.push(value);
    }
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
