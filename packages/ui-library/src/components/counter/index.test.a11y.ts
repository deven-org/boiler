import '@boiler/ui-library';

import { BlrCounterRenderFunction } from './renderFunction';
import type { BlrCounterType } from '.';

import { combineProperties } from '../../utils/test/combine-properties';
import { runA11yCombinationTests } from '../../utils/test/run-combination-test';

const propertyCombinations = combineProperties<BlrCounterType>({
  maxValue: [0, 100],
  sizeVariant: ['sm', 'md', 'lg', undefined],
  theme: ['Dark', 'Light'],
  value: [0, 50, 100],
  variant: ['error', 'neutral', 'warn'],
});

describe('blr-counter', () => {
  runA11yCombinationTests({
    combinationsList: propertyCombinations,
    componentRenderer: BlrCounterRenderFunction,
  });
});
