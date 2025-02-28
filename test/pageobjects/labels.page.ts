import { $ } from '@wdio/globals'
import Page from './page';

class LabelsPage extends Page {
    get labelPageTitle(){
        return $('h1.gl-text-size-h-display');
    }

    public async getLabelPageTitle(){
        await this.labelPageTitle.waitForDisplayed();
        return this.labelPageTitle.getText();
    }

    get newLabelLink(){
        return $('#new_label_link');
    }

    public async clickNewLabelLink(){
        await this.newLabelLink.waitForDisplayed();
        await this.newLabelLink.click();
    }

    get labelTitleInput(){
        return $('#label_title');
    }

    public async inputLabelTitle(labelTitle: string){
        await this.labelTitleInput.setValue(labelTitle);
    }

    get labelDescriptionInput(){
        return $('#label_description');
    }

    public async inputLabelDescription(labelDescription: string){      
        await this.labelDescriptionInput.setValue(labelDescription);
    }

    get createLabelButton(){
        return $('//button/span[normalize-space()="Create label"]');
    }

    public async clickCreateLabelButton(){
        await this.createLabelButton.waitForDisplayed();
        await this.createLabelButton.click();
    }

    get labelNamePostCreation(){
        return $('.js-other-labels .js-label-list-item .gl-label-text[data-container="body"]');
    }

    public async getLabelNamePostCreation(){
        await this.labelNamePostCreation.waitForDisplayed();
        return this.labelNamePostCreation.getText();
    }

    get labelSearch(){
        return $('label-search');
    }

    public async inputLabelNameInSearchBox(labelName: string){
        await this.labelSearch.setValue(labelName);
    }

    get searchLabelButton(){
        return $('button[aria-label="Submit search"]');
    }

    public async clickSearchLabelButton(){
        await this.searchLabelButton.click();
    }
}


export default new LabelsPage();