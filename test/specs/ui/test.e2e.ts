import { expect, browser } from '@wdio/globals';
import LoginPage from '../../pageobjects/login.page';
import LoginData from '../../test-data/login-data.json';
import { testHomePageFunctionality } from './testHomePage';
import { testCreateProjectFunctionality } from './testCreateProject';
import { testBlankProjectCreationFunctionality } from './testBlankProjectCreation';
import { testCreateAndSearchLabelFunctionality } from './testLabelCreation';
import { testSettingPreferencesFunctionality } from './testPreferences';
import { testConfigureIssueBaordFunctionality } from './testConfigureIssueBoard';

/**
 * Executes a series of UI tests for GitLab application.
 * 
 * This script performs the following actions:
 * - Logs into the GitLab application using valid credentials.
 * - Tests the functionality of the GitLab homepage.
 * - Tests the project creation process, including creating a blank project.
 * - Tests the creation and search functionality of labels.
 * - Configures the issue board by adding labels and changing board positions.
 * - Tests user preference settings, including theme and appearance changes.
 * 
 * The script utilizes organization-specific modules and data for testing.
 */

before('login with valid credentials', async () => {
    await browser.url('https://gitlab.com/users/sign_in');
    await browser.maximizeWindow();
    await LoginPage.setGitlabCookies();
    await browser.refresh();
    await expect(browser).toHaveTitle(LoginData.loginPageTitle);
    await LoginPage.login(LoginData.username, LoginData.password);
});

testHomePageFunctionality();
testCreateProjectFunctionality();
testBlankProjectCreationFunctionality();
testCreateAndSearchLabelFunctionality();
testConfigureIssueBaordFunctionality();
testSettingPreferencesFunctionality();