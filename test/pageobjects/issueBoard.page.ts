import { $, $$ } from "@wdio/globals";
import Page from "./page";
import LabelsData from "../../test/test-data/labels-data.json";

class IssueBoard extends Page {
  get newListButton(): ChainablePromiseElement {
    return $("#boards-create-list");
  }

  public async clickNewListButton(): Promise<void> {
    await this.newListButton.waitForDisplayed();
    await this.newListButton.click();
  }

  get selectALabelButton(): ChainablePromiseElement {
    return $('//span[normalize-space()="Select a label"]');
  }

  public async clickSelectALabelButton(): Promise<void> {
    await this.selectALabelButton.waitForDisplayed();
    await this.selectALabelButton.click();
  }

  get labelsList(): ChainablePromiseArray {
    return $$('//label[span[contains(@class, "dropdown-label-box")]]/div');
  }

  public async selectLabel(labelName: string): Promise<void> {
    const allLabels = await this.labelsList;
    for (const label of allLabels) {
      const labelText = await label.getText();
      if (labelText.trim() === labelName) {
        await label.click();
        break;
      }
    }
  }

  get addToBoard(): ChainablePromiseElement {
    return $('button[data-testid="addNewColumnButton"]');
  }

  public async clickAddToBoard(): Promise<void> {
    await this.addToBoard.waitForDisplayed();
    await this.addToBoard.click();
  }

  get dragableBoards(): ChainablePromiseArray {
    return $$("h3.gl-cursor-grab .board-title-text .gl-label-text");
  }

  public async dragAndDropBoards(): Promise<void> {
    try {
      const firstBoard = $(`//div[contains(@class,"is-expandable")][.//header//span[@class="gl-label-text" and normalize-space()="${LabelsData.labelName[0]}"]]//ul`);
      const secondBoard = $(`//div[contains(@class,"is-expandable")][.//header//span[@class="gl-label-text" and normalize-space()="${LabelsData.labelName[1]}"]]//ul`);
      const firstBoardLocation = await firstBoard.getLocation();
      //console.log(firstBoardLocation.x)
      //console.log(firstBoardLocation.y)
      const secondBoardLocation = await secondBoard.getLocation();
      //console.log(secondBoardLocation.x)
      //console.log(secondBoardLocation.y)
      await firstBoard.scrollIntoView();
      await browser.performActions([
        {
          type: "pointer",
          id: "mouse",
          parameters: { pointerType: "mouse" },
          actions: [
            {
              type: "pointerMove",
              duration: 1000,
              x: firstBoardLocation.x,
              y: firstBoardLocation.y,
            },
            { type: "pointerDown", button: 0 },
            { type: "pause", duration: 500 }, 
            {
              type: "pointerMove",
              duration: 5000,
              x: secondBoardLocation.x+5,
              y: secondBoardLocation.y+5,
            },
            { type: "pointerUp", button: 0 },
          ],
        },
      ]);
    } catch (error) {
      console.error("Error in dragAndDropBoards:", error);
      throw error;
    }
  }
}

export default new IssueBoard();
