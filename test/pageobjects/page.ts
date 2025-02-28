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
                value: 'Jp4wQ88YYUhevW9Ksvvfr8EhbykDr5D.rGOhFq2jq2I-1740726380-1.2.1.1-E8Cgaa.QPAwT71Hyp_JyVsLkoerixLaDjwG1B7KLc1L3YMt4sGvx.2vP65QoHViRrLtIGE4n1921q4HctdaTvV_Z8b1ROSWGi7_9425FQ.788xeugYgpEh3ComcPjdSgi7kaedyW6PsqU7KcZlZIk3Pnsm6I8qkCWkk4HXMdIaURop4LRYd0znE_vi0TNH.vvN5HFt2BVFLSxECP2R_IkmdVOWH2QzT17_Z5Iq5ChEyF0FUjV6hwD0rqt9K3P2dz5NkNPkBE_Po8I8J6nK20jOj4eHhINsXJnegCbQJwi0VN_qhvbKsuVlKq7CVm51TMnvHYUpE8Q7Yh_1ehYz9grw', 
                domain: '.gitlab.com' 
            }
        ];
        await browser.setCookies(cookies);
    }
}
