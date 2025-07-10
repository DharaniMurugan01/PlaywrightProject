import { Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/playwrightwrappers";

export default class LoginPage {
  private base: PlaywrightWrapper;

  private elements = {
    username: 'input[placeholder="Username"]',
    password: 'input[placeholder="Password"]',
    loginBtn: "//span[text()='Login']",
    errorMsg: "//mat-error[@id='mat-mdc-error-0']"
  };

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  async enterUsername(username: string) {
    await this.page.fill(this.elements.username, username);
  }

  async enterPassword(password: string) {
    await this.page.fill(this.elements.password, password);
  }

  async clickLogin() {
    await this.page.locator(this.elements.loginBtn).click();
  }

  async getErrorMessage(): Promise<string | null> {
    return this.page.locator(this.elements.errorMsg).textContent();
  }
}
