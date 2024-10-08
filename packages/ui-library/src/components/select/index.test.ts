import '@boiler/ui-library';
import { BlrSelectRenderFunction } from './renderFunction.js';
import { fixture, expect } from '@open-wc/testing';
import { querySelectorAllDeep, querySelectorDeep } from 'query-selector-shadow-dom';
import { BlrSelectType } from './index.js';
import { Themes } from '../../foundation/_tokens-generated/index.themes.js';

const sampleParams: BlrSelectType = {
  name: 'Input Field Text',
  label: 'Label',
  labelAppendix: '(Optional)',
  sizeVariant: 'md',
  errorMessage: 'This is error message',
  hasHint: true,
  hintMessage: 'Field is used for hint',
  hintMessageIcon: 'blrInfo',
  selectId: 'Peter',
  errorMessageIcon: 'blrErrorFilled',
  theme: Themes[0],
  options: [
    { label: 'option 1', value: 'option1' },
    { label: 'option 2', value: 'option2' },
    { label: 'option 3', value: 'option3', disabled: true },
    { label: 'option 4', value: 'option4' },
    { label: 'option 5', value: 'option5', selected: true },
  ],
};

describe('blr-select', () => {
  it('is having a select containing the right className', async () => {
    const element = await fixture(BlrSelectRenderFunction(sampleParams));

    const select = querySelectorDeep('select', element.getRootNode() as HTMLElement);
    const className = select?.className;

    expect(className).to.contain('blr-form-select');
  });

  it('is shows adjacent caption components in caption group slot', async () => {
    const element = await fixture(
      BlrSelectRenderFunction({
        ...sampleParams,
        hasHint: true,
        hintMessageIcon: 'blrInfo',
        hasError: true,
        errorMessageIcon: 'blrErrorFilled',
      }),
    );

    const captionGroup = querySelectorDeep('blr-form-caption-group', element.getRootNode() as HTMLElement);
    const formCaptions = querySelectorAllDeep('blr-form-caption', captionGroup?.getRootNode() as HTMLElement);

    expect(formCaptions.length).to.equal(2);

    const hintCaption = formCaptions[0];
    const errorCaption = formCaptions[1];

    expect(hintCaption.getAttribute('variant')).to.equal('hint');
    expect(errorCaption.getAttribute('variant')).to.equal('error');
  });

  it('has error Icon set to undefined', async () => {
    const element = await fixture(
      BlrSelectRenderFunction({
        ...sampleParams,
        hasHint: false,
        hasError: true,
        errorMessageIcon: undefined,
      }),
    );

    const errorCaption = querySelectorDeep('blr-form-caption[variant="error"]', element.getRootNode() as HTMLElement);
    const errorIcon = querySelectorDeep('blr-icon', errorCaption?.getRootNode() as HTMLElement);
    expect(errorIcon).to.not.exist;
  });

  it('has a size md by default', async () => {
    const element = await fixture(BlrSelectRenderFunction(sampleParams));

    const select = querySelectorDeep('select', element.getRootNode() as HTMLElement);
    const className = select?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrSelectRenderFunction({ ...sampleParams, sizeVariant: 'sm' }));

    const select = querySelectorDeep('select', element.getRootNode() as HTMLElement);
    const className = select?.className;

    expect(className).to.contain('sm');
  });
});
