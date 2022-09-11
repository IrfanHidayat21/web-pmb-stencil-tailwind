import { newSpecPage } from '@stencil/core/testing';
import { PageProdiList } from './page-prodi-list';

describe('page-prodi-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageProdiList],
      html: `<page-prodi-list></page-prodi-list>`,
    });
    expect(page.root).toEqualHtml(`
      <page-prodi-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-prodi-list>
    `);
  });
});
