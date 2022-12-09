import { newE2EPage } from '@stencil/core/testing';

describe('belo-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-button></belo-button>');

    const element = await page.find('belo-button');
    expect(element).toHaveClass('hydrated');
  });
});
