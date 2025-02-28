import { $ } from '@wdio/globals'
import Page from './page';

class ProjectPage extends Page {
    get manageButton(){
        return $('#menu-section-button-manage');
    }

    get labelLink(){
        return $('a[aria-label="Labels"]');
    }

    public async hoverOverManageButton(){
        await this.manageButton.moveTo();
    }

    public async clickLabelLink(){
        await this.labelLink.waitForDisplayed();
        await this.labelLink.click();
    }

}

export default new ProjectPage();