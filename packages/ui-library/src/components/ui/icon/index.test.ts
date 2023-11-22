/* eslint-disable @typescript-eslint/await-thenable */
import { fixture, expect } from '@open-wc/testing';
import { BlrIconRenderFunction } from '.';
import { classMap } from 'lit/directives/class-map.js';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const TEST_CLASS = 'test-class';

describe('blr-icon', () => {
  it('containing the right className', async () => {
    const classes = classMap({
      [`${TEST_CLASS}`]: true,
    });

    const element = await fixture(BlrIconRenderFunction({ size: 'md', classMap: classes }));

    await expect(element.className).to.contain(TEST_CLASS);
  });
});

describe('blr-icon', () => {
  it('svg contains md class if size is set to md and ignoreSize is false', async () => {
    const element = await fixture(BlrIconRenderFunction({ size: 'md', ignoreSize: false }));
    const svgElement = querySelectorDeep('svg', element?.getRootNode() as HTMLElement);
    const className = svgElement?.getAttribute('class'); // you can not use className here

    await expect(className).to.contain('md');
  });
});

describe('blr-icon', () => {
  it('svg does not contain md class if size is set to md and ignoreSize is false', async () => {
    const element = await fixture(BlrIconRenderFunction({ size: 'md', ignoreSize: true }));
    const svgElement = querySelectorDeep('svg', element?.getRootNode() as HTMLElement);
    const className = svgElement?.getAttribute('class'); // you can not use className here

    await expect(className).to.not.contain('md');
  });
});
