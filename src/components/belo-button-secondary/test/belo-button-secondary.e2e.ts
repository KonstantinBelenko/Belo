import { newE2EPage } from '@stencil/core/testing';

describe('belo-button-secondary', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-button-secondary></belo-button-secondary>');

    const element = await page.find('belo-button-secondary');
    expect(element).toHaveClass('hydrated');
  });
});
