import { $ } from '@wdio/globals'
import Page from './page';

class Preference extends Page {

    get userAvatar() {
        return $('img[data-testid="user-avatar-content"]');
    }
    
    public async clickUserAvatar(){
        await this.userAvatar.waitForDisplayed();   
        await this.userAvatar.click();
    }

    get preferencesSubmenu(){
        return $('//span[normalize-space()="Preferences"]');
    }

    public async clickPreferencesSubmenu(){
        await this.preferencesSubmenu.waitForDisplayed();
        await this.preferencesSubmenu.click();
    }

    public async isLightMode(){
        const isLightMode = await browser.execute(() => {
            return window.matchMedia('(prefers-color-scheme: light)').matches;
        });
        return isLightMode;
    }

    public async isDarkMode(){
        const isDarkMode = await browser.execute(() => {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        });
        return isDarkMode;
    }
    get darkMode(){
        return $('//div[input[@id = "user_color_mode_id_2"]]//span[normalize-space()="Dark (Experiment)"]');
    }

    public async clickDarkMode(){
        await this.darkMode.waitForDisplayed();
        await this.darkMode.click();
    }

    get lightMode(){
        return $('//div[input[@id = "user_color_mode_id_1"]]//span[normalize-space()="Light"]');
    }

    public async clickLightMode(){
        await this.lightMode.waitForDisplayed();
        await this.lightMode.click();
    }
}

export default new Preference();