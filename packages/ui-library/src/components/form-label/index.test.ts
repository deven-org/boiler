import '@boiler/ui-library/dist/';

import { BlrFormLabelRenderFunction } from './renderFunction';
import type { BlrFormLabel, BlrFormLabelType } from '.';
import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { LitElement } from 'lit';

const sampleParams: BlrFormLabelType = {
  theme: 'Light',
  label: 'Label text',
  labelAppendix: 'Appendix txt',
  forValue: 'for_txt',
  hasError: false,
};

// The label is not creating a shadow root itself, but errors if it is outside
// of one. Thus, we're creating a helper component for the stories, that wraps it.
class WrappedBlrLabel extends LitElement {
  labelProps: BlrFormLabelType;

  protected render() {
    return BlrFormLabelRenderFunction(this.labelProps);
  }
}

customElements.define('label-test', WrappedBlrLabel);

const WrappedBlrFormLabelRenderFunction = (params: BlrFormLabelType) =>
  genericBlrComponentRenderer('label-test', { labelProps: params });

describe('blr-form-label', () => {
  it('renders a <label> element inside Shadow DOM', async () => {
    const element = await fixture(WrappedBlrFormLabelRenderFunction(sampleParams));
    const blrLabel = querySelectorDeep('label.blr-form-label', element.getRootNode() as HTMLElement);
    expect(blrLabel).to.exist;
  });

  it('errors when rendering a <label> element directly in the light DOM', async () => {
    const element: BlrFormLabel = await fixture(BlrFormLabelRenderFunction(sampleParams));
    const blrLabel = querySelectorDeep('label.blr-form-label', element.getRootNode() as HTMLElement);

    expect(blrLabel).not.to.exist;
    expect(element.error).to.exist;
  });

  it('renders a <label> with new value', async () => {
    const element = await fixture(
      WrappedBlrFormLabelRenderFunction({
        ...sampleParams,
        label: 'New label',
        labelAppendix: '',
      })
    );
    const blrLabel = querySelectorDeep('label.blr-form-label', element.getRootNode() as HTMLElement);

    const blrLabelText = blrLabel?.textContent;
    expect(blrLabelText).to.include('New label');
  });

  it('renders a appendix element inside <label>', async () => {
    const element = await fixture(WrappedBlrFormLabelRenderFunction(sampleParams));
    const blrLabel = querySelectorDeep('label.blr-form-label', element.getRootNode() as HTMLElement);
    const eleAppendix = querySelectorDeep('span.blr-form-label-appendix', blrLabel?.getRootNode() as HTMLElement);
    expect(eleAppendix).to.exist;
  });

  it('renders a appendix element with no specific value', async () => {
    const element = await fixture(WrappedBlrFormLabelRenderFunction(sampleParams));
    const blrLabel = querySelectorDeep('label.blr-form-label', element.getRootNode() as HTMLElement);
    const eleAppendix = querySelectorDeep('span.blr-form-label-appendix', blrLabel?.getRootNode() as HTMLElement);

    const spanText = eleAppendix?.textContent;
    expect(spanText).to.include('Appendix txt');
  });

  it('renders a appendix element should contain specific value', async () => {
    const element = await fixture(
      WrappedBlrFormLabelRenderFunction({
        ...sampleParams,
        label: 'New label',
        labelAppendix: '',
      })
    );
    const blrLabel = querySelectorDeep('label.blr-form-label', element.getRootNode() as HTMLElement);
    const eleAppendix = querySelectorDeep('span.blr-form-label-appendix', blrLabel?.getRootNode() as HTMLElement);

    const spanText = eleAppendix?.textContent;
    expect(spanText).to.include('');
  });

  it('renders a <label> element with for attribute', async () => {
    const element = await fixture(WrappedBlrFormLabelRenderFunction(sampleParams));
    const blrLabel = querySelectorDeep('label.blr-form-label', element.getRootNode() as HTMLElement);
    const forValue = blrLabel?.getAttribute('for');

    expect(forValue).to.be.equal('for_txt');
  });

  it('renders a <label> element as error component', async () => {
    const element = await fixture(
      WrappedBlrFormLabelRenderFunction({
        ...sampleParams,
        hasError: true,
      })
    );
    const blrLabel = querySelectorDeep('label.blr-form-label', element.getRootNode() as HTMLElement);
    const errorLabel = blrLabel?.getAttribute('class');
    expect(errorLabel).to.contain('error');
  });

  it('has a size md by default', async () => {
    const element = await fixture(WrappedBlrFormLabelRenderFunction(sampleParams));

    const label = querySelectorDeep('label', element.getRootNode() as HTMLElement);
    const className = label?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(WrappedBlrFormLabelRenderFunction({ ...sampleParams, sizeVariant: 'sm' }));

    const label = querySelectorDeep('label', element.getRootNode() as HTMLElement);
    const className = label?.className;

    expect(className).to.contain('sm');
  });
});
