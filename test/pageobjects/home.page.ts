import { $ } from '@wdio/globals'
import Page from './page';

class HomePage extends Page {

    public get homePageWelcomeMessage() {
        return $('h1[data-testid="welcome-title-content"]');
    }

    public get breadcrumbPath() {
        return $('//span[normalize-space()="Projects"]');
    }

    public get createProjectButton() {
        return $('a[data-testid="new-project-button"]');
    }
}

export default new HomePage();