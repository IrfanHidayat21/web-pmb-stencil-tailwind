import { newSpecPage } from '@stencil/core/testing';
import { PageForm } from './page-form';

describe('page-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageForm],
      html: `<page-form></page-form>`,
    });
    expect(page.root).toEqualHtml(`
      <page-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-form>
    `);
  });
});
