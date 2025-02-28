import { $ } from '@wdio/globals'
import Page from './page';

class HomePage extends Page {

    get homePageWelcomeMessage() {
        return $('h1[data-testid="welcome-title-content"]');
    }

    get breadcrumbPath() {
        return $('//span[normalize-space()="Projects"]');
    }

    get createProjectButton() {
        return $('a[data-testid="new-project-button"]');
    }
}

export default new HomePage();