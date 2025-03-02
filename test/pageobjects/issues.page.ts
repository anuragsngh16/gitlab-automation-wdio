import { $ } from '@wdio/globals'
import Page from './page';

class IssuesPage extends Page {
    get issuesPageDescription(): ChainablePromiseElement {
        return $('h1.gl-text-size-h-display');
    }

    public async getIssuesPageDescription(): Promise<any> {
        await this.issuesPageDescription.waitForDisplayed();
        return this.issuesPageDescription.getText();
    }

    get newIssueLink(): ChainablePromiseElement {
        return $('//a[@data-track-action="click_new_issue_project_issues_empty_list_page"]');
    }

    public async clickNewIssueLink(): Promise<void> {
        await this.newIssueLink.waitForDisplayed();
        await this.newIssueLink.click();
    }

    get newIssuePageTitle(): ChainablePromiseElement {
        return $('h1.page-title');
    }

    public async getNewIssuePageTitle(): Promise<any> {
        await this.newIssuePageTitle.waitForDisplayed();
        return this.newIssuePageTitle.getText();
    }

    get issuesTitleInput(): ChainablePromiseElement {
        return $('#issue_title');
    }

    public async inputIssuesTitle(labelTitle: string): Promise<void> {
        await this.issuesTitleInput.setValue(labelTitle);
    }

    get issuesDescriptionInput(): ChainablePromiseElement {
        return $('#issue_description');
    }

    public async issuesLabelDescription(labelDescription: string): Promise<void> {      
        await this.issuesDescriptionInput.setValue(labelDescription);
    }

    get assigneeDropdown(): ChainablePromiseElement {
        return $('button.js-assignee-search');    
    }

    public async clickAssigneeDropdown(): Promise<void> {
        await this.assigneeDropdown.click();
    }

    get assignedToMeLink(): ChainablePromiseElement {
        return $('a.assign-to-me-link');
    }

    public async clickAssignedToMeLink(): Promise<void> {
        await this.assignedToMeLink.waitForDisplayed();
        await this.assignedToMeLink.click();
    }

    get createIssue(): ChainablePromiseElement {
        return $('button[data-track-label="submit_mr"]');
    }

    public async clickCreateIssue(): Promise<void> {
        await this.createIssue.waitForDisplayed();
        await this.createIssue.click();
    }
}

export default new IssuesPage();