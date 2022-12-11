import { newSpecPage } from '@stencil/core/testing';
import { BeloTextArea } from '../belo-text-area';

describe('belo-text-area', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloTextArea],
      html: `<belo-text-area></belo-text-area>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-text-area>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-text-area>
    `);
  });
});
