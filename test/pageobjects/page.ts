import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

    public async setGitlabCookies(): Promise<void> {
        const cookies = [
            { 
                name: 'cf_clearance', 
                value: 'NnoYR1vsQ2Q2dYM.xpg8NxtVVv2A9EyERsztiVXjcKQ-1740917254-1.2.1.1-msgxJSWI.5k4OmzdOx3GuL1G7U8gEa2YE7r8uHFnVl5ack233ARyGE.V4np15L8TzFFtsutbvlsZZMYX9xpq1Epbb6c73BqoVTMg3MT8JGlP4NaJZ6Ubv49MGirTzaKGgzQ8y9A1WNFQGdRna8sB65_iVGb3N46BD.CKqBNDVIe1iCsRynhdl.o55ot9ahXMj9tiE3iCMWUM8v2WLb8Ak6yJmbRFMMg_meyy_Uax.LU8ePfn49DX7npw9Qfruj6fqzW0Qi8jc7nCuSKAGqhBp7c_36ZMAWZe0hvfClGEs7z8TfeYrkE1RtB5ngWedPAYkT.FD2a.qLYXKfdMZHT95H7k0VspHMiLVzMlezFSstSeChXqNc4I.l6UKVOFcRSUIjWqdmgRgrW5K4eDUfvAL.W8pm7TXnCbI3K7Dw1K5G0BTW2SkX9GZPrq5Mw1nqPZpS.s9QDudyV5V0muBxlFzw', 
                domain: '.gitlab.com' 
            }
        ];
        await browser.setCookies(cookies);
    }

    public async waitForPageLoad(timeout: number = 10000): Promise<void> {
        await browser.waitUntil(
            async () => (await browser.execute(() => document.readyState)) === "complete",
            {
                timeout: timeout,
                timeoutMsg: "Page did not load within the expected time",
            }
        );
    }
}
