import { newE2EPage } from '@stencil/core/testing';

describe('page-register', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-register></page-register>');

    const element = await page.find('page-register');
    expect(element).toHaveClass('hydrated');
  });
});
