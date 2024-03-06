/* eslint-disable @typescript-eslint/await-thenable */
import '@boiler/ui-library/dist/';

import { BlrIconRenderFunction, IconTagName } from './renderFunction';

import { fixture, expect } from '@open-wc/testing';
import { classMap } from 'lit/directives/class-map.js';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import type { BlrIconType } from '.';

const TEST_CLASS = 'test-class';

const sampleParams: BlrIconType = { sizeVariant: 'md' };

describe(`${IconTagName}`, () => {
  it('containing the right className', async () => {
    const classes = classMap({
      [`${TEST_CLASS}`]: true,
    });

    const element = await fixture(BlrIconRenderFunction({ ...sampleParams, classMap: classes }));
    await expect(element.className).to.contain(TEST_CLASS);
  });

  it('svg contains md class if sizeVariant is set to md and ignoreSize is false', async () => {
    const element = await fixture(BlrIconRenderFunction({ ...sampleParams, fillParent: false }));
    const svgParentElement = querySelectorDeep('.blr-icon', element?.getRootNode() as HTMLElement);
    const className = svgParentElement?.getAttribute('class'); // you can not use className here

    await expect(className).to.contain('md');
  });

  it('svg does not contain md class if sizeVariant is set to md and ignoreSize is true', async () => {
    const element = await fixture(BlrIconRenderFunction({ ...sampleParams, fillParent: true }));
    const svgParentElement = querySelectorDeep('.blr-icon', element?.getRootNode() as HTMLElement);
    const className = svgParentElement?.getAttribute('class'); // you can not use className here

    await expect(className).to.not.contain('md');
  });
});
