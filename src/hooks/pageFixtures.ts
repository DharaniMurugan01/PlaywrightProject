import { Page } from "@playwright/test";
import { Logger } from "winston";
import headerPage from "../pages/headerpage";
import Loginpage from "../pages/loginpage";
import AddtocartPage from "../pages/Addtocartpage";

export const pageFixture: {
  page: Page | undefined;
  logger: Logger | undefined;
  HeaderPage?: headerPage;
  LoginPage?: Loginpage;
  Addtocartpage?:AddtocartPage;
} = {
  page: undefined,
  logger: undefined
};
