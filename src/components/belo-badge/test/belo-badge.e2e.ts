import { newE2EPage } from '@stencil/core/testing';

describe('belo-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-badge></belo-badge>');

    const element = await page.find('belo-badge');
    expect(element).toHaveClass('hydrated');
  });
});
