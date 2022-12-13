import { newE2EPage } from '@stencil/core/testing';

describe('belo-stack', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-stack></belo-stack>');

    const element = await page.find('belo-stack');
    expect(element).toHaveClass('hydrated');
  });
});
