import { expect, browser } from "@wdio/globals";
import Preference from "../../pageobjects/preference.page";

export function testSettingPreferencesFunctionality() {
  describe("Preferences", () => {
    it("Click user avatar", async () => {
      await Preference.clickUserAvatar();
      await Preference.preferencesSubmenu.waitForDisplayed();
    });

    it("Click Preferences", async () => {
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
      await Preference.clickDarkMode();
      await browser.pause(2000);
      expect(await Preference.isDarkMode()).toBe(false);
    });

    it("Select and verify Light Mode", async () => {
      await Preference.clickLightMode();
      await browser.pause(2000);
      expect(await Preference.isLightMode()).toBe(true);
    });
  });
}
