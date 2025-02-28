import { $ } from '@wdio/globals'
import Page from './page';

class LabelsPage extends Page {
  get labelPageDescription() {
    return $("h1.gl-text-size-h-display");
  }

  public async getLabelPageDescription() {
    await this.labelPageDescription.waitForDisplayed();
    return this.labelPageDescription.getText();
  }

  get newLabelLink() {
    return $("#new_label_link");
  }

  public async clickNewLabelLink() {
    await this.newLabelLink.waitForDisplayed();
    await this.newLabelLink.click();
  }

  get newLabelButton() {
    return $('a[data-testid="create-new-label-button"]');
  }

  public async clickNewLabelButton() {
    await this.newLabelButton.waitForDisplayed();
    await this.newLabelButton.click();
  }
  get labelTitleInput() {
    return $("#label_title");
  }

  public async inputLabelTitle(labelTitle: string) {
    await this.labelTitleInput.setValue(labelTitle);
  }

  get labelDescriptionInput() {
    return $("#label_description");
  }

  public async inputLabelDescription(labelDescription: string) {
    await this.labelDescriptionInput.setValue(labelDescription);
  }

  get createLabelButton() {
    return $('//button/span[normalize-space()="Create label"]');
  }

  public async clickCreateLabelButton() {
    await this.createLabelButton.waitForDisplayed();
    await this.createLabelButton.click();
  }

  public async createNewLabel(labelTitle: string, labelDescription: string) {
    await this.inputLabelTitle(labelTitle);
    await this.inputLabelDescription(labelDescription);
    await this.clickCreateLabelButton();
  }
  get labelNamePostCreation() {
    return $(
      '.js-other-labels .js-label-list-item .gl-label-text[data-container="body"]'
    );
  }

  public async getLabelNamePostCreation() {
    await this.labelNamePostCreation.waitForDisplayed();
    return this.labelNamePostCreation.getText();
  }

  get labelSearch() {
    return $("#label-search");
  }

  public async inputLabelNameInSearchBox(labelName: string) {
    await this.labelSearch.setValue(labelName);
  }

  get searchLabelButton() {
    return $('button[aria-label="Submit search"]');
  }

  public async clickSearchLabelButton() {
    await this.searchLabelButton.click();
  }

  public async searchLabel(labelName: string) {
    await this.labelSearch.waitForClickable();
    await this.labelSearch.clearValue();
    await this.inputLabelNameInSearchBox(labelName);
    await this.clickSearchLabelButton();
  }

  get noLabelFound() {
    return $("div.other-labels > div");
  }

  public async getNoLabelFound() {
    await this.noLabelFound.waitForDisplayed({timeout: 5000});
    return  await this.noLabelFound.getText();
  }
}


export default new LabelsPage();