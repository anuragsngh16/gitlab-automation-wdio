import { $$ } from '@wdio/globals'
import Page from './page';

class Dashboard extends Page {
  get allProjects(): ChainablePromiseArray {
    return $$('span[class="project-name"]');
  }

  /**
   * Clicks on a project with the specified name from the list of all projects.
   *
   * @param projectName - The name of the project to click.
   * @returns A promise that resolves when the project is clicked.
   */
  public async clickMyProject(projectName: string): Promise<void> {
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
