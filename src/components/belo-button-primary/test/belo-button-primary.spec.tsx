import { newSpecPage } from '@stencil/core/testing';
import { BeloButtonPrimary } from '../belo-button-primary';

describe('belo-button-primary', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloButtonPrimary],
      html: `<belo-button-primary></belo-button-primary>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-button-primary>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-button-primary>
    `);
  });
});
