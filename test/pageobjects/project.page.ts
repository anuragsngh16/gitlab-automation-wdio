import { $ } from '@wdio/globals'
import Page from './page';

class ProjectPage extends Page {
    
    get manageButton(): ChainablePromiseElement {
        return $('#menu-section-button-manage');
    }

    get labelSubMenu(): ChainablePromiseElement {
        return $('a[aria-label="Labels"]');
    }

    public async clickManageMenu(): Promise<void> {
        await this.manageButton.waitForDisplayed();
        await this.manageButton.click();
    }

    public async clickLabelLink(): Promise<void> {
        await this.labelSubMenu.waitForDisplayed();
        await this.labelSubMenu.click();
    }

    get planMenu(): ChainablePromiseElement {
        return $('#menu-section-button-plan');
    }

    get issuesLink(): ChainablePromiseElement {
        return $('a[aria-label="Issues"]');
    }

    get issueBaordSubMenu(): ChainablePromiseElement {
        return $('a[data-qa-submenu-item="Issue boards"]');
    }

    public async clickPlanMenu(): Promise<void> {
        await this.planMenu.click();
    }

    public async clickIssuesLink(): Promise<void> {
        await this.issuesLink.waitForDisplayed();
        await this.issuesLink.click();
    }

    public async clickIssueBoardSubMenu(): Promise<void>{
        await this.issueBaordSubMenu.waitForDisplayed();
        await this.issueBaordSubMenu.click();
    }
}

export default new ProjectPage();