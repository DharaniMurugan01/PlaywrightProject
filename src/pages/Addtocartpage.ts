// import { Page } from "@playwright/test";
// import PlaywrightWrapper from "../helper/wrapper/playwrightwrappers";

// export default class AddtocartPage {
//   private base: PlaywrightWrapper;

//   private elements = {
//     searchbox: 'input[placeholder="Search books or authors"]',
//     keyname: "//span[@class='mdc-list-item__primary-text']",
//     addtocart: "(//span[@class='mdc-button__label'])[5]",
//     badgelocator:"//span[@id='mat-badge-content-0']"
//   };

//   constructor(private page: Page) {
//     this.base = new PlaywrightWrapper(page);
//   }

//   async entername(search: string) {
//     await this.page.fill(this.elements.searchbox, search);
//   }
// }

import {expect,Page,Locator } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/playwrightwrappers";
export default class AddToCart{
    private base:PlaywrightWrapper;
    constructor(private page:Page)
        {
            this.base=new PlaywrightWrapper(page);
        }
    private CartPageElements={
        cartBtn:"(//span[@class='mdc-button__label'])[5]",
        count:"//span[@id='mat-badge-content-0']",
    }
    async AddToCart(){
        await this.base.waitAndClick(this.CartPageElements.cartBtn);
    }
    async verifyCount(){
        let c=await this.page.textContent(this.CartPageElements.count);
        const num=Number(c?.trim());
        return num;
    }
}

