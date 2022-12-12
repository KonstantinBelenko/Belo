import { newE2EPage } from '@stencil/core/testing';

describe('belo-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-input></belo-input>');

    const element = await page.find('belo-input');
    expect(element).toHaveClass('hydrated');
  });
});
