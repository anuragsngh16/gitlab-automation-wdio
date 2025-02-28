import { $, $$ } from "@wdio/globals";
import Page from "./page";

class IssueBoard extends Page {
  get newListButton() {
    return $("#boards-create-list");
  }

  public async clickNewListButton() {
    await this.newListButton.waitForDisplayed();
    await this.newListButton.click();
  }

  get selectALabelButton() {
    return $('//span[normalize-space()="Select a label"]');
  }

  public async clickSelectALabelButton() {
    await this.selectALabelButton.waitForDisplayed();
    await this.selectALabelButton.click();
  }

  get labelsList() {
    return $$('//label[span[contains(@class, "dropdown-label-box")]]/div');
  }

  public async selectLabel(labelName: string) {
    const allLabels = await this.labelsList;
    for (const label of allLabels) {
      const labelText = await label.getText();
      if (labelText.trim() === labelName) {
        await label.click();
        break;
      }
    }
  }

  get addToBoard() {
    return $('button[data-testid="addNewColumnButton"]');
  }

  public async clickAddToBoard() {
    await this.addToBoard.waitForDisplayed();
    await this.addToBoard.click();
  }

  get dragableBoards() {
    return $$("h3.gl-cursor-grab .board-title-text .gl-label-text");
  }

  public async dragAndDropBoards() {
    try {
      const firstBoard = $(
        '//header[.//span[@class="gl-label-text" and normalize-space()="In-progress"]]'
      );
      const secondBoard = $(
        '//header[.//span[@class="gl-label-text" and normalize-space()="In-Test"]]'
      );
      const firstBoardLocation = await firstBoard.getLocation();
      const secondBoardLocation = await secondBoard.getLocation();
      await browser.performActions([
        {
          type: "pointer",
          id: "pointer1",
          parameters: { pointerType: "mouse" },
          actions: [
            {
              type: "pointerMove",
              duration: 0,
              x: firstBoardLocation.x,
              y: firstBoardLocation.y,
            },
            { type: "pointerDown", button: 0 },
            {
              type: "pointerMove",
              duration: 5000,
              x: secondBoardLocation.x,
              y: secondBoardLocation.y,
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
