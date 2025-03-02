import { expect, browser } from "@wdio/globals";
import ProjectPage from "../../pageobjects/project.page";
import LabelsPage from "../../pageobjects/labels.page";
import LabelsData from "../../test-data/labels-data.json";

export function testCreateAndSearchLabelFunctionality() {
  describe("Test Create and search Labels", () => {
    it("Labels page is opened when the label link is clicked", async () => {
      await ProjectPage.waitForPageLoad();
      await ProjectPage.clickManageMenu();
      await ProjectPage.clickLabelLink();
      await expect(LabelsPage.labelPageDescription).toHaveText(
        "Labels can be applied to issues and merge requests to categorize them"
      );
    });

    it("A label is created with the supplied name", async () => {
      await ProjectPage.waitForPageLoad();
      await LabelsPage.clickNewLabelLink();
      await LabelsPage.createNewLabel(
        LabelsData.labelName[0],
        LabelsData.labelDescription[0]
      );
      await expect(LabelsPage.labelNamePostCreation).toHaveText(
        LabelsData.labelName[0]
      );
    });

    it("Second label is created with the supplied name", async () => {
      await ProjectPage.waitForPageLoad();
      await LabelsPage.clickNewLabelButton();
      await LabelsPage.createNewLabel(
        LabelsData.labelName[1],
        LabelsData.labelDescription[1]
      );
      await expect(LabelsPage.labelNamePostCreation).toHaveText(
        LabelsData.labelName[1]
      );
    });

    it("The label is found when the created label is searched", async () => {
      await ProjectPage.waitForPageLoad();
      await LabelsPage.searchLabel(LabelsData.labelName[0]);
      await expect(LabelsPage.labelNamePostCreation).toHaveText(
        LabelsData.labelName[0]
      );
    });

    it("Search result is empty when a random label name is searched", async () => {
      await ProjectPage.waitForPageLoad();
      await LabelsPage.searchLabel("Random-Label");
      const noLabelFound = await browser.execute(() => {
        return (document.querySelector("div.other-labels > div") as HTMLElement)?.innerText?.trim();
      });
      console.log(noLabelFound);
      await expect(noLabelFound).toEqual(
        "No labels with such name or description"
      );
    });
  });
}
