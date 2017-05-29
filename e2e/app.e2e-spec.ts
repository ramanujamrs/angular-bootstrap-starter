import { AngularStarterWithBootstrapPage } from './app.po';

describe('angular-starter-with-bootstrap App', () => {
  let page: AngularStarterWithBootstrapPage;

  beforeEach(() => {
    page = new AngularStarterWithBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
