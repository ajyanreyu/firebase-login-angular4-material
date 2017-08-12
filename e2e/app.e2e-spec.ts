import { PruebaFireBasePage } from './app.po';

describe('prueba-fire-base App', () => {
  let page: PruebaFireBasePage;

  beforeEach(() => {
    page = new PruebaFireBasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
