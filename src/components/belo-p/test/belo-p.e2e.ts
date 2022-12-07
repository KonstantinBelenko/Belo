import { newE2EPage } from '@stencil/core/testing';

describe('belo-p', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-p></belo-p>');

    const element = await page.find('belo-p');
    expect(element).toHaveClass('hydrated');
  });
});
