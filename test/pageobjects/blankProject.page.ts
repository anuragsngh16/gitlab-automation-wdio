import { $ } from "@wdio/globals";
import Page from "./page";
import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

class BlankProject extends Page {
  get breadcrumbPath(): ChainablePromiseElement {
    return $('//span[normalize-space()="Create blank project"]');
  }

  get createBlankProjectPageHeading(): ChainablePromiseElement {
    return $('//h1[normalize-space()="Create blank project"]');
  }

  get projectNameInput(): ChainablePromiseElement {
    return $("#project_name");
  }

  get projectPathInput(): ChainablePromiseElement {
    return $("#project_path");
  }

  get createProjectButton(): ChainablePromiseElement {
    return $('//span[normalize-space()="Create project"]');
  }

  get project(): ChainablePromiseElement {
    return $('h1[data-testid="project-name-content"]');
  }

  public async inputProjectName(projectName: string): Promise<void> {
    await this.projectNameInput.setValue(projectName);
  }

  public async clickCreateBlankProjectButton(): Promise<void> {
    await this.createProjectButton.waitForDisplayed();
    await this.createProjectButton.click();
  }

  get toastMessage(): ChainablePromiseElement {
    return $("#content-body div.gl-alert-body");
  }

  public async getToastMessage(): Promise<string> {
    await this.toastMessage.waitForDisplayed();
    return await browser.execute(() => {
      return (document.querySelector("#content-body div.gl-alert-body") as HTMLElement)?.innerText?.trim();
    });
  }

  get moreActions(): ChainablePromiseElement {
    return $('button[aria-label="More actions"].gl-new-dropdown-icon-only');
  }

  public async clickMoreActionIcon(): Promise<void> {
    await this.moreActions.waitForDisplayed();
    await this.moreActions.click();
  }

  get copyProjectId(): ChainablePromiseElement{
    return $('button[data-testid="copy-project-id"]');
  }

  public async clickCopyProjectId(): Promise<void>{
    await this.copyProjectId.waitForDisplayed();
    await this.copyProjectId.click();
  }

  public writeDataToFile(key: string, value: string, fileloacation: string) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, fileloacation);
    const absolutePath = path.resolve(filePath)
    const data = fs.readFileSync(absolutePath, "utf-8");
    const jsonData = JSON.parse(data);
    jsonData[key] = value;
    const updatedData = JSON.stringify(jsonData, null, 2);
    fs.writeFileSync(filePath, updatedData, "utf-8");
  }
}

export default new BlankProject();
