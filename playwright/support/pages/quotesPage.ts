import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./basePage";
import { test } from "../../tests/baseTest";

export class QuotesPage extends BasePage {
  readonly quoteText: Locator;

  constructor(page: Page) {
    super(page);

    this.quoteText = page.getByTestId("quoteText");
  }

  async checkQuoteExists() {
    await test.step("Check heading", async () => {
      await expect(this.heading).toBeVisible();
    });
  }
}
