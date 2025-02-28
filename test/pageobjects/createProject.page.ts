import { $ } from '@wdio/globals'
import Page from './page';

class CreateProject extends Page {

    public get createPageWelcomeMessage() {
        return $('//h2[normalize-space()="Create new project"]');
    }

    public get breadcrumbPath() {
        return $('//span[normalize-space()="New project"]');
    }

    public get createProjectButton() {
        return $('a[data-testid="new-project-button"]');
    }

    public get createBlankProjectButton() {
        return $('//h3[normalize-space()="Create blank project"]');
    }

    public get createNewProjectPageHeading(){
        return $('//h1[normalize-space()="Create blank project"]');
    }

    public get clickCreateProjectButton() {
        return this.createProjectButton.click();
    }

    public get clickBlankProjectButton() {
        return this.createBlankProjectButton.click();
    }
}

export default new CreateProject();