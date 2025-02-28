import { expect, browser } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page';
import LoginData from '../test-data/login-data.json';
import HomePage from '../pageobjects/home.page';
import HomePageData from '../test-data/homepage-data.json';
import CreateProject from '../pageobjects/createProject.page';
import CreateProjectData from '../test-data/createProject-data.json';
import CreateProjectPage from '../pageobjects/createProject.page';
import BlankProject from '../pageobjects/blankProject.page';
import BlankProjectData from '../test-data/blankProject-data.json';
import ProjectPage from '../pageobjects/project.page';
import LabelsPage from '../pageobjects/labels.page';
import LabelsData from '../test-data/labels-data.json';
import IssueBoard from '../pageobjects/issueBoard.page';

before('login with valid credentials', async () => {
    await browser.url('https://gitlab.com/users/sign_in');
    await browser.maximizeWindow();
    await LoginPage.setGitlabCookies();
    await browser.refresh();
    await expect(browser).toHaveTitle(LoginData.loginPageTitle);
    await LoginPage.login(LoginData.username, LoginData.password);
});

describe('GitLab Homepage', () => {
    it('Verify the welcome message idisplayed on the homepage on successful login', async () => {
        await HomePage.homePageWelcomeMessage.waitForDisplayed();
        await expect(HomePage.homePageWelcomeMessage).toHaveText(HomePageData.welcomeMessage);
    });

    it('Verify the breadcrumb path on the homepage', async () => {
        await HomePage.breadcrumbPath.waitForDisplayed({ timeout: 15000 });
        await expect(HomePage.breadcrumbPath).toHaveText(HomePageData.breadcrumbPath);
    });

    it('Verify the create project button is displayed', async () => {
        await HomePage.createProjectButton.waitForDisplayed();
        await expect(HomePage.createProjectButton).toBeDisplayed();
    });
});

describe('Create a project', () => {
    it('Click on the create project button', async () => {
        await HomePage.createProjectButton.click();
    });

    it('Verify the welcome message on the create project page', async () => {
        await CreateProject.createPageWelcomeMessage.waitForDisplayed();
        await expect(CreateProjectPage.createPageWelcomeMessage).toHaveText(CreateProjectData.createProjectPageWelcomeMessage);
    });

    it('Verify the breadcrumb path on the homepage', async () => {
        await CreateProjectPage.breadcrumbPath.waitForDisplayed();
        await expect(CreateProjectPage.breadcrumbPath).toHaveText(CreateProjectData.breadcrumbPath);
    });

    it('Verify different options displayed for project creation', async () => {

    });
});

describe('Create a blank project', () => {
    it('Click on the create blank project button', async () => {
        await CreateProject.createBlankProjectButton.waitForDisplayed();
        await CreateProject.createBlankProjectButton.click();
    });

    it('Verify the welcome message on the create new project page', async () => {
        await BlankProject.createBlankProjectPageHeading.waitForDisplayed();
        await expect(BlankProject.createBlankProjectPageHeading).toHaveText(BlankProjectData.createBlankProjectPageHeading);
    });

    it('Create a blank project', async () =>{
        await BlankProject.projectNameInput.waitForDisplayed();
        await BlankProject.inputProjectName(BlankProjectData.projectName);

        const projectName: string = await (await BlankProject.projectNameInput).getValue();
        await expect(projectName).toBe(BlankProjectData.projectName);
        
        const projectPath: string = await (await BlankProject.projectPathInput).getValue();
        await expect(projectPath).toBe(BlankProjectData.projectPath);
        
        await BlankProject.clickCreateBlankProjectButton();
    });

    it('Verify the project is created successfully', async () => {
        await BlankProject.project.waitForDisplayed();
        await expect(BlankProject.project).toHaveText(BlankProjectData.projectName);
    });
});

describe('Test Create and search Labels', () => {
    it('Labels page is opened when the label link is clicked', async () => {
        await ProjectPage.clickManageMenu();
        await ProjectPage.clickLabelLink();
        await expect(LabelsPage.labelPageDescription).toHaveText('Labels can be applied to issues and merge requests to categorize them');
    });

    it('A label is created with the supplied name', async () => {
        await LabelsPage.clickNewLabelLink();
        await LabelsPage.createNewLabel(LabelsData.labelName[0], LabelsData.labelDescription[0]);
        await expect(LabelsPage.labelNamePostCreation).toHaveText(LabelsData.labelName[0]);
    });

    it('Second label is created with the supplied name', async () => {
        await LabelsPage.clickNewLabelButton();
        await LabelsPage.createNewLabel(LabelsData.labelName[1], LabelsData.labelDescription[1]);
        await expect(LabelsPage.labelNamePostCreation).toHaveText(LabelsData.labelName[1]);
    });

    it('The label is found when the created label is searched', async () => {
        await LabelsPage.searchLabel(LabelsData.labelName[0]);
        await expect(LabelsPage.labelNamePostCreation).toHaveText(LabelsData.labelName[0]);
    });

    it('Search result is empty when a random label name is searched', async () => {
        await LabelsPage.searchLabel("Random-Label"); 
        await expect(LabelsPage.getNoLabelFound).toHaveText('No labels with such name or description');
    });
});

describe('Configure Issue board', () => {
    it('Issue board page is opened when the Issue baord link is clicked', async () => {
        await ProjectPage.clickPlanMenu();
        await ProjectPage.clickIssueBoardSubMenu();
        await expect(IssueBoard.newListButton).toBeDisplayed();
    });

    it('Add a lable to the issue board ', async () => {
        await IssueBoard.clickNewListButton();
        await browser.pause(1000);
        await IssueBoard.clickSelectALabelButton();
        await IssueBoard.selectLabel(LabelsData.labelName[0]);
        await IssueBoard.clickAddToBoard();
    });

    it('Add another lable to the issue board ', async () => {
        await IssueBoard.clickNewListButton();
        await browser.pause(1000);
        await IssueBoard.clickSelectALabelButton();
        await IssueBoard.selectLabel(LabelsData.labelName[1]);
        await IssueBoard.clickAddToBoard();
    });

    it.only('Change the position of baords by drag and drop', async () => {
        //await browser.pause(8000);
        await IssueBoard.dragAndDropBoards();
    });
});