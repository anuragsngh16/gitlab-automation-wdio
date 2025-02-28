import { $ } from '@wdio/globals'
import Page from './page';

class CreateProject extends Page {

    get createPageWelcomeMessage() {
        return $('//h2[normalize-space()="Create new project"]');
    }

    get breadcrumbPath() {
        return $('//span[normalize-space()="New project"]');
    }

    get createProjectButton() {
        return $('a[data-testid="new-project-button"]');
    }

    get createBlankProjectButton() {
        return $('//h3[normalize-space()="Create blank project"]');
    }

    get createNewProjectPageHeading(){
        return $('//h1[normalize-space()="Create blank project"]');
    }

    public async clickCreateProjectButton() {
        await this.createProjectButton.click();
    }

    public async clickBlankProjectButton() {
        await this.createBlankProjectButton.click();
    }
}

export default new CreateProject();