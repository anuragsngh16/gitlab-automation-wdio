import { expect, browser } from "@wdio/globals";
import CreateProject from "../../pageobjects/createProject.page";
import BlankProject from "../../pageobjects/blankProject.page";
import BlankProjectData from "../../test-data/blankProject-data.json";

export function testBlankProjectCreationFunctionality() {
  describe("Create a blank project", () => {
    it("Click on the create blank project button", async () => {
      await CreateProject.createBlankProjectButton.waitForDisplayed();
      await CreateProject.createBlankProjectButton.click();
    });

    it("Verify the welcome message on the create new project page", async () => {
      await BlankProject.createBlankProjectPageHeading.waitForDisplayed();
      await expect(BlankProject.createBlankProjectPageHeading).toHaveText(
        BlankProjectData.createBlankProjectPageHeading
      );
    });

    it("Create a blank project", async () => {
      await BlankProject.projectNameInput.waitForDisplayed();
      await BlankProject.inputProjectName(BlankProjectData.projectName);

      const projectName: string = await (BlankProject.projectNameInput).getValue();
      await expect(projectName).toBe(BlankProjectData.projectName);

      const projectPath: string = await ( BlankProject.projectPathInput).getValue();
      await expect(projectPath).toBe(BlankProjectData.projectPath);
      await BlankProject.clickCreateBlankProjectButton();
    });

    it('Validate the project is created successfully', async () => {
      const expectedMessage = `Project '${BlankProjectData.projectName}' was successfully created.`;
      const toastMessage =  await browser.execute(() => {
        return (document.querySelector("#content-body div.gl-alert-body") as HTMLElement)?.innerText?.trim();
      });
      console.log(toastMessage);
      await expect(toastMessage).toEqual(expectedMessage);
    });

    it("Extract projet id & store in the json file", async () => {
      await browser.pause(2000);
      await BlankProject.clickMoreActionIcon();
      await BlankProject.clickCopyProjectId();

      const clipboardText = await browser.execute(() =>
        navigator.clipboard.readText()
      );
      await BlankProject.writeDataToFile("projectId", clipboardText, "../../test/test-data/blankProject-data.json");
    });

    it("Verify the project is created successfully", async () => {
      await BlankProject.project.waitForDisplayed();
      await expect(BlankProject.project).toHaveText(BlankProjectData.projectName);
    });
  });
}
