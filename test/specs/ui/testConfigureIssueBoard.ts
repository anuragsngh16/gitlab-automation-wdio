import { expect, browser } from "@wdio/globals";
import ProjectPage from "../../pageobjects/project.page";
import LabelsData from "../../test-data/labels-data.json";
import IssueBoard from "../../pageobjects/issueBoard.page";

export function testConfigureIssueBoardFunctionality() {
  describe("Configure Issue board", () => {
    it("Issue board page is opened when the Issue board link is clicked", async () => {
      await ProjectPage.waitForPageLoad();
      await ProjectPage.clickPlanMenu();
      await ProjectPage.clickIssueBoardSubMenu();
      await expect(IssueBoard.newListButton).toBeDisplayed();
    });

    it("Add a label to the issue board ", async () => {
      await IssueBoard.waitForPageLoad();
      await IssueBoard.clickNewListButton();
      await browser.pause(1000);
      await IssueBoard.clickSelectALabelButton();
      await IssueBoard.selectLabel(LabelsData.labelName[0]);
      await IssueBoard.clickAddToBoard();
    });

    it("Add another label to the issue board ", async () => {
      await IssueBoard.waitForPageLoad();
      await IssueBoard.clickNewListButton();
      await browser.pause(1000);
      await IssueBoard.clickSelectALabelButton();
      await IssueBoard.selectLabel(LabelsData.labelName[1]);
      await IssueBoard.clickAddToBoard();
    });

    it("Change the position of boards by drag and drop", async () => {
      await IssueBoard.waitForPageLoad();
      await IssueBoard.dragAndDropBoards();
    });
  });
}
