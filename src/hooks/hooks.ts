import { Before, After } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { pageFixture } from "./pageFixtures";
import HeaderPage from "../pages/headerpage";
import LoginPage from "../pages/loginpage";
import { createLogger, format, transports } from "winston";
import fs from "fs";
import path from "path";

import * as dotenv from "dotenv";
const envPath = path.resolve(__dirname, `../helper/env/.env.${process.env.ENV}`);
dotenv.config({ path: envPath });

console.log("Loaded BASEURL:", process.env.BASEURL);

Before(async function (scenario) {
  const browser = await chromium.launch({
    headless: process.env.HEAD === "true"
  });

  const context = await browser.newContext();
  const page = await context.newPage();
  pageFixture.page = page;
  const scenarioName = scenario.pickle.name.replace(/\s+/g, "_");
  const logFolder = path.join("logs", scenarioName);
  if (!fs.existsSync(logFolder)) fs.mkdirSync(logFolder, { recursive: true });
  const logger = createLogger({
    level: "info",
    transports: [
      new transports.File({
        filename: path.join(logFolder, "log.log"),
        format: format.combine(
          format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
          format.printf(info => `${info.level}: ${info.timestamp}: ${info.message}`)
        )
      })
    ]
  });
  pageFixture.logger = logger;
  pageFixture.HeaderPage = new HeaderPage(page);
  pageFixture.LoginPage = new LoginPage(page);
  logger.info(` Scenario Started: ${scenarioName}`);
});
After(async function () {
  pageFixture.logger?.info(" Scenario Finished");
  await pageFixture.page?.close();
});
