import { newE2EPage } from '@stencil/core/testing';

describe('belo-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-header></belo-header>');

    const element = await page.find('belo-header');
    expect(element).toHaveClass('hydrated');
  });
});
