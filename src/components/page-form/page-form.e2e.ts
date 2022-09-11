import { newE2EPage } from '@stencil/core/testing';

describe('page-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-form></page-form>');

    const element = await page.find('page-form');
    expect(element).toHaveClass('hydrated');
  });
});
