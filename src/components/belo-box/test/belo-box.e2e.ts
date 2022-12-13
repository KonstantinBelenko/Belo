import { newE2EPage } from '@stencil/core/testing';

describe('belo-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-box></belo-box>');

    const element = await page.find('belo-box');
    expect(element).toHaveClass('hydrated');
  });
});
