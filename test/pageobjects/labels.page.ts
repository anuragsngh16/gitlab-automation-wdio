import { $ } from '@wdio/globals'
import Page from './page';

class LabelsPage extends Page {

  get labelPageDescription(): ChainablePromiseElement {
    return $("h1.gl-text-size-h-display");
  }

  public async getLabelPageDescription(): Promise<string> {
    await this.labelPageDescription.waitForDisplayed();
    return this.labelPageDescription.getText();
  }

  get newLabelLink(): ChainablePromiseElement {
    return $("#new_label_link");
  }

  public async clickNewLabelLink(): Promise<void> {
    await this.newLabelLink.waitForDisplayed();
    await this.newLabelLink.click();
  }

  get newLabelButton(): ChainablePromiseElement {
    return $('a[data-testid="create-new-label-button"]');
  }

  public async clickNewLabelButton(): Promise<void> {
    await this.newLabelButton.waitForDisplayed();
    await this.newLabelButton.click();
  }
  get labelTitleInput(): ChainablePromiseElement {
    return $("#label_title");
  }

  public async inputLabelTitle(labelTitle: string): Promise<void> {
    await this.labelTitleInput.setValue(labelTitle);
  }

  get labelDescriptionInput(): ChainablePromiseElement {
    return $("#label_description");
  }

  public async inputLabelDescription(labelDescription: string): Promise<void> {
    await this.labelDescriptionInput.setValue(labelDescription);
  }

  get createLabelButton(): ChainablePromiseElement {
    return $('//button/span[normalize-space()="Create label"]');
  }

  public async clickCreateLabelButton(): Promise<void> {
    await this.createLabelButton.waitForDisplayed();
    await this.createLabelButton.click();
  }

  public async createNewLabel(labelTitle: string, labelDescription: string) {
    await this.inputLabelTitle(labelTitle);
    await this.inputLabelDescription(labelDescription);
    await this.clickCreateLabelButton();
  }
  get labelNamePostCreation(): ChainablePromiseElement {
    return $('.js-other-labels .js-label-list-item .gl-label-text[data-container="body"]');
  }

  public async getLabelNamePostCreation(): Promise<any> {
    await this.labelNamePostCreation.waitForDisplayed();
    return this.labelNamePostCreation.getText();
  }

  get labelSearch(): ChainablePromiseElement {
    return $("#label-search");
  }

  public async inputLabelNameInSearchBox(labelName: string): Promise<void> {
    await this.labelSearch.setValue(labelName);
  }

  get searchLabelButton(): ChainablePromiseElement {
    return $('button[aria-label="Submit search"]');
  }

  public async clickSearchLabelButton(): Promise<void> {
    await this.searchLabelButton.click();
  }

  public async searchLabel(labelName: string): Promise<void> {
    await this.labelSearch.waitForClickable();
    await this.labelSearch.clearValue();
    await this.inputLabelNameInSearchBox(labelName);
    await this.clickSearchLabelButton();
  }
}

export default new LabelsPage();