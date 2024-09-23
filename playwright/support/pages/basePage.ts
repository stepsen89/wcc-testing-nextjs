import { Locator, Page, expect } from "@playwright/test";
import { test } from "../../tests/baseTest";

export class BasePage {
  public page: Page;

  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heading = page.getByRole("heading", { level: 1 });
  }

  async checkHeading(heading: string) {
    await test.step("Check heading", async () => {
      await expect(this.heading).toHaveText(heading);
    });
  }
  async openMockedPage(path: string) {
    await this.page.goto(`http://localhost:3000/${path}`, { waitUntil: "networkidle" });
  }
}
