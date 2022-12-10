import { newSpecPage } from '@stencil/core/testing';
import { BeloButtonSecondary } from '../belo-button-secondary';

describe('belo-button-secondary', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloButtonSecondary],
      html: `<belo-button-secondary></belo-button-secondary>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-button-secondary>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-button-secondary>
    `);
  });
});
