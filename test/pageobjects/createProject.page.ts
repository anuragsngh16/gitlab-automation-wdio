import { $ } from '@wdio/globals'
import Page from './page';

class CreateProject extends Page {

    get createPageWelcomeMessage(): ChainablePromiseElement {
        return $('//h2[normalize-space()="Create new project"]');
    }

    get breadcrumbPath(): ChainablePromiseElement {
        return $('//span[normalize-space()="New project"]');
    }

    get createProjectButton(): ChainablePromiseElement {
        return $('a[data-testid="new-project-button"]');
    }

    get createBlankProjectButton(): ChainablePromiseElement {
        return $('//h3[normalize-space()="Create blank project"]');
    }

    get createNewProjectPageHeading(): ChainablePromiseElement{
        return $('//h1[normalize-space()="Create blank project"]');
    }

    public async clickCreateProjectButton(): Promise<void> {
        await this.createProjectButton.click();
    }

    public async clickBlankProjectButton(): Promise<void> {
        await this.createBlankProjectButton.click();
    }
}

export default new CreateProject();