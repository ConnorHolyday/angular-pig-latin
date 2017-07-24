import { AngularPigLatinPage } from './app.po';

describe('angular-pig-latin App', () => {
  let page: AngularPigLatinPage;

  beforeEach(() => {
    page = new AngularPigLatinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
