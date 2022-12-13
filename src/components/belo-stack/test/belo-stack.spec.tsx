import { newSpecPage } from '@stencil/core/testing';
import { BeloStack } from '../belo-stack';

describe('belo-stack', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloStack],
      html: `<belo-stack></belo-stack>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-stack>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-stack>
    `);
  });
});
