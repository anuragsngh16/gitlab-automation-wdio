import { $ } from '@wdio/globals'
import Page from './page';

class HomePage extends Page {

    get homePageWelcomeMessage(): ChainablePromiseElement{
        return $('h1[data-testid="welcome-title-content"]');
    }

    get breadcrumbPath(): ChainablePromiseElement {
        return $('//span[normalize-space()="Projects"]');
    }

    get createProjectButton(): ChainablePromiseElement  {
        return $('a[data-testid="new-project-button"]');
    }
}

export default new HomePage();