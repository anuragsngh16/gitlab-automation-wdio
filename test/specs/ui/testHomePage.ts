import { expect } from "@wdio/globals";
import HomePage from "../../pageobjects/home.page";
import HomePageData from "../../test-data/homepage-data.json";

export function testHomePageFunctionality() {
  describe("GitLab Homepage", () => {
    it("Verify the welcome message idisplayed on the homepage on successful login", async () => {
      await HomePage.waitForPageLoad();
      await HomePage.homePageWelcomeMessage.waitForDisplayed();
      await expect(HomePage.homePageWelcomeMessage).toHaveText(
        HomePageData.welcomeMessage
      );
    });

    it("Verify the breadcrumb path on the homepage", async () => {
      await HomePage.breadcrumbPath.waitForDisplayed({ timeout: 15000 });
      await expect(HomePage.breadcrumbPath).toHaveText(
        HomePageData.breadcrumbPath
      );
    });

    it("Verify the create project button is displayed", async () => {
      await HomePage.createProjectButton.waitForDisplayed();
      await expect(HomePage.createProjectButton).toBeDisplayed();
    });
  });
}
