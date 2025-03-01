import { expect, browser } from '@wdio/globals';
import LoginPage from '../../pageobjects/login.page';
import LoginData from '../../test-data/login-data.json';
import { testHomePageFunctionality } from './testHomePage';
import { testCreateProjectFunctionality } from './testCreateProject';
import { testBlankProjectCreationFunctionality } from './testBlankProjectCreation';
import { testCreateAndSearchLabelFunctionality } from './testLabelCreation';
import { testSettingPreferencesFunctionality } from './testPreferences';
import { testConfigureIssueBaordFunctionality } from './testConfigureIssueBoard';

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