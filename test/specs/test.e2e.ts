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