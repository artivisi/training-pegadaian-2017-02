import { GadaiFrontendPage } from './app.po';

describe('gadai-frontend App', () => {
  let page: GadaiFrontendPage;

  beforeEach(() => {
    page = new GadaiFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
