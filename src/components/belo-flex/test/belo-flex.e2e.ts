import { newE2EPage } from '@stencil/core/testing';

describe('belo-flex', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-flex></belo-flex>');

    const element = await page.find('belo-flex');
    expect(element).toHaveClass('hydrated');
  });
});
