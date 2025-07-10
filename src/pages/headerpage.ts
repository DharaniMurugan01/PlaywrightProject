import { Page ,expect} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/playwrightwrappers";

export default class HeaderPage {
  private base: PlaywrightWrapper;

  private elements = {
    loginBtn: "(//span[@class='mdc-button__label'])[2]",
    searchInput:"input[placeholder='Search books or authors']",
    cartValue:"(//span[@class='mdc-button__label']//span)[1]",
    sugges:"//span[@class='mdc-list-item__primary-text']",
    loginScs:"(//span[@class='mdc-button__label']//span)[1]",
  };

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  async clickLoginButton() {
    await this.base.waitAndClick(this.elements.loginBtn);
  }
  async searchForBook(bookName: string){
    await this.page.fill(this.elements.searchInput, bookName);
    await this.base.waitAndClick(this.elements.sugges);
  }
  async verifyLoginSuccess(){
    const loginScsLocator= this.page.locator(this.elements.loginScs);
    await expect(loginScsLocator).toBeVisible();
  }
}
