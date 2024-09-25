import '@boiler/ui-library';

import { BlrFormCaptionGroupRenderFunction } from './renderFunction.js';
import { BlrFormCaptionGroupType } from './index.js';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorAllDeep } from 'query-selector-shadow-dom';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction.js';
import { html } from 'lit-html';

const sampleParams: BlrFormCaptionGroupType = {
  sizeVariant: 'md',
  theme: 'Light_value',
};

const hintCaption = BlrFormCaptionRenderFunction({
  message: 'This is a hint',
  variant: 'hint',
  icon: 'blrInfo',
  sizeVariant: 'md',
  theme: 'Light_value',
});

const errorCaption = BlrFormCaptionRenderFunction({
  message: 'This is an error',
  variant: 'error',
  icon: 'blrInfo',
  sizeVariant: 'md',
  theme: 'Light_value',
});

const mixedCaptions = html` ${hintCaption} ${errorCaption} `;

describe('blr-form-caption-group', () => {
  it('is rendering captions inside slot', async () => {
    const element = await fixture(BlrFormCaptionGroupRenderFunction(sampleParams, mixedCaptions));
    const captions = querySelectorAllDeep('blr-form-caption', element.getRootNode() as HTMLElement);
    expect(captions).to.be.lengthOf(captions.length);
  });
});
