import {landingPo as page} from './landing.po';
import {navPo as nav} from '../nav/nav.po';
import {adminLoginModalPo as adminLoginModal} from '../nav/admin-login-modal.po';
import {createArticlePo as createArticlePage} from '../create-article/create-article.po';
import {editArticlePo as editArticlePage} from '../edit-article/edit-article.po';

describe('Landing Page', () => {

  beforeEach(async () => await page.go());

  it('should not have any articles',  () => {
    expect(page.getTotalCards()).toBe(0);
  });

  xit('should create an article', async () => {
    adminLoginModal.login('test', 'test');

    nav.selectAdminCreate();

    createArticlePage.createPublic('testCreate', 'testSummary', 'testImgUrl', 'testContent');

    await page.go();

    expect(page.getCardByHeader('testCreate').isDisplayed()).toBeTruthy();
  });

  xit('should edit an article', async () => {
    adminLoginModal.login('test', 'test');

    nav.selectAdminCreate();

    createArticlePage.createPublic('testEdit', 'testSummary', 'testImgUrl', 'testContent');

    await page.go();

    expect(page.getCardByHeader('testEdit').isDisplayed()).toBeTruthy();

    adminLoginModal.login('test', 'test');

    page.clickEditOnCard('testEdit');

    editArticlePage.edit('myNewUpdate', 'testSummary', 'testImgUrl', 'testContent');

    await page.go();

    expect(page.getCardByHeader('myNewUpdate').isDisplayed()).toBeTruthy();
  });

});
