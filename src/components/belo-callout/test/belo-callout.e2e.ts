import { newE2EPage } from '@stencil/core/testing';

describe('belo-callout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-callout></belo-callout>');

    const element = await page.find('belo-callout');
    expect(element).toHaveClass('hydrated');
  });
});
