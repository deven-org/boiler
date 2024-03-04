import '@boiler/ui-library/dist/';

import { BlrFormCaptionGroupRenderFunction, FormCaptionGroupTagName } from './renderFunction';
import { BlrFormCaptionGroupType } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorAllDeep } from 'query-selector-shadow-dom';
import { BlrFormCaptionRenderFunction, FormCaptionTagName } from '../form-caption/renderFunction';
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
});

const errorCaption = BlrFormCaptionRenderFunction({
  message: 'This is an error',
  variant: 'error',
  icon: 'blrInfo',
  size: 'md',
  theme: 'Light',
});

const mixedCaptions = html` ${hintCaption} ${errorCaption} `;

describe(`${FormCaptionGroupTagName}`, () => {
  it('is rendering captions inside slot', async () => {
    const element = await fixture(BlrFormCaptionGroupRenderFunction(sampleParams, mixedCaptions));
    const captions = querySelectorAllDeep(`${FormCaptionTagName}`, element.getRootNode() as HTMLElement);
    expect(captions).to.be.lengthOf(captions.length);
  });
});
