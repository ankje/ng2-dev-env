import { JinyulovePage } from './app.po';

describe('jinyulove App', () => {
  let page: JinyulovePage;

  beforeEach(() => {
    page = new JinyulovePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
