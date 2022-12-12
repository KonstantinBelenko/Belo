import { newE2EPage } from '@stencil/core/testing';

describe('belo-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-card></belo-card>');

    const element = await page.find('belo-card');
    expect(element).toHaveClass('hydrated');
  });
});
