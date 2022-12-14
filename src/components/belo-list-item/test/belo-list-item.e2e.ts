import { newE2EPage } from '@stencil/core/testing';

describe('belo-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-list-item></belo-list-item>');

    const element = await page.find('belo-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
