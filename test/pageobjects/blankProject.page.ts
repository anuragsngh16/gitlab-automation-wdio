import { $ } from '@wdio/globals'
import Page from './page';

class BlankProject extends Page {

    get breadcrumbPath() {
        return $('//span[normalize-space()="Create blank project"]');
    }
    
    get createBlankProjectPageHeading(){
        return $('//h1[normalize-space()="Create blank project"]');
    }

    get projectNameInput() {
        return $('#project_name');
    }

    get projectPathInput(){
        return $('#project_path');
    }

    get createProjectButton(){
        return $('//span[normalize-space()="Create project"]');
    }

    get project(){
        return $('h1[data-testid="project-name-content"]');
    }
    
    public async inputProjectName(projectName: string) {
        await this.projectNameInput.setValue(projectName);
    }

    public async clickCreateBlankProjectButton(){
        await this.createProjectButton.waitForDisplayed();
        await this.createProjectButton.click();
    }
}

export default new BlankProject();