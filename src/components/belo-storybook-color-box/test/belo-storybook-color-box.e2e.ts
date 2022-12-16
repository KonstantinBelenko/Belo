import { newE2EPage } from '@stencil/core/testing';

describe('belo-storybook-color-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-storybook-color-box></belo-storybook-color-box>');

    const element = await page.find('belo-storybook-color-box');
    expect(element).toHaveClass('hydrated');
  });
});
