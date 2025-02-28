import { $ } from '@wdio/globals'
import Page from './page';

class BlankProject extends Page {

    public get breadcrumbPath() {
        return $('//span[normalize-space()="Create blank project"]');
    }
    
    public get createBlankProjectPageHeading(){
        return $('//h1[normalize-space()="Create blank project"]');
    }

    public get projectNameInput() {
        return $('#project_name');
    }

    public get projectPathInput(){
        return $('#project_path');
    }

    public get createProjectButton(){
        return $('//span[normalize-space()="Create project"]');
    }

    public get project(){
        return $('h1[data-testid="project-name-content"]');
    }
    
    public inputProjectName(projectName: string) {
        return this.projectNameInput.setValue(projectName);
    }

    public async clickCreateBlankProjectButton(){
        await this.createProjectButton.waitForDisplayed();
        await this.createProjectButton.click();
    }
}

export default new BlankProject();