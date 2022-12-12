import { newE2EPage } from '@stencil/core/testing';

describe('belo-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-link></belo-link>');

    const element = await page.find('belo-link');
    expect(element).toHaveClass('hydrated');
  });
});
