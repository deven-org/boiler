import { BlrOverlayType, BlrOverlayRenderFunction } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrOverlayType = {
  theme: 'Light',
  isOpen: true,
  modalTitle: 'Title',
  closeIconSize: 'sm',
};

describe('blr-overlay', () => {
  it('is having an element containing the right className', async () => {
    const element = await fixture(BlrOverlayRenderFunction(sampleParams));

    const button = querySelectorDeep('.blr-overlay', element.getRootNode() as HTMLElement);
    const className = button?.className;

    expect(className).to.contain('modal');
  });
});
