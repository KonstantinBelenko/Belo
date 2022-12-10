import { newE2EPage } from '@stencil/core/testing';

describe('belo-button-primary', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-button-primary></belo-button-primary>');

    const element = await page.find('belo-button-primary');
    expect(element).toHaveClass('hydrated');
  });
});
