import { newE2EPage } from '@stencil/core/testing';

describe('belo-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-text></belo-text>');

    const element = await page.find('belo-text');
    expect(element).toHaveClass('hydrated');
  });
});
