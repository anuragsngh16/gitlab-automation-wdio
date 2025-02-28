import { $, $$ } from '@wdio/globals'
import Page from './page';

class Dashboard extends Page {
  get allProjects() {
    return $$('span[class="project-name"]');
  }

  public async clickMyProject(projectName: string) {
    const projects = await this.allProjects;
    for (const myProject of projects) {
      const project = await myProject.getText();
      if (project.trim() === projectName) {
        await myProject.click();
        break;
      }
    }
  }
}

export default new Dashboard();
