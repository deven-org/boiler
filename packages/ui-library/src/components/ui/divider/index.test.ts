import { BlrDividerRenderFunction } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

describe('blr-divider', () => {
  it('renders a <div> element inside Shadow DOM', async () => {
    const element = await fixture(BlrDividerRenderFunction({ theme: 'Light', directionVariant: 'vertical' }));
    const dividerDiv = querySelectorDeep('div.blr-divider', element.getRootNode() as HTMLElement);
    expect(dividerDiv).to.exist;
  });

  it('is having a div with classname blr-divider', async () => {
    const element = await fixture(BlrDividerRenderFunction({ theme: 'Light', directionVariant: 'vertical' }));
    const dividerDiv = querySelectorDeep('.blr-divider', element.getRootNode() as HTMLElement);
    const className = dividerDiv?.className;

    expect(className).to.contain('blr-divider');
  });

  it('should render vertical line', async () => {
    const element = await fixture(BlrDividerRenderFunction({ theme: 'Light', directionVariant: 'vertical' }));
    const dividerDiv = querySelectorDeep('.blr-divider', element.getRootNode() as HTMLElement);
    const className = dividerDiv?.className;

    expect(className).to.contain('blr-divider vertical');
  });

  it('should render horizontal line', async () => {
    const element = await fixture(BlrDividerRenderFunction({ theme: 'Light', directionVariant: 'horizontal' }));
    const dividerDiv = querySelectorDeep('.blr-divider', element.getRootNode() as HTMLElement);
    const className = dividerDiv?.className;

    expect(className).to.contain('blr-divider horizontal');
  });
});
