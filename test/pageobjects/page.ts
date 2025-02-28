import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

    public async setGitlabCookies() {
        const cookies = [
            { 
                name: 'cf_clearance', 
                value: 'ykfcP809sKJCNi9b7NvauUA98C6mKZH4d33HJYtcN8c-1740722422-1.2.1.1-zV1ma.JIIZm2_AliHCnLZqy3Ho2dvd3MaogHiPM3yinRFE_ZQT842N2avfZVh0RY.YGZRpg1g52HPVndSn2lRDohvUE2CfYmJgfJWpagmsYByfW9CSC5hjyyifOg9isGp38vRclQiCe6s2WJA5aS9lOR_Z.B4oqEAbeYybL5Cykj1KjVqaJKPKXKt1wRaLlBnFiSFNIZ6uDaa3XaCTS9SFJwZ5rAAlpJv0ncnFEIQ9Lk5r_6vtTqvpvZmI0Y5emqbgQ1.PzL.Ge_xwUS1qKqB.4303uirvWA.PS2xDTvX_a0k7ccq32aiQcdFsIGY74F8wB2eRaHnFri81tmGmH9UA', 
                domain: '.gitlab.com' 
            }
        ];
        await browser.setCookies(cookies);
    }
}
