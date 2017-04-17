import { LmchartsPage } from './app.po';

describe('lmcharts App', () => {
  let page: LmchartsPage;

  beforeEach(() => {
    page = new LmchartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
