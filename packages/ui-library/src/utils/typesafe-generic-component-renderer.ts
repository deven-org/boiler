import { TemplateResult, html } from 'lit';
import { camelCaseToKebabCase } from './lit-element-custom';

export const genericBlrComponentRenderer = <ComponentType extends { [s: string]: unknown } | ArrayLike<unknown>>(
  tagName: string,
  props: ComponentType,
  children?: TemplateResult<1>,
  htmlAttributes?: { [s: string]: string | boolean | number }
): TemplateResult<1> => {
  let templateFragments: string[] = [];
  const values: unknown[] = [];
  const propEntries = Object.entries(props);
  const attrEntries = Object.entries(htmlAttributes || {});

  // 1. Render HTML open tag.
  {
    // 1.0. Add HTML tag name fragment
    templateFragments.push(`<${tagName}`);

    // 1.1. Collect html attribute name fragments and values from props.
    // we will get rid of the dots later on by defining bindings within the component property decorator
    propEntries.forEach(([key, value]) => {
      if (typeof value === 'function') {
        templateFragments.push(` @${key}=`);
      } else if (key === 'classMap') {
        templateFragments.push(` class=`);
      } else if (typeof value === 'boolean') {
        if (value === true) {
          templateFragments.push(` ${camelCaseToKebabCase(key)}=`);
        } else {
          templateFragments.push(` .${key}=`);
        }
      } else if (typeof value === 'object') {
        templateFragments.push(` .${key}=`);
      } else {
        templateFragments.push(` ${camelCaseToKebabCase(key)}=`);
      }

      values.push(value);
    });

    // 1.2. Collect html attribute name fragments and values from htmlAttributes
    attrEntries.forEach(([key, value], index) => {
      if (typeof value !== 'boolean' || value === true) {
        if (index > 0) {
          templateFragments.push(` ${key}=`);
        }

        values.push(value);
      }
    });

    // 1.3. Close the open tag after all props and attributes are processed.
    templateFragments.push('>');
  }

  // 2. Insert child elements if any
  if (children) {
    values.push(children);
  } else {
    values.push('');
  }

  // 3. Render the HTML close tag
  templateFragments.push(`</${tagName}>`);

  /**
   * For some reason the HTML open tag can not be followed by an empty value and thus needs to be joined with either the HTML close tag or the first HTML attribute.
   * Lit will render incorrectly or throw an error otherwise.
   * To clarify:
   *
   * This does not work:
   *
   * ```ts
   * const templateFragments = ['<custom-button', '></custom-button']
   * const values = ['']
   *
   * html(templateFragments, ...values) // Render Failure
   * ```
   *
   * Whereas this is fine:
   *
   * ```ts
   * const templateFragments = ['<custom-button/></custom-button>']
   * const values = []
   *
   * html(templateFragments, ...values)
   * ```
   *
   * For this reason we de -& re-structure the templateFragments array and join the first fragment
   * (which should always be the HTML open tag) with whatever fragment comes next (either a parameter or the close tag).
   * Then we include the remaining fragments if any.
   */
  const [openTagFragment, firstParameterOrClosingFragment, ...remainingFragments] = templateFragments;
  templateFragments = [openTagFragment + firstParameterOrClosingFragment, ...remainingFragments];

  // eslint-disable-next-line
  // @ts-ignore
  templateFragments.raw = [...templateFragments];

  return html(templateFragments as unknown as TemplateStringsArray, ...values);
};
