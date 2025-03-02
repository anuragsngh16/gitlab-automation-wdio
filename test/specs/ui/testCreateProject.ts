import { expect } from "@wdio/globals";
import HomePage from "../../pageobjects/home.page";
import CreateProject from "../../pageobjects/createProject.page";
import CreateProjectData from "../../test-data/createProject-data.json";
import CreateProjectPage from "../../pageobjects/createProject.page";

export function testCreateProjectFunctionality() {
  describe("Create a project", () => {
    it("Click on the create project button", async () => {
      await HomePage.waitForPageLoad();
      await HomePage.createProjectButton.click();
    });

    it("Verify the welcome message on the create project page", async () => {
      await HomePage.waitForPageLoad();
      await CreateProject.createPageWelcomeMessage.waitForDisplayed();
      await expect(CreateProjectPage.createPageWelcomeMessage).toHaveText(
        CreateProjectData.createProjectPageWelcomeMessage
      );
    });

    it("Verify the breadcrumb path on the homepage", async () => {
      await CreateProjectPage.breadcrumbPath.waitForDisplayed();
      await expect(CreateProjectPage.breadcrumbPath).toHaveText(
        CreateProjectData.breadcrumbPath
      );
    });

    it("Verify different options displayed for project creation", async () => {});
  });
}
