import { fixture, expect } from '@open-wc/testing';
import type { TaggedComponentRenderFunction } from '../typesafe-generic-component-renderer';

export type RunCombinationTestsOptions<T> = {
  combinationList: T[];
  subject: string;
  test: (parameters: T) => Mocha.Func | Mocha.AsyncFunc;
};

export function runCombinationTests<TObject extends Record<string | number | symbol, unknown>>(
  options: RunCombinationTestsOptions<TObject>
): void {
  options.combinationList.forEach((parameters) => {
    it(
      `passes ${options.subject} test for property combination:\n\n${JSON.stringify(parameters, undefined, 2)}\n`,
      options.test(parameters)
    );
  });
}

export type RunA11yCombinationTestsOptions<T extends Record<string | number | symbol, unknown>> = {
  combinationsList: T[];
  componentRenderer: TaggedComponentRenderFunction<T>;
};

export function runA11yCombinationTests<TObject extends Record<string | number | symbol, unknown>>(
  options: RunA11yCombinationTestsOptions<TObject>
): void {
  runCombinationTests({
    combinationList: options.combinationsList,
    subject: 'a11y',
    test: (parameters) => async () => {
      const el = await fixture(options.componentRenderer(parameters));
      await expect(el).to.be.accessible();
    },
  });
}
