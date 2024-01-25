import '@boiler/ui-library/dist/';

import { BlrFormCaptionGroupRenderFunction } from './renderFunction';
import { BlrFormCaptionGroupType } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction';
import { html } from 'lit-html';

const sampleParams: BlrFormCaptionGroupType = {
  size: 'md',
};

const hintCaption = BlrFormCaptionRenderFunction({
  message: 'This is a hint',
  variant: 'hint',
  icon: 'blrInfo',
  size: 'md',
  theme: 'Light',
  arialabel: 'Form Hint',
});

const errorCaption = BlrFormCaptionRenderFunction({
  message: 'This is an error',
  variant: 'error',
  icon: 'blrInfo',
  size: 'md',
  theme: 'Light',
  arialabel: 'Form Error',
});

const mixedCaptions = html` ${hintCaption} ${errorCaption} `;

describe('blr-form-caption-group', () => {
  it('is rendering captions inside slot', async () => {
    const element = await fixture(BlrFormCaptionGroupRenderFunction(sampleParams, mixedCaptions));
    const caption = querySelectorDeep('blr-form-caption', element.getRootNode() as HTMLElement);

    expect(caption).to.exist;
  });
});
