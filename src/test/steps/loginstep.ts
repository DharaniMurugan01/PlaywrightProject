import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixtures";

Given('the user navigates to the application',{ timeout: 30000 }, async function () {
  const baseUrl = process.env.BASEURL;
  if (!baseUrl) throw new Error("BASEURL is not defined");
  await pageFixture.page?.goto(baseUrl);
  pageFixture.logger?.info("Navigated to application");
});

Given('the user clicks login button', async function () {
  await pageFixture.HeaderPage?.clickLoginButton();
  pageFixture.logger?.info("Clicked login button");
});

Given('the user enter the username as {string}', async function (username) {
  await pageFixture.LoginPage?.enterUsername(username);
  pageFixture.logger?.info(`Entered username: ${username}`);
});

Given('the user enter the password as {string}', async function (password) {
  await pageFixture.LoginPage?.enterPassword(password);
  pageFixture.logger?.info(`Entered password`);
});

When('the user click on the login button', async function () {
  await pageFixture.LoginPage?.clickLogin();

});

Then('the login should be success', async function () {
  const text = await pageFixture.page?.locator("(//span[@class='mdc-button__label']//span)[1]").textContent();
  pageFixture.logger?.info(`Login success text: ${text}`);
  console.log(text);
});

Then('the login should fails', async function () {
  const error = await pageFixture.LoginPage?.getErrorMessage();
  expect(error).toContain("Password is required");
  pageFixture.logger?.info(`Login failed with error: ${error}`);
});
