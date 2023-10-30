import { BlrFormLabelRenderFunction, BlrFormLabelType } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrFormLabelType = {
  theme: 'Light',
  labelText: 'Label text',
  labelAppendix: 'Appendix txt',
  labelSize: 'md',
  forValue: 'for_txt',
  variant: 'label',
};

describe('blr-form-label', () => {
  it('renders a <label> element inside Shadow DOM', async () => {
    const element = await fixture(BlrFormLabelRenderFunction(sampleParams));
    const blrLabel = querySelectorDeep('label.blr-form-label', element.getRootNode() as HTMLElement);
    expect(blrLabel).to.exist;
  });

  it('renders a <label> with new value', async () => {
    const element = await fixture(
      BlrFormLabelRenderFunction({
        ...sampleParams,
        labelText: 'New label',
        labelAppendix: '',
      })
    );
    const blrLabel = querySelectorDeep('label.blr-form-label', element.getRootNode() as HTMLElement);

    const blrLabelText = blrLabel?.textContent;
    expect(blrLabelText).to.include('New label');
  });

  it('renders a appendix element inside <label>', async () => {
    const element = await fixture(BlrFormLabelRenderFunction(sampleParams));
    const blrLabel = querySelectorDeep('label.blr-form-label', element.getRootNode() as HTMLElement);
    const eleAppendix = querySelectorDeep('span.blr-form-label-appendix', blrLabel?.getRootNode() as HTMLElement);
    expect(eleAppendix).to.exist;
  });

  it('renders a appendix element with no specific value', async () => {
    const element = await fixture(BlrFormLabelRenderFunction(sampleParams));
    const blrLabel = querySelectorDeep('label.blr-form-label', element.getRootNode() as HTMLElement);
    const eleAppendix = querySelectorDeep('span.blr-form-label-appendix', blrLabel?.getRootNode() as HTMLElement);

    const spanText = eleAppendix?.textContent;
    expect(spanText).to.include('Appendix txt');
  });

  it('renders a appendix element should contain specific value', async () => {
    const element = await fixture(
      BlrFormLabelRenderFunction({
        ...sampleParams,
        labelText: 'New label',
        labelAppendix: '',
      })
    );
    const blrLabel = querySelectorDeep('label.blr-form-label', element.getRootNode() as HTMLElement);
    const eleAppendix = querySelectorDeep('span.blr-form-label-appendix', blrLabel?.getRootNode() as HTMLElement);

    const spanText = eleAppendix?.textContent;
    expect(spanText).to.include('');
  });

  it('renders a <label> element with for attribute', async () => {
    const element = await fixture(BlrFormLabelRenderFunction(sampleParams));
    const blrLabel = querySelectorDeep('label.blr-form-label', element.getRootNode() as HTMLElement);
    const forValue = blrLabel?.getAttribute('for');

    expect(forValue).to.be.equal('for_txt');
  });

  it('renders a <label> element as error component', async () => {
    const element = await fixture(
      BlrFormLabelRenderFunction({
        ...sampleParams,
        variant: 'error',
      })
    );
    const blrLabel = querySelectorDeep('label.blr-form-label', element.getRootNode() as HTMLElement);
    const errorLabel = blrLabel?.getAttribute('class');
    expect(errorLabel).to.be.equal(` blr-form-label ${sampleParams.labelSize} error `);
  });
});
