import { expect } from "@playwright/test";
import { mockApiCall } from "../../support/api";
import { test } from "../baseTest";

test.describe("@integration Quote Page", () => {
  test.beforeEach(async ({ page }) => {
    await mockApiCall(page);
  });

  test("has title", async ({ app: { getQuotesPage } }) => {
    await getQuotesPage.checkQuoteExists();
  });
});
