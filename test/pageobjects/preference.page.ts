import { $ } from '@wdio/globals'
import Page from './page';

class Preference extends Page {
  get userAvatar(): ChainablePromiseElement {
    return $('img[data-testid="user-avatar-content"]');
  }

  public async clickUserAvatar(): Promise<void> {
    await this.userAvatar.waitForDisplayed();
    await this.userAvatar.click();
  }

  get preferencesSubmenu(): ChainablePromiseElement {
    return $('//span[normalize-space()="Preferences"]');
  }

  public async clickPreferencesSubmenu(): Promise<void> {
    await this.preferencesSubmenu.waitForDisplayed();
    await this.preferencesSubmenu.click();
  }

  public async isLightMode(): Promise<boolean> {
    const isLightMode = await browser.execute(() => {
      return window.matchMedia("(prefers-color-scheme: light)").matches;
    });
    return isLightMode;
  }

  public async isDarkMode(): Promise<boolean> {
    const isDarkMode = await browser.execute(() => {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });
    return isDarkMode;
  }
  get darkMode(): ChainablePromiseElement {
    return $('//div[input[@id = "user_color_mode_id_2"]]//span[normalize-space()="Dark (Experiment)"]');
  }

  public async clickDarkMode(): Promise<void> {
    await this.darkMode.waitForDisplayed();
    await this.darkMode.click();
  }

  get lightMode(): ChainablePromiseElement {
    return $('//div[input[@id = "user_color_mode_id_1"]]//span[normalize-space()="Light"]');
  }

  public async clickLightMode(): Promise<void> {
    await this.lightMode.waitForDisplayed();
    await this.lightMode.click();
  }

  get navigationThemes(): ChainablePromiseArray {
    return $$("div.application-theme label span");
  }

  public async themeApplied(): Promise<string> {
    const themeName = await browser.execute(() => {
      return (document.querySelector("html") as HTMLElement)?.className?.trim();
    });
    return await themeName;
  }

  public async getCurrentTheme(): Promise<string> {
    return await this.navigationThemes[0].getText();
  }

  public async selectTheme(themeName: string): Promise<void> {
    const themes = await $$("div.application-theme label span");
    const themeLabels = await $$("div.application-theme label.custom-control-label");
    for (let i = 0; i < (await themes.length); i++) {
      const text: string = await themes[i].getText();
      if (text.trim() === themeName) {
        await themeLabels[i].click();
        console.log(`Selected theme: "${themeName}"`);
        return;
      }
    }
  }
}

export default new Preference();