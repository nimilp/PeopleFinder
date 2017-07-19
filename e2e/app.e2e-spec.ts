import { PeopleFinderPage } from './app.po';

describe('people-finder App', () => {
  let page: PeopleFinderPage;

  beforeEach(() => {
    page = new PeopleFinderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
