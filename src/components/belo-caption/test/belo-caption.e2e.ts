import { newE2EPage } from '@stencil/core/testing';

describe('belo-caption', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-caption></belo-caption>');

    const element = await page.find('belo-caption');
    expect(element).toHaveClass('hydrated');
  });
});
