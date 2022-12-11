import { newE2EPage } from '@stencil/core/testing';

describe('belo-text-area', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-text-area></belo-text-area>');

    const element = await page.find('belo-text-area');
    expect(element).toHaveClass('hydrated');
  });
});
