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
                value: 'cdHoYWHpL.cN.lKkjkAvS7EwBss2Y5PwQu0ERfBHp6I-1740833743-1.2.1.1-kFs0MWDgyNjU3QSFRKpoCRYwEWPsiymifKeuUgZUQY.boXLkE._tWJeo5cG.seryc7JTIvoYPkvqURZ6473tewt_ZPRVztJJfwkI_0r8tJbQoNxcDRYyGxJNyZnoQzpIiVumy7VVG_JgjYghI9fFfPvK3eMkROY3QuNgNzSl.AvO8I.Lw0pYhE277rPrudEFLqDS8eX4vIsU_L.P6WNZ31WC83r_NruQaSGzOhEvWayByVct9h9Awb5siKl4b9EwWNpoPx02UIzp2ovhfP2joelunQ2zQBjuiHPhWg1itqxUo2hrZOO.8ew9Ai0cLV4WRMXGI7KPflMmuFnnQkHTEMFLAaHCpLtK3X1Q5KbcSpkkVBSMVrfvdYwD4zU5mRbmV26nP6d3wRzuFYf8Num9pKKuMyepYojFnlfNzbQuG.XUOd3XP2oCK9rzyGfOD4kCBK59zjH77KAz0.yaplybqw', 
                domain: '.gitlab.com' 
            }
        ];
        await browser.setCookies(cookies);
    }
}
