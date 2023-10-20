/* eslint-disable @typescript-eslint/await-thenable */
import { fixture, expect } from '@open-wc/testing';
import { BlrIconRenderFunction } from '.';
import { classMap } from 'lit/directives/class-map.js';

const TEST_CLASS = 'test-class';

describe('blr-icon', () => {
  it('renders correctly', async () => {
    const classes = classMap({
      [`${TEST_CLASS}`]: true,
    });

    const element = await fixture(BlrIconRenderFunction({ size: 'md', classMap: classes }));

    await expect(element.className).to.contain(TEST_CLASS);
  });
});
