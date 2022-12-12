import { newSpecPage } from '@stencil/core/testing';
import { BeloInput } from '../belo-input';

describe('belo-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloInput],
      html: `<belo-input></belo-input>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-input>
    `);
  });
});
