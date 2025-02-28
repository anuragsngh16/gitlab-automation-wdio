import { $ } from '@wdio/globals'
import Page from './page';

class IssuesPage extends Page {
    get issuesPageDescription(){
        return $('h1.gl-text-size-h-display');
    }

    public async getIssuesPageDescription(){
        await this.issuesPageDescription.waitForDisplayed();
        return this.issuesPageDescription.getText();
    }

    get newIssueLink(){
        return $('//a[@data-track-action="click_new_issue_project_issues_empty_list_page"]');
    }

    public async clickNewIssueLink(){
        await this.newIssueLink.waitForDisplayed();
        await this.newIssueLink.click();
    }

    get newIssuePageTitle(){
        return $('h1.page-title');
    }

    public async getNewIssuePageTitle(){
        await this.newIssuePageTitle.waitForDisplayed();
        return this.newIssuePageTitle.getText();
    }

    get issuesTitleInput(){
        return $('#issue_title');
    }

    public async inputIssuesTitle(labelTitle: string){
        await this.issuesTitleInput.setValue(labelTitle);
    }

    get issuesDescriptionInput(){
        return $('#issue_description');
    }

    public async issuesLabelDescription(labelDescription: string){      
        await this.issuesDescriptionInput.setValue(labelDescription);
    }

    get assigneeDropdown(){
        return $('button.js-assignee-search');    
    }

    public async clickAssigneeDropdown(){
        await this.assigneeDropdown.click();
    }

    get assignedToMeLink(){
        return $('a.assign-to-me-link');
    }

    public async clickAssignedToMeLink(){
        await this.assignedToMeLink.waitForDisplayed();
        await this.assignedToMeLink.click();
    }

    get createIssue(){
        return $('button[data-track-label="submit_mr"]');
    }

    public async clickCreateIssue(){
        await this.createIssue.waitForDisplayed();
        await this.createIssue.click();
    }
}


export default new IssuesPage();