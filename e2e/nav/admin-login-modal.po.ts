import {by, element} from 'protractor';
import {navPo as nav} from './nav.po';

class AdminLoginModalPo {

  usernameInput = element.all(by.css('input')).get(0);
  passwordInput = element.all(by.css('input')).get(1);
  loginButton = element(by.id('login-modal-login'));

  setUsername(username: string) {
    return this.usernameInput.sendKeys(username);
  }

  setPassword(password: string) {
    return this.passwordInput.sendKeys(password);
  }

  clickLogin() {
    this.loginButton.click();
  }

  login(username: string, password: string) {
    nav.clickAdminLoginButton();
    this.setUsername(username);
    this.setPassword(password);
    this.clickLogin();
  }

}

export const adminLoginModalPo = new AdminLoginModalPo();
