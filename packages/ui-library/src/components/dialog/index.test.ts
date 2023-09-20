import { BlrDialogType, BlrDialogRenderFunction } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrDialogType = {
  theme: 'Light',
  isOpen: true,
  dialogTitle: 'Title',
  dialogDescription: 'Description',
  closeIconSize: 'sm',
};

describe('blr-dialog', () => {
  it('is having an element containing the right className', async () => {
    const element = await fixture(BlrDialogRenderFunction(sampleParams));

    const button = querySelectorDeep('.blr-dialog', element.getRootNode() as HTMLElement);
    const className = button?.className;

    expect(className).to.contain('dialog');
  });
});
