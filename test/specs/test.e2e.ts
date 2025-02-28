import { browser } from '@wdio/globals';

before('login with valid credentials', async () => {
    await browser.url('https://gitlab.com/users/sign_in');
    await browser.maximizeWindow();
});
