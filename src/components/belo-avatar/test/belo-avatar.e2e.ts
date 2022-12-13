import { newE2EPage } from '@stencil/core/testing';

describe('belo-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-avatar></belo-avatar>');

    const element = await page.find('belo-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
