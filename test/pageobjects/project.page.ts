import { $ } from '@wdio/globals'
import Page from './page';

class ProjectPage extends Page {
    get manageButton(){
        return $('#menu-section-button-manage');
    }

    get labelSubMenu(){
        return $('a[aria-label="Labels"]');
    }

    public async clickManageMenu(){
        await this.manageButton.waitForDisplayed();
        await this.manageButton.click();
    }

    public async clickLabelLink(){
        await this.labelSubMenu.waitForDisplayed();
        await this.labelSubMenu.click();
    }

    get planMenu(){
        return $('#menu-section-button-plan');
    }

    get issuesLink(){
        return $('a[aria-label="Issues"]');
    }

    get issueBaordSubMenu(){
        return $('a[data-qa-submenu-item="Issue boards"]');
    }

    public async clickPlanMenu(){
        await this.planMenu.click();
    }

    public async clickIssuesLink(){
        await this.issuesLink.waitForDisplayed();
        await this.issuesLink.click();
    }

    public async clickIssueBoardSubMenu(){
        await this.issueBaordSubMenu.waitForDisplayed();
        await this.issueBaordSubMenu.click();
    }
}

export default new ProjectPage();