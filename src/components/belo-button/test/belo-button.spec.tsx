import { newSpecPage } from '@stencil/core/testing';
import { BeloButton } from '../belo-button';

describe('belo-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloButton],
      html: `<belo-button></belo-button>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-button>
    `);
  });
});
