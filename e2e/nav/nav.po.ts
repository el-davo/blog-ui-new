import {browser, by, element} from 'protractor';

class NavPo {

  adminLoginButton = element(by.id('admin-login'));
  adminOptionsButton = element(by.id('admin-options'));
  adminCreateArticleButton = element(by.id('admin-create-article'));

  clickAdminLoginButton() {
    this.adminLoginButton.click();
  }

  clickAdminOptions() {
    this.adminOptionsButton.click();
  }

  clickAdminCreateArticleButton() {
    this.adminCreateArticleButton.click();
  }

  selectAdminCreate() {
    this.clickAdminOptions();

    // Temporary workaround
    browser.sleep(1000);
    this.clickAdminCreateArticleButton();
  }

}

export const navPo = new NavPo();
