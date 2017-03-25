import { AngularFeaturesPage } from './app.po';

describe('angular-features App', () => {
  let page: AngularFeaturesPage;

  beforeEach(() => {
    page = new AngularFeaturesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
