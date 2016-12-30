import { StanleyCupPoolWebPage } from './app.po';

describe('stanley-cup-pool-web App', function() {
  let page: StanleyCupPoolWebPage;

  beforeEach(() => {
    page = new StanleyCupPoolWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
