import { expect } from "@wdio/globals";
import Preference from "../../pageobjects/preference.page";

export function testSettingPreferencesFunctionality() {
  describe("Preferences", () => {
    it("Click user avatar", async () => {
      await Preference.waitForPageLoad();
      await Preference.clickUserAvatar();
      await Preference.preferencesSubmenu.waitForDisplayed();
    });

    it("Click Preferences", async () => {
      await Preference.waitForPageLoad();
      await Preference.clickPreferencesSubmenu();
    });

    it("Get current Appearance", async () => {
      if (await Preference.isLightMode) {
        console.log("Light Mode is Applied.");
      } else if (await Preference.isDarkMode) {
        console.log("Dark Mode is Applied.");
      } else {
        console.log("No Preferred Color Scheme Detected.");
      }
    });

    it("Select and verify Dark Mode", async () => {
      await Preference.waitForPageLoad();
      await browser.pause(2000);
      await Preference.clickDarkMode();
      await Preference.waitForPageLoad();
      expect(await Preference.isDarkMode()).toBe(false);
    });

    it("Select and verify Light Mode", async () => {
      await Preference.waitForPageLoad();
      await browser.pause(2000);
      await Preference.clickLightMode();
      await Preference.waitForPageLoad();
      expect(await Preference.isLightMode()).toBe(true);
    });

    it('Verify the default selected theme', async() => {
      await Preference.waitForPageLoad();
      expect(await Preference.themeApplied()).toContain("indigo");
      expect(await Preference.getCurrentTheme()).toBe("Indigo");
    });

    it('Change the theme to Blue and verify', async() => {
      await browser.pause(3000);
      await Preference.selectTheme("Blue");
      await browser.pause(3000);
      expect(await Preference.themeApplied()).toContain("blue");
    });

    it('Switch to Indigo theme and verify', async() => {
      await browser.pause(3000);
      await Preference.selectTheme("Indigo");
      await browser.pause(3000);
      expect(await Preference.themeApplied()).toContain("indigo");
    });
  });
}
