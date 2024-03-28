/**
 * Generates a flat list of possible property combinations for the provided record of input values.
 *
 * **Does not act deeply.**
 *
 * @example
 * ```typescript
 * combineProperties({
 *  color: [undefined, 'red'],
 *  sizeVariant: ['md', 'lg'],
 * })
 * ```
 *
 * yields:
 *
 * ```typescript
 * [{
 *   color: undefined,
 *   sizeVariant: 'md',
 * }, {
 *   color: 'red',
 *   sizeVariant: 'md',
 * }, {
 *   color: undefined,
 *   sizeVariant: 'lg',
 * }, {
 *   color: 'red',
 *   sizeVariant: 'lg',
 * }]
 * ```
 *
 * @param valuesRecord The record of possible values a property can take.
 * @returns A flat list of possible property combinations in shape of the {@linkcode valuesRecord}.
 *
 * - Search terms: combinations, permutations, combine
 */
export function combineProperties<TObject extends Record<string | number | symbol, unknown>>(
  valuesRecord: ValuesRecord<TObject>
): TObject[] {
  let combos: TObject[] = [];
  for (const key in valuesRecord) {
    const values = valuesRecord[key];
    const all = [];
    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < (combos.length || 1); j++) {
        const newCombo = { ...combos[j], [key]: values[i] };
        all.push(newCombo);
      }
    }
    combos = all;
  }
  return combos;
}

export type ValuesRecord<TObject extends Record<string | number | symbol, unknown>> = {
  [PropertyName in keyof TObject]-?: TObject[PropertyName][];
};
