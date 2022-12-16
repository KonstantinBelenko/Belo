import { newE2EPage } from '@stencil/core/testing';

describe('belo-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-list></belo-list>');

    const element = await page.find('belo-list');
    expect(element).toHaveClass('hydrated');
  });
});
